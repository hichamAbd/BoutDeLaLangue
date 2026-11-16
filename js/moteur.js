// Le moteur : choisit le défi du jour, retient ce qui a été vu, fait revenir les questions manquées,
// compte les bons points, les images et la série de jours.

import * as etat from './etat.js';
import { bassins, parId, scenes } from './banque.js';
import { todayKey, dayNumber, addDays, hash32, mulberry32, pickOne, shuffle, now } from './outils.js';
import { special } from './calendrier.js';
import { IMAGES_ORDINAIRES } from './dessins.js';

export const POINTS_PAR_IMAGE = 25;

// Une question manquée revient après 1 jour, puis 3, 7 et 21 jours. Quatre réussites et elle est acquise.
const DELAIS = [1, 3, 7, 21];

// Composition du défi : une situation (2 questions), conjugaison, grammaire,
// puis deux cases qui tournent d'un jour à l'autre, et une expression pour finir.
const TOURNE_5 = ['orth', 'faute', 'ordre'];
const TOURNE_6 = ['voc', 'fam', 'usage', 'oral'];

function choisir(liste, rng, exclus = []) {
  const s = etat.get();
  const dispo = liste.filter((it) => !exclus.includes(it.id));
  if (!dispo.length) return null;
  const neufs = dispo.filter((it) => !(it.id in s.vus));
  if (neufs.length) return pickOne(neufs, rng);
  const anciens = dispo.slice().sort((a, b) => s.vus[a.id] - s.vus[b.id]);
  return pickOne(anciens.slice(0, Math.min(5, anciens.length)), rng);
}

function choisirScene(rng) {
  const s = etat.get();
  if (!scenes.length) return null;
  const neuves = scenes.filter((sc) => !(sc.qids[0] in s.vus));
  if (neuves.length) return pickOne(neuves, rng);
  const anciennes = scenes.slice().sort((a, b) => s.vus[a.qids[0]] - s.vus[b.qids[0]]);
  return pickOne(anciennes.slice(0, Math.min(5, anciennes.length)), rng);
}

export function aRevoir(cle = todayKey()) {
  const s = etat.get();
  return Object.keys(s.revoir).filter((id) => s.revoir[id].du <= cle && parId.has(id));
}

export const enAttente = () => Object.keys(etat.get().revoir).filter((id) => parId.has(id));

export function defiDuJour() {
  const s = etat.get();
  const cle = todayKey();
  if (s.defi && s.defi.date === cle) return s.defi;

  const n = dayNumber(cle);
  const rng = mulberry32(hash32('defi' + cle));
  const sp = special(now(), etat.getPerso());
  let ids = [];
  let titre = '';

  if (sp.anniv && (bassins.fete || []).length >= 5) {
    ids = bassins.fete.slice(0, 7).map((it) => it.id);
    titre = "Page d'anniversaire";
  } else {
    const scene = choisirScene(rng);
    if (scene) {
      ids.push(...scene.qids.slice(0, 2));
      titre = scene.titre;
    }
    for (const k of ['conj', 'gram', TOURNE_5[n % 3], TOURNE_6[n % 4], 'expr']) {
      const it = choisir(bassins[k] || [], rng, ids);
      if (it) ids.push(it.id);
    }
  }

  const bonus = aRevoir(cle)
    .filter((id) => !ids.includes(id))
    .slice(0, 2);
  s.defi = { date: cle, ids, bonus, rep: {}, fini: false, titre };
  etat.sauver();
  return s.defi;
}

export const questionsDuDefi = (d) => [...d.ids, ...d.bonus].map((id) => parId.get(id)).filter(Boolean);

// Enregistre une réponse, où qu'elle ait été donnée (défi ou jeu).
export function noter(item, ok) {
  const s = etat.get();
  const cle = todayKey();
  s.vus[item.id] = dayNumber(cle);
  const st = s.stats[item.k] || (s.stats[item.k] = [0, 0]);
  st[1] += 1;
  if (ok) st[0] += 1;
  const r = s.revoir[item.id];
  if (!ok) {
    s.revoir[item.id] = { b: 0, du: addDays(cle, DELAIS[0]) };
  } else if (r && r.du <= cle) {
    r.b += 1;
    if (r.b >= DELAIS.length) delete s.revoir[item.id];
    else r.du = addDays(cle, DELAIS[r.b]);
  }
  etat.sauver();
}

