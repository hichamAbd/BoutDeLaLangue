// La voix du cahier : c'est son fils qui parle. Il la tutoie et l'appelle Mama.
// Elle est au féminin (« prête », « venue »), lui au masculin (« fier »).

export const NOM = 'Mama';

// Suite de « Bonjour Mama, » tant que le défi du jour n'est pas commencé.
export const ACCUEIL = [
  'à mon tour de te faire réviser.',
  "ton défi du jour t'attend.",
  'cinq minutes pour toi, rien que pour toi.',
  "on réveille quelques mots aujourd'hui ?",
  "j'ai glissé un piège dans le défi. Tu vas le repérer tout de suite.",
  'les mots sont là. On va juste les chercher.',
  'prête pour ta petite page du jour ?',
  'installe-toi, ça ne prend que cinq minutes.',
  "je parie sur un sans-faute aujourd'hui.",
  'une page par jour, et les mots reviennent tout seuls.',
  'pas de note, pas de chrono. Juste toi et tes mots.',
  'tu vas voir, tu en sais plus que tu ne crois.',
  "aujourd'hui, on fait travailler la mémoire en douceur.",
  "une boisson chaude, ton cahier, et c'est parti.",
  "je t'ai préparé de quoi hésiter un peu.",
  "même ceux qui parlent français tous les jours hésitent sur celles d'aujourd'hui.",
  "ton français n'est pas parti. Il attend juste qu'on l'appelle.",
  "un peu chaque jour, c'est comme ça que ça revient.",
  'allez, on ouvre le cahier ?',
  "j'ai hâte de voir ta page d'aujourd'hui.",
  'tu connais déjà les réponses. Il faut juste aller les chercher.',
  'sept questions, et après je te laisse tranquille.',
  "c'est l'heure de ta page. Enfin, quand tu veux.",
  'prends ton temps. Personne ne regarde par-dessus ton épaule.',
  "chaque mot retrouvé, c'est un mot de plus pour la prochaine conversation.",
  "aujourd'hui encore, je suis sûr que tu vas m'étonner.",
  'la page du jour est prête. Elle est belle, tu vas voir.',
  'on y va tranquillement, comme toujours.',
  "j'ai pensé à toi en préparant celle-là.",
  'ton cahier a une nouvelle page.',
  'cinq minutes de français, et la journée est gagnée.',
  "tu me diras si c'était trop facile.",
  'rappelle-toi : se tromper, ici, ça ne coûte rien.',
  "les mots, c'est comme le vélo. Ça ne s'oublie pas.",
  "aujourd'hui, une situation de tous les jours et quelques pièges.",
  'je suis content que tu sois là.',
  "un mot retrouvé, c'est un mot gagné.",
  'même les mots les plus têtus finissent par revenir.',
  "aujourd'hui, les pièges sont bien cachés. À toi de les trouver.",
];

// Défi commencé mais pas fini.
export const ACCUEIL_EN_COURS = [
  'on reprend là où tu t\'étais arrêtée ?',
  'ta page du jour est commencée. On la termine ?',
  'il te reste quelques questions. Rien ne presse.',
];

// Défi du jour terminé.
export const ACCUEIL_FINI = [
  "c'est fait pour aujourd'hui. À demain !",
  'ta page du jour est tamponnée. Bravo.',
  "tu as fait ta part aujourd'hui. Repose-toi, ou joue encore un peu.",
  'page terminée. Je suis fier de toi.',
  'à demain pour une nouvelle page.',
  "c'est dans la poche pour aujourd'hui.",
  'bien joué. Le cahier se referme, sauf si tu veux jouer.',
];

export const SAISON_DEBUT = {
  printemps: "c'est le printemps. On aère le cahier.",
  ete: "c'est l'été. Même en vacances, cinq minutes, ça se trouve.",
  automne: "c'est l'automne. La saison parfaite pour ouvrir un cahier.",
  hiver: "c'est l'hiver. Un cahier, une couverture, et on est bien.",
};

export const MOIS_ANNIV = [
  "c'est ton mois. Le cahier est en fête.",
  'tout le mois, les guirlandes sont pour toi.',
  'ce mois-ci, chaque page est une petite fête.',
  "c'est ton mois, alors j'ai sorti les fanions.",
];

