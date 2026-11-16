// Tous les dessins de l'appli, tracés pour elle : icônes, images à collectionner, décors de saison.
// Ce sont des chaînes SVG fixes (jamais de texte saisi par quelqu'un).

const TRAIT = 'fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"';

const ICONES = {
  jour: '<path d="M5 7.5A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18.5z"/><path d="M5 10.5h14M9 4v3.5M15 4v3.5M9.3 15.2l1.9 1.9 3.6-4"/>',
  jeux: '<rect x="4.5" y="4.5" width="15" height="15" rx="3"/><circle cx="9" cy="9" r="1.1" fill="currentColor" stroke="none"/><circle cx="15" cy="15" r="1.1" fill="currentColor" stroke="none"/><circle cx="15" cy="9" r="1.1" fill="currentColor" stroke="none"/><circle cx="9" cy="15" r="1.1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none"/>',
  cahier: '<path d="M7.5 4H17a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 17 20H7.5z"/><path d="M7.5 4v16M5 8h2.5M5 12h2.5M5 16h2.5M11 9h4.5M11 12.5h3"/>',
  plus: '<circle cx="5.5" cy="12" r="1.7" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none"/><circle cx="18.5" cy="12" r="1.7" fill="currentColor" stroke="none"/>',
  son: '<path d="M4 9.5v5h3.5L12 18V6L7.5 9.5z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>',
  oui: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  non: '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
  fermer: '<path d="M6 6l12 12M18 6L6 18"/>',
  suite: '<path d="M9 5l7 7-7 7"/>',
  retour: '<path d="M15 5l-7 7 7 7"/>',
  astuce: '<path d="M9.5 17.5h5M10.5 20.5h3M8.3 14.2a6 6 0 1 1 7.4 0c-.5.4-.7 1-.7 1.6V16H9v-.2c0-.6-.2-1.2-.7-1.6z"/>',
  reglages: '<path d="M5 7h7M16 7h3M5 12h1M10 12h9M5 17h7M16 17h3"/><circle cx="14" cy="7" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="14" cy="17" r="2"/>',
  lien: '<path d="M10 6H6.5A1.5 1.5 0 0 0 5 7.5v10A1.5 1.5 0 0 0 6.5 19h10a1.5 1.5 0 0 0 1.5-1.5V14M13 5h6v6M19 5l-8.5 8.5"/>',
  antiseche: '<path d="M6 4h8l4 4v12H6z"/><path d="M14 4v4h4M9 12h6M9 15.5h4"/>',
  eclair: '<path d="M13 3L5 13.5h6L10 21l8-10.5h-6z"/>',
  bulle: '<path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h11A1.5 1.5 0 0 1 19 6.5v8a1.5 1.5 0 0 1-1.5 1.5H11l-4 3.5V16h-.5A1.5 1.5 0 0 1 5 14.5z"/><circle cx="9" cy="10.5" r=".9" fill="currentColor" stroke="none"/><circle cx="12" cy="10.5" r=".9" fill="currentColor" stroke="none"/><circle cx="15" cy="10.5" r=".9" fill="currentColor" stroke="none"/>',
  loupe: '<circle cx="10.5" cy="10.5" r="5.5"/><path d="M15 15l4.5 4.5"/>',
  revoir: '<path d="M5 11a7 7 0 0 1 12.2-4.2L19 8.5M19 4.5v4h-4M19 13a7 7 0 0 1-12.2 4.2L5 15.5M5 19.5v-4h4"/>',
  liste: '<path d="M9 7h10M9 12h10M9 17h10"/><circle cx="5.2" cy="7" r="1" fill="currentColor" stroke="none"/><circle cx="5.2" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="5.2" cy="17" r="1" fill="currentColor" stroke="none"/>',
  etoile: '<path d="M12 4l2.4 5 5.4.7-4 3.8 1 5.4-4.8-2.6-4.8 2.6 1-5.4-4-3.8 5.4-.7z"/>',
  fichier: '<path d="M12 4v10M8 10.5l4 4 4-4M5 19.5h14"/>',
  ouvrir: '<path d="M12 15V5M8 8.5l4-4 4 4M5 19.5h14"/>',
  corbeille: '<path d="M5 7h14M10 7V5h4v2M7 7l1 12.5h8L17 7M10 11v5M14 11v5"/>',
  coeur: '<path d="M12 19.5C5 14.6 4 11.2 4 8.8a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 2.4-1 5.8-8 10.7z"/>',
  info: '<circle cx="12" cy="12" r="8"/><path d="M12 11v5M12 8v.2"/>',
  sablier: '<path d="M7 4h10M7 20h10M8 4c0 4 4 5 4 8s-4 4-4 8M16 4c0 4-4 5-4 8s4 4 4 8"/>',
};

