// Le défi du jour, puis la page de résultat avec le tampon.

import { h, clear, go, now, dateCourte, pickOne, hash32, mulberry32 } from '../outils.js';
import * as etat from '../etat.js';
import { defiDuJour, questionsDuDefi, repondreDefi, terminerDefi, POINTS_PAR_IMAGE, imagesGagnees } from '../moteur.js';
import { lancerSerie } from '../serie.js';
import { phraseJuste } from '../question.js';
import { boutonEcouter } from '../voix.js';
import { IMAGES, IMAGES_ORDINAIRES, image, tampon, icone } from '../dessins.js';
import { bilan, bilanSuite, PALIERS, CATEGORIES } from '../textes.js';
import { special } from '../calendrier.js';
import { sonTampon, sonFete } from '../sons.js';
import { confettis } from '../fx.js';

export function carteImage(img, titre) {
  return h(
    'section.carte.carte-image',
    titre && h('p.sur-titre', titre),
    h('div.image-dessin', { svg: image(img, 72) }),
    h('h2', img.nom),
    h('p.expression', `« ${img.expr} »`),
    h('p.sens', img.sens),
  );
}

function relecture(d, items) {
  const liste = h('ol.relecture');
  items.forEach((it) => {
    const rep = d.rep[it.id];
    const juste = phraseJuste(it);
    liste.append(
      h(
        'li',
        { class: rep && rep.ok ? 'ok' : 'ko' },
        h('span.marge-note', { svg: icone(rep && rep.ok ? 'oui' : 'non', 18) }),
        h('p.rubrique', it.ctx ? it.ctx.titre : CATEGORIES[it.k]),
        it.dit && h('p.rappel-dit', { rich: `« ${it.dit} »` }),
        it.type === 'qcm' && h('p.rappel-question', { rich: it.q.replace(/_{3,}/, '…') }),
        it.type === 'faute' && h('p.rappel-question', { rich: it.p }),
        rep && !rep.ok && rep.c && h('p.ta-reponse', 'Ta réponse : ', h('s', rep.c)),
        juste && h('div.phrase-juste', h('p', { rich: juste }), boutonEcouter(juste, 'Écouter la phrase')),
        h('p.explication', { rich: it.e }),
      ),
    );
  });
  return liste;
}

function resultat(vue, d, r) {
  clear(vue);
  const s = etat.get();
  const items = questionsDuDefi(d);
  const sp = special(now(), etat.getPerso());
  const rng = mulberry32(hash32('bilan' + d.date));
  const parfait = r.n === r.t;
  const palier = !r.deja && PALIERS[r.serie];
  const manquees = items.filter((it) => d.rep[it.id] && !d.rep[it.id].ok).length;
  const reste = POINTS_PAR_IMAGE - (s.points % POINTS_PAR_IMAGE);
  const collectionFinie = imagesGagnees() >= IMAGES_ORDINAIRES.length;

  const zoneTampon = h('div.tampon' + (r.deja ? '' : '.frappe'), { svg: tampon(dateCourte(now())) });
  const details = h('div.relecture-zone', { hidden: true });
  const voir = h('button.btn.secondaire', { type: 'button', 'aria-expanded': 'false' }, 'Revoir mes réponses');
  voir.addEventListener('click', () => {
    const ouvert = details.hidden;
    if (ouvert && !details.firstChild) details.append(relecture(d, items));
    details.hidden = !ouvert;
    voir.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
    voir.textContent = ouvert ? 'Cacher mes réponses' : 'Revoir mes réponses';
  });

  vue.append(
    h(
      'div.page.resultat',
      zoneTampon,
      h('h1.cursive.bilan-titre', pickOne(bilan(r.n, r.t), rng)),
      h('p.bilan-suite', bilanSuite(r.n, r.t)),
      h(
        'div.score',
        h('p.score-chiffre', h('b', String(r.n)), ` sur ${r.t}`),
        h('p.score-detail', r.n > 1 ? 'bonnes réponses' : 'bonne réponse'),
        !r.deja && h('p.gain', `+ ${r.gains} bons points`),
      ),
      palier && h('section.carte.carte-palier', h('p.cursive', palier), h('p', `Série : ${r.serie} jours`)),
      ...(r.speciales || []).map((id) => carteImage(IMAGES.find((i) => i.id === id), 'Une image de fête pour ton cahier')),
      ...(r.images || []).map((img) => carteImage(img, 'Une nouvelle image pour ton cahier')),
      !r.deja && !(r.images || []).length && !collectionFinie && h('p.prochaine-image', `Encore ${reste} ${reste > 1 ? 'bons points' : 'bon point'} avant la prochaine image.`),
      manquees > 0 &&
        h(
          'p.note-revoir',
          manquees > 1 ? `Les ${manquees} questions manquées reviendront dans les prochains jours.` : 'La question manquée reviendra dans les prochains jours.',
        ),
      h('div.actions', voir, h('a.btn.secondaire', { href: '#/jeux' }, 'Jouer encore'), h('a.btn.primaire', { href: '#/' }, "Retour à l'accueil")),
      details,
    ),
  );

  if (!r.deja) {
    setTimeout(sonTampon, 380);
    if (parfait || palier || sp.moisAnniv || sp.anniv || sp.meres || (r.images || []).length) {
      setTimeout(() => {
        confettis(parfait || sp.anniv ? 60 : 36);
        sonFete();
      }, 700);
    }
  }
}

export function defi(vue) {
  const d = defiDuJour();
  const items = questionsDuDefi(d);
  if (!items.length) {
    vue.append(h('div.page', h('h1', 'Défi du jour'), h('p', "Le cahier est vide pour l'instant."), h('a.btn.primaire', { href: '#/' }, 'Retour')));
    return { onglet: 'accueil' };
  }
  const premier = items.findIndex((it) => !d.rep[it.id]);
  if (d.fini || premier === -1) {
    resultat(vue, d, terminerDefi());
    return { onglet: 'accueil' };
  }
  lancerSerie({
    racine: vue,
    items,
    depart: premier,
    etats: items.map((it) => (d.rep[it.id] ? d.rep[it.id].ok : null)),
    titre: d.titre,
    quitter: () => go(''),
    surReponse: (it, ok, choix) => repondreDefi(it, ok, choix),
    surFin: () => {
      document.body.classList.remove('concentre');
      resultat(vue, d, terminerDefi());
    },
    etiquette: (it, i) => (i >= d.ids.length ? 'Question de rattrapage' : null),
  });
  return { onglet: 'accueil', concentre: true };
}
