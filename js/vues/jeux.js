// L'onglet « Jeux » et les parties par séries de questions (par thème, trouve la faute, à revoir).

import { h, clear, go } from '../outils.js';
import * as etat from '../etat.js';
import { bassins, parId } from '../banque.js';
import { tirage, noter, finDePartie, enAttente, aRevoir } from '../moteur.js';
import { lancerSerie } from '../serie.js';
import { icone } from '../dessins.js';
import { CATEGORIES, THEMES, INTRO_THEMES } from '../textes.js';
import { carteImage } from './defi.js';
import { confettis } from '../fx.js';
import { sonFete } from '../sons.js';

function ligneJeu(href, nomIcone, titre, texte, pastille) {
  return h(
    'a.carte.carte-lien',
    { href },
    h('span.carte-icone', { svg: icone(nomIcone) }),
    h('span.carte-texte', h('b', titre), h('span', texte)),
    pastille ? h('span.pastille-nombre', String(pastille)) : h('span.carte-fleche', { svg: icone('suite', 20) }),
  );
}

export function jeux(vue) {
  const s = etat.get();
  const attente = enAttente().length;
  const dues = aRevoir().length;
  vue.append(
    h(
      'div.page.jeux',
      h('h1.titre', 'Jeux'),
      h('p.chapeau', 'Pour continuer après le défi, ou juste pour le plaisir.'),
      ligneJeu('#/jeu/tac', 'eclair', 'Du tac au tac', s.records.tac != null ? `Répondre vite et bien. Ton record : ${s.records.tac} sur 10.` : 'On te parle, tu réponds. Dix répliques.'),
      ligneJeu('#/jeu/mot', 'bulle', 'Sur le bout de la langue', 'Retrouve le mot à partir de sa définition.'),
      ligneJeu('#/jeu/faute', 'loupe', 'Trouve la faute', 'Une phrase, une erreur cachée. Ou aucune.'),
      ligneJeu('#/jeu/revoir', 'revoir', 'À revoir', attente ? (dues ? 'Tes questions manquées, pour les réussir cette fois.' : 'Rien à revoir aujourd\'hui. Elles reviendront au bon moment.') : 'Rien à revoir pour le moment.', dues || null),
      h('h2.sous-titre', 'Par thème'),
      h(
        'div.themes',
        THEMES.filter((k) => (bassins[k] || []).length).map((k) =>
          h('a.theme', { href: `#/jeu/theme/${k}` }, h('b', CATEGORIES[k]), h('span', INTRO_THEMES[k])),
        ),
      ),
    ),
  );
  return { onglet: 'jeux' };
}

// Écran de fin de partie, commun aux jeux.
export function finPartie(vue, { jeu, titre, score, total, rejouer, phrase }) {
  clear(vue);
  document.body.classList.remove('concentre');
  const r = finDePartie(jeu, score);
  const bon = total && score / total >= 0.7;
  vue.append(
    h(
      'div.page.fin-partie',
      h('p.rubrique', titre),
      h('h1.cursive.bilan-titre', phrase || (score === total ? 'Sans faute !' : bon ? 'Bien joué.' : 'Bel effort.')),
      h('div.score', h('p.score-chiffre', h('b', String(score)), ` sur ${total}`), r.record && score > 0 && h('p.gain', 'Nouveau record'), h('p.gain', `+ ${r.gains} bons points`)),
      ...r.images.map((img) => carteImage(img, 'Une nouvelle image pour ton cahier')),
      h('div.actions', h('button.btn.primaire', { type: 'button', on: { click: rejouer } }, 'Rejouer'), h('a.btn.secondaire', { href: '#/jeux' }, 'Retour aux jeux')),
    ),
  );
  if (score === total || r.images.length) {
    confettis(score === total ? 50 : 30);
    sonFete();
  }
  window.scrollTo(0, 0);
}

function partie(vue, { jeu, titre, items, vide }) {
  if (!items.length) {
    vue.append(h('div.page', h('h1.titre', titre), h('p.chapeau', vide), h('a.btn.primaire', { href: '#/jeux' }, 'Retour aux jeux')));
    return { onglet: 'jeux' };
  }
  const lancer = () => {
    document.body.classList.add('concentre');
    lancerSerie({
      racine: vue,
      items,
      titre,
      quitter: () => go('jeux'),
      surReponse: (it, ok) => noter(it, ok),
      surFin: (res) =>
        finPartie(vue, {
          jeu,
          titre,
          score: res.filter(Boolean).length,
          total: items.length,
          rejouer: () => window.dispatchEvent(new HashChangeEvent('hashchange')),
        }),
    });
  };
  lancer();
  return { onglet: 'jeux', concentre: true };
}

export function jeuTheme(vue, k) {
  if (!THEMES.includes(k)) {
    go('jeux');
    return { onglet: 'jeux' };
  }
  return partie(vue, { jeu: 'theme-' + k, titre: CATEGORIES[k], items: tirage([k], 8), vide: 'Ce thème est vide pour le moment.' });
}

export function jeuFaute(vue) {
  return partie(vue, { jeu: 'faute', titre: 'Trouve la faute', items: tirage(['faute'], 8), vide: 'Pas de phrases pour le moment.' });
}

export function jeuRevoir(vue) {
  const s = etat.get();
  const ids = aRevoir();
  const items = ids
    .sort((a, b) => (s.revoir[a].du < s.revoir[b].du ? -1 : 1))
    .slice(0, 10)
    .map((id) => parId.get(id))
    .filter((it) => it && it.type !== 'mot');
  const attente = enAttente().length;
  return partie(vue, {
    jeu: 'revoir',
    titre: 'À revoir',
    items,
    vide: attente
      ? `Rien à revoir aujourd'hui. ${attente > 1 ? `${attente} questions reviendront` : 'Une question reviendra'} dans les prochains jours, au bon moment pour bien les retenir.`
      : 'Rien à revoir. Quand tu manques une question, elle vient attendre ici.',
  });
}
