// Confettis des jours de fête. Aucun mouvement si le téléphone demande de réduire les animations.

import { prefersReducedMotion } from './outils.js';

export function confettis(nombre = 40) {
  if (prefersReducedMotion()) return;
  const zone = document.getElementById('fx');
  if (!zone) return;
  for (let i = 0; i < nombre; i++) {
    const c = document.createElement('i');
    c.className = `confetti c${(i % 5) + 1}`;
    c.style.left = `${Math.random() * 100}%`;
    c.style.animationDelay = `${Math.random() * 0.6}s`;
    c.style.setProperty('--dx', `${Math.random() * 140 - 70}px`);
    c.style.setProperty('--rot', `${Math.random() * 900 - 450}deg`);
    zone.append(c);
    setTimeout(() => c.remove(), 3600);
  }
}