export function icone(nom, taille = 24) {
  return `<svg viewBox="0 0 24 24" width="${taille}" height="${taille}" ${TRAIT} stroke-width="1.8" aria-hidden="true" focusable="false">${ICONES[nom] || ''}</svg>`;
}

/* ---------- Images à collectionner : un dessin, une expression ---------- */

export const IMAGES = [
  { id: 'chat', nom: 'Le chat', expr: 'Donner sa langue au chat', sens: "Renoncer à deviner et demander la réponse.", d: '<path d="M17 27l1-15 12 8M47 27l-1-15-12 8"/><circle cx="32" cy="37" r="18"/><path d="M25 34v3M39 34v3M29 42l3 2.5 3-2.5M9 37l8 1M9 43l8-1M55 37l-8 1M55 43l-8-1"/>' },
  { id: 'tasse', nom: 'La tasse', expr: "Ce n'est pas ma tasse de thé", sens: "Ce n'est pas ce que je préfère.", d: '<path d="M14 26h30v14a12 12 0 0 1-12 12h-6a12 12 0 0 1-12-12z"/><path d="M44 30h4a6 6 0 0 1 0 12h-4.5M22 18c0-3 3-3 3-6M33 18c0-3 3-3 3-6"/>' },
  { id: 'lettre', nom: 'La lettre', expr: 'Passer comme une lettre à la poste', sens: 'Se passer très facilement, sans la moindre difficulté.', d: '<rect x="8" y="16" width="48" height="32" rx="3"/><path d="M8 19l24 17 24-17"/>' },
  { id: 'cle', nom: 'La clé', expr: 'Prendre la clé des champs', sens: "S'en aller, s'échapper pour être libre.", d: '<circle cx="20" cy="24" r="10"/><circle cx="18" cy="22" r="2.5"/><path d="M27.5 31.5L50 54M42 46l5-5M47 51l4-4"/>' },
  { id: 'parapluie', nom: 'Le parapluie', expr: 'Ouvrir le parapluie', sens: "Se protéger d'avance pour ne pas être tenu responsable.", d: '<path d="M32 12a22 22 0 0 1 22 22H10a22 22 0 0 1 22-22zM32 34v14a5 5 0 0 1-10 0M32 8v4"/>' },
  { id: 'ampoule', nom: "L'ampoule", expr: 'Avoir une idée lumineuse', sens: 'Avoir une très bonne idée.', d: '<path d="M24 46h16M27 53h10M21 38a16 16 0 1 1 22 0c-2 2-3 4-3 8H24c0-4-1-6-3-8z"/>' },
  { id: 'livre', nom: 'Le livre', expr: 'Parler comme un livre', sens: 'Parler très bien, avec beaucoup de savoir.', d: '<path d="M32 18c-6-4-14-4-22-2v32c8-2 16-2 22 2 6-4 14-4 22-2V16c-8-2-16-2-22 2zM32 18v32"/>' },
  { id: 'panier', nom: 'Le panier', expr: 'Mettre tous ses œufs dans le même panier', sens: 'Tout miser sur une seule chose, au risque de tout perdre.', d: '<path d="M10 28h44l-5 24H15zM22 28l8-14M42 28l-8-14M24 36v8M32 36v8M40 36v8"/>' },
  { id: 'etoile', nom: "L'étoile", expr: 'Dormir à la belle étoile', sens: 'Dormir dehors, en plein air.', d: '<path d="M32 8l6.5 14.5 15.5 2-11.5 10.5 3 15.5L32 43l-13.5 7.5 3-15.5L10 24.5l15.5-2z"/>' },
  { id: 'pomme', nom: 'La pomme', expr: 'Tomber dans les pommes', sens: "S'évanouir.", d: '<path d="M32 22c-8-6-20-2-20 12 0 12 8 20 14 20 3 0 4-2 6-2s3 2 6 2c6 0 14-8 14-20 0-14-12-18-20-12zM32 22c0-5 2-9 6-12"/>' },
  { id: 'velo', nom: 'Le vélo', expr: 'Avoir un petit vélo dans la tête', sens: 'Être un peu fou, avoir des idées farfelues (familier).', d: '<circle cx="16" cy="42" r="10"/><circle cx="48" cy="42" r="10"/><path d="M16 42l10-18h16l6 18M26 24l10 18H16M42 24l-6 18M22 20h8M40 18h6"/>' },
  { id: 'horloge', nom: "L'horloge", expr: 'Être réglé comme une horloge', sens: 'Avoir des habitudes très régulières.', d: '<circle cx="32" cy="32" r="22"/><path d="M32 18v14l9 6"/>' },
  { id: 'baguette', nom: 'La baguette', expr: "Mener quelqu'un à la baguette", sens: 'Le diriger avec beaucoup d\'autorité.', d: '<path d="M14 50L46 12a6 6 0 0 1 8 6L20 54a5 5 0 0 1-6-4zM26 36l6 4M33 28l6 4M40 20l6 4"/>' },
  { id: 'maison', nom: 'La maison', expr: "C'est gros comme une maison", sens: "C'est très évident, cela saute aux yeux.", d: '<path d="M10 30l22-18 22 18M16 26v26h32V26M27 52V38h10v14"/>' },
  { id: 'plume', nom: 'Le stylo plume', expr: 'Prendre sa plus belle plume', sens: 'Écrire une lettre avec beaucoup de soin.', d: '<path d="M44 8l12 12-26 26-14 4 4-14zM38 14l12 12M16 50l9-9"/>' },
  { id: 'lunettes', nom: 'Les lunettes', expr: 'Ne pas avoir les yeux en face des trous', sens: 'Être mal réveillé, ne pas voir ce qui est sous son nez (familier).', d: '<circle cx="20" cy="36" r="9"/><circle cx="44" cy="36" r="9"/><path d="M29 35c2-2 4-2 6 0M11 33l-3-9M53 33l3-9"/>' },
  { id: 'poisson', nom: 'Le poisson', expr: "Être comme un poisson dans l'eau", sens: 'Être parfaitement à l\'aise.', d: '<path d="M10 32c8-12 24-14 36-4l8-8v24l-8-8c-12 10-28 8-36-4z"/><circle cx="22" cy="29" r="2"/>' },
  { id: 'chapeau', nom: 'Le chapeau', expr: "Tirer son chapeau à quelqu'un", sens: 'Lui dire son admiration. On dit aussi : « Chapeau ! »', d: '<path d="M8 44c8 4 40 4 48 0M18 43V26a14 14 0 0 1 28 0v17M18 35c8 3 20 3 28 0"/>' },
  { id: 'arbre', nom: "L'arbre", expr: "L'arbre qui cache la forêt", sens: "Un détail qui empêche de voir l'ensemble.", d: '<circle cx="32" cy="24" r="16"/><path d="M32 56V32M32 44l8-8M32 40l-6-6"/>' },
  { id: 'fromage', nom: 'Le fromage', expr: 'En faire tout un fromage', sens: "Donner beaucoup trop d'importance à une petite chose.", d: '<path d="M8 44L50 18l6 26zM8 44h48v8H8z"/><circle cx="30" cy="37" r="3"/><circle cx="44" cy="34" r="2"/>' },
  { id: 'cloche', nom: 'La cloche', expr: 'Entendre un autre son de cloche', sens: 'Entendre une version différente de la même histoire.', d: '<path d="M16 44V30a16 16 0 0 1 32 0v14l4 5H12zM27 53a5 5 0 0 0 10 0M32 10v4"/>' },
  { id: 'valise', nom: 'La valise', expr: 'Avoir des valises sous les yeux', sens: 'Avoir de gros cernes, être très fatigué (familier).', d: '<rect x="10" y="22" width="44" height="30" rx="4"/><path d="M24 22v-6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6M10 34h44"/>' },
  { id: 'medaille', nom: 'La médaille', expr: 'Le revers de la médaille', sens: "Le mauvais côté d'une bonne chose.", d: '<circle cx="32" cy="42" r="13"/><path d="M26 30L18 8h10l4 9 4-9h10l-8 22M32 36l1.8 3.8 4.2.5-3.1 2.9.8 4.1-3.7-2-3.7 2 .8-4.1-3.1-2.9 4.2-.5z"/>' },
  { id: 'soleil', nom: 'Le soleil', expr: 'Se faire une place au soleil', sens: 'Réussir, obtenir une bonne situation.', d: '<circle cx="32" cy="32" r="11"/><path d="M32 8v7M32 49v7M8 32h7M49 32h7M15 15l5 5M44 44l5 5M49 15l-5 5M20 44l-5 5"/>' },
  { id: 'feuille', nom: 'La feuille', expr: 'Trembler comme une feuille', sens: 'Trembler très fort, de peur ou de froid.', d: '<path d="M12 52C12 28 28 12 52 12c0 24-16 40-40 40zM12 52l26-26"/>' },
  { id: 'flocon', nom: 'Le flocon', expr: 'Fondre comme neige au soleil', sens: 'Disparaître très vite.', d: '<path d="M32 8v48M11 20l42 24M53 20L11 44M32 16l-5-5M32 16l5-5M32 48l-5 5M32 48l5 5"/>' },
  { id: 'averse', nom: "L'averse", expr: 'Ne pas être né de la dernière pluie', sens: "Avoir de l'expérience, ne pas se laisser tromper facilement.", d: '<path d="M20 38a9 9 0 0 1 1-18 13 13 0 0 1 25 3 8 8 0 0 1-1 15zM22 46l-3 7M32 46l-3 7M42 46l-3 7"/>' },
  { id: 'champignon', nom: 'Le champignon', expr: 'Pousser comme un champignon', sens: 'Grandir ou se développer très vite.', d: '<path d="M10 34a22 18 0 0 1 44 0zM26 34v14a6 6 0 0 0 12 0V34"/>' },
  { id: 'glace', nom: 'La glace', expr: 'Briser la glace', sens: 'Dissiper la gêne et lancer la conversation. Cette glace-là ne se mange pas !', d: '<path d="M20 30l12 26 12-26zM18 30a14 14 0 0 1 28 0z"/>' },
  { id: 'bonnet', nom: 'Le bonnet', expr: "C'est bonnet blanc et blanc bonnet", sens: "C'est exactement la même chose.", d: '<path d="M14 44a18 18 0 0 1 36 0zM10 44h44v8H10z"/><circle cx="32" cy="21" r="5"/>' },
  // Images de fête, gagnées le jour même.
  { id: 'gateau', nom: 'Le gâteau', special: true, expr: 'La cerise sur le gâteau', sens: 'Le petit plus qui rend une belle chose parfaite.', d: '<path d="M12 52V36h40v16zM12 44c5 4 8-4 13 0s8-4 14 0 8-4 13 0M22 36V27M32 36V27M42 36V27"/><path class="coloriage" d="M22 23c-2-3 0-4 0-6 2 2 2 4 0 6zM32 23c-2-3 0-4 0-6 2 2 2 4 0 6zM42 23c-2-3 0-4 0-6 2 2 2 4 0 6z"/>' },
  { id: 'coeur', nom: 'Le cœur', special: true, expr: 'Avoir le cœur sur la main', sens: 'Être très généreux.', d: '<path class="coloriage" d="M32 54C12 40 8 30 8 22a12 12 0 0 1 24-3 12 12 0 0 1 24 3c0 8-4 18-24 32z"/>' },
];

