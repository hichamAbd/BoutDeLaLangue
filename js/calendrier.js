// Le calendrier du cahier : saisons, fête des mères, mois et jour d'anniversaire.

import { now, keyOf } from './outils.js';

export function saison(d = now()) {
  const x = (d.getMonth() + 1) * 100 + d.getDate();
  if (x >= 320 && x <= 620) return 'printemps';
  if (x >= 621 && x <= 922) return 'ete';
  if (x >= 923 && x <= 1220) return 'automne';
  return 'hiver';
}

export const NOMS_SAISONS = { printemps: 'le printemps', ete: "l'été", automne: "l'automne", hiver: "l'hiver" };

const DEBUTS = { 320: 'printemps', 621: 'ete', 923: 'automne', 1221: 'hiver' };

// Dimanche de Pâques (algorithme de Meeus), pour trouver la Pentecôte.
export function paques(annee) {
  const a = annee % 19;
  const b = Math.floor(annee / 100);
  const c = annee % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const hh = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - hh - k) % 7;
  const m = Math.floor((a + 11 * hh + 22 * l) / 451);
  const mois = Math.floor((hh + l - 7 * m + 114) / 31);
  const jour = ((hh + l - 7 * m + 114) % 31) + 1;
  return new Date(annee, mois - 1, jour);
}

// Fête des mères en France : dernier dimanche de mai, ou premier dimanche de juin si c'est la Pentecôte.
export function feteDesMeres(annee) {
  const fin = new Date(annee, 4, 31);
  const dernierDimanche = new Date(annee, 4, 31 - fin.getDay());
  const pentecote = paques(annee);
  pentecote.setDate(pentecote.getDate() + 49);
  if (keyOf(dernierDimanche) !== keyOf(pentecote)) return dernierDimanche;
  const juin = new Date(annee, 5, 1);
  return new Date(annee, 5, 1 + ((7 - juin.getDay()) % 7));
}

// Ce que la date du jour a de particulier. `perso.anniv` vaut 'JJ-MM' ou rien.
export function special(d = now(), perso = {}) {
  const res = { anniv: false, moisAnniv: false, meres: false, debutSaison: null };
  if (perso && perso.anniv) {
    const [j, m] = perso.anniv.split('-').map(Number);
    res.moisAnniv = d.getMonth() + 1 === m;
    res.anniv = res.moisAnniv && d.getDate() === j;
  }
  res.meres = keyOf(feteDesMeres(d.getFullYear())) === keyOf(d);
  res.debutSaison = DEBUTS[(d.getMonth() + 1) * 100 + d.getDate()] || null;
  return res;
}

export function appliquerTheme(perso) {
  const d = now();
  const sp = special(d, perso);
  const racine = document.documentElement;
  racine.dataset.saison = saison(d);
  racine.dataset.fete = sp.anniv ? 'anniv' : sp.meres ? 'meres' : sp.moisAnniv ? 'mois' : '';
  return sp;
}
