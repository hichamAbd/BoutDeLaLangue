// L'onglet « Plus » : l'antisèche, les sites utiles, les réglages.

import { h, clear } from '../outils.js';
import * as etat from '../etat.js';
import { total } from '../banque.js';
import { icone } from '../dessins.js';
import { boutonEcouter, voixPossible, dire } from '../voix.js';
import { appliquerTheme } from '../calendrier.js';
import { ANTISECHE } from '../data/antiseche.js';
import { LIENS } from '../data/liens.js';
import { NOM } from '../textes.js';

export const VERSION = '1.0';

function ligne(href, nomIcone, titre, texte) {
  return h(
    'a.carte.carte-lien',
    { href },
    h('span.carte-icone', { svg: icone(nomIcone) }),
    h('span.carte-texte', h('b', titre), h('span', texte)),
    h('span.carte-fleche', { svg: icone('suite', 20) }),
  );
}

export function plus(vue) {
  vue.append(
    h(
      'div.page.plus',
      h('h1.titre', 'Plus'),
      ligne('#/antiseche', 'antiseche', "L'antisèche", 'Quoi dire quand les mots ne viennent pas.'),
      ligne('#/liens', 'lien', 'Pour aller plus loin', 'Des sites pour lire, écouter et jouer en français.'),
      ligne('#/reglages', 'reglages', 'Réglages', 'Taille du texte, voix, sauvegarde.'),
      h('p.signature', h('span.cursive', 'Fait pour toi, avec tout mon amour.'), h('span', etat.getPerso().de ? `${etat.getPerso().de}, ton fils` : 'Ton fils')),
    ),
  );
  return { onglet: 'plus' };
}

function retour(href, texte) {
  return h('a.retour', { href }, h('span', { svg: icone('retour', 18) }), texte);
}

export function antiseche(vue) {
  vue.append(
    h(
      'div.page.antiseche',
      retour('#/plus', 'Plus'),
      h('h1.titre', "L'antisèche"),
      h('p.chapeau', "Les phrases à sortir quand les mots te manquent. Tout le monde s'en sert, même ceux qui parlent français tous les jours."),
      ANTISECHE.map((sec) =>
        h(
          'section.bloc',
          h('h2.sous-titre', sec.titre),
          sec.note && h('p.note-section', sec.note),
          h(
            'ul.phrases',
            sec.phrases.map((p) => h('li', h('div', h('p.phrase', { rich: p.f }), p.n && h('p.phrase-note', p.n)), boutonEcouter(p.f))),
          ),
        ),
      ),
    ),
  );
  return { onglet: 'plus' };
}

export function liens(vue) {
  vue.append(
    h(
      'div.page.liens',
      retour('#/plus', 'Plus'),
      h('h1.titre', 'Pour aller plus loin'),
      h('p.chapeau', 'Des sites connus et sérieux, presque tous gratuits. Ils s\'ouvrent dans ton navigateur : il faut donc une connexion.'),
      LIENS.map((groupe) =>
        h(
          'section.bloc',
          h('h2.sous-titre', groupe.titre),
          groupe.liens.map((l) =>
            h(
              'a.carte.carte-lien',
              { href: l.url, target: '_blank', rel: 'noopener noreferrer' },
              h('span.carte-texte', h('b', l.nom), h('span', l.texte)),
              h('span.carte-fleche', { svg: icone('lien', 20) }),
            ),
          ),
        ),
      ),
    ),
  );
  return { onglet: 'plus' };
}

function interrupteur(libelle, valeur, changer, note) {
  const b = h('button.interrupteur', { type: 'button', role: 'switch', 'aria-checked': String(!!valeur) }, h('span.inter-piste', h('span.inter-pouce')));
  b.addEventListener('click', () => {
    const v = b.getAttribute('aria-checked') !== 'true';
    b.setAttribute('aria-checked', String(v));
    changer(v);
  });
  return h('div.reglage', h('div', h('p.reglage-nom', libelle), note && h('p.reglage-note', note)), b);
}

