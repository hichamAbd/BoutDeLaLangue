// La banque de questions : rassemble tous les paquets de js/data et donne un identifiant stable à chaque question.

import { idOf } from './outils.js';
import { PAQUETS } from './data/index.js';

export const parId = new Map(); // id -> question
export const bassins = {}; // catégorie -> questions
export const scenes = []; // situations : { id, titre, intro, qids }

const TYPES = { faute: 'faute', ordre: 'ordre', mot: 'mot' };

function empreinte(k, it) {
  return [k, it.q || '', it.dit || '', it.p || '', it.w ? it.w.join(' ') : '', it.d || '', it.o ? it.o[0] : ''].join('|');
}

function ajouter(k, brut, extra) {
  const it = { ...brut, ...extra, k, type: TYPES[k] || 'qcm' };
  if (k === 'tac' && !it.q) it.q = 'Que réponds-tu ?';
  it.id = idOf(empreinte(k, it));
  if (parId.has(it.id)) return null; // doublon : on garde la première
  parId.set(it.id, it);
  (bassins[k] || (bassins[k] = [])).push(it);
  return it;
}

for (const paquet of PAQUETS) {
  for (const [k, liste] of Object.entries(paquet)) {
    if (!Array.isArray(liste)) continue;
    if (k === 'sit') {
      for (const sc of liste) {
        const ctx = { titre: sc.titre, intro: sc.intro };
        const qids = [];
        for (const q of sc.qs) {
          const it = ajouter('sit', q, { ctx });
          if (it) qids.push(it.id);
        }
        if (qids.length) scenes.push({ id: idOf('scene|' + sc.titre + '|' + sc.intro), titre: sc.titre, intro: sc.intro, qids });
      }
    } else {
      for (const q of liste) ajouter(k, q);
    }
  }
}

export const total = () => parId.size;
