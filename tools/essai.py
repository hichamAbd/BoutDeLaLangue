#!/usr/bin/env python3
"""Essai de l'appli dans un navigateur sans écran, à la taille d'un téléphone.

Usage :  python3 tools/essai.py [dossier_des_captures]
Il faut Playwright pour Python et Google Chrome. Le script sert lui-même les fichiers du dépôt.
Il parcourt l'accueil, fait le défi du jour en entier, ouvre chaque page, en clair et en sombre,
puis vérifie qu'aucune erreur n'apparaît dans la console. Code de sortie 1 en cas de problème.
"""

import functools
import http.server
import os
import sys
import threading

from playwright.sync_api import sync_playwright

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SORTIE = sys.argv[1] if len(sys.argv) > 1 else "/tmp/essai-cahier"
PORT = 8765
BASE = f"http://localhost:{PORT}/"
CHROME = "/usr/bin/google-chrome"

problemes = []


def servir():
    class Silencieux(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a, **k):
            pass

    handler = functools.partial(Silencieux, directory=RACINE)
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", PORT), handler)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv


def page_neuve(navigateur, largeur=360, hauteur=740, sombre=False, nom=""):
    ctx = navigateur.new_context(
        viewport={"width": largeur, "height": hauteur},
        device_scale_factor=2,
        color_scheme="dark" if sombre else "light",
        locale="fr-FR",
        timezone_id="Europe/Paris",
        service_workers="block",
        is_mobile=True,
        has_touch=True,
    )
    page = ctx.new_page()
    def console(m):
        if m.type in ("error", "warning") and "Service Worker registration blocked" not in m.text:
            problemes.append(f"[{nom}] console {m.type}: {m.text}")

    page.on("console", console)
    page.on("pageerror", lambda e: problemes.append(f"[{nom}] erreur de page: {e}"))
    return ctx, page


def photo(page, nom, entier=False):
    page.wait_for_timeout(350)
    page.screenshot(path=os.path.join(SORTIE, nom + ".png"), full_page=entier)


def deborde(page, nom):
    # Rien ne doit dépasser en largeur.
    trop = page.evaluate("document.documentElement.scrollWidth - document.documentElement.clientWidth")
    if trop > 1:
        problemes.append(f"[{nom}] la page dépasse en largeur de {trop}px")


def repondre(page):
    """Répond à la question affichée, quel que soit son type, puis valide."""
    page.wait_for_selector(".question")
    if page.locator(".reserve").count():
        while page.locator(".reserve .jeton").count():
            page.locator(".reserve .jeton").first.click()
    elif page.locator(".phrase-mots").count():
        page.locator(".phrase-mots .mot").nth(1).click()
    else:
        page.locator(".options .option").first.click()
    page.locator(".barre-action .btn.primaire").click()
    page.wait_for_selector(".correction")


def passer_accueil(page, lien="#pour=Camille&anniv=01-03", jour=None):
    url = BASE + (f"?jour={jour}" if jour else "") + lien
    page.goto(url)
    page.wait_for_selector(".couverture")
    return url


def scenario_complet(navigateur, sombre, largeur, suffixe):
    nom = f"complet{suffixe}"
    ctx, page = page_neuve(navigateur, largeur=largeur, sombre=sombre, nom=nom)
    passer_accueil(page)
    photo(page, f"01-couverture{suffixe}")
    page.get_by_role("button", name="Ouvrir le cahier").click()
    page.wait_for_selector(".courrier")
    photo(page, f"02-lettre{suffixe}", entier=True)
    deborde(page, nom + " lettre")
    page.get_by_role("button", name="Voir le défi du jour").click()
    page.wait_for_selector(".accueil")
    photo(page, f"03-accueil{suffixe}", entier=True)
    deborde(page, nom + " accueil")

    page.get_by_role("link", name="Commencer").click()
    page.wait_for_selector(".question")
    total = page.locator(".carreaux li").count()
    for i in range(total):
        photo(page, f"04-question-{i + 1}{suffixe}")
        deborde(page, f"{nom} question {i + 1}")
        repondre(page)
        photo(page, f"05-correction-{i + 1}{suffixe}", entier=True)
        deborde(page, f"{nom} correction {i + 1}")
        page.locator(".barre-action .btn.primaire").click()
    page.wait_for_selector(".resultat")
    page.wait_for_timeout(900)
    photo(page, f"06-resultat{suffixe}", entier=True)
    deborde(page, nom + " résultat")
    page.get_by_role("button", name="Revoir mes réponses").click()
    photo(page, f"07-relecture{suffixe}", entier=True)
    deborde(page, nom + " relecture")

    for chemin, attendu, fichier in [
        ("#/", ".accueil", "08-accueil-fini"),
        ("#/jeux", ".jeux", "09-jeux"),
        ("#/cahier", ".cahier", "10-cahier"),
        ("#/plus", ".plus", "11-plus"),
        ("#/antiseche", ".antiseche", "12-antiseche"),
        ("#/liens", ".liens", "13-liens"),
        ("#/reglages", ".reglages", "14-reglages"),
        ("#/jeu/tac", ".intro-jeu", "15-tac-intro"),
        ("#/jeu/mot", ".intro-jeu", "16-mot-intro"),
    ]:
        page.goto(BASE + chemin)
        page.wait_for_selector(attendu)
        photo(page, fichier + suffixe, entier=True)
        deborde(page, f"{nom} {chemin}")

    # Du tac au tac : deux répliques
    page.goto(BASE + "#/jeu/tac")
    page.locator(".intro-jeu .btn.primaire").click()
    page.wait_for_selector(".tac .options .option")
    photo(page, f"17-tac{suffixe}")
    page.locator(".tac .options .option").first.click()
    page.wait_for_timeout(1200)
    photo(page, f"18-tac-apres{suffixe}", entier=True)

    # Sur le bout de la langue : un indice, puis « je l'ai »
    page.goto(BASE + "#/jeu/mot")
    page.locator(".intro-jeu .btn.primaire").click()
    page.wait_for_selector(".cases")
    page.locator(".barre-action .btn.secondaire").click()
    photo(page, f"19-mot{suffixe}")
    page.locator(".barre-action .btn.primaire").click()
    photo(page, f"20-mot-montre{suffixe}", entier=True)
    page.locator(".barre-action .btn.primaire").click()
    page.wait_for_selector(".cases")

    # Trouve la faute et un thème : une question chacun
    for chemin, fichier in [("#/jeu/faute", "21-faute"), ("#/jeu/theme/oral", "22-theme-oral"), ("#/jeu/theme/ordre", "23-theme-ordre")]:
        page.goto(BASE + chemin)
        page.wait_for_selector(".question")
        photo(page, fichier + suffixe)
        repondre(page)
        photo(page, fichier + "-correction" + suffixe, entier=True)
        deborde(page, f"{nom} {chemin}")
    ctx.close()


