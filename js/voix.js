// Le bouton « Écouter » : la voix française déjà installée sur le téléphone.
// Rien n'est envoyé à un serveur : on n'utilise que les voix locales (localService).

import * as etat from './etat.js';
import { h } from './outils.js';
import { icone } from './dessins.js';

const synth = 'speechSynthesis' in window ? window.speechSynthesis : null;
let voix = null;
let listeConnue = false;
let enCours = null;

function choisir() {
  if (!synth) return;
  const toutes = synth.getVoices() || [];
  listeConnue = toutes.length > 0;
  const fr = toutes.filter((v) => /^fr([-_]|$)/i.test(v.lang) && v.localService !== false);
  voix = fr.find((v) => /^fr[-_]FR/i.test(v.lang)) || fr[0] || null;
}

export function initVoix() {
  if (!synth) return;
  choisir();
  if (typeof synth.addEventListener === 'function') synth.addEventListener('voiceschanged', choisir);
  else synth.onvoiceschanged = choisir;
}

// Vrai si on peut parler français. Si le téléphone ne donne pas sa liste de voix
// (cela arrive sur Android), on laisse sa voix par défaut lire le texte.
export function voixPossible() {
  return !!synth && (!!voix || !listeConnue);
}

export const voixActive = () => voixPossible() && etat.get().reglages.voix;

function nettoyer(texte) {
  return String(texte)
    .replace(/\*/g, '')
    .replace(/[«»]/g, '')
    .replace(/_{2,}/g, '…')
    .replace(/\s+/g, ' ')
    .trim();
}

export function dire(texte, bouton) {
  if (!synth) return;
  const dejaCeBouton = enCours && enCours === bouton;
  synth.cancel();
  if (enCours) enCours.classList.remove('parle');
  enCours = null;
  if (dejaCeBouton) return; // un second appui arrête la lecture
  const u = new SpeechSynthesisUtterance(nettoyer(texte));
  u.lang = 'fr-FR';
  if (voix) u.voice = voix;
  u.rate = etat.get().reglages.lent ? 0.75 : 0.95;
  const fin = () => {
    if (bouton) bouton.classList.remove('parle');
    if (enCours === bouton) enCours = null;
  };
  u.onend = fin;
  u.onerror = fin;
  if (bouton) {
    bouton.classList.add('parle');
    enCours = bouton;
  }
  synth.speak(u);
}

export function taire() {
  if (!synth) return;
  synth.cancel();
  if (enCours) enCours.classList.remove('parle');
  enCours = null;
}

// Petit bouton haut-parleur, ou rien si la voix n'est pas disponible.
export function boutonEcouter(texte, libelle = 'Écouter') {
  if (!voixActive()) return null;
  const b = h('button.ecouter', { type: 'button', 'aria-label': libelle, svg: icone('son') });
  b.addEventListener('click', (e) => {
    e.stopPropagation();
    dire(typeof texte === 'function' ? texte() : texte, b);
  });
  return b;
}
