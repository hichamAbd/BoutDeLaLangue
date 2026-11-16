// Démarrage : état, thème du jour, navigation entre les pages.

import { h, clear, todayKey } from './outils.js';
import * as etat from './etat.js';
import { appliquerTheme } from './calendrier.js';
import { initVoix, taire } from './voix.js';
import { icone } from './dessins.js';
import { accueil } from './vues/accueil.js';
import { defi } from './vues/defi.js';
import { jeux, jeuTheme, jeuFaute, jeuRevoir } from './vues/jeux.js';
import { jeuTac } from './vues/tac.js';
import { jeuMot } from './vues/mot.js';
import { cahier } from './vues/cahier.js';
import { plus, antiseche, liens, reglages } from './vues/plus.js';
import { bienvenue, feteAMontrer, fete } from './vues/bienvenue.js';

const vue = document.getElementById('vue');
const onglets = document.getElementById('onglets');
let nettoyer = null;
let jourAffiche = null;

const ONGLETS = [
  ['accueil', '#/', 'jour', "Aujourd'hui"],
  ['jeux', '#/jeux', 'jeux', 'Jeux'],
  ['cahier', '#/cahier', 'cahier', 'Mon cahier'],
  ['plus', '#/plus', 'plus', 'Plus'],
];

function dessinerOnglets() {
  clear(onglets);
  for (const [id, href, ic, nom] of ONGLETS) {
    onglets.append(h('a', { href, 'data-onglet': id }, h('span.onglet-icone', { svg: icone(ic) }), h('span.onglet-nom', nom)));
  }
}

function route(chemin) {
  if (chemin === '' || chemin === 'accueil') {
    if (!etat.get().accueilVu) return bienvenue(vue, afficher);
    const genre = feteAMontrer();
    if (genre) return fete(vue, genre);
    return accueil(vue);
  }
  if (chemin === 'defi') return defi(vue);
  if (chemin === 'jeux') return jeux(vue);
  if (chemin === 'jeu/tac') return jeuTac(vue);
  if (chemin === 'jeu/mot') return jeuMot(vue);
  if (chemin === 'jeu/faute') return jeuFaute(vue);
  if (chemin === 'jeu/revoir') return jeuRevoir(vue);
  if (chemin.startsWith('jeu/theme/')) return jeuTheme(vue, chemin.slice('jeu/theme/'.length));
  if (chemin === 'cahier') return cahier(vue);
  if (chemin === 'plus') return plus(vue);
  if (chemin === 'antiseche') return antiseche(vue);
  if (chemin === 'liens') return liens(vue);
  if (chemin === 'reglages') return reglages(vue);
  return accueil(vue);
}

function afficher() {
  if (nettoyer) {
    try {
      nettoyer();
    } catch {
      /* rien */
    }
    nettoyer = null;
  }
  taire();
  clear(vue);
  jourAffiche = todayKey();
  appliquerTheme(etat.getPerso());
  const chemin = location.hash.replace(/^#\/?/, '');
  const info = route(chemin) || {};
  nettoyer = info.nettoyer || null;
  document.body.classList.toggle('concentre', !!info.concentre);
  document.body.classList.toggle('sur-couverture', !!info.couverture);
  onglets.querySelectorAll('a').forEach((a) => {
    if (a.dataset.onglet === info.onglet) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  window.scrollTo(0, 0);
}

function demarrer() {
  etat.charger();
  etat.lireLienPersonnel();
  document.documentElement.dataset.taille = String(etat.get().reglages.taille || 1);
  initVoix();
  dessinerOnglets();
  window.addEventListener('hashchange', afficher);
  // Si l'appli est restée ouverte jusqu'au lendemain, on rafraîchit l'accueil au retour.
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && jourAffiche !== todayKey() && !document.body.classList.contains('concentre')) afficher();
  });
  afficher();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

demarrer();
