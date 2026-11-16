// « Mon cahier » : le calendrier des pages faites, les bons points, les images, les points forts.

import { h, clear, now, keyOf, nomMois, cap, todayKey } from '../outils.js';
import * as etat from '../etat.js';
import { serie, totaux, bilanParCategorie, imagesGagnees, POINTS_PAR_IMAGE } from '../moteur.js';
import { IMAGES, IMAGES_ORDINAIRES, image, icone } from '../dessins.js';
import { CATEGORIES } from '../textes.js';
import { carteImage } from './defi.js';

function calendrier(annee, mois) {
  const s = etat.get();
  const cleAuj = todayKey();
  const premier = new Date(annee, mois, 1);
  const nb = new Date(annee, mois + 1, 0).getDate();
  const decalage = (premier.getDay() + 6) % 7;
  const grille = h('div.calendrier', { role: 'grid', 'aria-label': `${cap(nomMois(mois))} ${annee}` });
  ['L', 'M', 'M', 'J', 'V', 'S', 'D'].forEach((l) => grille.append(h('span.cal-tete', { 'aria-hidden': 'true' }, l)));
  for (let i = 0; i < decalage; i++) grille.append(h('span.cal-vide'));
  for (let j = 1; j <= nb; j++) {
    const cle = keyOf(new Date(annee, mois, j));
    const fait = s.jours[cle];
    const classes = ['cal-jour'];
    if (fait) classes.push('fait', fait.n === fait.t ? 'parfait' : '');
    if (cle === cleAuj) classes.push('auj');
    grille.append(
      h(
        'span',
        { class: classes.join(' ').trim(), 'aria-label': `${j} ${nomMois(mois)}${fait ? ` : ${fait.n} sur ${fait.t}` : ''}` },
        h('span.cal-numero', String(j)),
        fait && h('span.cal-marque', { svg: icone(fait.n === fait.t ? 'etoile' : 'oui', 16) }),
      ),
    );
  }
  return grille;
}

export function cahier(vue) {
  const s = etat.get();
  const auj = now();
  let annee = auj.getFullYear();
  let mois = auj.getMonth();
  const tot = totaux();
  const gagnees = imagesGagnees();
  const reste = POINTS_PAR_IMAGE - (s.points % POINTS_PAR_IMAGE);
  const forces = bilanParCategorie();

  const titreMois = h('h2.mois-titre');
  const zoneCal = h('div');
  const avant = h('button.rond', { type: 'button', 'aria-label': 'Mois précédent', svg: icone('retour', 20) });
  const apres = h('button.rond', { type: 'button', 'aria-label': 'Mois suivant', svg: icone('suite', 20) });
  const dessiner = () => {
    titreMois.textContent = `${cap(nomMois(mois))} ${annee}`;
    clear(zoneCal).append(calendrier(annee, mois));
    apres.disabled = annee === auj.getFullYear() && mois === auj.getMonth();
    const [ca, cm] = s.cree.split('-').map(Number);
    avant.disabled = annee < ca || (annee === ca && mois <= cm - 1);
  };
  avant.addEventListener('click', () => {
    mois -= 1;
    if (mois < 0) {
      mois = 11;
      annee -= 1;
    }
    dessiner();
  });
  apres.addEventListener('click', () => {
    mois += 1;
    if (mois > 11) {
      mois = 0;
      annee += 1;
    }
    dessiner();
  });
  dessiner();

  const detail = h('div.image-detail', { 'aria-live': 'polite' });
  const montrer = (img) => {
    clear(detail).append(carteImage(img));
    detail.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  };
  const speciales = IMAGES.filter((i) => i.special && s.speciales[i.id]);
  const toutes = [...IMAGES_ORDINAIRES.map((img, i) => ({ img, gagnee: i < gagnees })), ...speciales.map((img) => ({ img, gagnee: true }))];
  const album = h(
    'div.album',
    toutes.map(({ img, gagnee }) => {
      if (!gagnee) return h('span.vignette.cachee', { 'aria-label': 'Image à gagner' }, '?');
      const b = h('button.vignette', { type: 'button', 'aria-label': img.nom, svg: image(img, 48) });
      b.addEventListener('click', () => montrer(img));
      return b;
    }),
  );

  vue.append(
    h(
      'div.page.cahier',
      h('h1.titre', 'Mon cahier'),
      h(
        'div.chiffres',
        h('p', h('b', String(serie())), h('span', 'jours de série')),
        h('p', h('b', String(tot.jours)), h('span', tot.jours > 1 ? 'pages faites' : 'page faite')),
        h('p', h('b', String(s.points)), h('span', 'bons points')),
      ),
      h('section.bloc', h('div.mois-nav', avant, titreMois, apres), zoneCal, h('p.legende', h('span.leg', { svg: icone('oui', 14) }), 'page faite', h('span.leg', { svg: icone('etoile', 14) }), 'sans faute')),
      h(
        'section.bloc',
        h('h2.sous-titre', 'Mes images'),
        h(
          'p.chapeau',
          gagnees >= IMAGES_ORDINAIRES.length
            ? 'Tu les as toutes. De nouvelles images arriveront.'
            : `Une image tous les ${POINTS_PAR_IMAGE} bons points. Encore ${reste} pour la prochaine.`,
        ),
        album,
        detail,
      ),
      forces.length > 0 &&
        h(
          'section.bloc',
          h('h2.sous-titre', 'Mes points forts'),
          h(
            'ul.forces',
            forces.map((f) =>
              h(
                'li',
                h('span.force-nom', CATEGORIES[f.k] || (f.k === 'mot' ? 'Mots retrouvés' : f.k)),
                h('span.force-barre', h('span.force-plein', { 'data-taux': String(Math.round(f.taux * 100)) })),
                h('span.force-chiffre', `${f.ok} sur ${f.total}`),
              ),
            ),
          ),
          h('p.legende', `${tot.ok} bonnes réponses sur ${tot.total} depuis le début.`),
        ),
    ),
  );
  vue.querySelectorAll('.force-plein').forEach((el) => {
    el.style.width = `${el.dataset.taux}%`;
  });
  return { onglet: 'cahier' };
}
