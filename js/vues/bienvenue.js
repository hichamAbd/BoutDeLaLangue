// La première ouverture (la couverture du cahier, puis le mot de son fils) et les pages de fête.

import { h, clear, now, go } from '../outils.js';
import * as etat from '../etat.js';
import { special } from '../calendrier.js';
import { guirlande, grandGateau, grandCoeur } from '../dessins.js';
import { NOM } from '../textes.js';
import { confettis } from '../fx.js';
import { sonFete } from '../sons.js';

const signature = () => {
  const de = etat.getPerso().de;
  return de ? `${de}, ton fils` : 'Ton fils';
};

// Première ouverture. `suite()` est appelé quand elle ouvre le cahier.
export function bienvenue(vue, suite) {
  const perso = etat.getPerso();

  const lettre = () => {
    clear(vue);
    document.body.classList.remove('sur-couverture');
    const ouvrir = h('button.btn.primaire', { type: 'button' }, 'Voir le défi du jour');
    ouvrir.addEventListener('click', () => {
      etat.get().accueilVu = true;
      etat.sauver();
      suite();
    });
    vue.append(
      h(
        'div.page.courrier',
        h('p.cursive.lettre-debut', `${NOM},`),
        h('p.cursive.lettre-phrase', "tu m'as appris mes premiers mots. À mon tour de t'aider à retrouver les tiens."),
        h('p', "Ton français n'est pas parti. Il est juste un peu endormi, et ce cahier est là pour le réveiller en douceur."),
        h(
          'ul.promesses',
          h('li', h('b', 'Un défi par jour.'), ' Sept questions, cinq minutes, sur le français de tous les jours.'),
          h('li', h('b', 'Une explication à chaque réponse.'), ' Juste ou pas, tu sauras pourquoi.'),
          h('li', h('b', 'Pas de note, pas de chrono.'), ' Personne ne regarde. Tu peux te tromper autant que tu veux.'),
        ),
        h('p', 'Je t\'embrasse fort.'),
        h('p.cursive.lettre-signature', signature()),
        ouvrir,
      ),
    );
    window.scrollTo(0, 0);
  };

  const entrer = h('button.btn.sur-couverture', { type: 'button' }, 'Ouvrir le cahier');
  entrer.addEventListener('click', lettre);
  vue.append(
    h(
      'div.couverture',
      h(
        'div.etiquette-cahier',
        h('p.cahier-titre', 'Cahier de français'),
        h('p.cahier-ligne', h('span', 'Prénom'), h('span.cursive', perso.prenom || NOM)),
        h('p.cahier-ligne', h('span', 'Matière'), h('span.cursive', 'retrouver ses mots')),
        h('p.cahier-ligne', h('span', 'Professeur'), h('span.cursive', 'ton fils')),
      ),
      entrer,
    ),
  );
  return { concentre: true, couverture: true };
}

// Page de fête à montrer aujourd'hui, une seule fois par an : 'anniv', 'meres' ou rien.
export function feteAMontrer() {
  const s = etat.get();
  const sp = special(now(), etat.getPerso());
  const annee = now().getFullYear();
  if (sp.anniv && s.fetes['anniv' + annee] !== true) return 'anniv';
  if (sp.meres && s.fetes['meres' + annee] !== true) return 'meres';
  return null;
}

export function fete(vue, genre) {
  const s = etat.get();
  const annee = now().getFullYear();
  const continuer = h('button.btn.primaire', { type: 'button' }, genre === 'anniv' ? "Voir ma page d'anniversaire" : 'Ouvrir mon cahier');
  continuer.addEventListener('click', () => {
    s.fetes[genre + annee] = true;
    etat.sauver();
    go('');
  });
  const contenu =
    genre === 'anniv'
      ? [
          h('div.fete-haut', { svg: guirlande() }),
          h('div.fete-dessin', { svg: grandGateau() }),
          h('h1.cursive.fete-titre', `Joyeux anniversaire, ${NOM}`),
          h('p', "Aujourd'hui, c'est ta journée. Je t'ai préparé une page spéciale, avec des mots de fête."),
          h('p', 'Merci pour tout ce que tu es. Je t\'aime fort.'),
          h('p.cursive.lettre-signature', signature()),
        ]
      : [
          h('div.fete-dessin', { svg: grandCoeur() }),
          h('h1.cursive.fete-titre', `Bonne fête, ${NOM}`),
          h('p', "Tu m'as appris à parler et à dire merci. Alors aujourd'hui, c'est moi qui te le dis : merci pour tout."),
          h('p', 'Je t\'aime.'),
          h('p.cursive.lettre-signature', signature()),
        ];
  vue.append(h('div.page.fete-page', contenu, continuer));
  setTimeout(() => {
    confettis(70);
    sonFete();
  }, 400);
  return { concentre: true };
}
