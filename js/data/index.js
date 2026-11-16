// La liste de tous les paquets de contenu.
// Pour ajouter du contenu (rafraîchissement mensuel) : créer js/data/paquets/AAAA-MM.js,
// l'importer ici, l'ajouter à la fin de PAQUETS, puis l'ajouter à FICHIERS dans sw.js et augmenter VERSION.
// Un paquet est un objet { conj: [...], gram: [...], sit: [...], tac: [...], mot: [...], … } ; toutes les clés sont facultatives.

import conj from './conjugaison.js';
import gram from './grammaire.js';
import orth from './orthographe.js';
import voc from './vocabulaire.js';
import fam from './familier.js';
import usage from './usage.js';
import oral from './oral.js';
import expr from './expressions.js';
import faute from './fautes.js';
import ordre from './ordre.js';
import sit from './situations.js';
import tac from './tac.js';
import mot from './mots.js';
import fete from './fete.js';

export const PAQUETS = [{ conj, gram, orth, voc, fam, usage, oral, expr, faute, ordre, sit, tac, mot, fete }];
