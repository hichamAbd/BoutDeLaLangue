// Simule plusieurs mois de défis du jour pour vérifier le moteur : pas de répétition tant qu'il reste du neuf,
// retour des questions manquées, série, bons points.   Usage : node tools/simulation.mjs [jours]
globalThis.location = { search: '', hash: '', pathname: '/' };
const { defiDuJour, questionsDuDefi, repondreDefi, terminerDefi, serie, imagesGagnees } = await import('../js/moteur.js');
const etat = await import('../js/etat.js');
const { parId, bassins, scenes } = await import('../js/banque.js');

etat.charger();
const JOURS = Number(process.argv[2] || 150);
const debut = new Date(2026, 10, 17);
const vus = new Map();
let premiereRepetition = null;
let rattrapages = 0;
let hasard = 12345;
const alea = () => ((hasard = (hasard * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const parCategorie = {};

for (let j = 0; j < JOURS; j++) {
  const d = new Date(debut.getFullYear(), debut.getMonth(), debut.getDate() + j);
  const cle = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  globalThis.location.search = `?jour=${cle}`;
  if (alea() < 0.08) continue; // un jour manqué de temps en temps
  const defi = defiDuJour();
  const items = questionsDuDefi(defi);
  if (items.length < 7) throw new Error(`jour ${cle} : seulement ${items.length} questions`);
  if (new Set(items.map((i) => i.id)).size !== items.length) throw new Error(`jour ${cle} : question en double dans le défi`);
  items.forEach((it, n) => {
    const bonus = n >= defi.ids.length;
    if (bonus) rattrapages += 1;
    else {
      if (vus.has(it.id) && premiereRepetition === null) premiereRepetition = { jour: j + 1, k: it.k };
      if (vus.has(it.id) && !(it.k in parCategorie)) parCategorie[it.k] = j + 1;
      vus.set(it.id, j);
    }
    repondreDefi(it, alea() < 0.75);
  });
  const r = terminerDefi();
  if (r.n > r.t) throw new Error('score impossible');
}
const s = etat.get();
console.log(`${JOURS} jours simulés, ${Object.keys(s.jours).length} pages faites.`);
console.log(`Questions différentes vues dans les défis : ${vus.size} sur ${parId.size - (bassins.tac?.length || 0) - (bassins.mot?.length || 0) - (bassins.fete?.length || 0)} disponibles (hors jeux).`);
console.log(`Première répétition (hors rattrapage) : ${premiereRepetition ? `jour ${premiereRepetition.jour}, catégorie ${premiereRepetition.k}` : 'aucune'}.`);
console.log('Premier jour de répétition par catégorie :', JSON.stringify(parCategorie));
console.log(`Questions de rattrapage servies : ${rattrapages}. Encore en attente : ${Object.keys(s.revoir).length}.`);
console.log(`Série à la fin : ${serie()} jours. Bons points : ${s.points}. Images gagnées : ${imagesGagnees()}. Scènes : ${scenes.length}.`);
