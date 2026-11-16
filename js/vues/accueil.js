// Page « Aujourd'hui » : la date, le mot de son fils, le défi du jour, la semaine.

import { h, now, todayKey, keyOf, dateLongue, hash32, mulberry32, pickOne } from '../outils.js';
import * as etat from '../etat.js';
import { defiDuJour, questionsDuDefi, serie, aRevoir } from '../moteur.js';
import { special, saison } from '../calendrier.js';
import { icone, decorSaison, guirlande } from '../dessins.js';
import { NOM, ACCUEIL, ACCUEIL_EN_COURS, ACCUEIL_FINI, SAISON_DEBUT, MOIS_ANNIV } from '../textes.js';

let invitation = null; // événement d'installation gardé pour le bouton « Installer »
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  invitation = e;
  const carte = document.querySelector('.carte-installer');
  if (carte) carte.hidden = false;
});

const estInstallee = () =>
  (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;

function semaine(jours) {
  const auj = now();
  const lundi = new Date(auj.getFullYear(), auj.getMonth(), auj.getDate() - ((auj.getDay() + 6) % 7));
  const cleAuj = keyOf(auj);
  const ol = h('ol.semaine', { 'aria-label': 'Cette semaine' });
  ['L', 'M', 'M', 'J', 'V', 'S', 'D'].forEach((lettre, i) => {
    const d = new Date(lundi.getFullYear(), lundi.getMonth(), lundi.getDate() + i);
    const cle = keyOf(d);
    const fait = jours[cle];
    const classe = fait ? (fait.n === fait.t ? 'fait parfait' : 'fait') : cle === cleAuj ? 'auj' : cle > cleAuj ? 'futur' : 'vide';
    ol.append(
      h(
        'li',
        { class: classe, 'aria-label': `${dateLongue(d)}${fait ? ' : page faite' : ''}` },
        h('span.lettre', lettre),
        h('span.pastille', fait ? { svg: icone(fait.n === fait.t ? 'etoile' : 'oui', 16) } : {}),
      ),
    );
  });
  return ol;
}

function carteInstaller() {
  const s = etat.get();
  if (estInstallee() || s.installMasque) return null;
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const carte = h('section.carte.carte-installer', { hidden: !ios && !invitation });
  const fermer = h('button.lien-discret', { type: 'button' }, 'Plus tard');
  fermer.addEventListener('click', () => {
    s.installMasque = true;
    etat.sauver();
    carte.remove();
  });
  carte.append(h('h2', "Garde ton cahier sur l'écran d'accueil"));
  if (ios) {
    carte.append(h('p', 'Dans Safari, touche le bouton Partager, puis « Sur l\'écran d\'accueil ».'), fermer);
  } else {
    const bouton = h('button.btn.secondaire', { type: 'button' }, 'Installer');
    bouton.addEventListener('click', async () => {
      if (!invitation) return;
      invitation.prompt();
      try {
        await invitation.userChoice;
      } catch {
        /* rien */
      }
      invitation = null;
      carte.remove();
    });
    carte.append(h('p', "Il s'ouvrira comme une appli, même sans connexion."), h('div.rangee', bouton, fermer));
  }
  return carte;
}

export function accueil(vue) {
  const s = etat.get();
  const d = defiDuJour();
  const auj = now();
  const cle = todayKey();
  const sp = special(auj, etat.getPerso());
  const rng = mulberry32(hash32('accueil' + cle));

  const items = questionsDuDefi(d);
  const faites = items.filter((it) => d.rep[it.id]).length;
  const stade = d.fini ? 'fini' : faites ? 'encours' : 'neuf';

  let suite;
  if (sp.anniv) suite = "joyeux anniversaire ! Aujourd'hui, la page est spéciale.";
  else if (sp.meres) suite = "bonne fête ! Aujourd'hui, le cahier est pour toi encore plus que d'habitude.";
  else if (stade === 'fini') suite = pickOne(ACCUEIL_FINI, rng);
  else if (stade === 'encours') suite = pickOne(ACCUEIL_EN_COURS, rng);
  else if (sp.debutSaison) suite = SAISON_DEBUT[sp.debutSaison];
  else if (sp.moisAnniv && rng() < 0.5) suite = pickOne(MOIS_ANNIV, rng);
  else suite = pickOne(ACCUEIL, rng);

  const jour = s.jours[cle];
  const detail =
    stade === 'fini'
      ? `${jour ? jour.n : 0} ${jour && jour.n > 1 ? 'bonnes réponses' : 'bonne réponse'} sur ${jour ? jour.t : items.length}`
      : stade === 'encours'
        ? `${faites} sur ${items.length} déjà faites`
        : `${items.length} questions, cinq minutes`;

  const sr = serie();
  const dues = aRevoir().length;

  vue.append(
    h(
      'div.page.accueil',
      (sp.moisAnniv || sp.anniv) && h('div.fete-haut', { svg: guirlande() }),
      h('div.coin-saison', { svg: decorSaison(saison(auj)) }),
      h('p.date', h('span', dateLongue(auj))),
      h('p.cursive.salut', `${auj.getHours() >= 18 ? 'Bonsoir' : 'Bonjour'} ${NOM},`),
      h('p.suite', suite),

      h(
        'section.etiquette',
        h('h1', 'Défi du jour'),
        d.titre && h('p.sujet', d.titre),
        h('p.detail', detail),
        h('a.btn.primaire', { href: '#/defi' }, stade === 'fini' ? 'Revoir ma page' : stade === 'encours' ? 'Continuer' : 'Commencer'),
      ),

      h(
        'section.bloc-semaine',
        semaine(s.jours),
        h(
          'p.compteurs',
          h('span', sr > 1 ? `Série : ${sr} jours` : sr === 1 ? 'Série : 1 jour' : 'Ta série commence aujourd\'hui'),
          h('span', `${s.points} ${s.points > 1 ? 'bons points' : 'bon point'}`),
        ),
      ),

      stade === 'fini' &&
        h(
          'a.carte.carte-lien',
          { href: '#/jeux' },
          h('span.carte-icone', { svg: icone('jeux') }),
          h('span.carte-texte', h('b', 'Encore un peu ?'), h('span', dues ? `Des jeux, et ${dues} ${dues > 1 ? 'questions' : 'question'} à revoir.` : 'Quatre petits jeux pour continuer.')),
          h('span.carte-fleche', { svg: icone('suite', 20) }),
        ),

      h(
        'a.carte.carte-lien',
        { href: '#/antiseche' },
        h('span.carte-icone', { svg: icone('antiseche') }),
        h('span.carte-texte', h('b', "L'antisèche"), h('span', 'Quoi dire quand les mots ne viennent pas.')),
        h('span.carte-fleche', { svg: icone('suite', 20) }),
      ),

      carteInstaller(),
    ),
  );
  return { onglet: 'accueil' };
}
