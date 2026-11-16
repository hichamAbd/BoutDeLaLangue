// Tout ce que l'appli retient, sur le téléphone seulement (localStorage).
// Les clés commencent par le nom de l'appli : le stockage est partagé avec les autres applis du même site.

import { APP, todayKey } from './outils.js';

const CLE_ETAT = APP + ':etat';
const CLE_PERSO = APP + ':perso';
const VERSION = 1;

let etat = null;
let perso = null;
let stockageOk = true;

function vide() {
  return {
    v: VERSION,
    cree: todayKey(),
    accueilVu: false,
    jours: {}, // '2026-11-16': { n: bonnes réponses, t: total }
    defi: null, // défi du jour en cours
    vus: {}, // id de question -> numéro du jour où elle a été vue
    revoir: {}, // id -> { b: boîte, du: date }
    stats: {}, // catégorie -> [bonnes, total]
    points: 0, // bons points
    imagesVues: 0, // images déjà montrées
    speciales: {}, // images gagnées les jours de fête
    fetes: {}, // surprises déjà vues, par année
    records: {},
    installMasque: false,
    reglages: { taille: 1, sons: true, voix: true, lent: false },
  };
}

function lire(cle) {
  try {
    const brut = localStorage.getItem(cle);
    return brut ? JSON.parse(brut) : null;
  } catch {
    stockageOk = false;
    return null;
  }
}

function ecrire(cle, valeur) {
  try {
    localStorage.setItem(cle, JSON.stringify(valeur));
  } catch {
    stockageOk = false;
  }
}

export function charger() {
  const base = vide();
  const lu = lire(CLE_ETAT);
  etat = lu && typeof lu === 'object' ? { ...base, ...lu, reglages: { ...base.reglages, ...(lu.reglages || {}) } } : base;
  perso = lire(CLE_PERSO) || {};
  return etat;
}

export const get = () => etat;
export const sauver = () => ecrire(CLE_ETAT, etat);
export const stockageDisponible = () => stockageOk;

/* ---------- Personnalisation : prénom et anniversaire, jamais dans le code public ---------- */

export const getPerso = () => perso;

export function setPerso(p) {
  const propre = {};
  if (p.prenom) propre.prenom = String(p.prenom).trim().slice(0, 30);
  if (p.de) propre.de = String(p.de).trim().slice(0, 30);
  const m = /^(\d{1,2})[-/.](\d{1,2})$/.exec(String(p.anniv || '').trim());
  if (m) {
    const j = Number(m[1]);
    const mo = Number(m[2]);
    if (j >= 1 && j <= 31 && mo >= 1 && mo <= 12) propre.anniv = `${String(j).padStart(2, '0')}-${String(mo).padStart(2, '0')}`;
  }
  perso = { ...perso, ...propre };
  for (const k of ['prenom', 'de', 'anniv']) if (p[k] === '') delete perso[k];
  ecrire(CLE_PERSO, perso);
  return perso;
}

// Lien personnel : …/#pour=Prénom&anniv=JJ-MM (le # n'est jamais envoyé au serveur).
export function lireLienPersonnel() {
  const brut = location.hash.replace(/^#/, '');
  if (!/^(pour|anniv|de)=/.test(brut)) return false;
  const q = new URLSearchParams(brut);
  setPerso({ prenom: q.get('pour') || undefined, anniv: q.get('anniv') || undefined, de: q.get('de') || undefined });
  history.replaceState(null, '', location.pathname + location.search);
  return true;
}

/* ---------- Sauvegarde dans un fichier ---------- */

export function exporter() {
  const contenu = JSON.stringify({ appli: APP, date: todayKey(), etat, perso }, null, 1);
  const url = URL.createObjectURL(new Blob([contenu], { type: 'application/json' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = `sur-le-bout-de-la-langue-${todayKey()}.json`;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export function importer(texte) {
  const data = JSON.parse(texte);
  if (!data || data.appli !== APP || !data.etat || typeof data.etat.jours !== 'object') {
    throw new Error('fichier inconnu');
  }
  const base = vide();
  etat = { ...base, ...data.etat, reglages: { ...base.reglages, ...(data.etat.reglages || {}) } };
  sauver();
  if (data.perso && typeof data.perso === 'object') {
    perso = {};
    setPerso(data.perso);
  }
}

export function toutEffacer() {
  const garde = { reglages: etat.reglages };
  etat = { ...vide(), ...garde };
  sauver();
}