export function repondreDefi(item, ok, choix) {
  const s = etat.get();
  s.defi.rep[item.id] = { ok, c: choix == null ? '' : String(choix) };
  noter(item, ok);
}

export const imagesGagnees = (points = etat.get().points) =>
  Math.min(IMAGES_ORDINAIRES.length, Math.floor(points / POINTS_PAR_IMAGE));

function crediter(points) {
  const s = etat.get();
  const avant = imagesGagnees();
  s.points += points;
  const apres = imagesGagnees();
  return IMAGES_ORDINAIRES.slice(avant, apres);
}

export function terminerDefi() {
  const s = etat.get();
  const d = s.defi;
  const liste = questionsDuDefi(d);
  const n = liste.filter((it) => d.rep[it.id] && d.rep[it.id].ok).length;
  const t = liste.length;
  if (d.fini) return { n, t, gains: 0, images: [], serie: serie(), palier: null, deja: true };

  d.fini = true;
  s.jours[d.date] = { n, t };
  const gains = n + 3 + (n === t ? 2 : 0);
  const images = crediter(gains);

  const sp = special(now(), etat.getPerso());
  const speciales = [];
  if (sp.anniv && !s.speciales.gateau) {
    s.speciales.gateau = d.date;
    speciales.push('gateau');
  }
  if (sp.meres && !s.speciales.coeur) {
    s.speciales.coeur = d.date;
    speciales.push('coeur');
  }

  const sr = serie();
  s.records.serie = Math.max(s.records.serie || 0, sr);
  etat.sauver();
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
  return { n, t, gains, images, speciales, serie: sr, palier: sr, deja: false };
}

// Série de jours. Un jour manqué ne la casse pas ; deux jours de suite, si.
export function serie() {
  const jours = etat.get().jours;
  let cle = todayKey();
  if (!jours[cle]) cle = addDays(cle, -1);
  let total = 0;
  let trous = 0;
  for (let i = 0; i < 4000; i++) {
    if (jours[cle]) {
      total += 1;
      trous = 0;
    } else {
      trous += 1;
      if (trous >= 2) break;
    }
    cle = addDays(cle, -1);
  }
  return total;
}

/* ---------- Jeux ---------- */

// Tire n questions d'une ou plusieurs catégories : d'abord celles qui sont à revoir, puis les nouvelles, puis les plus anciennes.
export function tirage(categories, n) {
  const s = etat.get();
  const cle = todayKey();
  const liste = [].concat(...categories.map((k) => bassins[k] || []));
  const dues = shuffle(liste.filter((it) => s.revoir[it.id] && s.revoir[it.id].du <= cle));
  const neuves = shuffle(liste.filter((it) => !(it.id in s.vus) && !s.revoir[it.id]));
  const vues = shuffle(liste.filter((it) => it.id in s.vus && !(s.revoir[it.id] && s.revoir[it.id].du <= cle))).sort(
    (a, b) => s.vus[a.id] - s.vus[b.id],
  );
  const choisies = [...dues.slice(0, Math.ceil(n / 3)), ...neuves, ...vues].slice(0, n);
  return shuffle(choisies);
}

export function finDePartie(jeu, score) {
  const s = etat.get();
  const record = !(jeu in s.records) || score > s.records[jeu];
  if (record) s.records[jeu] = score;
  const images = crediter(2);
  etat.sauver();
  return { record, images, gains: 2 };
}

export function bilanParCategorie() {
  const s = etat.get();
  return Object.entries(s.stats)
    .filter(([, v]) => v[1] >= 3)
    .map(([k, v]) => ({ k, ok: v[0], total: v[1], taux: v[0] / v[1] }))
    .sort((a, b) => b.taux - a.taux);
}

export function totaux() {
  const s = etat.get();
  let ok = 0;
  let total = 0;
  for (const v of Object.values(s.stats)) {
    ok += v[0];
    total += v[1];
  }
  return { ok, total, jours: Object.keys(s.jours).length };
}
