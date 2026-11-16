// Enchaîne plusieurs questions : en-tête avec les carreaux de progression, question, bouton d'action en bas.

import { h, clear } from './outils.js';
import { icone } from './dessins.js';
import { monterQuestion } from './question.js';
import { taire } from './voix.js';

export function lancerSerie({ racine, items, depart = 0, etats = [], titre = '', quitter, surReponse, surFin, etiquette }) {
  clear(racine);
  const resultats = items.map((_, i) => (etats[i] === true || etats[i] === false ? etats[i] : null));
  let index = depart;

  const carreaux = h('ol.carreaux', { 'aria-label': 'Avancement' });
  const cases = items.map(() => {
    const li = h('li');
    carreaux.append(li);
    return li;
  });
  const numero = h('span.numero', { 'aria-hidden': 'true' });
  const zone = h('div.zone');
  const barre = h('div.barre-action');
  const fermer = h('button.rond', { type: 'button', 'aria-label': 'Fermer et revenir plus tard', svg: icone('fermer') });
  fermer.addEventListener('click', () => {
    taire();
    quitter();
  });

  racine.append(
    h('div.serie', h('header.tete', fermer, h('div.tete-milieu', titre && h('p.tete-titre', titre), carreaux)), numero, zone),
    barre,
  );

  function peindre() {
    cases.forEach((li, i) => {
      li.className = resultats[i] === true ? 'ok' : resultats[i] === false ? 'ko' : i === index ? 'ici' : '';
    });
    carreaux.setAttribute('aria-label', `Question ${Math.min(index + 1, items.length)} sur ${items.length}`);
  }

  function montrer() {
    if (index >= items.length) {
      taire();
      clear(barre);
      surFin(resultats);
      return;
    }
    peindre();
    const item = items[index];
    numero.textContent = String(index + 1);
    monterQuestion(zone, barre, item, {
      dernier: index === items.length - 1,
      fin: ({ ok, choix }) => {
        resultats[index] = ok;
        if (surReponse) surReponse(item, ok, choix);
        index += 1;
        window.scrollTo(0, 0);
        montrer();
      },
    });
    if (etiquette) {
      const texte = etiquette(item, index);
      if (texte) zone.querySelector('.rubrique').textContent = texte;
    }
  }

  montrer();
}
