// Paquet de décembre 2026 : l'hiver, les fêtes de fin d'année, les vœux, et quelques pièges de toujours.
// Même forme que les fichiers de js/data : la première réponse de « o » est la bonne.

export default {
  sit: [
    {
      titre: "Au marché de Noël", intro: "Tu flânes entre les chalets illuminés.",
      qs: [
        { q: "Un bonnet en laine te plaît. Tu veux savoir s'il a été tricoté à la main, et pas à la machine. Tu demandes :", o: ["C'est fait main ?", "C'est fait maison ?", "C'est fait à main ?"], e: "*Fait main* se dit d'un objet fabriqué à la main, pas à la machine. *Fait maison* se dit surtout de la cuisine : une tarte faite maison." },
        { dit: "Les marrons chauds, c'est trois euros le cornet.", qui: "Le marchand", q: "Un cornet, c'est :", o: ["un petit sac de papier en forme de cône", "une petite boîte en carton", "une poignée prise à la main"], e: "Le *cornet* est un papier roulé en cône. On achète un cornet de marrons ou de frites, et l'on mange une glace en cornet." },
      ],
    },
    {
      titre: "La météo", intro: "Tu écoutes la météo à la radio.",
      qs: [
        { dit: "Vigilance orange neige et verglas sur une grande partie du pays.", qui: "La présentatrice", q: "Cela veut dire :", o: ["Soyez très prudents, le temps peut être dangereux.", "Le temps sera doux et ensoleillé.", "Toutes les routes sont fermées."], e: "Les couleurs de *vigilance* vont du vert au rouge, en passant par le jaune et l'orange. En *orange*, des phénomènes dangereux sont prévus : prudence !" },
        { dit: "Des chutes de neige sont attendues jusqu'en plaine.", qui: "La présentatrice", q: "« Jusqu'en plaine » veut dire :", o: ["même dans les régions basses, pas seulement en montagne", "seulement en haute montagne", "seulement dans les grandes villes"], e: "La *plaine* s'oppose à la montagne. Quand il neige jusqu'en plaine, il neige aussi en bas, pas seulement sur les hauteurs." },
      ],
    },
    {
      titre: "À la gare, un jour de neige", intro: "Une annonce résonne dans le hall.",
      qs: [
        { dit: "En raison des intempéries, le train de 18 heures est supprimé.", qui: "L'annonce", q: "« Les intempéries », ce sont :", o: ["le mauvais temps : neige, pluie, vent", "des travaux sur la voie", "un mouvement de grève"], e: "Les *intempéries* désignent le mauvais temps sous toutes ses formes. Le mot s'emploie presque toujours au pluriel." },
        { q: "« Le train est supprimé » veut dire :", o: ["Il ne partira pas du tout.", "Il partira plus tard.", "Il est complet."], e: "Un train *supprimé* ne circulera pas. Un train *retardé*, lui, partira, mais en retard." },
      ],
    },
    {
      titre: "Un gros rhume", intro: "Tu éternues depuis ce matin et tu as la tête lourde.",
      qs: [
        { q: "Tu n'arrives plus à respirer par le nez. Tu dis :", o: ["J'ai le nez bouché.", "J'ai le nez fermé.", "J'ai le nez rempli."], e: "On a le nez *bouché*, ou au contraire le nez *qui coule*. On dit aussi : j'ai le nez pris." },
        { dit: "Restez bien au chaud et gardez la chambre deux ou trois jours.", qui: "Le pharmacien", q: "« Garder la chambre » veut dire :", o: ["rester chez soi au repos, sans sortir", "ne pas aérer la chambre", "garder la même chambre à l'hôtel"], e: "*Garder la chambre*, c'est rester chez soi parce qu'on est malade. *Garder le lit*, c'est rester couché." },
      ],
    },
    {
      titre: "Le chauffage en panne", intro: "Il fait froid chez toi : les radiateurs restent glacés.",
      qs: [
        { q: "Tu appelles l'artisan qui répare le chauffage. C'est :", o: ["le chauffagiste", "le chauffeur", "le chaudronnier"], e: "Le *chauffagiste* installe et répare le chauffage. Le *chauffeur* conduit un véhicule." },
        { dit: "Je peux vous proposer un créneau jeudi, entre 14 et 16 heures.", qui: "La secrétaire", q: "Un « créneau », c'est :", o: ["une plage horaire disponible", "un rendez-vous annulé", "un tarif spécial"], e: "Un *créneau*, c'est un moment libre dans un emploi du temps. Et *faire un créneau*, c'est se garer entre deux voitures !" },
      ],
    },
    {
      titre: "Le calendrier des pompiers", intro: "On sonne : deux pompiers en uniforme, des calendriers à la main.",
      qs: [
        { dit: "Bonjour, madame ! On passe pour le calendrier.", qui: "Un pompier", q: "Ici, « on passe pour le calendrier » veut dire :", o: ["on vient vous proposer le calendrier", "on se fait passer pour des pompiers", "on a pris du retard sur le calendrier"], e: "Ici, *passer*, c'est faire une courte visite : on passe vous proposer le calendrier. Rien à voir avec *passer pour* quelqu'un, c'est-à-dire être pris pour lui : il passe pour un expert." },
        { dit: "Le montant est libre, c'est comme vous voulez.", qui: "Le pompier", q: "Cela veut dire :", o: ["Tu donnes la somme que tu veux.", "Le prix est écrit au dos.", "Il faut payer par carte."], e: "Un *montant libre*, c'est une somme que l'on choisit soi-même. Le calendrier est remis en remerciement d'un don." },
      ],
    },
    {
      titre: "La panne de courant", intro: "D'un coup, tout s'éteint chez toi.",
      qs: [
        { dit: "Ce n'est rien, les plombs ont sauté !", qui: "Ton voisin", q: "« Les plombs ont sauté » veut dire :", o: ["Le courant a été coupé par sécurité.", "Les tuyaux ont éclaté.", "Quelqu'un a volé les câbles."], e: "Les *plombs*, ce sont les fusibles. Quand on branche trop d'appareils à la fois, ils *sautent* et coupent le courant." },
        { dit: "Regarde le disjoncteur, il a dû sauter.", qui: "Ton voisin", q: "Le disjoncteur, c'est :", o: ["l'appareil qui coupe le courant en cas de problème", "le compteur qui mesure la consommation", "la prise de courant principale"], e: "Le *disjoncteur* coupe le courant tout seul en cas de surcharge. Pour rétablir l'électricité, on remonte sa manette." },
      ],
    },
    {
      titre: "Un service entre voisins", intro: "Ta voisine sonne, un saladier à la main.",
      qs: [
        { dit: "Tu pourrais me dépanner de deux œufs ? Je suis en plein gâteau !", qui: "Ta voisine", q: "« Me dépanner » veut dire ici :", o: ["me rendre service", "réparer quelque chose chez moi", "m'appeler un garagiste"], e: "Familièrement, *dépanner* quelqu'un, c'est le tirer d'embarras : tu peux me dépanner de dix euros ? Au sens propre, on dépanne une voiture ou une machine." },
        { dit: "Merci ! Je te les rends demain.", qui: "Ta voisine", q: "Tu ne veux rien en retour. Tu réponds :", o: ["Penses-tu, ce n'est rien !", "Pense à toi, ce n'est rien !", "Tu me les dois, ce n'est rien !"], e: "*Penses-tu !*, ou *pensez-vous !*, veut dire « pas du tout, voyons ». À l'écrit, *penses* garde son s devant *-tu*." },
      ],
    },
    {
      titre: "Les horaires des fêtes", intro: "Sur la porte de la médiathèque, une affichette.",
      qs: [
        { dit: "Fermeture exceptionnelle du 24 au 26 décembre inclus.", qui: "L'affichette", q: "La médiathèque sera donc fermée :", o: ["le 24, le 25 et le 26", "le 24 et le 25 seulement", "le 25 seulement"], e: "*Inclus* veut dire que le dernier jour fait partie de la fermeture : le 26 aussi, la médiathèque est fermée." },
        { dit: "Horaires réduits pendant les vacances scolaires.", qui: "L'affichette", q: "Cela veut dire :", o: ["Elle ouvre moins longtemps que d'habitude.", "Elle est fermée pendant les vacances.", "Les enfants paient moins cher."], e: "*Réduit* veut dire diminué : on ouvre plus tard ou on ferme plus tôt. Un *tarif réduit*, lui, est un prix plus bas." },
      ],
    },
    {
      titre: "Un jour férié", intro: "C'est le 1er janvier, et il te faut un médicament.",
      qs: [
        { q: "Ta pharmacie habituelle est fermée. Tu cherches :", o: ["la pharmacie de garde", "la pharmacie de fête", "la pharmacie de secours"], e: "La nuit, le dimanche et les jours fériés, des *pharmacies de garde* restent ouvertes à tour de rôle." },
        { q: "Le 1er janvier est un jour « férié ». Cela veut dire :", o: ["un jour de fête officielle, où la plupart des gens ne travaillent pas", "un jour où les magasins font des soldes", "un jour où l'on travaille seulement le matin"], e: "Un *jour férié* est un jour de fête officielle : le 1er janvier, le 1er mai, le 14 juillet… Les bureaux et beaucoup de magasins sont fermés." },
      ],
    },
    {
      titre: "À la librairie", intro: "Tu cherches un livre à offrir.",
      qs: [
        { dit: "Celui-là fait un malheur en ce moment !", qui: "Le libraire", q: "« Faire un malheur » veut dire ici :", o: ["avoir un très grand succès", "rendre les gens tristes", "causer un accident"], e: "Curieusement, *faire un malheur*, c'est remporter un grand succès. Mais *retiens-moi, ou je fais un malheur !* annonce plutôt une grosse colère." },
        { dit: "Je vous mets un ticket cadeau ?", qui: "Le libraire", q: "Un ticket cadeau, c'est :", o: ["un ticket sans le prix, pour pouvoir échanger le livre", "un bon de réduction pour un prochain achat", "un billet de loterie offert"], e: "Le *ticket cadeau* n'indique pas le prix. Si la personne a déjà le livre, elle peut l'échanger." },
      ],
    },
    {
      titre: "Un manteau d'hiver", intro: "Tu essaies un manteau bien chaud dans une boutique.",
      qs: [
        { dit: "Attention, ce modèle taille grand.", qui: "La vendeuse", q: "Cela veut dire :", o: ["Il vaut mieux prendre une taille en dessous.", "Il est fait pour les personnes grandes.", "Il est très long."], e: "Un vêtement qui *taille grand* est plus ample que la taille indiquée. S'il *taille petit*, on prend la taille au-dessus." },
        { dit: "Vous le gardez sur vous ?", qui: "La vendeuse", q: "Elle te demande si :", o: ["tu veux le porter tout de suite en sortant", "tu veux le faire retoucher", "tu veux le réserver pour plus tard"], e: "*Garder sur soi* : la vendeuse coupe l'étiquette, et l'on repart avec le manteau sur le dos." },
      ],
    },
    {
      titre: "Au pressing", intro: "Tu déposes une veste en laine qui a une tache.",
      qs: [
        { q: "L'étiquette de ta veste indique « nettoyage à sec ». Cela veut dire :", o: ["qu'on la nettoie avec un produit spécial, sans eau", "qu'on la sèche au soleil", "qu'on la lave à l'eau froide"], e: "Le *nettoyage à sec* se fait au pressing, avec un produit à la place de l'eau : le vêtement ne passe pas à l'eau." },
        { dit: "La tache, je ne vous garantis rien.", qui: "L'employée", q: "Elle veut dire :", o: ["Elle n'est pas sûre de pouvoir l'enlever.", "La tache ne se voit pas.", "Le nettoyage sera gratuit."], e: "*Je ne vous garantis rien* : elle fera de son mieux, sans pouvoir promettre le résultat." },
      ],
    },
    {
      titre: "Les soldes d'hiver", intro: "Fin janvier, les vitrines se couvrent d'étiquettes rouges.",
      qs: [
        { dit: "Dernière démarque : jusqu'à moins 70 % !", qui: "L'affiche", q: "« La dernière démarque », c'est :", o: ["la dernière baisse de prix des soldes", "la dernière marque à la mode", "la fin de la garantie"], e: "Pendant les soldes, les prix baissent en plusieurs fois : ce sont les *démarques*. La dernière est souvent la plus forte." },
        { dit: "Les articles soldés ne sont ni repris ni échangés.", qui: "La vendeuse", q: "Cela veut dire :", o: ["On ne peut ni les rendre ni les changer.", "On peut les échanger, mais pas se les faire rembourser.", "On peut les rendre pendant huit jours."], e: "*Ni… ni…* nie les deux à la fois : ni repris, ni échangés. Mieux vaut bien essayer avant d'acheter." },
      ],
    },
    {
      titre: "L'invitation du 31", intro: "Une amie t'appelle à la mi-décembre.",
      qs: [
        { dit: "Tu fais quoi pour le réveillon ?", qui: "Ton amie", q: "Tu n'as encore rien organisé. Que réponds-tu ?", o: ["Rien de prévu pour l'instant.", "Rien de prévenu pour l'instant.", "Rien de prévoyant pour l'instant."], e: "*Prévu* est le participe de *prévoir*, organiser à l'avance. *Prévenu*, celui de *prévenir*, avertir : je t'avais prévenue !" },
        { dit: "Alors viens dîner ! Et n'apporte rien, juste ta bonne humeur.", qui: "Ton amie", q: "Elle veut dire :", o: ["Tu n'as rien à apporter, ta présence suffit.", "Apporte un dessert qui fait rire.", "Viens seulement si tu es de bonne humeur."], e: "*Apporte juste ta bonne humeur* est une façon souriante de dire : ne t'embête pas, viens comme tu es." },
      ],
    },
    {
      titre: "Une tête connue", intro: "À une fête de quartier, une dame te sourit.",
      qs: [
        { dit: "Votre visage me dit quelque chose…", qui: "La dame", q: "Elle veut dire :", o: ["J'ai l'impression de vous avoir déjà vue.", "Votre visage me rappelle un mot.", "Vous avez l'air de vouloir me parler."], e: "*Ça me dit quelque chose* : ça me rappelle vaguement quelque chose. Le contraire : *ça ne me dit rien*." },
        { q: "Toi aussi, tu la reconnais, mais son prénom ne te revient pas. Tu dis poliment :", o: ["Excusez-moi, votre prénom m'échappe.", "Excusez-moi, votre prénom m'oublie.", "Excusez-moi, votre prénom m'a quittée."], e: "*Ça m'échappe* : je n'arrive pas à m'en souvenir sur le moment. Personne ne s'en vexe, cela arrive à tout le monde." },
      ],
    },
    {
      titre: "Une soupe d'hiver", intro: "Tu suis une recette de soupe à l'oignon.",
      qs: [
        { dit: "Faites revenir les oignons dans le beurre.", qui: "La recette", q: "« Faire revenir », c'est :", o: ["faire dorer dans un peu de matière grasse", "faire cuire une deuxième fois", "remettre au frais"], e: "*Faire revenir*, c'est faire dorer à feu assez vif, dans du beurre ou de l'huile. *Faire mijoter*, c'est cuire longtemps à feu doux." },
        { dit: "Versez le bouillon et portez à ébullition.", qui: "La recette", q: "« Porter à ébullition », c'est :", o: ["faire bouillir", "laisser tiédir", "verser dans un bol"], e: "L'*ébullition*, c'est le moment où le liquide se met à bouillir. Ensuite, on baisse souvent le feu pour le laisser frémir." },
      ],
    },
    {
      titre: "La porte claquée", intro: "Tu es sortie sans tes clés, et la porte s'est refermée derrière toi.",
      qs: [
        { dit: "Elle est juste claquée, ou fermée à clé ?", qui: "Le serrurier, au téléphone", q: "Tu l'as simplement tirée en sortant. Tu réponds :", o: ["Elle est juste claquée.", "Elle est fermée à double tour.", "Elle est cassée."], e: "Une porte *claquée* est fermée sans être verrouillée, et s'ouvre plus facilement. Pour la fermer *à double tour*, on tourne la clé deux fois." },
        { dit: "Le déplacement, c'est quatre-vingts euros, sans compter l'ouverture.", qui: "Le serrurier", q: "Cela veut dire :", o: ["L'ouverture de la porte sera payée en plus.", "L'ouverture est comprise dans ce prix.", "Il ne pourra pas ouvrir la porte."], e: "*Sans compter* veut dire sans inclure : quatre-vingts euros pour venir, et l'ouverture en plus. Mieux vaut demander le prix total avant." },
      ],
    },
  ],

  conj: [
    { q: "Cette nuit, il ___ : attention au verglas demain matin.", o: ["gèlera", "gellera", "gélera"], e: "*Geler* prend un accent grave devant une syllabe muette : il gèle, il *gèlera*. Il ne double pas son l, contrairement à *appeler*." },
    { q: "Allez, il faut que nous ___ un peu, ça fait du bien !", o: ["riions", "rions", "riyons"], e: "Subjonctif de *rire* : que je rie, que tu ries, que nous *riions*, que vous riiez. Deux i : celui de *ri-* et celui de *-ions*." },
    { q: "Il faut que tu ___ si tu veux attraper ton bus.", o: ["coures", "cours", "courres"], e: "Subjonctif de *courir* : que je coure, que tu *coures*, qu'il coure. Un seul r, comme au présent. Les deux r, c'est pour le futur : je courrai." },
    { q: "Je ne voudrais pas que vous ___ que je suis fâchée.", o: ["croyiez", "croyez", "croiez"], e: "Subjonctif de *croire* : que nous croyions, que vous *croyiez*. Le i après le y vient de la terminaison *-iez*. Sans lui, *vous croyez* est l'indicatif." },
    { q: "Demain, avant l'arrivée des invités, je ___ les vitres.", o: ["nettoierai", "nettoyerai", "nettoirai"], e: "Les verbes en *-oyer* changent le y en i devant un e muet : je nettoie, je *nettoierai*. De même : j'emploierai, je tutoierai." },
    { q: "Quand nous avons emménagé, nous ___ sans arrêt le code de la porte.", o: ["oubliions", "oublions", "oubliyons"], e: "À l'imparfait, *oublier* fait nous *oubliions*, avec deux i : celui de *oubli-* et celui de *-ions*. De même : nous étudiions, nous criions." },
    { q: "Avec le gel annoncé, ___ les plantes du balcon hier soir.", o: ["j'ai rentré", "je suis rentrée", "j'ai rentrées"], e: "*Rentrer* prend *avoir* quand il a un complément direct : j'*ai rentré* les plantes. Ce complément est placé après : pas d'accord. Sans complément, c'est *être* : je suis rentrée tard." },
    { q: "S'il neige demain, nous ___ au chaud.", o: ["resterons", "resterions", "restions"], e: "Avec *si* et le présent, la suite est au futur, ou au présent : s'il neige, nous *resterons* au chaud. Le conditionnel va avec *si* et l'imparfait : s'il neigeait, nous resterions." },
    { q: "Il gèle dehors. Tes gants, ___ !", o: ["mets-les", "met-les", "mets les"], e: "À l'impératif, *mettre* fait *mets*, avec un s. Et le pronom s'attache par un trait d'union : *mets-les*." },
    { q: "___ prudente sur la route, il y a du verglas.", o: ["Sois", "Soit", "Soi"], e: "Impératif d'*être* : *sois*, soyons, soyez. Avec un t, *soit* est le subjonctif : qu'il soit." },
    { q: "Cent euros pour les deux ? Marché ___ !", o: ["conclu", "conclus", "conclut"], e: "Le participe passé de *conclure* est *conclu*, sans s ni t. Ne pas le confondre avec *inclus*, qui prend un s." },
    { q: "Il est possible que le train ___ du retard avec la neige.", o: ["ait", "a", "aura"], e: "*Il est possible que* exprime une simple possibilité : on emploie le subjonctif, qu'il *ait*. De même : il se peut qu'il ait du retard." },
    { q: "Je viendrai, à condition que tu ___ me chercher à la gare.", o: ["viennes", "viens", "viendras"], e: "*À condition que* est toujours suivi du subjonctif : à condition que tu *viennes*." },
    { q: "Ma voisine a tout préparé sans que je m'en ___.", o: ["aperçoive", "aperçois", "apercevais"], e: "*Sans que* demande le subjonctif : sans que je m'en *aperçoive*. La cédille reste devant le o : je m'aperçois, qu'il s'aperçoive." },
    { q: "En attendant que l'eau ___, je sors les tasses.", o: ["bouille", "bout", "bouillisse"], e: "*En attendant que* demande le subjonctif : que l'eau *bouille*. À l'indicatif, on dit : l'eau bout." },
    { q: "Avec ce froid, je ___ ceux qui travaillent dehors.", o: ["plains", "plaint", "plaind"], e: "*Plaindre* : je *plains*, tu plains, il plaint, nous plaignons. Avec *je* et *tu*, un s ; avec *il*, un t. De même : je crains, je peins." },
    { q: "Gênée, elle s'est ___ jusqu'à la fin du repas.", o: ["tue", "tu", "tut"], e: "Le participe passé de *se taire* est *tu*, et il s'accorde ici avec le sujet : elle s'est *tue*, ils se sont tus. Rien à voir avec le verbe *tuer* !" },
    { q: "Pour le dîner du 31, nous ___ une chaise de plus, au cas où.", o: ["prévoirons", "préverrons", "prévirons"], e: "Piège : au futur, *prévoir* ne suit pas *voir*. On dit je verrai, mais je *prévoirai*, nous *prévoirons*." },
    { q: "Autrefois, il ___ chaque hiver dans ce village.", o: ["neigeait", "neigait", "neigeais"], e: "Devant a et o, on garde un e après le g pour conserver le son « j » : il *neigeait*, nous mangeons, en nageant." },
    { q: "Et si on ___ une raclette ce soir ?", o: ["faisait", "ferait", "fasse"], e: "Pour proposer quelque chose avec *et si*, on emploie l'imparfait : et si on *faisait* une raclette ? Le conditionnel n'a pas sa place après ce *si*." },
    { q: "Je ___ ce froid humide !", o: ["hais", "haïs", "hait"], e: "*Haïr* perd son tréma au singulier du présent : je *hais*, tu hais, il hait. On le retrouve ailleurs : nous haïssons, j'ai haï. Et pas d'apostrophe : on dit *je hais*." },
  ],

  gram: [
    { q: "Les enfants ont décoré la salle ___.", o: ["eux-mêmes", "eux-même", "eux mêmes"], e: "Après un pronom pluriel, *même* prend un s, et un trait d'union le relie au pronom : *eux-mêmes*, elles-mêmes. Au singulier : lui-même, elle-même." },
    { q: "Ne marche pas pieds ___ sur le carrelage, il est glacé !", o: ["nus", "nu", "nue"], e: "Placé après le nom, *nu* s'accorde : pieds *nus*, tête nue. Placé devant, il reste invariable et prend un trait d'union : nu-pieds, nu-tête." },
    { q: "Les deux cents euros que ce manteau m'a ___, je ne les regrette pas.", o: ["coûté", "coûtés", "coûtées"], e: "Avec *coûter*, le *que* représente un prix, pas un complément direct : le participe reste invariable. Les deux cents euros que ce manteau m'a *coûté*." },
    { q: "Ma voisine ? Je ___ souvent à porter ses courses.", o: ["l'aide", "lui aide", "aide-la"], e: "On aide *quelqu'un*, sans préposition : je *l'aide*, je l'ai aidée. « Je lui aide » est une faute fréquente." },
    { q: "Mes voisines se sont tout de suite ___ dans leur nouvel appartement.", o: ["plu", "plues", "plus"], e: "Le participe de *plaire* ne s'accorde jamais, même avec *se* : elles se sont *plu*. De même : ces vacances nous ont plu." },
    { q: "Quelle phrase est juste ?", o: ["C'est la boulangerie à côté de laquelle j'habite.", "C'est la boulangerie dont j'habite à côté.", "C'est la boulangerie que j'habite à côté."], e: "Après *à côté de*, *près de*, *au bout de*, on emploie *duquel*, *de laquelle* : la boulangerie *à côté de laquelle* j'habite. *Dont* ne convient pas ici." },
    { q: "Ce n'est pas du tout ___ je m'attendais.", o: ["ce à quoi", "ce que", "ce dont"], e: "On s'attend *à* quelque chose : *ce à quoi* je m'attendais. De même : c'est ce à quoi je tiens." },
    { q: "Les cadeaux qu'elles se sont ___ étaient superbes.", o: ["offerts", "offert", "offertes"], e: "Elles ont offert des cadeaux l'une *à* l'autre : *se* est indirect. Le complément direct est *que*, mis pour *les cadeaux*, placé avant : accord au masculin pluriel, *offerts*." },
    { q: "Plus d'un voisin ___ venu m'aider à déneiger.", o: ["est", "sont", "ont"], e: "Après *plus d'un*, le verbe reste en général au singulier, malgré le sens : plus d'un voisin *est* venu. Mais : plus de deux voisins sont venus." },
    { q: "Mmm, ça sent bon ! Tu nous prépares quelque chose de ___ ?", o: ["spécial", "spéciale", "spéciaux"], e: "*Quelque chose* est masculin, même si *chose* est féminin : quelque chose de *spécial*, quelque chose de bon." },
    { q: "Sur un site, tu lis : « Vous n'aurez ___ frais à payer. »", o: ["aucuns", "aucun", "aucune"], e: "Devant un nom qui n'existe qu'au pluriel, *aucun* se met au pluriel : *aucuns* frais. Partout ailleurs, il reste au singulier : aucun souci.", t: "On voit souvent « aucun frais », et à l'oral on n'entend pas la différence. Mais l'écrit soigné demande le pluriel." },
    { q: "Les clémentines sont à trente centimes ___.", o: ["chacune", "chaque", "chacun"], e: "*Chaque* se place toujours devant un nom : chaque clémentine. Seul, on emploie le pronom : trente centimes *chacune*.", t: "Chez les commerçants, on entend souvent « trente centimes chaque ». La forme soignée reste « chacune »." },
    { q: "Tu te souviens de la neige que nous avons ___ l'an dernier ?", o: ["eue", "eu", "eues"], e: "*Que*, mis pour *la neige*, est un complément direct placé avant : le participe s'accorde. La neige que nous avons *eue*." },
    { q: "Ces gants sont chauds, et en plus très ___.", o: ["bon marché", "bons marchés", "bon marchés"], e: "*Bon marché*, qui veut dire « pas cher », est toujours invariable : des gants *bon marché*." },
    { q: "La bûche s'est un peu écrasée, mais je la sers ___.", o: ["telle quelle", "tel quel", "telle que"], e: "*Tel quel*, qui veut dire « sans rien changer », s'accorde avec le nom : je la sers *telle quelle*, je les laisse tels quels." },
    { q: "Il ___ encore deux chaises pour le dîner.", o: ["manque", "manquent"], e: "Avec le *il* impersonnel, le verbe reste au singulier, même si la suite est au pluriel : il *manque* deux chaises, il reste trois parts." },
    { q: "Quelle phrase est juste ?", o: ["En sortant, j'ai glissé sur le verglas.", "En sortant, le verglas m'a fait glisser.", "En sortant, ma cheville a tourné sur le verglas."], e: "Le gérondif (*en sortant*) a le même sujet que le verbe principal. C'est donc *je* qui sors : en sortant, *j'ai* glissé. Sinon, c'est le verglas qui sortirait !" },
  ],

  expr: [
    { q: "« Ne pas avoir froid aux yeux », c'est :", o: ["oser, ne pas avoir peur", "ne jamais avoir froid", "avoir de bons yeux"], e: "On a de l'audace, on ose ce que d'autres n'osent pas. Rien à voir avec la météo !", ex: "Partir seule faire le tour de l'Europe ? Elle n'a pas froid aux yeux !" },
    { q: "« Jeter un froid », c'est :", o: ["créer un malaise soudain", "ouvrir les fenêtres en hiver", "se mettre en colère"], e: "Une remarque malvenue, et plus personne n'ose parler : l'ambiance se glace.", ex: "Sa blague a jeté un froid : plus personne ne riait." },
    { q: "« Souffler le chaud et le froid », c'est :", o: ["être tantôt aimable, tantôt dur", "avoir de la fièvre", "régler le chauffage"], e: "On encourage, puis on décourage ; on promet, puis on menace. Difficile de savoir sur quel pied danser.", ex: "Avec ce patron, on ne sait jamais : il souffle le chaud et le froid." },
    { q: "« Être blanc comme neige », c'est :", o: ["être innocent", "avoir très froid", "avoir les cheveux blancs"], e: "On n'a rien à se reprocher. On le dit souvent avec ironie, de quelqu'un qui n'est pas aussi innocent qu'il le prétend.", ex: "Dans cette histoire, il jure qu'il est blanc comme neige." },
    { q: "« Faire boule de neige », c'est :", o: ["grossir, prendre de plus en plus d'ampleur", "se battre dans la neige", "fondre peu à peu"], e: "Comme une boule de neige qui grossit en roulant : une rumeur, une dette ou un succès qui s'amplifie.", ex: "Trois voisins ont signé la pétition, puis ça a fait boule de neige." },
    { q: "« Croire au père Noël », c'est :", o: ["être naïf, croire à l'impossible", "aimer recevoir des cadeaux", "garder les traditions"], e: "On croit à une chose trop belle pour être vraie. L'expression est souvent moqueuse.", ex: "Un trois-pièces en plein centre pour 300 euros ? Tu crois au père Noël !" },
    { q: "« Être le dindon de la farce », c'est :", o: ["être la dupe, celui qu'on a trompé", "être l'invité d'honneur", "manger plus que les autres"], e: "Dans l'affaire, c'est lui qui s'est fait avoir, pendant que les autres en profitaient.", ex: "Tout le monde a eu sa part, sauf moi : j'ai été le dindon de la farce." },
    { q: "« Mettre les petits plats dans les grands », c'est :", o: ["recevoir avec beaucoup de soin", "ranger la vaisselle", "servir de toutes petites portions"], e: "On sort la belle vaisselle et l'on prépare un repas soigné, pour faire honneur à ses invités.", ex: "Pour le dîner du 31, elle a mis les petits plats dans les grands." },
    { q: "« Sabler le champagne », c'est :", o: ["boire du champagne pour fêter quelque chose", "ouvrir la bouteille d'un coup de sabre", "mettre le champagne au frais"], e: "On sable le champagne pour célébrer une bonne nouvelle. Attention : *sabrer* le champagne, avec un r, c'est ouvrir la bouteille d'un coup de sabre !", ex: "Il a eu son diplôme : on a sablé le champagne." },
    { q: "« Faire le pont », c'est :", o: ["ne pas travailler entre un jour férié et le week-end", "traverser la rivière", "faire la paix avec quelqu'un"], e: "Quand un jour férié tombe un jeudi, beaucoup de gens font le pont : ils ne travaillent pas le vendredi.", ex: "Avec ce jeudi férié, on fait le pont et on part quatre jours." },
    { q: "« Le jeu n'en vaut pas la chandelle », cela veut dire :", o: ["cela ne vaut pas la peine", "le jeu est truqué", "il faut éteindre les bougies"], e: "Ce qu'on peut y gagner ne vaut pas l'effort ou la dépense.", ex: "Trois heures de route pour une demi-heure de visite ? Le jeu n'en vaut pas la chandelle." },
    { q: "« Passer l'éponge », c'est :", o: ["pardonner, ne plus en parler", "abandonner", "faire le ménage"], e: "On efface tout et l'on n'en parle plus. À ne pas confondre avec *jeter l'éponge*, qui veut dire abandonner.", ex: "Allez, je passe l'éponge pour cette fois." },
    { q: "« Avoir la langue qui fourche », c'est :", o: ["dire un mot à la place d'un autre, sans le vouloir", "dire des méchancetés", "parler très vite"], e: "Le mot qui sort n'est pas celui qu'on voulait dire. Cela arrive à tout le monde, surtout quand on est fatigué.", ex: "J'ai appelé mon voisin par le nom de son chien : ma langue a fourché !" },
    { q: "« Ne pas avoir sa langue dans sa poche », c'est :", o: ["avoir toujours une réponse prête", "être muet de timidité", "parler la bouche pleine"], e: "La personne a toujours une réplique, et elle ose dire ce qu'elle pense.", ex: "Ma voisine n'a pas sa langue dans sa poche : elle a remis le vendeur à sa place." },
    { q: "« Tourner sept fois sa langue dans sa bouche », c'est :", o: ["réfléchir avant de parler", "parler sans arrêt", "goûter un plat"], e: "Avant de dire une chose qu'on pourrait regretter, on prend le temps de réfléchir.", ex: "Avant de lui répondre, tourne sept fois ta langue dans ta bouche." },
    { q: "« Avoir une mémoire d'éléphant », c'est :", o: ["avoir une excellente mémoire", "oublier tout très vite", "avoir de grandes oreilles"], e: "On se souvient de tout, même des détails, et très longtemps.", ex: "Elle se rappelle la date de tous nos anniversaires : une mémoire d'éléphant !" },
    { q: "« Jeter l'argent par les fenêtres », c'est :", o: ["dépenser sans compter", "donner aux pauvres", "perdre son porte-monnaie"], e: "On gaspille son argent dans des choses inutiles.", ex: "Trois manteaux en un mois ? Tu jettes l'argent par les fenêtres !" },
    { q: "« Faire du lèche-vitrine », c'est :", o: ["flâner en regardant les vitrines", "nettoyer les vitres", "acheter tout ce qu'on voit"], e: "On se promène devant les magasins pour le plaisir des yeux, sans forcément acheter.", ex: "En décembre, j'adore faire du lèche-vitrine en ville." },
    { q: "« Avoir la chair de poule », c'est :", o: ["avoir des frissons, de froid ou d'émotion", "avoir de la fièvre", "rougir de honte"], e: "La peau se couvre de petits points, comme celle d'une volaille plumée.", ex: "Cette chanson me donne la chair de poule." },
    { q: "« Mettre son grain de sel », c'est :", o: ["donner son avis sans qu'on le demande", "assaisonner un plat", "faire des économies"], e: "On se mêle d'une conversation ou d'une affaire qui ne nous regarde pas.", ex: "Il faut toujours qu'il mette son grain de sel !" },
    { q: "« Il n'y a pas un chat », cela veut dire :", o: ["il n'y a personne", "il n'y a pas d'animaux", "il fait très froid"], e: "Pas une seule personne à l'horizon : les rues sont désertes.", ex: "Le 1er janvier au matin, il n'y avait pas un chat dans les rues." },
    { q: "« Se faire du mauvais sang », c'est :", o: ["s'inquiéter beaucoup", "être malade", "se mettre en colère"], e: "On se ronge d'inquiétude. On dit aussi : se faire un sang d'encre.", ex: "Appelle-moi en arrivant, sinon je vais me faire du mauvais sang." },
  ],

  orth: [
    { q: "Je vérifie encore une fois que le gaz est fermé, par ___ de conscience.", o: ["acquit", "acquis", "aquit"], e: "On écrit *par acquit de conscience* : pour avoir l'esprit tranquille. *Acquis*, avec un s, est le participe d'*acquérir* : un avantage acquis." },
    { q: "Je vous présente mes ___ pour la nouvelle année.", o: ["meilleurs vœux", "meilleur vœux", "meilleurs vœu"], e: "Pour la nouvelle année, *vœux* est au pluriel, et *meilleurs* s'accorde avec lui : mes *meilleurs vœux*. Au singulier : faire un vœu." },
    { q: "Le 31 décembre, c'est ___.", o: ["la Saint-Sylvestre", "la saint Sylvestre", "la Sainte-Sylvestre"], e: "Pour le nom d'une fête, *Saint* prend une majuscule et un trait d'union : la *Saint-Sylvestre*, la Saint-Valentin. Pour parler du saint lui-même, ni majuscule ni trait d'union." },
    { q: "Tu t'en vas déjà ? ___ ?", o: ["Si tôt", "Sitôt", "Si-tôt"], e: "En deux mots, *si tôt* veut dire « de si bonne heure », le contraire de *si tard*. En un mot, *sitôt* veut dire « dès que » : sitôt arrivée, elle a téléphoné. Et l'on dit : pas de sitôt." },
    { q: "Il fera froid demain, ___ très froid.", o: ["voire", "voir", "voir même"], e: "*Voire*, avec un e, veut dire « et même » : froid, voire très froid. Sans e, *voir* est le verbe : voir la neige tomber." },
    { q: "Il gèle : je suis sortie ___ dans mon gros manteau.", o: ["emmitouflée", "emmitoufflée", "emitouflée"], e: "*Emmitouflée* s'écrit avec deux m et un seul f. Le verbe : s'emmitoufler dans une écharpe." },
    { q: "Je suis un peu ___ : la météo se trompe souvent.", o: ["sceptique", "septique", "sceptic"], e: "*Sceptique*, avec sc, veut dire « qui doute ». *Septique*, sans c, se dit d'une fosse septique. Rien à voir !" },
  ],

  faute: [
    { p: "L'eau bouit, tu peux mettre les pâtes.", x: "bouit", c: "bout", e: "*Bouillir* : je bous, tu bous, l'eau *bout*, nous bouillons. « Bouit » n'existe pas." },
    { p: "Je pelle une clémentine pour le goûter.", x: "pelle", c: "pèle", e: "*Peler* prend un accent grave devant une syllabe muette : je *pèle*, comme j'achète. Une *pelle*, c'est l'outil pour creuser ou déblayer la neige." },
    { p: "Tu sors ? Prend ton écharpe, il gèle !", x: "Prend", c: "Prends", e: "À l'impératif, *prendre* garde son s : *prends* ton écharpe, comme *mets*, *fais* ou *viens*." },
    { p: "Elle s'est faite mal en glissant sur le verglas.", x: "faite", c: "fait", e: "Dans *se faire mal*, le participe reste invariable : elle s'est *fait* mal, elles se sont fait mal." },
    { p: "Je me suis fais avoir par ce vendeur.", x: "fais", c: "fait", e: "Après *je me suis*, il faut le participe passé : *fait*. Suivi d'un infinitif, il ne s'accorde jamais : elle s'est fait avoir." },
    { p: "Il a fait si froid que les étangs ont gelés.", x: "gelés", c: "gelé", e: "Avec *avoir*, le participe ne s'accorde pas avec le sujet : les étangs *ont gelé*. Avec *être*, il s'accorderait : les étangs sont gelés." },
    { p: "C'est une fête que j'ai toujours beaucoup aimée.", x: null, e: "Rien à corriger ! *Que*, mis pour *une fête*, est un complément direct placé avant le verbe : le participe s'accorde, *aimée*." },
    { p: "Nous vous souhaitons de très bonnes fêtes de fin d'année.", x: null, e: "Tout est juste : *de* devant un adjectif au pluriel (de très bonnes fêtes), et *fin d'année* au singulier." },
  ],

  ordre: [
    { w: ["Ils", "s'", "en", "sont", "allés"], q: "Les invités sont partis. Dis-le avec « s'en aller » :", e: "Avec *s'en aller*, *s'* et *en* restent groupés devant l'auxiliaire : ils *s'en sont allés*. On évite « ils se sont en allés ». À l'oral, on dit plus souvent : ils sont partis." },
    { w: ["Donne", "-lui", "-en", "un", "peu"], fin: " !", q: "Ton amie sert la soupe, et ta voisine aimerait y goûter. Tu dis à ton amie :", e: "À l'impératif, les pronoms suivent le verbe avec des traits d'union, et *en* passe toujours en dernier : donne-*lui-en*." },
    { w: ["Je", "ne", "m'", "y", "attendais", "pas", "du", "tout"], fin: " !", q: "On t'a fait une belle surprise :", e: "On s'attend *à* quelque chose : je *m'y* attends. *M'* et *y* restent devant le verbe, et la négation entoure le tout : je *ne* m'y attendais *pas* du tout." },
    { w: ["Je", "vous", "la", "souhaite", "bonne", "et", "heureuse"], q: "La formule traditionnelle du Nouvel An :", e: "*La* remplace *l'année* : je vous *la* souhaite bonne et heureuse. *Vous* passe avant *la*, comme dans *je vous le dis*." },
    { w: ["Il", "faut", "que", "je", "m'", "en", "aille"], q: "Il se fait tard, tu prends congé :", e: "*S'en aller* au subjonctif : il faut que je *m'en aille*. *M'* et *en* restent ensemble devant le verbe." },
    { w: ["Que", "t'", "a-t-il", "offert"], fin: " ?", q: "Tu demandes à une amie quel cadeau son frère lui a fait :", e: "Quand on inverse le sujet, le pronom complément reste devant le verbe : que *t'a-t-il* offert ? Le t entre traits d'union sert juste à la liaison. À l'oral : qu'est-ce qu'il t'a offert ?" },
  ],

  voc: [
    { dit: "La bise souffle depuis ce matin.", q: "Ici, « la bise », c'est :", o: ["un vent froid du nord", "un petit baiser sur la joue", "une averse de neige"], e: "*La bise* est un vent sec et froid qui vient du nord ou du nord-est. Et *faire la bise*, c'est s'embrasser sur les joues pour se saluer." },
    { q: "Au marché, j'ai acheté deux ___.", o: ["choux-fleurs", "chou-fleurs", "choux-fleur"], e: "Dans *chou-fleur*, les deux mots sont des noms : tous les deux prennent la marque du pluriel. Des *choux-fleurs*, des choux-raves." },
    { q: "La marmotte dort tout l'hiver : elle ___.", o: ["hiberne", "hiverne", "hivernise"], e: "*Hiberner*, c'est passer l'hiver endormi, comme la marmotte. *Hiverner*, c'est passer l'hiver à l'abri : les troupeaux hivernent à l'étable." },
    { q: "Le « réveillon », c'est :", o: ["le repas de fête de la nuit du 24 ou du 31 décembre", "le premier réveil de la nouvelle année", "la sieste après un bon repas"], e: "Le *réveillon* est un repas de fête qui se prolonge tard dans la nuit, le 24 ou le 31 décembre. Le verbe : *réveillonner*." },
    { q: "Les « étrennes », ce sont :", o: ["les cadeaux, souvent un peu d'argent, offerts pour le Nouvel An", "les premières neiges de l'hiver", "les soldes de janvier"], e: "On donne des *étrennes* pour le Nouvel An, par exemple à la gardienne de l'immeuble. Dans ce sens, le mot s'emploie surtout au pluriel." },
    { q: "Dans l'hémisphère Nord, le jour le plus court tombe autour du 21 décembre : c'est le ___ d'hiver.", o: ["solstice", "équinoxe", "zénith"], e: "Au *solstice* d'hiver, la nuit est la plus longue de l'année ; ensuite, les jours rallongent. Aux *équinoxes*, en mars et en septembre, le jour et la nuit durent à peu près autant." },
    { dit: "Il fait un temps de saison.", q: "Cela veut dire :", o: ["Le temps est normal pour cette période de l'année.", "Le temps change tous les jours.", "Il fait très beau."], e: "*De saison* veut dire habituel à cette époque : froid en hiver, chaud en été. Quand le temps sort de l'ordinaire, on dit par exemple : il fait doux pour la saison." },
  ],

  fam: [
    { dit: "Il fait frisquet ce matin !", q: "Cela veut dire :", o: ["Il fait un peu froid.", "Il fait très chaud.", "Il fait humide et lourd."], e: "*Frisquet* (familier) : frais et piquant. Quand il fait vraiment froid, on dit plutôt *ça caille*." },
    { dit: "Il y avait un monde fou dans les magasins !", q: "Cela veut dire :", o: ["Il y avait énormément de monde.", "Les gens étaient énervés.", "Les magasins étaient fermés."], e: "*Un monde fou* (familier) : une foule énorme. On dit aussi : c'était noir de monde." },
    { dit: "Quinze euros la boîte de chocolats ? C'est du vol !", q: "La personne trouve que :", o: ["c'est beaucoup trop cher", "on lui a volé ses chocolats", "c'est une bonne affaire"], e: "*C'est du vol !* (familier) : c'est exagérément cher. Le contraire : *c'est donné*." },
    { dit: "Après les fêtes, je n'ai plus un rond !", q: "Cela veut dire :", o: ["Je n'ai plus d'argent.", "J'ai trop mangé.", "Je n'ai plus d'idées."], e: "*Un rond* (familier) : une pièce, de l'argent. *Ne plus avoir un rond*, c'est être à court d'argent. On dit aussi : être fauchée." },
    { dit: "Arriver à l'heure avec cette neige ? C'est pas gagné !", q: "Cela veut dire :", o: ["Ça s'annonce difficile.", "C'est facile, on sera en avance.", "On n'a pas gagné le concours."], e: "*C'est pas gagné* (familier) : rien n'est moins sûr. À l'écrit soigné : ce n'est pas gagné." },
    { dit: "Les magasins le 24 au soir, je te raconte pas !", q: "Cela veut dire :", o: ["C'était incroyable, tu n'imagines pas.", "Je ne veux pas en parler.", "Je ne m'en souviens plus."], e: "*Je te raconte pas !* (familier) : c'était indescriptible, tu n'imagines pas. Et souvent, on raconte quand même juste après !" },
    { dit: "On est le combien, aujourd'hui ?", q: "La personne veut savoir :", o: ["la date du jour", "combien vous êtes", "le prix de quelque chose"], e: "*On est le combien ?* (familier) : quelle est la date d'aujourd'hui ? On répond : on est le 12." },
  ],

  usage: [
    { q: "Tu ne sais pas si ta voisine fête Noël. Quel souhait convient à tout le monde ?", o: ["Bonnes fêtes de fin d'année !", "Bonne fête !", "Joyeux Noël à toute la famille !"], e: "*Bonnes fêtes* (au pluriel) convient à tous, quelles que soient les traditions de chacun. *Bonne fête*, au singulier, se souhaite le jour de la fête de quelqu'un." },
    { q: "Jusqu'à quand l'usage permet-il de souhaiter la bonne année ?", o: ["jusqu'à la fin du mois de janvier", "seulement le 1er janvier", "jusqu'à la fin de l'hiver"], e: "En France, l'usage veut qu'on présente ses vœux jusqu'au 31 janvier. Après, c'est un peu tard !" },
    { q: "Invitée à dîner à 20 heures chez des amis, tu arrives de préférence :", o: ["un peu après l'heure, vers 20 h 15", "un peu avant, vers 19 h 45, pour aider", "bien plus tard, vers 21 heures"], e: "C'est le « quart d'heure de politesse » : chez des particuliers, on arrive un peu après l'heure dite, pour laisser à ses hôtes le temps de finir leurs préparatifs." },
    { q: "En France, à quoi associe-t-on surtout les chrysanthèmes ?", o: ["à la Toussaint et aux tombes", "aux mariages", "à la fête des mères"], e: "En France, on fleurit les tombes de chrysanthèmes à la Toussaint. Mieux vaut donc ne pas en offrir à une hôtesse : on choisit plutôt un bouquet de saison." },
    { q: "Le 3 janvier, tu croises le gardien de l'immeuble. Tu lui dis :", o: ["Bonne année, et meilleurs vœux !", "Bon an, mal an !", "Bonne fin d'année !"], e: "*Bonne année* et *meilleurs vœux* : la formule classique. *Bon an, mal an* veut dire tout autre chose : en moyenne, d'une année sur l'autre." },
    { q: "Au restaurant, en France, le pourboire est :", o: ["un petit geste libre, quand on est content", "obligatoire, au moins 15 % de l'addition", "interdit par la loi"], e: "En France, le service est compris dans les prix affichés. Le *pourboire* est un petit plus, laissé librement quand on a été bien servi." },
  ],

  oral: [
    { q: "« Les huîtres » : fait-on la liaison ?", ok: "Les huîtres. L'huître.", o: ["Oui : « lé-z-uitre »", "Non : « lé | uitre »", "Ça dépend des régions"], e: "Le h d'*huître* est muet : on fait la liaison et l'élision. Les-z-huîtres, l'huître. C'est le contraire du h aspiré de *haricot*." },
    { q: "« Un hachis parmentier » : fait-on la liaison après « un » ?", ok: "Un hachis parmentier. Le hachis.", o: ["Non : « un | achi »", "Oui : « un-n-achi »", "Comme on veut"], e: "Le h de *hachis* est aspiré : ni liaison ni élision. Un | hachis, le hachis. Comme pour le haricot ou la honte." },
    { q: "Comment prononce-t-on « mon fils » ?", ok: "Mon fils.", o: ["« mon fisse »", "« mon fil »", "« mon fi »"], e: "Dans *fils*, l'enfant, le l est muet et le s se prononce : « fisse ». Dans *des fils* électriques, c'est l'inverse : « fil »." },
    { q: "« Un dessert » et « un désert » se prononcent :", ok: "Un dessert. Un désert.", o: ["« dé-sèr » et « dé-zèr »", "tous les deux « dé-zèr »", "tous les deux « dé-sèr »"], e: "Entre deux voyelles, un seul s se prononce « z » : un *désert*. Avec deux s, on garde le son « s » : un *dessert*. Pratique pour ne pas confondre la tarte et le Sahara !" },
    { q: "Dans « le vingt-cinq décembre », le t de « vingt » :", ok: "Le vingt-cinq décembre. Quatre-vingt-cinq.", o: ["se prononce : « vinte-cinq »", "ne se prononce pas : « vin-cinq »", "se prononce comme un d : « vinde-cinq »"], e: "De vingt et un à vingt-neuf, on prononce le t : « vinte-cinq ». Mais il reste muet dans *quatre-vingt-cinq*." },
    { q: "Dans « je ne l'ai pas fait exprès », le s de « exprès » :", ok: "Je ne l'ai pas fait exprès. Un café express.", o: ["ne se prononce pas", "se prononce", "se prononce comme un z"], e: "*Exprès*, volontairement, finit par un s muet : « èksprè ». Dans *express*, un train ou un café, on entend le s : « èksprèss »." },
  ],

  tac: [
    { dit: "Bonnes fêtes !", qui: "La boulangère", o: ["Merci, à vous aussi !", "Merci, moi de même !", "Je vous en prie."], e: "On renvoie le souhait : *merci, à vous aussi*, ou *vous de même*. « Moi de même » reviendrait à se souhaiter de bonnes fêtes à soi-même !" },
    { dit: "Bonne année !", qui: "Ta voisine, le 2 janvier", o: ["Bonne année à vous aussi, et meilleurs vœux !", "Merci, à l'année dernière !", "De rien, bonne année."], e: "On rend le souhait, et l'on peut ajouter *meilleurs vœux* ou *tous mes vœux*." },
    { dit: "Et surtout, la santé !", qui: "Ta voisine", o: ["Oui, c'est le plus important !", "Santé ! À la vôtre !", "Non, je ne suis pas malade."], e: "*Bonne année, bonne santé* : le vœu le plus courant. On approuve : *c'est le principal*. *Santé !* se dit en trinquant." },
    { dit: "Quel froid de canard, hein ?", qui: "Le marchand de journaux", o: ["Oui, on gèle !", "Oui, il fait lourd !", "Oui, c'est doux pour la saison !"], e: "*Un froid de canard* : un très grand froid. Familièrement, on dit aussi : *ça caille*." },
    { dit: "Vous avez passé de bonnes fêtes ?", qui: "Le pharmacien, en janvier", o: ["Oui, très bonnes, merci. Et vous ?", "Oui, je les ai passées dehors.", "Non, je les passe demain."], e: "On répond simplement, puis on retourne la question : *et vous ?*" },
    { dit: "Je vous souhaite une excellente année.", qui: "Ton médecin", o: ["Merci, à vous également.", "Merci, je vous en prie.", "Merci, avec plaisir."], e: "*À vous également*, *à vous aussi* : on rend le souhait. *Je vous en prie* et *avec plaisir* répondent plutôt à un merci." },
    { dit: "Je ne vous ai pas encore souhaité la bonne année !", qui: "Le facteur, à la mi-janvier", o: ["Moi non plus ! Bonne année à vous !", "Moi aussi ! Bonne année à vous !", "Moi si ! Bonne année à vous !"], e: "La phrase est négative : on répond *moi non plus*. Et rien ne presse, on a jusqu'à la fin janvier pour se souhaiter la bonne année." },
    { dit: "Excusez-moi, c'est ici, la queue ?", qui: "Une dame, à la poste", o: ["Oui, je suis la dernière.", "Oui, je suis la queue.", "Oui, je fais la caisse."], e: "*Je suis la dernière* : mettez-vous derrière moi. On dit aussi : *c'est derrière moi*." },
    { dit: "Vous avez la monnaie ?", qui: "Le marchand de marrons", o: ["Non, désolée, je n'ai qu'un billet de vingt.", "Oui, rendez-la-moi.", "Non, je paie en euros."], e: "*Vous avez la monnaie ?* : avez-vous des pièces, ou la somme exacte ? Sinon, on le dit simplement." },
    { dit: "À l'année prochaine !", qui: "Le boucher, le 30 décembre", o: ["Bonnes fêtes, à l'année prochaine !", "Vous fermez pendant un an ?", "À l'an dernier !"], e: "Fin décembre, *à l'année prochaine* veut simplement dire « à dans quelques jours ». Une petite plaisanterie de saison." },
    { dit: "Tu veux que je te dépose ?", qui: "Une amie, en voiture", o: ["Volontiers, si ce n'est pas un détour pour toi.", "Non merci, je n'ai rien à déposer.", "Oui, dépose-moi un message."], e: "*Déposer quelqu'un*, c'est l'emmener en voiture et le laisser là où il va." },
    { dit: "Un chocolat chaud pour te réchauffer ?", qui: "Ton amie", o: ["Ce n'est pas de refus !", "C'est un refus !", "Ce n'est pas refusé !"], e: "*Ce n'est pas de refus* : j'accepte avec plaisir. Une façon chaleureuse de dire oui." },
  ],

  mot: [
    { d: "Fines gouttelettes qui couvrent une vitre ou des lunettes quand on passe du froid au chaud.", m: "buée", ex: "En entrant, mes lunettes se sont couvertes de buée." },
    { d: "Appareil qui chauffe l'eau de la maison, et souvent les radiateurs.", m: "chaudière", ex: "La chaudière fait un drôle de bruit." },
    { d: "Poche en caoutchouc qu'on remplit d'eau chaude pour se réchauffer au lit.", m: "bouillotte", ex: "Je dors avec une bouillotte aux pieds." },
    { d: "Veste épaisse et gonflée, garnie de plumes ou de duvet.", m: "doudoune", ex: "Mets ta doudoune, il gèle." },
    { d: "Petit traîneau pour glisser sur les pentes enneigées.", m: "luge", ex: "Les enfants font de la luge sur la colline." },
    { d: "Petit cube d'eau gelée qu'on met dans un verre.", m: "glaçon", ex: "Tu veux un glaçon dans ton jus ?" },
    { d: "Gros morceau de bois pour le feu. C'est aussi un gâteau roulé de fin d'année.", m: "bûche", ex: "Remets une bûche dans le feu." },
    { d: "Long cordon décoratif, parfois lumineux, qu'on accroche pour les fêtes.", m: "guirlande", ex: "On a accroché une guirlande au balcon." },
    { d: "Mettre un cadeau dans du joli papier.", m: "emballer", ex: "Tu m'aides à emballer les cadeaux ?" },
    { d: "Coquillage qu'on ouvre avec un couteau spécial et qu'on mange cru.", m: "huître", ex: "Tu sais ouvrir les huîtres ?" },
    { d: "Piste de glace où l'on glisse, des lames sous les chaussures.", m: "patinoire", ex: "On va à la patinoire samedi ?" },
    { d: "Petite fente douloureuse de la peau, aux lèvres ou aux mains, à cause du froid.", m: "gerçure", ex: "Mets de la crème sur tes gerçures." },
    { d: "Neige fondue mêlée de boue, sur les trottoirs.", m: "gadoue", ex: "Avec le dégel, c'est de la gadoue partout." },
    { d: "Petits objets de fête : serpentins, confettis, chapeaux en carton.", m: "cotillons", ex: "À minuit, on a sorti les cotillons." },
    { d: "Décision qu'on prend pour l'année qui commence.", m: "résolution", ex: "Ma bonne résolution : marcher tous les jours." },
    { d: "Carnet où l'on note ses rendez-vous, jour par jour.", m: "agenda", ex: "Je note la date dans mon agenda." },
    { d: "Faire un vêtement avec de la laine et deux longues aiguilles.", m: "tricoter", ex: "Elle tricote une écharpe pour l'hiver." },
    { d: "Boule de laine enroulée sur elle-même.", m: "pelote", ex: "Le chat joue avec la pelote de laine." },
    { d: "Foyer aménagé dans un mur, pour faire du feu dans la maison.", m: "cheminée", ex: "On s'est installés devant la cheminée." },
    { d: "Trembler de froid en claquant des dents.", m: "grelotter", ex: "Rentre vite, tu grelottes !" },
    { d: "Fine couche de glace blanche sur les vitres ou sur l'herbe, les matins de grand froid.", m: "givre", ex: "Il faut gratter le givre sur le pare-brise." },
    { d: "Petite couverture qu'on pose sur le canapé.", m: "plaid", ex: "Je regarde un film sous un plaid." },
  ],
};
