// Vérifie le contenu et la liste des fichiers hors connexion.
// À lancer après chaque ajout de contenu :  node tools/verifier.mjs
// Sort avec une erreur (code 1) si quelque chose ne va pas.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAQUETS } from '../js/data/index.js';
import { parId, bassins, scenes } from '../js/banque.js';
import { ANTISECHE } from '../js/data/antiseche.js';
import { LIENS } from '../js/data/liens.js';

const racine = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const erreurs = [];
const avertissements = [];
const err = (ou, quoi) => erreurs.push(`${ou} : ${quoi}`);
const avert = (ou, quoi) => avertissements.push(`${ou} : ${quoi}`);

const nu = (m) => m.replace(/^[«(]+|[.,;:!?»)…]+$/g, '');

function texte(ou, s, { phrase = true } = {}) {
  if (typeof s !== 'string' || !s.trim()) return err(ou, 'texte vide');
  if (s !== s.trim()) err(ou, `espace en trop au début ou à la fin : « ${s} »`);
  if (/ {2,}/.test(s)) err(ou, `double espace : « ${s} »`);
  if ((s.match(/\*/g) || []).length % 2) err(ou, `astérisques non fermés : « ${s} »`);
  if (/[^\s«(*][?!;]/.test(s.replace(/\*/g, ''))) err(ou, `il manque l'espace avant ? ! ou ; : « ${s} »`);
  if (/[^\s\d]:(?!\/\/)/.test(s)) err(ou, `il manque l'espace avant les deux-points : « ${s} »`);
  if (/«[^\s]|[^\s]»/.test(s)) err(ou, `il manque l'espace à l'intérieur des guillemets : « ${s} »`);
  if (/"/.test(s)) err(ou, `guillemets droits, utiliser « » : ${s}`);
  if (phrase && /\s[,.]/.test(s)) err(ou, `espace avant une virgule ou un point : « ${s} »`);
}

function verifierQcm(ou, it) {
  texte(ou + ' q', it.q);
  if (it.dit !== undefined) texte(ou + ' dit', it.dit);
  if (it.qui !== undefined) texte(ou + ' qui', it.qui);
  if (it.ok !== undefined) texte(ou + ' ok', it.ok);
  if (it.ex !== undefined) texte(ou + ' ex', it.ex);
  if (it.t !== undefined) texte(ou + ' t', it.t);
  texte(ou + ' e', it.e);
  if (!Array.isArray(it.o) || it.o.length < 2 || it.o.length > 4) return err(ou, 'il faut 2 à 4 réponses');
  it.o.forEach((o, i) => texte(`${ou} o[${i}]`, o, { phrase: false }));
  if (new Set(it.o.map((o) => o.toLowerCase())).size !== it.o.length) err(ou, `deux réponses identiques : ${it.o.join(' | ')}`);
  const trous = (it.q.match(/_{3,}/g) || []).length;
  if (trous > 1) err(ou, 'un seul trou ___ par question');
  const max = Math.max(...it.o.map((o) => o.length));
  if (max > 95) avert(ou, `réponse très longue (${max} caractères)`);
}

let nbQuestions = 0;
PAQUETS.forEach((paquet, np) => {
  for (const [k, liste] of Object.entries(paquet)) {
    if (!Array.isArray(liste)) {
      err(`paquet ${np} ${k}`, 'doit être une liste');
      continue;
    }
    liste.forEach((it, i) => {
      const ou = `${k}[${i}]`;
      if (k === 'sit') {
        texte(ou + ' titre', it.titre);
        texte(ou + ' intro', it.intro);
        if (!Array.isArray(it.qs) || it.qs.length !== 2) return err(ou, 'une scène a exactement 2 questions');
        it.qs.forEach((q, j) => {
          verifierQcm(`${ou}.qs[${j}]`, q);
          nbQuestions += 1;
        });
      } else if (k === 'faute') {
        texte(ou + ' p', it.p);
        texte(ou + ' e', it.e);
        const mots = it.p.split(' ').map(nu);
        if (it.x === null) {
          if (it.c !== undefined) err(ou, 'pas de correction quand il n\'y a pas de faute');
        } else {
          const n = mots.filter((m) => m === it.x).length;
          if (n !== 1) err(ou, `le mot fautif « ${it.x} » doit apparaître une fois comme mot entier (trouvé ${n} fois)`);
          if (typeof it.c !== 'string') err(ou, 'il manque la correction c');
        }
        nbQuestions += 1;
      } else if (k === 'ordre') {
        if (!Array.isArray(it.w) || it.w.length < 2) return err(ou, 'il faut au moins 2 morceaux');
        it.w.forEach((m) => {
          if (typeof m !== 'string' || !m || /\s/.test(m)) err(ou, `morceau invalide : « ${m} »`);
        });
        texte(ou + ' e', it.e);
        if (it.q !== undefined) texte(ou + ' q', it.q);
        nbQuestions += 1;
      } else if (k === 'mot') {
        texte(ou + ' d', it.d);
        if (typeof it.m !== 'string' || !it.m || it.m !== it.m.trim()) err(ou, 'mot invalide');
        else if (it.d.toLowerCase().includes(it.m.toLowerCase())) err(ou, `la définition contient le mot « ${it.m} »`);
        if (it.ex !== undefined) {
          texte(ou + ' ex', it.ex);
        }
        nbQuestions += 1;
      } else if (k === 'tac') {
        verifierQcm(ou, { q: 'Que réponds-tu ?', ...it });
        if (!it.dit) err(ou, 'il manque dit');
        nbQuestions += 1;
      } else {
        verifierQcm(ou, it);
        nbQuestions += 1;
      }
    });
  }
});

if (parId.size !== nbQuestions) err('banque', `${nbQuestions} questions écrites mais ${parId.size} identifiants : il y a des doublons`);

ANTISECHE.forEach((sec, i) => {
  texte(`antiseche[${i}] titre`, sec.titre);
  sec.phrases.forEach((p, j) => {
    texte(`antiseche[${i}][${j}]`, p.f);
    if (p.n) texte(`antiseche[${i}][${j}] note`, p.n);
  });
});
LIENS.forEach((g, i) => {
  texte(`liens[${i}] titre`, g.titre);
  g.liens.forEach((l, j) => {
    texte(`liens[${i}][${j}] nom`, l.nom);
    texte(`liens[${i}][${j}] texte`, l.texte);
    if (!/^https:\/\/[a-z0-9.-]+\//.test(l.url)) err(`liens[${i}][${j}]`, `adresse invalide : ${l.url}`);
  });
});

// Tous les fichiers de l'appli doivent être dans la liste hors connexion de sw.js.
const sw = fs.readFileSync(path.join(racine, 'sw.js'), 'utf8');
const declares = new Set([...sw.matchAll(/'([^']+\.(?:js|css|html|woff|png|svg|webmanifest))'/g)].map((m) => m[1]));
function lister(dossier) {
  return fs.readdirSync(path.join(racine, dossier), { withFileTypes: true }).flatMap((f) => {
    const rel = path.posix.join(dossier, f.name);
    return f.isDirectory() ? lister(rel) : [rel];
  });
}
const attendus = [
  'index.html',
  'manifest.webmanifest',
  ...lister('css'),
  ...lister('js'),
  ...lister('icons'),
  ...lister('fonts').filter((f) => f.endsWith('.woff')),
];
for (const f of attendus) if (!declares.has(f)) err('sw.js', `fichier absent de FICHIERS : ${f}`);
for (const f of declares) if (!fs.existsSync(path.join(racine, f))) err('sw.js', `fichier déclaré mais introuvable : ${f}`);

// Bilan
const lignes = Object.entries(bassins)
  .map(([k, v]) => `${k} ${v.length}`)
  .join(', ');
console.log(`Contenu : ${parId.size} questions et mots (${lignes}).`);
console.log(`Scènes : ${scenes.length}. Phrases de l'antisèche : ${ANTISECHE.reduce((n, s) => n + s.phrases.length, 0)}.`);
if (avertissements.length) console.log(`\n${avertissements.length} avertissement(s) :\n- ` + avertissements.join('\n- '));
if (erreurs.length) {
  console.error(`\n${erreurs.length} erreur(s) :\n- ` + erreurs.join('\n- '));
  process.exit(1);
}
console.log('\nTout est en ordre.');
