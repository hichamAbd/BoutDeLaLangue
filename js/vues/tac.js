// « Du tac au tac » : on lui parle, elle choisit vite la bonne réplique. Le seul jeu avec un temps limité.

import { h, clear, go, shuffle } from '../outils.js';
import * as etat from '../etat.js';
import { tirage, noter } from '../moteur.js';
import { icone } from '../dessins.js';
import { boutonEcouter, taire } from '../voix.js';
import { sonJuste } from '../sons.js';
import { finPartie } from './jeux.js';

const DUREE = 12000; // 12 secondes par réplique : assez pour lire, assez court pour répondre d'instinct
const NOMBRE = 10;

export function jeuTac(vue) {
  const s = etat.get();
  const items = tirage(['tac'], NOMBRE);
  if (!items.length) {
    vue.append(h('div.page', h('h1.titre', 'Du tac au tac'), h('p.chapeau', 'Pas de répliques pour le moment.'), h('a.btn.primaire', { href: '#/jeux' }, 'Retour aux jeux')));
    return { onglet: 'jeux' };
  }

  let minuterie = null;
  let tic = null;
  const arreter = () => {
    clearTimeout(minuterie);
    clearInterval(tic);
  };

  function jouer() {
    document.body.classList.add('concentre');
    let index = 0;
    let score = 0;
    clear(vue);
    const fermer = h('button.rond', { type: 'button', 'aria-label': 'Arrêter la partie', svg: icone('fermer') });
    fermer.addEventListener('click', () => {
      arreter();
      taire();
      go('jeux');
    });
    const compteur = h('p.tete-titre');
    const jauge = h('div.jauge-plein');
    const zone = h('div.zone');
    const barre = h('div.barre-action');
    vue.append(h('div.serie.tac', h('header.tete', fermer, h('div.tete-milieu', compteur, h('div.jauge', { 'aria-hidden': 'true' }, jauge))), zone), barre);

    function suivante() {
      arreter();
      clear(barre);
      if (index >= items.length) {
        taire();
        finPartie(vue, { jeu: 'tac', titre: 'Du tac au tac', score, total: items.length, rejouer: jouer });
        return;
      }
      const item = items[index];
      compteur.textContent = `Réplique ${index + 1} sur ${items.length}`;
      clear(zone);
      let fini = false;
      const options = shuffle(item.o.map((t, i) => ({ t, juste: i === 0 })));
      const liste = h('div.options');
      const bulle = h('div.bulle', item.qui && h('span.qui', item.qui), h('p.dit', { rich: item.dit }), boutonEcouter(item.dit));
      const racine = h('article.question', h('p.consigne', 'Que réponds-tu ?'), bulle, liste);

      const conclure = (opt) => {
        if (fini) return;
        fini = true;
        arreter();
        const ok = !!(opt && opt.juste);
        if (ok) score += 1;
        noter(item, ok);
        options.forEach((o) => {
          o.el.disabled = true;
          if (o.juste) o.el.classList.add('juste');
          else if (o === opt) o.el.classList.add('fausse');
        });
        index += 1;
        if (ok) {
          sonJuste();
          minuterie = setTimeout(suivante, 900);
          return;
        }
        racine.append(
          h('section.correction.ko', { 'aria-live': 'polite' }, h('p.verdict.cursive', opt ? 'Pas tout à fait.' : 'Le temps est passé.'), h('p.explication', { rich: item.e })),
        );
        const continuer = h('button.btn.primaire', { type: 'button' }, index >= items.length ? 'Terminer' : 'Continuer');
        continuer.addEventListener('click', suivante, { once: true });
        barre.append(continuer);
        continuer.scrollIntoView({ block: 'nearest' });
      };

      options.forEach((opt) => {
        opt.el = h('button.option', { type: 'button' }, h('span.texte', { rich: opt.t }));
        opt.el.addEventListener('click', () => conclure(opt));
        liste.append(opt.el);
      });
      zone.append(racine);
      window.scrollTo(0, 0);

      const debut = Date.now();
      jauge.style.transform = 'scaleX(1)';
      tic = setInterval(() => {
        const reste = Math.max(0, 1 - (Date.now() - debut) / DUREE);
        jauge.style.transform = `scaleX(${reste})`;
      }, 200);
      minuterie = setTimeout(() => conclure(null), DUREE);
    }
    suivante();
  }

  vue.append(
    h(
      'div.page.intro-jeu',
      h('p.rubrique', 'Jeu'),
      h('h1.titre', 'Du tac au tac'),
      h('p.chapeau', "Quelqu'un te parle. Tu choisis la réponse la plus naturelle, sans trop réfléchir."),
      h(
        'ul.regles',
        h('li', `${NOMBRE} répliques, 12 secondes pour chacune.`),
        h('li', 'Si le temps passe, ce n\'est pas grave : la bonne réponse s\'affiche.'),
        h('li', 'C\'est le seul jeu chronométré. Le défi du jour ne l\'est jamais.'),
      ),
      s.records.tac != null && h('p.record', `Ton record : ${s.records.tac} sur ${NOMBRE}`),
      h('div.actions', h('button.btn.primaire', { type: 'button', on: { click: jouer } }, "C'est parti"), h('a.btn.secondaire', { href: '#/jeux' }, 'Retour aux jeux')),
    ),
  );
  return { onglet: 'jeux', nettoyer: arreter };
}
