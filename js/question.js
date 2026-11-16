// Affiche une question (choix, « trouve la faute » ou « dans l'ordre »), puis sa correction expliquée.

import { h, shuffle, pickOne, clear, typo, prefersReducedMotion } from './outils.js';
import { icone } from './dessins.js';
import { boutonEcouter, taire } from './voix.js';
import { JUSTE, FAUX, CATEGORIES } from './textes.js';
import { sonJuste } from './sons.js';

const TROU = /_{3,}/;

// Enlève la ponctuation collée à un mot : « stylo. » -> « stylo »
const nu = (m) => m.replace(/^[«(]+|[.,;:!?»)…]+$/g, '');
const estMot = (m) => /[\p{L}\d]/u.test(m);

// Recolle des morceaux de phrase : pas d'espace après une apostrophe ni avant un trait d'union.
export function coller(morceaux) {
  let s = '';
  morceaux.forEach((t, i) => {
    if (i === 0) s = t;
    else if (/['’]$/.test(morceaux[i - 1]) || /^[-.,]/.test(t)) s += t;
    else s += ' ' + t;
  });
  return s;
}

// La phrase complète et juste, à montrer et à faire entendre après la réponse.
export function phraseJuste(item) {
  if (item.ok) return item.ok;
  if (item.type === 'faute') {
    if (!item.x) return item.p;
    const mots = item.p.split(' ');
    const i = mots.findIndex((m) => nu(m) === item.x);
    if (i < 0) return item.p;
    if (item.c === '') mots.splice(i, 1);
    else mots[i] = mots[i].replace(item.x, item.c);
    return mots.join(' ');
  }
  if (item.type === 'ordre') return coller(item.w) + (item.fin || '.');
  if (item.q && TROU.test(item.q)) return item.q.replace(TROU, item.o[0]);
  if (item.ex) return item.ex;
  // Une réponse qui est une phrase entière (elle finit par un point) mérite d'être relue et écoutée.
  if (/[.!?…]$/.test(item.o[0])) return item.o[0];
  return null;
}

function enonce(item, rempli) {
  const p = h('p.enonce');
  const parts = item.q.split(TROU);
  parts.forEach((part, i) => {
    if (part) p.append(h('span', { rich: part }));
    if (i < parts.length - 1) {
      p.append(rempli ? h('b.trou.rempli', item.o[0]) : h('span.trou', { 'aria-label': 'mot manquant' }, ' '));
    }
  });
  return p;
}

// Monte la question dans `zone`. Le bouton d'action (Valider puis Suivant) va dans `barre`.
// `fin({ ok, choix })` est appelé quand elle passe à la suite.
export function monterQuestion(zone, barre, item, { fin, verdict, dernier = false } = {}) {
  taire();
  clear(zone);
  clear(barre);
  let termine = false;

  const racine = h('article.question');
  racine.append(h('p.rubrique', item.ctx ? item.ctx.titre : CATEGORIES[item.k] || ''));
  if (item.ctx) racine.append(h('p.contexte', item.ctx.intro));
  if (item.dit) {
    racine.append(
      h('div.bulle', item.qui && h('span.qui', item.qui), h('p.dit', { rich: item.dit }), boutonEcouter(item.dit)),
    );
  }

  const valider = h('button.btn.primaire', { type: 'button', disabled: true }, 'Valider');
  barre.append(valider);

  function reveler(ok, choix, remarque) {
    termine = true;
    if (verdict) verdict(ok);
    const juste = phraseJuste(item);
    const panneau = h(
      'section.correction' + (ok ? '.ok' : '.ko'),
      { 'aria-live': 'polite' },
      h('p.verdict.cursive', pickOne(ok ? JUSTE : FAUX)),
      remarque && h('p.remarque', remarque),
      juste && h('div.phrase-juste', h('p', { rich: juste }), boutonEcouter(juste, 'Écouter la phrase')),
      h('p.explication', { rich: item.e }),
      item.t && h('p.astuce', h('span.astuce-icone', { svg: icone('astuce', 20) }), h('span', { rich: item.t })),
    );
    racine.append(panneau);
    clear(barre);
    const suite = h('button.btn.primaire', { type: 'button' }, dernier ? 'Terminer' : 'Suivant');
    suite.addEventListener('click', () => fin({ ok, choix }), { once: true });
    barre.append(suite);
    if (ok) sonJuste();
    requestAnimationFrame(() => {
      panneau.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
      suite.focus({ preventScroll: true });
    });
  }

  /* ----- Choix multiple ----- */
  if (item.type === 'qcm') {
    const corps = enonce(item, false);
    racine.append(corps);
    const options = shuffle(item.o.map((t, i) => ({ t, juste: i === 0 })));
    let choisie = null;
    const liste = h('div.options', { role: 'radiogroup', 'aria-label': 'Réponses possibles' });
    options.forEach((opt) => {
      opt.el = h(
        'button.option',
        { type: 'button', role: 'radio', 'aria-checked': 'false' },
        h('span.case', { svg: icone('oui', 18) }),
        h('span.texte', { rich: opt.t }),
      );
      opt.el.addEventListener('click', () => {
        if (termine) return;
        choisie = opt;
        options.forEach((o) => {
          o.el.classList.toggle('choisie', o === opt);
          o.el.setAttribute('aria-checked', o === opt ? 'true' : 'false');
        });
        valider.disabled = false;
      });
      liste.append(opt.el);
    });
    racine.append(liste);
    valider.addEventListener('click', () => {
      if (!choisie || termine) return;
      options.forEach((o) => {
        o.el.disabled = true;
        if (o.juste) o.el.classList.add('juste');
        else if (o === choisie) {
          o.el.classList.add('fausse');
          o.el.querySelector('.case').innerHTML = icone('non', 18);
        }
      });
      if (TROU.test(item.q)) corps.replaceWith(enonce(item, true));
      reveler(choisie.juste, choisie.t);
    });
  }

  /* ----- Trouve la faute ----- */
  if (item.type === 'faute') {
    racine.append(h('p.consigne', 'Touche le mot mal écrit. Si tout est juste, choisis « Pas de faute ».'));
    const mots = item.p.split(' ');
    const cible = item.x ? mots.findIndex((m) => nu(m) === item.x) : -1;
    let choix = null; // index du mot, ou -1 pour « pas de faute »
    const phrase = h('p.phrase-mots');
    const boutons = [];
    const marquer = () => {
      boutons.forEach((b) => b.el.classList.toggle('choisie', b.i === choix));
      aucune.classList.toggle('choisie', choix === -1);
      valider.disabled = choix === null;
    };
    mots.forEach((m, i) => {
      if (!estMot(m)) {
        phrase.append(h('span.ponct', m), ' ');
        return;
      }
      const el = h('button.mot', { type: 'button' }, m);
      el.addEventListener('click', () => {
        if (termine) return;
        choix = i;
        marquer();
      });
      boutons.push({ el, i });
      phrase.append(el, ' ');
    });
    const aucune = h('button.option.aucune', { type: 'button' }, h('span.case', { svg: icone('oui', 18) }), h('span.texte', 'Pas de faute'));
    aucune.addEventListener('click', () => {
      if (termine) return;
      choix = -1;
      marquer();
    });
    racine.append(phrase, aucune);
    valider.addEventListener('click', () => {
      if (choix === null || termine) return;
      const ok = choix === cible;
      boutons.forEach((b) => {
        b.el.disabled = true;
        if (b.i === cible) b.el.classList.add('erreur');
        else if (b.i === choix) b.el.classList.add('fausse');
      });
      aucune.disabled = true;
      if (cible === -1) aucune.classList.add('juste');
      else if (choix === -1) aucune.classList.add('fausse');
      const remarque =
        cible === -1
          ? 'Cette phrase est correcte.'
          : item.c === ''
            ? `Il faut enlever « ${item.x} ».`
            : `Il faut écrire « ${item.c} », et non « ${item.x} ».`;
      reveler(ok, choix === -1 ? 'Pas de faute' : nu(mots[choix]), remarque);
    });
  }

  /* ----- Dans l'ordre ----- */
  if (item.type === 'ordre') {
    racine.append(h('p.consigne', item.q || "Remets les mots dans l'ordre. Touche-les un par un."));
    const bons = item.w;
    let melange = shuffle(bons.map((t, i) => ({ t, i })));
    if (melange.every((m, i) => m.t === bons[i])) melange = melange.reverse();
    const places = [];
    const ligne = h('div.ligne-reponse', { 'aria-label': 'Ta phrase' });
    const reserve = h('div.reserve', { 'aria-label': 'Mots à placer' });
    const dessiner = () => {
      clear(ligne);
      clear(reserve);
      if (!places.length) ligne.append(h('span.vide', 'Ta phrase apparaîtra ici.'));
      places.forEach((m) => {
        const b = h('button.jeton.place', { type: 'button' }, m.t);
        b.addEventListener('click', () => {
          if (termine) return;
          places.splice(places.indexOf(m), 1);
          dessiner();
        });
        ligne.append(b);
      });
      melange
        .filter((m) => !places.includes(m))
        .forEach((m) => {
          const b = h('button.jeton', { type: 'button' }, m.t);
          b.addEventListener('click', () => {
            if (termine) return;
            places.push(m);
            dessiner();
          });
          reserve.append(b);
        });
      valider.disabled = places.length !== bons.length;
    };
    dessiner();
    racine.append(ligne, reserve);
    valider.addEventListener('click', () => {
      if (places.length !== bons.length || termine) return;
      const essai = places.map((m) => m.t).join(' ');
      const ok = essai === bons.join(' ') || (item.alt || []).some((a) => a.join(' ') === essai);
      ligne.classList.add(ok ? 'juste' : 'fausse');
      [...ligne.children, ...reserve.children].forEach((b) => (b.disabled = true));
      reveler(ok, typo(coller(places.map((m) => m.t))));
    });
  }

  zone.append(racine);
  return racine;
}