// Verdicts après une réponse (en écriture cursive).
export const JUSTE = [
  'Bien vu !', 'Exactement.', 'Tu vois, tu le savais.', 'Sans hésiter !', 'Bravo Mama !', 'Parfait.',
  "C'est ça !", 'Et voilà.', 'Impeccable.', 'Dans le mille.', 'Rien à redire.', "Tu n'as rien perdu.",
  "J'en étais sûr.", 'Bien joué.', "Ça, c'est ma mère.", 'Chapeau !', 'Tout juste.', 'Facile pour toi.',
  "Tu m'impressionnes.", 'Sans faute.', 'Bonne réponse.', 'Oui !', 'Tu vois bien.', 'Joli.',
  'En plein dans le mille.', 'Trop forte.', 'Exact.', "C'est tout à fait ça.", 'Bien répondu.', 'Tu gères.',
];

export const FAUX = [
  'Presque.', 'Pas tout à fait.', 'Celle-là piège tout le monde.', 'Pas grave, regarde.',
  'On la reverra, promis.', "Même moi, j'hésite sur celle-là.", 'Aïe, le piège.', 'Raté de peu.',
  "C'est fait pour ça, un cahier.", 'Tu la retiendras, celle-là.', 'Bien tenté.',
  'Classique. Beaucoup de gens se trompent.', "Ce n'est rien. Lis la suite.", 'Pas cette fois.',
  "C'était vicieux, je l'avoue.", 'Elle était difficile.', 'On apprend surtout comme ça.',
  'Ne t\'en fais pas.', 'La prochaine fois, tu l\'auras.', 'Celle-là, je te la repose bientôt.',
];

// Titre de la page de résultat, selon le nombre de bonnes réponses sur le total.
export function bilan(n, t) {
  const r = t ? n / t : 0;
  if (r === 1) return ['Sans faute, Mama !', 'Tout juste. Chapeau.', 'Parfait. Je suis fier de toi.', 'Rien à corriger !'];
  if (r >= 0.7) return ['Très belle page.', 'Presque parfait.', 'Bravo Mama.', 'Du beau travail.'];
  if (r >= 0.4) return ['Bien joué.', "C'est une bonne page.", 'Pas mal du tout.'];
  return ['Journée à pièges.', 'Page difficile, bravo de l\'avoir finie.', 'Demain, ça ira mieux.'];
}

export function bilanSuite(n, t) {
  const r = t ? n / t : 0;
  if (r === 1) return 'Pas une seule erreur. Les mots sont bien là.';
  if (r >= 0.7) return 'Les mots reviennent, tu le vois bien.';
  if (r >= 0.4) return 'Celles que tu as manquées, je te les reposerai. Elles finiront par rester.';
  return "Ce qui compte, c'est d'être venue. Les questions manquées reviendront, et tu les auras.";
}

// Messages pour les séries de jours.
export const PALIERS = {
  3: 'Trois jours. Le pli est pris.',
  7: 'Une semaine entière. Bravo Mama.',
  14: 'Deux semaines. Tu ne lâches rien.',
  21: 'Trois semaines. C\'est devenu ton rendez-vous.',
  30: 'Un mois. Tu te rends compte ?',
  50: 'Cinquante jours. Je suis fier de toi.',
  75: 'Soixante-quinze jours. Quelle constance.',
  100: 'Cent jours. Cent !',
  150: 'Cent cinquante jours. Tu es incroyable.',
  200: 'Deux cents jours. Chapeau bas.',
  300: 'Trois cents jours. Presque une année.',
  365: 'Un an. Je n\'ai plus de mots. Toi, si.',
};

export const CATEGORIES = {
  conj: 'Conjugaison',
  gram: 'Grammaire',
  orth: 'Orthographe',
  voc: 'Vocabulaire',
  fam: 'Français de tous les jours',
  usage: 'Bon usage',
  oral: "À l'oral",
  expr: 'Expressions',
  faute: 'Trouve la faute',
  ordre: "Dans l'ordre",
  sit: 'En situation',
  tac: 'Du tac au tac',
  fete: "Page d'anniversaire",
};

// Catégories proposées dans « Par thème ».
export const THEMES = ['conj', 'gram', 'orth', 'voc', 'expr', 'fam', 'usage', 'oral', 'ordre'];

export const INTRO_THEMES = {
  conj: 'Subjonctif, conditionnel, impératif : les formes qui font hésiter.',
  gram: 'Accords, pronoms, prépositions.',
  orth: 'Les mots qui se ressemblent et ceux qu\'on écrit de travers.',
  voc: 'Le mot juste, le bon genre, le bon pluriel.',
  expr: 'Les expressions imagées et ce qu\'elles veulent dire.',
  fam: 'Ce qu\'on entend dans la rue, au travail, en famille.',
  usage: 'Les formules et les politesses de la vie courante.',
  oral: 'Liaisons, lettres muettes, prononciations piégeuses.',
  ordre: 'Remettre à leur place les petits mots d\'une phrase : le, lui, en, y, ne, pas.',
};