export const IMAGES_ORDINAIRES = IMAGES.filter((i) => !i.special);

export function image(img, taille = 64) {
  return `<svg viewBox="0 0 64 64" width="${taille}" height="${taille}" ${TRAIT} stroke-width="2.2" aria-hidden="true" focusable="false">${img.d}</svg>`;
}

/* ---------- Décors ---------- */

// Petit dessin dans le coin de la page, au crayon de couleur de la saison.
const SAISONS = {
  automne:
    '<g transform="translate(14 8) rotate(12)"><path d="M0 26C0 10 11 0 26 0c0 16-10 26-26 26zM0 26L16 10"/></g><g transform="translate(58 30) rotate(-28) scale(.72)"><path d="M0 26C0 10 11 0 26 0c0 16-10 26-26 26zM0 26L16 10"/></g><g transform="translate(34 50) rotate(40) scale(.5)"><path d="M0 26C0 10 11 0 26 0c0 16-10 26-26 26zM0 26L16 10"/></g>',
  hiver:
    '<g transform="translate(30 24)"><path d="M0-16V16M-14-8L14 8M14-8L-14 8M0-10l-4-4M0-10l4-4M0 10l-4 4M0 10l4 4"/></g><g transform="translate(70 46) scale(.6)"><path d="M0-16V16M-14-8L14 8M14-8L-14 8"/></g><g transform="translate(72 14) scale(.4)"><path d="M0-16V16M-14-8L14 8M14-8L-14 8"/></g>',
  printemps:
    '<path d="M22 70C38 54 46 34 46 8"/><path d="M38 46c-12-2-18-9-18-19 11 1 18 8 18 19zM45 28c9-3 15-10 16-20-10 1-16 9-16 20zM42 56c10 1 18-4 22-12-10-2-18 3-22 12z"/>',
  ete: '<circle cx="58" cy="26" r="13"/><path d="M58 4v5M58 43v5M36 26h5M75 26h5M42.5 10.5l3.5 3.5M70 38l3.5 3.5M73.500 10.500L70 14M46 38l-3.500 3.500M8 64c6-5 10-5 16 0s10 5 16 0 10-5 16 0"/>',
};