export function reglages(vue) {
  const s = etat.get();
  const r = s.reglages;
  const perso = etat.getPerso();
  const message = h('p.message', { 'aria-live': 'polite' });
  const dire2 = (t) => {
    message.textContent = t;
  };

  const tailles = h(
    'div.tailles',
    { role: 'radiogroup', 'aria-label': 'Taille du texte' },
    [1, 2, 3].map((n) => {
      const b = h('button.taille', { type: 'button', role: 'radio', 'aria-checked': String(r.taille === n), 'data-n': String(n) }, 'A');
      b.addEventListener('click', () => {
        r.taille = n;
        etat.sauver();
        document.documentElement.dataset.taille = String(n);
        tailles.querySelectorAll('.taille').forEach((x) => x.setAttribute('aria-checked', String(x === b)));
      });
      return b;
    }),
  );

  const essai = h('button.btn.secondaire', { type: 'button' }, 'Essayer la voix');
  essai.addEventListener('click', () => dire(`Bonjour ${NOM}. Tu m'entends bien ?`, essai));

  const prenom = h('input.champ', { type: 'text', id: 'prenom', maxlength: '30', autocomplete: 'off', value: perso.prenom || '' });
  const anniv = h('input.champ', { type: 'text', id: 'anniv', inputmode: 'numeric', maxlength: '5', placeholder: '01/03', autocomplete: 'off', value: perso.anniv ? perso.anniv.replace('-', '/') : '' });
  const enregistrer = h('button.btn.secondaire', { type: 'button' }, 'Enregistrer');
  enregistrer.addEventListener('click', () => {
    const a = anniv.value.trim();
    if (a && !/^\d{1,2}[-/.]\d{1,2}$/.test(a)) {
      dire2("L'anniversaire s'écrit jour/mois, par exemple 01/03.");
      anniv.focus();
      return;
    }
    etat.setPerso({ prenom: prenom.value.trim(), anniv: a });
    appliquerTheme(etat.getPerso());
    dire2('Enregistré.');
  });

  const fichier = h('input', { type: 'file', accept: 'application/json,.json', hidden: true });
  fichier.addEventListener('change', async () => {
    const f = fichier.files && fichier.files[0];
    if (!f) return;
    try {
      etat.importer(await f.text());
      document.documentElement.dataset.taille = String(etat.get().reglages.taille);
      appliquerTheme(etat.getPerso());
      dire2('Sauvegarde reprise. Tout est revenu.');
    } catch {
      dire2("Ce fichier n'est pas une sauvegarde du cahier.");
    }
    fichier.value = '';
  });
  const exporter = h('button.btn.secondaire', { type: 'button' }, 'Enregistrer dans un fichier');
  exporter.addEventListener('click', () => {
    etat.exporter();
    dire2('Fichier enregistré dans tes téléchargements.');
  });
  const importer = h('button.btn.secondaire', { type: 'button' }, 'Reprendre une sauvegarde');
  importer.addEventListener('click', () => fichier.click());

  const zoneEffacer = h('div.zone-effacer');
  const effacer = h('button.btn.danger', { type: 'button' }, 'Tout effacer');
  const dessinerEffacer = () => {
    clear(zoneEffacer).append(effacer);
  };
  effacer.addEventListener('click', () => {
    const oui = h('button.btn.danger', { type: 'button' }, 'Oui, tout effacer');
    const non = h('button.btn.secondaire', { type: 'button' }, 'Annuler');
    oui.addEventListener('click', () => {
      etat.toutEffacer();
      dessinerEffacer();
      dire2('Le cahier est remis à zéro.');
    });
    non.addEventListener('click', dessinerEffacer);
    clear(zoneEffacer).append(h('p', 'Les pages faites, les bons points et les images seront perdus. Tu es sûre ?'), h('div.rangee', non, oui));
  });
  dessinerEffacer();

  vue.append(
    h(
      'div.page.reglages',
      retour('#/plus', 'Plus'),
      h('h1.titre', 'Réglages'),
      h('section.bloc', h('h2.sous-titre', 'Lecture'), h('div.reglage', h('p.reglage-nom', 'Taille du texte'), tailles)),
      h(
        'section.bloc',
        h('h2.sous-titre', 'Voix et sons'),
        voixPossible()
          ? [
              interrupteur('Bouton « Écouter »', r.voix, (v) => {
                r.voix = v;
                etat.sauver();
              }, 'La voix française de ton téléphone lit les phrases.'),
              interrupteur('Lecture lente', r.lent, (v) => {
                r.lent = v;
                etat.sauver();
              }),
              essai,
            ]
          : h('p.note-section', 'Ce téléphone n\'a pas de voix française installée. Dans ses paramètres, cherche « synthèse vocale » pour en ajouter une.'),
        interrupteur('Sons et vibrations', r.sons, (v) => {
          r.sons = v;
          etat.sauver();
        }, 'Un petit son quand la réponse est juste.'),
      ),
      h(
        'section.bloc',
        h('h2.sous-titre', 'Personnaliser'),
        h('p.note-section', 'Ces deux informations restent sur ce téléphone.'),
        h('label.etiquette-champ', { for: 'prenom' }, 'Prénom'),
        prenom,
        h('label.etiquette-champ', { for: 'anniv' }, 'Anniversaire (jour/mois)'),
        anniv,
        enregistrer,
      ),
      h(
        'section.bloc',
        h('h2.sous-titre', 'Sauvegarde'),
        h('p.note-section', "Ta progression est gardée sur ce téléphone. Un fichier de sauvegarde permet de la retrouver si tu changes d'appareil."),
        h('div.pile', exporter, importer, fichier),
      ),
      message,
      h('section.bloc', h('h2.sous-titre', 'Remise à zéro'), zoneEffacer),
      h(
        'section.bloc.a-propos',
        h('h2.sous-titre', 'À propos'),
        h('p', `Sur le bout de la langue, version ${VERSION}. ${total()} questions, phrases et mots dans le cahier.`),
        h('p', "Rien n'est envoyé nulle part : pas de compte, pas de publicité, pas de suivi. L'appli fonctionne sans connexion."),
        h('p', 'Écriture : Borel, de Rosalie Wagner. Texte : Atkinson Hyperlegible Next, du Braille Institute. Polices libres (licence SIL OFL).'),
      ),
    ),
  );
  return { onglet: 'plus' };
}
