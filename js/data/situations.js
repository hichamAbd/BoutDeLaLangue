// En situation : des scènes de la vie de tous les jours. Chaque scène ouvre le défi du jour avec ses deux questions.
// Forme : { titre, intro, qs: [ { dit: ce qu'on lui dit, qui: qui parle, q: question, o: [bonne, mauvaises], e: explication } × 2 ] }

export default [
  {
    titre: "À la pharmacie", intro: "Tu as mal à la gorge depuis deux jours.",
    qs: [
      { dit: "Vous avez une ordonnance ?", qui: "La pharmacienne", q: "Tu n'en as pas. Que réponds-tu ?", o: ["Non, c'est pour un médicament sans ordonnance.", "Non, je n'ai rien commandé.", "Non, je ne suis pas ordonnée."], e: "Une *ordonnance* est le papier du médecin qui prescrit les médicaments. Certains se vendent *sans ordonnance*." },
      { dit: "C'est une toux grasse ou une toux sèche ?", qui: "La pharmacienne", q: "Tu tousses sans rien cracher. Ta toux est :", o: ["sèche", "grasse", "sourde"], e: "Une toux *sèche* irrite sans rien ramener. Une toux *grasse* s'accompagne de glaires. Le sirop n'est pas le même." },
    ],
  },
  {
    titre: "Chez le médecin", intro: "Le médecin t'examine et te pose des questions.",
    qs: [
      { dit: "Vous êtes à jour dans vos vaccins ?", qui: "Le médecin", q: "Il veut savoir si :", o: ["tes vaccins et tes rappels ont été faits à temps", "tu as été vaccinée aujourd'hui", "tu as ton carnet sur toi"], e: "*Être à jour* = ne pas avoir de retard. Un *rappel* est une nouvelle dose d'un vaccin déjà reçu." },
      { q: "Tu veux dire que la douleur revient de temps en temps, par coups. Tu dis :", o: ["Ça me lance par moments.", "Ça me lance un moment.", "Ça me relance."], e: "*Ça me lance* = j'ai des élancements, une douleur vive qui revient. *Par moments* = de temps en temps." },
    ],
  },
  {
    titre: "À la boulangerie", intro: "C'est ton tour, et il y a du monde derrière toi.",
    qs: [
      { dit: "Et avec ceci ?", qui: "La boulangère", q: "Tu ne veux rien d'autre. Que réponds-tu ?", o: ["Ce sera tout, merci.", "Avec ceci, merci.", "Non, sans ceci."], e: "*Et avec ceci ?* veut dire « voulez-vous autre chose ? ». La réponse habituelle : *ce sera tout, merci*." },
      { q: "Tu aimes le pain peu doré. Tu demandes une baguette :", o: ["pas trop cuite", "pas trop cuisinée", "peu chauffée"], e: "On demande une baguette *pas trop cuite* ou, au contraire, *bien cuite*. Et *une tradition* pour la baguette à l'ancienne." },
    ],
  },
  {
    titre: "Au marché", intro: "Tu achètes des abricots.",
    qs: [
      { dit: "Je vous en mets combien ?", qui: "Le vendeur", q: "Tu en veux environ 500 grammes. Que réponds-tu ?", o: ["Une livre, s'il vous plaît.", "Un demi, s'il vous plaît.", "Cinq cents, s'il vous plaît."], e: "Au marché, *une livre* = 500 grammes, et *une demi-livre* = 250 grammes. On dit aussi *un demi-kilo*." },
      { dit: "Il y en a un peu plus, je vous le laisse ?", qui: "Le vendeur", q: "Il veut dire que :", o: ["le poids dépasse ce que tu as demandé", "il t'offre le surplus", "il te laisse choisir les fruits"], e: "Phrase rituelle : la balance indique plus que demandé, et tu paieras ce supplément. Tu peux répondre *oui, ça ira* ou *non, enlevez-en un peu*." },
    ],
  },
  {
    titre: "À la caisse du supermarché", intro: "La caissière a fini de passer tes articles.",
    qs: [
      { dit: "Vous avez la carte de fidélité ?", qui: "La caissière", q: "Tu ne l'as pas. Réponse naturelle :", o: ["Non, je ne l'ai pas.", "Non, je ne suis pas fidèle.", "Non, je paie en espèces."], e: "La *carte de fidélité* est la carte du magasin, qui donne des réductions. Rien à voir avec la *carte bancaire*." },
      { dit: "Sans contact ?", qui: "La caissière", q: "Elle te demande si :", o: ["tu paies en approchant ta carte du lecteur", "tu veux rester à distance", "tu veux payer sans ticket"], e: "Le paiement *sans contact* : on pose la carte sur le lecteur, sans taper son code. Sinon, on répond : *non, je vais insérer ma carte*." },
    ],
  },
  {
    titre: "À la poste", intro: "Tu envoies un document important.",
    qs: [
      { q: "Tu veux une preuve que le destinataire l'a bien reçu. Tu demandes :", o: ["une lettre recommandée avec accusé de réception", "une lettre commandée avec reçu", "une lettre suivie de réception"], e: "Avec la *lettre recommandée avec accusé de réception*, le destinataire signe et tu reçois la preuve. La *lettre suivie* permet seulement de voir où elle se trouve." },
      { dit: "Vous avez une pièce d'identité ?", qui: "L'employé", q: "Tu peux présenter :", o: ["ta carte d'identité ou ton passeport", "une facture à ton nom", "ta carte de fidélité"], e: "Une *pièce d'identité* : carte d'identité, passeport ou permis de conduire. Une facture est un *justificatif de domicile*." },
    ],
  },
  {
    titre: "À la banque", intro: "Tu veux envoyer de l'argent à ta sœur.",
    qs: [
      { q: "L'opération qui fait passer l'argent de ton compte au sien s'appelle :", o: ["un virement", "un prélèvement", "un versement de monnaie"], e: "Un *virement*, c'est toi qui envoies. Un *prélèvement*, c'est une entreprise qui prend l'argent sur ton compte, avec ton accord : loyer, électricité." },
      { dit: "Vous avez le RIB du bénéficiaire ?", qui: "Le conseiller", q: "Il te demande :", o: ["les coordonnées bancaires de ta sœur", "ta carte bancaire", "le reçu de l'opération"], e: "Le *RIB* (relevé d'identité bancaire) donne les coordonnées d'un compte. Le *bénéficiaire* est la personne qui reçoit l'argent." },
    ],
  },
  {
    titre: "À la mairie", intro: "Tu fais refaire ta carte d'identité.",
    qs: [
      { dit: "Il me faut un justificatif de domicile de moins de trois mois.", qui: "L'employée", q: "Tu peux apporter :", o: ["une facture d'électricité récente", "ton ancienne carte d'identité", "une lettre de ta voisine"], e: "Un *justificatif de domicile* prouve où tu habites. *De moins de trois mois* = daté des trois derniers mois." },
      { dit: "Vous aviez pris rendez-vous ?", qui: "L'employée", q: "Oui, pour dix heures. Que réponds-tu ?", o: ["Oui, j'ai rendez-vous à dix heures.", "Oui, je suis rendez-vous à dix heures.", "Oui, j'ai pris rendez-vous de dix heures."], e: "On *a* rendez-vous, on *prend* rendez-vous, on *donne* rendez-vous à quelqu'un. Et toujours *à* telle heure." },
    ],
  },
  {
    titre: "Prendre rendez-vous par téléphone", intro: "Tu appelles un cabinet médical pour voir un dermatologue.",
    qs: [
      { q: "Comment commences-tu ?", o: ["Bonjour, je voudrais prendre rendez-vous, s'il vous plaît.", "Bonjour, je veux un rendez-vous.", "Bonjour, donnez-moi un rendez-vous."], e: "*Je voudrais* (au conditionnel) et *s'il vous plaît* : la formule passe-partout pour demander poliment." },
      { dit: "Je n'ai rien avant le 15. Ça vous irait ?", qui: "La secrétaire", q: "Cette date te convient. Que réponds-tu ?", o: ["Oui, ça me va très bien.", "Oui, ça m'est allé.", "Oui, j'y irais."], e: "*Ça vous irait ?* = cela vous conviendrait ? On répond *ça me va* ou *c'est parfait*. Pour une date plus proche : *vous n'avez rien plus tôt ?*" },
    ],
  },
  {
    titre: "Dans l'escalier", intro: "Tu croises ton voisin du dessus.",
    qs: [
      { dit: "Vous allez bien ? Ça fait un bail !", qui: "Le voisin", q: "« Ça fait un bail » veut dire :", o: ["Ça fait longtemps qu'on ne s'est pas vus.", "J'ai signé un nouveau contrat.", "Il fait beau aujourd'hui."], e: "*Ça fait un bail* (familier) = cela fait très longtemps. Un *bail* est au départ un contrat de location, qui dure des années." },
      { dit: "Si vous avez besoin de quoi que ce soit, n'hésitez pas.", qui: "Le voisin", q: "Réponse naturelle :", o: ["C'est très gentil, merci.", "Je n'hésite jamais, merci.", "De rien, merci."], e: "*N'hésitez pas* est une offre d'aide. On remercie : *c'est très gentil*." },
    ],
  },
  {
    titre: "Dans le bus", intro: "Le bus est bondé et tu veux descendre.",
    qs: [
      { q: "Tu dois passer devant quelqu'un. Tu dis :", o: ["Pardon, je descends à la prochaine.", "Attention, je descends la prochaine.", "Poussez-vous, je descends."], e: "*Pardon* suffit pour demander le passage. *À la prochaine* sous-entend : à la prochaine station." },
      { dit: "Vous descendez ?", qui: "Une dame derrière toi", q: "Elle veut savoir si :", o: ["tu sors au prochain arrêt, sinon elle doit passer", "tu veux t'asseoir", "tu connais le quartier"], e: "Dans les transports, *vous descendez ?* est une façon polie de demander le passage." },
    ],
  },
  {
    titre: "Au guichet de la gare", intro: "Tu achètes un billet pour Lyon.",
    qs: [
      { dit: "Un aller simple ou un aller-retour ?", qui: "L'employé", q: "Tu reviens dimanche par le train. Tu prends :", o: ["un aller-retour", "un aller simple", "un retour simple"], e: "*Aller simple* : un seul trajet. *Aller-retour* : les deux. Au pluriel : des allers-retours." },
      { dit: "Vous avez une carte de réduction ?", qui: "L'employé", q: "Il te demande si :", o: ["tu as un abonnement qui fait baisser le prix", "tu veux payer par carte", "tu as un plan de la ville"], e: "Une *carte de réduction* donne droit à des billets moins chers pendant un an." },
    ],
  },
  {
    titre: "Dans le train", intro: "Quelqu'un est assis à ta place.",
    qs: [
      { q: "Comment le lui dire poliment ?", o: ["Excusez-moi, je crois que c'est ma place.", "Vous êtes à ma place, levez-vous.", "Pardon, vous m'avez pris ma place."], e: "*Je crois que* adoucit la phrase : on laisse à l'autre la possibilité de s'être trompé." },
      { dit: "Votre titre de transport, s'il vous plaît.", qui: "Le contrôleur", q: "Il te demande :", o: ["ton billet", "ta carte d'identité", "le nom de ta destination"], e: "Le *titre de transport* est le nom officiel du billet ou de l'abonnement." },
    ],
  },
  {
    titre: "Au restaurant : la commande", intro: "Le serveur s'approche de ta table.",
    qs: [
      { dit: "Vous avez choisi ?", qui: "Le serveur", q: "Il te faut encore un instant. Que réponds-tu ?", o: ["Pas encore, une petite minute, s'il vous plaît.", "Non, je ne choisis pas.", "Pas encore, revenez plus tard."], e: "*Une petite minute, s'il vous plaît* : poli, et le serveur comprend qu'il peut revenir bientôt." },
      { dit: "Quelle cuisson, pour la viande ?", qui: "Le serveur", q: "Tu la veux cuite jusqu'au cœur, sans rose. Tu dis :", o: ["Bien cuite", "À point", "Saignante"], e: "Du moins cuit au plus cuit : *bleue*, *saignante*, *à point*, *bien cuite*." },
    ],
  },
  {
    titre: "Au restaurant : la fin du repas", intro: "Tu as fini ton dessert.",
    qs: [
      { dit: "Ça a été ?", qui: "Le serveur", q: "Il te demande :", o: ["si le repas t'a plu", "si tu as fini", "ce que tu as mangé"], e: "*Ça a été ?* = tout s'est bien passé ? On répond *très bien, merci* ou *c'était délicieux*." },
      { q: "Pour payer, tu demandes :", o: ["L'addition, s'il vous plaît.", "La facture, s'il vous plaît.", "Le compte, s'il vous plaît."], e: "Au restaurant et au café, on demande *l'addition*. *La note* se dit à l'hôtel. *La facture*, chez un artisan ou un commerçant." },
    ],
  },
  {
    titre: "Au café", intro: "Tu commandes au comptoir.",
    qs: [
      { dit: "Sur place ou à emporter ?", qui: "Le serveur", q: "Tu veux t'asseoir pour le boire. Que réponds-tu ?", o: ["Sur place.", "À la place.", "En place."], e: "*Sur place* = on consomme ici. *À emporter* = on part avec." },
      { q: "Tu veux un petit café avec une goutte de lait. Tu commandes :", o: ["une noisette", "un allongé", "un serré"], e: "*Une noisette* : un express avec une goutte de lait. *Un allongé* : avec plus d'eau. *Un serré* : très fort. *Un crème* : un grand café au lait." },
    ],
  },
  {
    titre: "Chez le coiffeur", intro: "Tu t'installes dans le fauteuil.",
    qs: [
      { dit: "On fait quoi aujourd'hui ?", qui: "La coiffeuse", q: "Tu veux raccourcir à peine. Tu dis :", o: ["Juste les pointes, s'il vous plaît.", "Juste les bouts ronds, s'il vous plaît.", "Juste un morceau, s'il vous plaît."], e: "*Couper les pointes* = enlever un ou deux centimètres. Les autres mots du salon : un dégradé, une frange, un brushing." },
      { dit: "Ça vous va comme longueur ?", qui: "La coiffeuse", q: "C'est encore trop long. Que réponds-tu ?", o: ["Un peu plus court, s'il vous plaît.", "Un peu plus petit, s'il vous plaît.", "Un peu moins grand, s'il vous plaît."], e: "Pour des cheveux, on dit *court* et *long*, pas *petit* et *grand*." },
    ],
  },
  {
    titre: "Chez le dentiste", intro: "Tu expliques ce qui ne va pas.",
    qs: [
      { q: "Une dent te fait mal au chaud et au froid. Tu dis qu'elle est :", o: ["sensible", "sensée", "sensitive"], e: "Une dent *sensible* réagit au chaud et au froid. *Sensé* veut dire raisonnable ; *sensitive* est un mot anglais." },
      { dit: "Je vais vous faire une petite anesthésie locale.", qui: "Le dentiste", q: "Cela veut dire :", o: ["Il endort seulement la zone à soigner.", "Il t'endort complètement.", "Il t'envoie dans un autre cabinet."], e: "Une anesthésie *locale* n'endort qu'un endroit. Une anesthésie *générale* endort tout le corps." },
    ],
  },
  {
    titre: "Chez l'opticien", intro: "Tu viens pour de nouvelles lunettes.",
    qs: [
      { q: "Tu vois mal de loin. Tu es :", o: ["myope", "presbyte", "hypermétrope"], e: "*Myope* : on voit mal de loin. *Presbyte* : on voit mal de près, avec l'âge. *Hypermétrope* : on voit mal de près, depuis toujours." },
      { dit: "Vous voulez des verres progressifs ?", qui: "L'opticien", q: "Ce sont des verres :", o: ["qui corrigent à la fois de près et de loin", "qui foncent au soleil", "qui grossissent peu à peu"], e: "Les verres *progressifs* corrigent toutes les distances dans le même verre. Ceux qui foncent au soleil sont des verres *photochromiques*." },
    ],
  },
  {
    titre: "Dans un magasin de vêtements", intro: "Tu as repéré un pantalon.",
    qs: [
      { q: "Tu veux l'essayer. Tu demandes :", o: ["Où sont les cabines d'essayage ?", "Où sont les salles d'essai ?", "Où sont les chambres à essayer ?"], e: "On essaie les vêtements dans une *cabine d'essayage*." },
      { dit: "Quelle taille faites-vous ?", qui: "La vendeuse", q: "Réponse naturelle :", o: ["Je fais du 42.", "Je suis de 42.", "J'ai 42 de taille."], e: "*Faire du* + taille : je fais du 42. Pour les chaussures, on parle de *pointure* : je chausse du 38." },
    ],
  },
  {
    titre: "Échanger un article", intro: "La veste achetée hier est trop petite.",
    qs: [
      { q: "Que dis-tu à la vendeuse ?", o: ["Je voudrais l'échanger contre la taille au-dessus.", "Je voudrais la changer avec la taille en haut.", "Je voudrais la rechanger pour plus de taille."], e: "On *échange* un article *contre* un autre. On dit *la taille au-dessus* et *la taille en dessous*." },
      { dit: "Vous avez le ticket de caisse ?", qui: "La vendeuse", q: "C'est :", o: ["la preuve d'achat remise à la caisse", "le billet pour entrer", "l'étiquette du vêtement"], e: "Le *ticket de caisse* prouve l'achat. Sans lui, pas d'échange ni de remboursement." },
    ],
  },
  {
    titre: "Le livreur", intro: "On sonne à ta porte.",
    qs: [
      { dit: "C'est un colis pour votre voisine, elle est absente. Je peux vous le laisser ?", qui: "Le livreur", q: "Tu acceptes. Que dis-tu ?", o: ["Oui, bien sûr, je le lui donnerai.", "Oui, bien sûr, je lui le donnerai.", "Oui, bien sûr, je la lui donnerai."], e: "*Le colis* devient *le*, *à ma voisine* devient *lui*. Et dans cet ordre : je *le lui* donnerai." },
      { q: "Le lendemain, tu trouves un papier disant qu'un livreur est passé en ton absence. C'est :", o: ["un avis de passage", "un accusé de réception", "une lettre de rappel"], e: "L'*avis de passage* indique où et quand récupérer le colis ou la lettre." },
    ],
  },
  {
    titre: "Le plombier", intro: "Tu as une fuite sous l'évier.",
    qs: [
      { q: "Avant les travaux, tu veux connaître le prix par écrit. Tu demandes :", o: ["un devis", "une facture", "une quittance"], e: "Le *devis* annonce le prix avant. La *facture* le réclame après. La *quittance* prouve qu'un loyer a été payé." },
      { dit: "Il faut changer le joint, il est mort.", qui: "Le plombier", q: "« Il est mort » veut dire ici :", o: ["Il est usé, il ne sert plus à rien.", "Il a disparu.", "Il est dangereux."], e: "Familièrement, un objet *mort* est hors d'usage. Un *joint* est la petite pièce qui empêche l'eau de passer." },
    ],
  },
  {
    titre: "Le service client", intro: "Tu appelles ton opérateur de téléphone.",
    qs: [
      { dit: "Votre appel est susceptible d'être enregistré.", qui: "Une voix enregistrée", q: "Cela veut dire que :", o: ["la conversation sera peut-être enregistrée", "la conversation sera forcément enregistrée", "ton appel n'a pas été pris"], e: "*Susceptible de* = qui peut éventuellement. Rien à voir ici avec une personne *susceptible*, qui se vexe facilement." },
      { dit: "Je vous mets en attente quelques instants.", qui: "Le conseiller", q: "Tu dois :", o: ["patienter sans raccrocher", "rappeler plus tard", "attendre un courrier"], e: "*Mettre en attente* = faire patienter en ligne, souvent en musique." },
    ],
  },
  {
    titre: "Le répondeur", intro: "Tu appelles un cabinet, et tu tombes sur le répondeur.",
    qs: [
      { dit: "Vous êtes bien au cabinet du docteur Martin. Nous sommes fermés le mercredi.", qui: "L'annonce", q: "« Vous êtes bien au… » veut dire :", o: ["Vous avez composé le bon numéro.", "Vous êtes confortablement installée.", "Vous allez bien."], e: "Au téléphone, *vous êtes bien chez…* ou *vous êtes bien au…* confirme qu'on a composé le bon numéro." },
      { q: "Tu laisses un message. Lequel est le plus clair ?", o: ["Bonjour, c'est madame Martin. Pourriez-vous me rappeler cet après-midi ? Merci.", "Allô ? Allô ? C'est moi. Rappelez-moi.", "Bonjour, rappelez-moi quand vous pourrez, vous savez qui c'est."], e: "Sur un répondeur : son nom, ce qu'on veut, et quand rappeler. Court, et dit lentement." },
    ],
  },
  {
    titre: "Le démarchage", intro: "Le téléphone sonne : un vendeur.",
    qs: [
      { dit: "Vous avez deux minutes pour une offre exceptionnelle ?", qui: "Le vendeur", q: "Tu veux refuser poliment mais fermement :", o: ["Non merci, je ne suis pas intéressée. Bonne journée.", "Peut-être, rappelez plus tard.", "Je ne sais pas, c'est quoi ?"], e: "Une phrase courte, un *non merci* clair, et on raccroche. *Intéressée* : au féminin, avec un e." },
      { q: "Ces appels commerciaux que personne n'a demandés, c'est du :", o: ["démarchage téléphonique", "marchandage téléphonique", "dépannage téléphonique"], e: "Le *démarchage*, c'est aller chercher des clients chez eux. Le *marchandage*, c'est discuter un prix." },
    ],
  },
  {
    titre: "Demander son chemin", intro: "Tu cherches la poste dans un quartier que tu ne connais pas.",
    qs: [
      { q: "Quelle question est la plus naturelle et la plus polie ?", o: ["Excusez-moi, vous savez où est la poste ?", "Dites, la poste, elle est où ?", "Pardon, où se la trouve la poste ?"], e: "*Excusez-moi* pour aborder, puis une question simple. On peut dire aussi : *je cherche la poste, s'il vous plaît*." },
      { dit: "Vous prenez la deuxième à droite, et c'est tout de suite sur votre gauche.", qui: "Un passant", q: "« La deuxième à droite », c'est :", o: ["la deuxième rue à droite", "la deuxième porte à droite", "deux fois à droite"], e: "Dans un itinéraire, *la première*, *la deuxième* désignent des rues. *Tout de suite sur votre gauche* = juste après, à gauche." },
    ],
  },
  {
    titre: "Indiquer le chemin", intro: "Un touriste t'arrête dans la rue.",
    qs: [
      { q: "Il cherche la gare, à cinq minutes de marche. Tu dis :", o: ["C'est tout près, à cinq minutes à pied.", "C'est tout prêt, cinq minutes de pied.", "C'est très près de cinq minutes."], e: "*Tout près* = proche, à ne pas confondre avec *tout prêt* = préparé. Et l'on dit : *à cinq minutes à pied*." },
      { q: "Tu ajoutes : « Continuez tout droit jusqu'au feu. » Le feu, c'est :", o: ["le feu de circulation", "un incendie", "un lampadaire"], e: "*Le feu* ou *le feu rouge* : le feu de circulation, même quand il est vert." },
    ],
  },
  {
    titre: "Invitée à dîner : l'arrivée", intro: "Tu sonnes chez des amis, un bouquet à la main.",
    qs: [
      { dit: "Oh, il ne fallait pas !", qui: "Ton amie", q: "Elle veut dire :", o: ["Merci, c'est trop gentil.", "Tu n'aurais pas dû venir.", "Je n'aime pas les fleurs."], e: "*Il ne fallait pas* est la formule rituelle pour remercier d'un cadeau. On répond : *ça me fait plaisir*." },
      { dit: "Fais comme chez toi.", qui: "Ton amie", q: "Réponse naturelle :", o: ["Merci, c'est gentil.", "Merci, je rentre chez moi.", "Non, chez moi c'est différent."], e: "*Fais comme chez toi* = mets-toi à l'aise." },
    ],
  },
  {
    titre: "Invitée à dîner : à table", intro: "Le repas est délicieux et très copieux.",
    qs: [
      { dit: "Tu reprendras bien un peu de gratin ?", qui: "Ton amie", q: "Tu n'as plus faim. Refus poli :", o: ["Il est délicieux, mais je n'en peux plus, merci.", "Non, j'en ai assez de ton gratin.", "Non merci, il ne fallait pas."], e: "On complimente d'abord, on refuse ensuite. *Je n'en peux plus* = je n'ai plus faim du tout.", t: "Mieux vaut éviter « je suis pleine » : cela se dit d'abord d'un animal qui attend des petits." },
      { q: "Pour féliciter la cuisinière, tu dis :", o: ["Tu t'es surpassée !", "Tu t'es dépassée !", "Tu t'es passée !"], e: "*Se surpasser* = faire encore mieux que d'habitude. *Être dépassée*, au contraire, c'est ne plus s'en sortir." },
    ],
  },
  {
    titre: "Les présentations", intro: "Une amie te présente quelqu'un.",
    qs: [
      { dit: "Je te présente Claire, ma belle-sœur.", qui: "Ton amie", q: "Que dis-tu à Claire ?", o: ["Enchantée !", "Présentée !", "Bienvenue !"], e: "*Enchantée* (au féminin à l'écrit) ou *ravie de vous rencontrer*. À l'oral, le masculin et le féminin s'entendent pareil." },
      { q: "La belle-sœur de ton amie, c'est par exemple :", o: ["la femme de son frère", "la fille de son mari", "la nouvelle femme de son père"], e: "*Belle-sœur* : la sœur du mari ou de la femme, ou bien l'épouse du frère. *Belle-fille* : la fille du conjoint, ou la femme du fils. *Belle-mère* : la mère du conjoint, ou la nouvelle femme du père." },
    ],
  },
  {
    titre: "Une naissance", intro: "Ta voisine vient d'avoir un bébé.",
    qs: [
      { q: "Que lui dis-tu en la croisant ?", o: ["Toutes mes félicitations !", "Tous mes souhaits !", "Bon rétablissement au bébé !"], e: "*Félicitations* pour un bonheur (naissance, mariage, réussite). *Meilleurs vœux* pour la nouvelle année." },
      { q: "Tu demandes le prénom du bébé. Quelle question est juste ?", o: ["Comment s'appelle-t-il ?", "Comment il s'appelle-t-il ?", "Comment est-ce qu'il s'appelle-t-il ?"], e: "Trois façons justes : *Comment s'appelle-t-il ?* (soigné), *Comment est-ce qu'il s'appelle ?* (courant), *Il s'appelle comment ?* (familier). On ne les mélange pas." },
    ],
  },
  {
    titre: "La pluie et le beau temps", intro: "Tu croises la gardienne de l'immeuble.",
    qs: [
      { dit: "Quel temps de chien !", qui: "La gardienne", q: "Elle trouve que le temps est :", o: ["très mauvais", "idéal pour sortir le chien", "un peu frais"], e: "*Un temps de chien* = un très mauvais temps. *Un froid de canard* = un très grand froid." },
      { dit: "Ils annoncent une éclaircie pour demain.", qui: "La gardienne", q: "Demain, il y aura :", o: ["du soleil entre les nuages", "un orage avec des éclairs", "du brouillard"], e: "Une *éclaircie* : le ciel se dégage un moment. À ne pas confondre avec un *éclair*, qui accompagne l'orage. *Ils annoncent* = la météo annonce." },
    ],
  },
  {
    titre: "À la réception de l'hôtel", intro: "Tu arrives avec ta valise.",
    qs: [
      { dit: "Vous avez une réservation à quel nom ?", qui: "Le réceptionniste", q: "Que réponds-tu ?", o: ["Au nom de Martin.", "Sous Martin de nom.", "Pour nom Martin."], e: "*Au nom de* : une réservation au nom de…, un colis au nom de…" },
      { dit: "La chambre doit être libérée avant midi.", qui: "Le réceptionniste", q: "« Libérer la chambre », c'est :", o: ["la quitter avec ses bagages", "la ranger", "la payer"], e: "*Libérer* une chambre = la quitter pour qu'elle soit disponible." },
    ],
  },
  {
    titre: "À l'aéroport", intro: "Tu arrives au comptoir de la compagnie.",
    qs: [
      { dit: "Vous avez des bagages à enregistrer ?", qui: "L'hôtesse", q: "Elle te demande si :", o: ["tu as des valises qui iront en soute", "tu veux filmer tes bagages", "tes bagages sont à ton nom"], e: "*Enregistrer* un bagage = le confier à la compagnie pour la soute. Le *bagage cabine* reste avec toi." },
      { q: "Le panneau des départs affiche que ton avion partira plus tard que prévu. Il est :", o: ["retardé", "annulé", "avancé"], e: "*Retardé* : il partira plus tard. *Annulé* : il ne partira pas. *Embarquement* : il est temps de monter à bord." },
    ],
  },
  {
    titre: "Chez le garagiste", intro: "Ta voiture ne démarre plus.",
    qs: [
      { q: "Tu expliques qu'elle ne marche plus du tout. Elle est :", o: ["en panne", "en peine", "en pause"], e: "*Être en panne* = ne plus fonctionner. *Tomber en panne*, *dépanner*, *une dépanneuse*." },
      { dit: "Il faut compter trois jours, le temps de recevoir la pièce.", qui: "Le garagiste", q: "« Il faut compter » veut dire :", o: ["Prévoyez environ trois jours.", "Comptez jusqu'à trois.", "Cela coûtera trois fois plus."], e: "*Il faut compter* + durée ou prix = il faut prévoir environ. Il faut compter cent euros." },
    ],
  },
  {
    titre: "Un voisin bruyant", intro: "Il est tard, et la musique du voisin est très forte.",
    qs: [
      { q: "Tu sonnes chez lui. Comment le lui demander sans te fâcher ?", o: ["Excusez-moi, vous pourriez baisser un peu la musique ?", "Baissez la musique, c'est insupportable.", "Votre musique, vous la baissez ou quoi ?"], e: "*Excusez-moi*, le conditionnel *vous pourriez*, et *un peu* : trois petites choses qui évitent la dispute." },
      { dit: "Oh pardon, je ne m'étais pas rendu compte.", qui: "Le voisin", q: "Il veut dire :", o: ["Il n'avait pas remarqué que c'était fort.", "Il ne veut pas rendre de comptes.", "Il n'a pas compté les heures."], e: "*Se rendre compte* = s'apercevoir, réaliser." },
    ],
  },
  {
    titre: "Demander un service", intro: "Tu pars une semaine et tu penses à tes plantes.",
    qs: [
      { q: "Comment le demander à ta voisine ?", o: ["Est-ce que ça vous dérangerait d'arroser mes plantes ?", "Il faudra arroser mes plantes.", "Arrosez-moi mes plantes."], e: "*Est-ce que ça vous dérangerait de…* : la façon la plus douce de demander un service." },
      { dit: "Pas du tout, avec plaisir !", qui: "La voisine", q: "Elle :", o: ["accepte", "refuse", "hésite"], e: "À *ça vous dérangerait ?*, répondre *pas du tout* signifie qu'on accepte : cela ne dérange pas." },
    ],
  },
  {
    titre: "Un retard", intro: "Tu arrives dix minutes après l'heure à un rendez-vous.",
    qs: [
      { q: "Que dis-tu en arrivant ?", o: ["Désolée, je suis en retard.", "Désolée, je suis retardée.", "Désolée, je suis tardive."], e: "On est *en retard*. Un train est *retardé*. *Tardif* se dit d'une heure ou d'une réponse." },
      { dit: "Ne vous en faites pas, ça arrive.", qui: "La secrétaire", q: "Elle te dit :", o: ["de ne pas t'inquiéter", "de ne pas recommencer", "de ne rien faire"], e: "*Ne pas s'en faire* = ne pas s'inquiéter. *Ça arrive* = cela peut arriver à tout le monde." },
    ],
  },
  {
    titre: "Annuler un rendez-vous", intro: "Tu ne peux pas aller demain chez le kiné.",
    qs: [
      { q: "Tu appelles pour annuler. Autrement dit, tu veux :", o: ["décommander", "recommander", "commander"], e: "*Décommander* = annuler un rendez-vous ou une commande." },
      { q: "Tu proposes une autre date :", o: ["Est-ce qu'on pourrait le reporter à jeudi ?", "Est-ce qu'on pourrait le rapporter à jeudi ?", "Est-ce qu'on pourrait le remporter à jeudi ?"], e: "*Reporter* = remettre à plus tard. *Rapporter* = apporter de nouveau. *Remporter* = gagner." },
    ],
  },
  {
    titre: "Un plat froid", intro: "Au restaurant, ton plat arrive tiède.",
    qs: [
      { q: "Comment le signaler poliment ?", o: ["Excusez-moi, mon plat est froid. Pourriez-vous le réchauffer ?", "C'est froid, c'est une honte.", "Reprenez ça tout de suite."], e: "On constate calmement, puis on demande au conditionnel : *pourriez-vous… ?*" },
      { dit: "Je suis navré, je vous le change tout de suite.", qui: "Le serveur", q: "« Navré » veut dire :", o: ["vraiment désolé", "très pressé", "un peu fâché"], e: "*Navré* est un *désolé* plus fort et plus soigné." },
    ],
  },
  {
    titre: "À l'accueil de l'hôpital", intro: "Tu viens pour une consultation.",
    qs: [
      { dit: "Vous avez votre carte Vitale et votre mutuelle ?", qui: "L'agent d'accueil", q: "La mutuelle, c'est :", o: ["l'assurance qui complète le remboursement des soins", "le médecin de famille", "le dossier médical"], e: "En France, la *carte Vitale* est la carte de l'Assurance maladie. La *mutuelle*, ou complémentaire santé, rembourse une partie de ce qui reste à payer." },
      { dit: "Installez-vous en salle d'attente, on viendra vous chercher.", qui: "L'agent d'accueil", q: "Tu dois :", o: ["attendre là jusqu'à ce qu'on t'appelle", "aller chercher quelqu'un", "revenir un autre jour"], e: "*On viendra vous chercher* = quelqu'un viendra vous appeler quand ce sera votre tour." },
    ],
  },
  {
    titre: "Au laboratoire", intro: "Le médecin t'a prescrit des analyses.",
    qs: [
      { q: "On va te prélever un peu de sang. C'est :", o: ["une prise de sang", "une prise de tension", "un don du sang"], e: "Une *prise de sang* sert aux analyses. *Prendre la tension*, c'est mesurer la pression du sang avec un brassard." },
      { dit: "Vous aurez les résultats sous 48 heures.", qui: "L'infirmière", q: "« Sous 48 heures » veut dire :", o: ["dans les deux jours au plus tard", "dans exactement deux jours", "pas avant deux jours"], e: "*Sous* + durée = avant la fin de ce délai : sous 48 heures, sous huit jours." },
    ],
  },
  {
    titre: "À la médiathèque", intro: "Tu cherches un roman.",
    qs: [
      { q: "Tu veux le prendre chez toi pour trois semaines. Tu veux :", o: ["l'emprunter", "le prêter", "le louer"], e: "Le lecteur *emprunte*, la bibliothèque *prête*. *Louer* suppose de payer." },
      { dit: "Il est déjà sorti, mais je peux vous le réserver.", qui: "La bibliothécaire", q: "« Il est sorti » veut dire ici :", o: ["Quelqu'un l'a déjà emprunté.", "Il vient d'être publié.", "Il n'existe plus."], e: "Dans une bibliothèque, un livre *sorti* est un livre emprunté. Ailleurs, un livre qui *sort* est un livre qui paraît." },
    ],
  },
  {
    titre: "S'inscrire à une activité", intro: "Tu te renseignes pour un cours de gymnastique douce.",
    qs: [
      { dit: "Pour le mardi, les inscriptions sont closes.", qui: "L'animatrice", q: "Cela veut dire :", o: ["On ne peut plus s'inscrire le mardi.", "Les inscriptions du mardi commencent.", "Le mardi, c'est gratuit."], e: "*Clos, close* = fermé, terminé. L'affaire est close, les inscriptions sont closes." },
      { dit: "La cotisation est de 40 euros pour l'année.", qui: "L'animatrice", q: "La cotisation, c'est :", o: ["la somme que paient les membres", "le prix d'un seul cours", "une amende"], e: "La *cotisation* est ce que chaque membre verse à une association ou à un club." },
    ],
  },
  {
    titre: "Chez le fleuriste", intro: "Tu choisis un bouquet.",
    qs: [
      { dit: "C'est pour offrir ?", qui: "Le fleuriste", q: "Il te demande cela pour savoir :", o: ["s'il doit faire un bel emballage", "si tu veux une réduction", "si tu paieras plus tard"], e: "*C'est pour offrir ?* = est-ce un cadeau ? Si oui, on te fait un paquet-cadeau." },
      { q: "Tu veux des fleurs qui durent. Tu demandes :", o: ["Lesquelles tiennent le plus longtemps ?", "Lesquelles restent le plus tard ?", "Lesquelles durent le plus loin ?"], e: "Des fleurs qui *tiennent* = qui restent belles longtemps." },
    ],
  },
  {
    titre: "Chez le boucher", intro: "C'est ton tour.",
    qs: [
      { dit: "Il vous fallait autre chose ?", qui: "Le boucher", q: "Pourquoi dit-il « fallait », à l'imparfait ?", o: ["Par politesse : c'est plus doux que « il vous faut »", "Parce qu'il parle d'hier", "C'est une erreur de sa part"], e: "L'imparfait de politesse adoucit la question : *il vous fallait… ?*, *vous vouliez… ?*, *je voulais vous demander…*" },
      { q: "Tu veux quatre tranches de jambon, pas trop épaisses. Tu précises :", o: ["Des tranches fines, s'il vous plaît.", "Des tranches maigres, s'il vous plaît.", "Des tranches étroites, s'il vous plaît."], e: "Une tranche est *fine* ou *épaisse*. *Maigre* se dit d'une viande sans gras, *étroit* d'un passage." },
    ],
  },
  {
    titre: "Au point relais", intro: "Tu viens chercher un colis.",
    qs: [
      { dit: "Vous avez le numéro de suivi ?", qui: "Le commerçant", q: "C'est :", o: ["le numéro qui permet de suivre le trajet du colis", "ton numéro de téléphone", "le numéro de ta rue"], e: "Le *numéro de suivi* se trouve dans le message qui annonce l'arrivée du colis." },
      { dit: "Il me faut une pièce d'identité au nom du destinataire.", qui: "Le commerçant", q: "Le destinataire, c'est :", o: ["la personne à qui le colis est adressé", "la personne qui l'a envoyé", "le livreur"], e: "*L'expéditeur* envoie, *le destinataire* reçoit." },
    ],
  },
  {
    titre: "En taxi", intro: "Tu montes à l'arrière avec ta valise.",
    qs: [
      { q: "Tu indiques où tu vas :", o: ["À la gare, s'il vous plaît.", "Sur la gare, s'il vous plaît.", "Chez la gare, s'il vous plaît."], e: "On va *à* un lieu : à la gare, à l'aéroport. On va *chez* une personne." },
      { dit: "Je passe par le périph ou par le centre ?", qui: "Le chauffeur", q: "« Le périph », c'est :", o: ["le boulevard périphérique, qui fait le tour de la ville", "un raccourci payant", "le quartier de la gare"], e: "*Le périph* est le raccourci familier de *périphérique*." },
    ],
  },
  {
    titre: "Une bousculade", intro: "Dans la rue, quelqu'un te heurte en passant.",
    qs: [
      { dit: "Oh pardon, je ne vous avais pas vue !", qui: "Un passant", q: "Réponse naturelle :", o: ["Il n'y a pas de mal.", "Il n'y a pas de quoi.", "Je vous en prie de rien."], e: "*Il n'y a pas de mal* ou *ce n'est rien* répondent à une excuse. *Il n'y a pas de quoi* répond à un merci." },
      { q: "Un peu plus loin, c'est toi qui marches sur le pied de quelqu'un. Tu dis :", o: ["Oh, excusez-moi !", "Oh, je vous en prie !", "Oh, s'il vous plaît !"], e: "*Excusez-moi* ou *pardon* : les deux mots qui réparent tout." },
    ],
  },
  {
    titre: "Au cinéma", intro: "Tu regardes le programme avec une amie.",
    qs: [
      { dit: "Il passe en VO ou en VF ?", qui: "Ton amie", q: "« En VO », le film est :", o: ["dans sa langue d'origine, avec des sous-titres", "doublé en français", "en très grand écran"], e: "*VO* = version originale, le plus souvent sous-titrée (VOST). *VF* = version française, doublée." },
      { q: "À la caisse, on t'annonce que la séance est complète. Cela veut dire :", o: ["Il n'y a plus de places.", "Le film est terminé.", "Le film passe en entier."], e: "*Complet* = plein, il ne reste aucune place. On le dit aussi d'un hôtel, d'un train, d'un restaurant." },
    ],
  },
  {
    titre: "Consoler une amie", intro: "Une amie te raconte ses soucis.",
    qs: [
      { q: "Pour lui montrer que tu la comprends, tu dis :", o: ["Ma pauvre, ça ne doit pas être facile.", "Ma pauvre, tu n'es pas facile.", "Ma pauvre, c'est du facile."], e: "*Ça ne doit pas être facile* : on se met à la place de l'autre. *Tu n'es pas facile* serait un reproche." },
      { q: "Pour l'encourager, tu ajoutes :", o: ["Tiens bon, ça va s'arranger.", "Tiens bien, ça va se ranger.", "Tiens-toi, ça va s'arranger."], e: "*Tenir bon* = ne pas se décourager. *Ça va s'arranger* = les choses vont s'améliorer." },
    ],
  },
  {
    titre: "Refuser une invitation", intro: "On t'invite samedi, mais tu es déjà prise.",
    qs: [
      { q: "Quelle est la façon la plus aimable de refuser ?", o: ["Ça m'aurait fait plaisir, mais je ne suis pas libre samedi.", "Non, samedi, je ne veux pas.", "Samedi ? Impossible."], e: "Le conditionnel passé (*ça m'aurait fait plaisir*) dit le regret. Et l'on peut proposer : une autre fois, avec joie." },
      { dit: "Ce n'est que partie remise !", qui: "Ton amie", q: "Cela veut dire :", o: ["On le fera une autre fois.", "C'est annulé pour toujours.", "On partira plus tard."], e: "*Ce n'est que partie remise* = ce n'est que reporté, on se rattrapera." },
    ],
  },
  {
    titre: "Un compliment", intro: "Tu discutes avec une commerçante.",
    qs: [
      { dit: "Vous parlez très bien français !", qui: "La commerçante", q: "Réponse naturelle et modeste :", o: ["Merci, c'est gentil. J'essaie de m'y remettre.", "Non, c'est faux.", "Oui, je sais."], e: "*S'y remettre* = recommencer quelque chose qu'on avait arrêté. Exactement ce que tu fais avec ce cahier." },
      { q: "Tu veux dire que tu as un peu perdu l'habitude de parler français. Tu dis :", o: ["Je suis un peu rouillée.", "Je suis un peu rouillante.", "Je suis un peu ruinée."], e: "*Être rouillé* = avoir perdu la main faute de pratique. Comme la rouille, cela part en frottant un peu." },
    ],
  },
  {
    titre: "Quand on parle trop vite", intro: "Au guichet, l'employé parle vite et tu perds le fil.",
    qs: [
      { q: "Que lui dis-tu ?", o: ["Pardon, vous pourriez parler un peu plus lentement ?", "Pardon, vous parlez mal.", "Pardon, parlez moins de vite."], e: "*Un peu plus lentement*, avec le conditionnel : personne ne se vexe, et tout le monde ralentit. Demander de répéter n'a rien de honteux." },
      { q: "Tu n'as pas entendu sa dernière phrase. Quelle réaction est la plus polie ?", o: ["Pardon ?", "Quoi ?", "Hein ?"], e: "*Pardon ?* ou *Comment ?* sont polis. *Quoi ?* est familier, *Hein ?* encore plus." },
    ],
  },
  {
    titre: "Quand le mot ne vient pas", intro: "Tu parles avec quelqu'un, et un mot t'échappe.",
    qs: [
      { q: "Pour gagner un peu de temps, tu dis :", o: ["Attendez, j'ai le mot sur le bout de la langue.", "Attendez, j'ai la langue sur le bout du mot.", "Attendez, j'ai le mot au bord des dents."], e: "*Avoir un mot sur le bout de la langue* : la phrase que tout le monde emploie. La dire fait sourire et laisse le temps de chercher." },
      { q: "Tu ne retrouves pas « tire-bouchon ». Comment contourner ?", o: ["Vous savez, le truc qui sert à ouvrir les bouteilles.", "Vous savez, le truc pour qui ouvre les bouteilles.", "Vous savez, le truc qu'il sert d'ouvrir."], e: "Décrire à quoi sert l'objet, c'est la meilleure parade : *le truc qui sert à…*, *l'appareil pour…*. Tout le monde le fait, tous les jours." },
    ],
  },
  {
    titre: "Chez le cordonnier", intro: "Les talons de tes chaussures sont usés.",
    qs: [
      { q: "Tu vas voir l'artisan qui répare les chaussures. C'est :", o: ["le cordonnier", "le chausseur", "le cordelier"], e: "Le *cordonnier* répare les chaussures et refait souvent les clés. Le *chausseur* les vend." },
      { dit: "Ce sera prêt jeudi en fin de journée.", qui: "Le cordonnier", q: "Tu peux passer :", o: ["jeudi vers 17 ou 18 heures", "jeudi matin", "vendredi en fin de journée"], e: "*En fin de journée* = à la fin de l'après-midi. *En début de matinée*, *en milieu de semaine* : la même tournure." },
    ],
  },
  {
    titre: "Négocier un prix", intro: "Dans une brocante, un vase te plaît, mais il est un peu cher.",
    qs: [
      { q: "Que demandes-tu au vendeur ?", o: ["Vous pourriez me faire un petit prix ?", "Vous pourriez me faire un prix bas ?", "Vous pourriez me faire le prix moins ?"], e: "*Faire un prix* = accorder une réduction. *Un petit prix* : l'expression consacrée." },
      { dit: "Allez, je vous le fais à dix euros.", qui: "Le vendeur", q: "Il veut dire :", o: ["Je vous le vends dix euros.", "Je vous le fabrique pour dix euros.", "Je vous le prépare dans dix minutes."], e: "Chez les commerçants, *je vous le fais à…* = je vous le laisse à ce prix." },
    ],
  },
  {
    titre: "Un formulaire", intro: "Au guichet, on te tend un papier à remplir.",
    qs: [
      { q: "Tu n'es pas sûre de bien comprendre. Tu demandes :", o: ["Pourriez-vous m'aider à le remplir ?", "Pourriez-vous m'aider à le remplacer ?", "Pourriez-vous m'aider à le répandre ?"], e: "On *remplit* un formulaire. Les employés ont l'habitude d'aider : il suffit de demander." },
      { dit: "Vous datez et vous signez en bas, là où il y a la croix.", qui: "L'employée", q: "Tu dois :", o: ["écrire la date et signer à l'endroit marqué", "faire une croix à la place de ta signature", "cocher la case du bas"], e: "*Dater* = écrire la date. La croix indique simplement l'endroit où signer." },
    ],
  },
  {
    titre: "Le téléphone qui coupe", intro: "Tu es en ligne, et tu entends de moins en moins bien.",
    qs: [
      { q: "Comment le dire ?", o: ["Je vous entends très mal, ça coupe.", "Je vous écoute très mal, ça casse.", "Je vous entends très mal, ça ferme."], e: "*Ça coupe* = la communication s'interrompt par moments. On dit aussi : *la ligne est mauvaise*, *je capte mal*." },
      { q: "Ton téléphone va s'éteindre. Tu préviens :", o: ["Je n'ai presque plus de batterie.", "Je n'ai presque plus de pile de téléphone.", "Je n'ai presque plus de courant dedans."], e: "*Ne plus avoir de batterie* : la batterie est vide. On *recharge* son téléphone avec un *chargeur*." },
    ],
  },
];