def scenario_fete(navigateur, jour, fichier, attendu):
    ctx, page = page_neuve(navigateur, nom=fichier)
    passer_accueil(page, jour=jour)
    page.get_by_role("button", name="Ouvrir le cahier").click()
    page.get_by_role("button", name="Voir le défi du jour").click()
    page.wait_for_selector(attendu)
    page.wait_for_timeout(700)
    photo(page, fichier, entier=True)
    if attendu == ".fete-page":
        page.locator(".fete-page .btn.primaire").click()
        page.wait_for_selector(".accueil")
        photo(page, fichier + "-accueil", entier=True)
    ctx.close()


def scenario_hors_connexion(navigateur):
    """L'appli doit se rouvrir sans réseau une fois qu'elle a été ouverte une première fois."""
    ctx = navigateur.new_context(viewport={"width": 360, "height": 740}, locale="fr-FR", service_workers="allow")
    page = ctx.new_page()
    page.on("pageerror", lambda e: problemes.append(f"[hors connexion] erreur de page: {e}"))
    page.goto(BASE)
    page.wait_for_selector(".couverture")
    page.evaluate("navigator.serviceWorker.ready.then(() => new Promise((r) => setTimeout(r, 1500)))")
    ctx.set_offline(True)
    try:
        page.reload()
        page.wait_for_selector(".couverture", timeout=8000)
        page.locator(".couverture .btn").click()
        page.wait_for_selector(".courrier", timeout=8000)
        polices = page.evaluate("document.fonts.ready.then(() => [...document.fonts].filter((f) => f.status === 'loaded').length)")
        if polices < 2:
            problemes.append(f"[hors connexion] polices chargées : {polices} au lieu de 2")
    except Exception as e:  # noqa: BLE001
        problemes.append(f"[hors connexion] l'appli ne s'ouvre pas sans réseau : {e}")
    ctx.close()


def main():
    os.makedirs(SORTIE, exist_ok=True)
    srv = servir()
    with sync_playwright() as p:
        navigateur = p.chromium.launch(executable_path=CHROME, headless=True)
        scenario_complet(navigateur, sombre=False, largeur=360, suffixe="")
        scenario_complet(navigateur, sombre=True, largeur=390, suffixe="-sombre")
        scenario_complet(navigateur, sombre=False, largeur=320, suffixe="-320")
        scenario_fete(navigateur, "2027-03-01", "30-anniversaire", ".fete-page")
        scenario_fete(navigateur, "2027-03-12", "31-mois-de-fete", ".accueil")
        scenario_fete(navigateur, "2027-05-30", "32-fete-des-meres", ".fete-page")
        scenario_fete(navigateur, "2027-07-14", "33-ete", ".accueil")
        scenario_fete(navigateur, "2027-01-20", "34-hiver", ".accueil")
        scenario_fete(navigateur, "2027-04-20", "35-printemps", ".accueil")
        scenario_hors_connexion(navigateur)
        navigateur.close()
    srv.shutdown()
    if problemes:
        print(f"{len(problemes)} problème(s) :")
        for pb in problemes:
            print(" -", pb)
        sys.exit(1)
    print(f"Essai terminé sans erreur. Captures dans {SORTIE}")


if __name__ == "__main__":
    main()
