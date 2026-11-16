// « Sur le bout de la langue » : une définition, et le mot à retrouver de tête.
// Elle ne tape rien : elle cherche, demande des lettres si besoin, puis vérifie elle-même.

import { h, clear, go, todayKey, dayNumber } from '../outils.js';
import * as etat from '../etat.js';
import { tirage } from '../moteur.js';
import { icone } from '../dessins.js';
import { boutonEcouter, taire } from '../voix.js';
import { sonJuste } from '../sons.js';
import { finPartie } from './jeux.js';

const NOMBRE = 8;
const estLettre = (c) => /\p{L}/u.test(c);

export function jeuMot(vue) {
  const items = tirage(['mot'], NOMBRE);
  if (!items.length) {
    vue.append(h('div.page', h('h1.titre', 'Sur le bout de la langue'), h('p.chapeau', 'Pas de mots pour le moment.'), h('a.btn.primaire', { href: '#/jeux' }, 'Retour aux jeux')));
    return { onglet: 'jeux' };
  }

  function jouer() {
    document.body.classList.add('concentre');
    let index = 0;
    let trouves = 0;
    clear(vue);
    const fermer = h('button.rond', { type: 'button', 'aria-label': 'Arrêter la partie', svg: icone('fermer') });
    fermer.addEventListener('click', () => {
      taire();
      go('jeux');
    });
    const compteur = h('p.tete-titre');
    const zone = h('div.zone');
    const barre = h('div.barre-action');
    vue.append(h('div.serie.mot-jeu', h('header.tete', fermer, h('div.tete-milieu', compteur)), zone), barre);

    function suivant() {
      clear(barre);
      clear(zone);
      if (index >= items.length) {
        taire();
        finPartie(vue, {
          jeu: 'mot',
          titre: 'Sur le bout de la langue',
          score: trouves,
          total: items.length,
          rejouer: jouer,
          phrase: trouves === items.length ? 'Tous retrouvés !' : trouves >= items.length / 2 ? 'Les mots reviennent.' : 'Ils reviendront.',
        });
        return;
      }
      const item = items[index];
      const lettres = [...item.m];
      const positions = lettres.map((c, i) => (estLettre(c) ? i : -1)).filter((i) => i >= 0);
      let indices = 0;
      compteur.textContent = `Mot ${index + 1} sur ${items.length}`;

      const cases = h('div.cases', { 'aria-label': `Mot de ${positions.length} lettres` });
      const els = lettres.map((c) => {
        const el = estLettre(c) ? h('span.case-lettre') : h('span.case-signe', c === ' ' ? ' ' : c);
        cases.append(el);
        return el;
      });
      const aide = h('p.aide-mot', `${positions.length} lettres`);
      const racine = h('article.question', h('p.rubrique', 'Quel est ce mot ?'), h('p.definition', { rich: item.d }), cases, aide);
      zone.append(racine);
      window.scrollTo(0, 0);

      const noterMot = (ok) => {
        const s = etat.get();
        s.vus[item.id] = dayNumber(todayKey());
        const st = s.stats.mot || (s.stats.mot = [0, 0]);
        st[1] += 1;
        if (ok) st[0] += 1;
        etat.sauver();
      };

      const montrerMot = () => {
        positions.forEach((p) => {
          els[p].textContent = lettres[p];
          els[p].classList.add('montree');
        });
        clear(barre);
        aide.remove();
        chat.remove();
        racine.append(h('div.phrase-juste', h('p', h('b', item.m), item.ex ? ' : ' + item.ex : ''), boutonEcouter(item.ex ? `${item.m}. ${item.ex}` : item.m)));
      };

      const passer = (ok) => {
        noterMot(ok);
        if (ok) {
          trouves += 1;
          sonJuste();
        }
        index += 1;
        suivant();
      };

      const indice = h('button.btn.secondaire', { type: 'button' }, 'Un indice');
      indice.addEventListener('click', () => {
        if (indices >= positions.length - 1) return;
        const p = positions[indices];
        els[p].textContent = lettres[p];
        els[p].classList.add('montree');
        indices += 1;
        aide.textContent = indices === 1 ? 'Première lettre donnée.' : `${indices} lettres données.`;
        if (indices >= positions.length - 1) indice.disabled = true;
      });

      const trouve = h('button.btn.primaire', { type: 'button' }, "Je l'ai !");
      trouve.addEventListener('click', () => {
        montrerMot();
        racine.append(h('p.consigne', "C'était bien ce mot ?"));
        const oui = h('button.btn.primaire', { type: 'button' }, 'Oui');
        const non = h('button.btn.secondaire', { type: 'button' }, 'Non');
        oui.addEventListener('click', () => passer(true), { once: true });
        non.addEventListener('click', () => passer(false), { once: true });
        barre.append(non, oui);
      });

      const chat = h('button.lien-discret', { type: 'button' }, 'Je donne ma langue au chat');
      chat.addEventListener('click', () => {
        montrerMot();
        const ensuite = h('button.btn.primaire', { type: 'button' }, index + 1 >= items.length ? 'Terminer' : 'Mot suivant');
        ensuite.addEventListener('click', () => passer(false), { once: true });
        barre.append(ensuite);
      });

      barre.append(indice, trouve);
      racine.append(chat);
    }
    suivant();
  }

  vue.append(
    h(
      'div.page.intro-jeu',
      h('p.rubrique', 'Jeu'),
      h('h1.titre', 'Sur le bout de la langue'),
      h('p.chapeau', 'Je te donne une définition. Le mot, tu le connais : il faut juste aller le chercher.'),
      h(
        'ul.regles',
        h('li', `${NOMBRE} mots de la vie de tous les jours.`),
        h('li', 'Besoin d\'aide ? Demande une lettre, puis une autre.'),
        h('li', 'Pas de clavier, pas de chrono : tu trouves le mot dans ta tête, puis tu vérifies.'),
      ),
      h('div.actions', h('button.btn.primaire', { type: 'button', on: { click: jouer } }, 'Commencer'), h('a.btn.secondaire', { href: '#/jeux' }, 'Retour aux jeux')),
    ),
  );
  return { onglet: 'jeux' };
}