export function decorSaison(saison) {
  return `<svg class="decor-saison" viewBox="0 0 92 72" width="92" height="72" ${TRAIT} stroke-width="2" aria-hidden="true" focusable="false">${SAISONS[saison] || ''}</svg>`;
}

// Guirlande de fanions du mois d'anniversaire.
export function guirlande() {
  const points = [
    [21.6, 13.4], [55.8, 23.4], [90, 27.5], [124.2, 25.7], [158.4, 17.9],
    [201.6, 17.9], [235.8, 25.7], [270, 27.5], [304.2, 23.4], [338.4, 13.4],
  ];
  const fanions = points
    .map(([x, y], i) => `<path class="fanion f${(i % 5) + 1}" d="M${x - 11} ${y - 1}L${x + 11} ${y - 1}L${x} ${y + 23}z"/>`)
    .join('');
  return `<svg class="guirlande" viewBox="0 0 360 54" preserveAspectRatio="xMidYMin meet" aria-hidden="true" focusable="false">${fanions}<path class="ficelle" fill="none" stroke-linecap="round" d="M0 4Q90 48 180 10T360 4"/></svg>`;
}

// Tampon « VU » avec la date, comme sur une copie.
export function tampon(ligne) {
  return `<svg class="tampon-svg" viewBox="0 0 120 120" width="120" height="120" aria-hidden="true" focusable="false"><circle cx="60" cy="60" r="54" fill="none" stroke-width="4"/><circle cx="60" cy="60" r="45" fill="none" stroke-width="1.5"/><text x="60" y="66" text-anchor="middle" class="tampon-vu">VU</text><text x="60" y="88" text-anchor="middle" class="tampon-date">${ligne}</text></svg>`;
}

export function grandGateau() {
  return `<svg class="grand-dessin" viewBox="0 0 160 130" width="160" height="130" ${TRAIT} stroke-width="3" aria-hidden="true" focusable="false"><path d="M22 122V84h116v38zM22 102c12 9 19-9 31 0s19-9 31 0 19-9 31 0 15-6 23-3M38 84V58h84v26M38 70c10 7 16-7 26 0s16-7 26 0 16-7 26 0 4 2 6 2"/><path d="M56 58V42M80 58V42M104 58V42"/><path class="coloriage" d="M56 36c-4-6 0-8 0-12 4 4 4 8 0 12zM80 36c-4-6 0-8 0-12 4 4 4 8 0 12zM104 36c-4-6 0-8 0-12 4 4 4 8 0 12z"/></svg>`;
}

export function grandCoeur() {
  return `<svg class="grand-dessin" viewBox="0 0 160 130" width="160" height="130" ${TRAIT} stroke-width="3" aria-hidden="true" focusable="false"><path class="coloriage" d="M80 118C34 86 22 62 22 44a28 28 0 0 1 58-10 28 28 0 0 1 58 10c0 18-12 42-58 74z"/><path d="M84 121C40 90 26 66 25 47"/></svg>`;
}
