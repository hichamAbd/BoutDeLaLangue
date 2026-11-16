// Petits outils partagés : texte, DOM, dates, hasard reproductible.

export const APP = 'boutdelalangue';

/* ---------- Texte ---------- */

// Typographie française : apostrophe courbe, espaces insécables avant ? ! : ; » et après «.
export function typo(s) {
  return String(s)
    .replace(/'/g, '’')
    .replace(/ ([?!:;»])/g, ' $1')
    .replace(/« /g, '« ');
}

// Texte avec *mise en valeur* : renvoie un fragment sans jamais passer par innerHTML.
export function rich(text) {
  const frag = document.createDocumentFragment();
  typo(text).split(/\*([^*]+)\*/).forEach((part, i) => {
    if (!part) return;
    if (i % 2) {
      const b = document.createElement('b');
      b.textContent = part;
      frag.append(b);
    } else {
      frag.append(part);
    }
  });
  return frag;
}

export function cap(s) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

/* ---------- DOM ---------- */

// h('button.btn.primaire', { type: 'button', on: { click } }, 'Texte', enfant…)
export function h(sel, props, ...kids) {
  if (props instanceof Node || typeof props === 'string' || typeof props === 'number' || Array.isArray(props)) {
    kids.unshift(props);
    props = null;
  }
  const [tag, ...cls] = sel.split('.');
  const n = document.createElement(tag || 'div');
  if (cls.length) n.className = cls.join(' ');
  if (props) {
    for (const [k, v] of Object.entries(props)) {
      if (v == null || v === false) continue;
      if (k === 'on') {
        for (const [ev, fn] of Object.entries(v)) n.addEventListener(ev, fn);
      } else if (k === 'svg') {
        n.innerHTML = v; // dessins statiques de l'appli uniquement, jamais de texte saisi
      } else if (k === 'rich') {
        n.append(rich(v));
      } else if (k === 'disabled' || k === 'hidden' || k === 'checked') {
        n[k] = !!v;
      } else {
        n.setAttribute(k, v === true ? '' : v);
      }
    }
  }
  for (const kid of kids.flat(Infinity)) {
    if (kid == null || kid === false) continue;
    n.append(kid instanceof Node ? kid : typo(kid));
  }
  return n;
}

export function clear(node) {
  while (node.firstChild) node.firstChild.remove();
  return node;
}

export function go(path) {
  const target = '#/' + path.replace(/^#?\/?/, '');
  if (location.hash === target) window.dispatchEvent(new HashChangeEvent('hashchange'));
  else location.hash = target;
}

export const prefersReducedMotion = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Dates (toujours l'heure du téléphone) ---------- */

const pad = (n) => String(n).padStart(2, '0');

export function keyOf(d) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

// Date du jour. Pour les essais, on peut la forcer avec ?jour=2027-03-01 dans l'adresse.
export function now() {
  const forced = new URLSearchParams(location.search).get('jour');
  if (forced && /^\d{4}-\d{2}-\d{2}$/.test(forced)) {
    const real = new Date();
    const [y, m, d] = forced.split('-').map(Number);
    return new Date(y, m - 1, d, real.getHours(), real.getMinutes(), real.getSeconds());
  }
  return new Date();
}

export const todayKey = () => keyOf(now());

export function dateOf(key) {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function dayNumber(key) {
  const [y, m, d] = key.split('-').map(Number);
  return Math.round(Date.UTC(y, m - 1, d) / 86400000);
}

export function addDays(key, n) {
  const d = dateOf(key);
  d.setDate(d.getDate() + n);
  return keyOf(d);
}

const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
const JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

export const nomMois = (i) => MOIS[i];

// « Lundi 16 novembre », « Dimanche 1er mars »
export function dateLongue(d) {
  const j = d.getDate();
  return `${cap(JOURS[d.getDay()])} ${j === 1 ? '1er' : j} ${MOIS[d.getMonth()]}`;
}

export function dateCourte(d) {
  const j = d.getDate();
  return `${j === 1 ? '1er' : j} ${MOIS[d.getMonth()]}`;
}

const MOIS_COURTS = ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

// « 16 nov. » : pour le tampon
export function dateTampon(d) {
  const j = d.getDate();
  return `${j === 1 ? '1er' : j} ${MOIS_COURTS[d.getMonth()]}`;
}

/* ---------- Hasard reproductible ---------- */

export function hash32(str) {
  let x = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    x ^= str.charCodeAt(i);
    x = Math.imul(x, 0x01000193);
  }
  return x >>> 0;
}

export const idOf = (str) => hash32(str).toString(36);

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle(list, rng = Math.random) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const pickOne = (list, rng = Math.random) => list[Math.floor(rng() * list.length)];
