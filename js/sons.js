// Petits sons fabriqués par le téléphone lui-même (aucun fichier audio), et vibration légère.
// Jamais de son pour une erreur : on ne souligne que ce qui va bien.

import * as etat from './etat.js';

let ctx = null;

function audio() {
  if (!etat.get().reglages.sons) return null;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  if (!ctx) {
    try {
      ctx = new AC();
    } catch {
      return null;
    }
  }
  if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  return ctx;
}

function note(freq, debut, duree, volume = 0.07, type = 'sine') {
  const c = audio();
  if (!c) return;
  const t = c.currentTime + debut;
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(volume, t + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + duree);
  osc.connect(gain).connect(c.destination);
  osc.start(t);
  osc.stop(t + duree + 0.02);
}

function vibrer(ms) {
  if (etat.get().reglages.sons && navigator.vibrate) {
    try {
      navigator.vibrate(ms);
    } catch {
      /* rien */
    }
  }
}

export function sonJuste() {
  note(659.25, 0, 0.14);
  note(987.77, 0.09, 0.22);
  vibrer(12);
}

export function sonTampon() {
  note(110, 0, 0.16, 0.16, 'triangle');
  note(70, 0.02, 0.2, 0.12, 'sine');
  vibrer(25);
}

export function sonFete() {
  [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => note(f, i * 0.1, 0.28, 0.06));
  vibrer([15, 40, 15]);
}

export function sonTic() {
  note(1200, 0, 0.04, 0.03, 'square');
}
