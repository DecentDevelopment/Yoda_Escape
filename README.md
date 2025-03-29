# **Yoda Escape**  

## Description  
**Yoda Escape** est un jeu interactif à choix multiples se déroulant dans l'univers de Star Wars. Le joueur incarne Yoda et doit s'échapper du vaisseau de Dark Vador, l'Exécutor, tout en évitant des pièges et en affrontant des dilemmes. À travers des choix stratégiques et des actions décisives, le joueur progresse dans l'histoire et tente de récupérer son sabre laser pour survivre à cette aventure périlleuse.  

---

## Fonctionnalités principales  
- **Choix du personnage** : Sélectionner un skin de Yoda (Vert ou Rouge) avant de commencer l’aventure.  
- **Caractéristiques ajustables** : Le joueur peut modifier la répartition initiale entre les points de vie et la force grâce à une barre interactive.  
- **Progression à choix multiples** : Les décisions prises influencent directement l'issue du jeu. Chaque choix peut conduire à la victoire, à une perte de vie ou à la défaite.  
- **Graphismes et animations** : Le jeu utilise un canevas HTML pour afficher les niveaux, et des images pixelisées pour Yoda et les éléments du décor.  
- **Écran Game Over et Victoire** : Deux écrans différents apparaissent selon le succès ou l’échec du joueur dans l'aventure.  

---

## Technologies utilisées  
- **HTML5** : Structure de la page et des différents écrans (menu principal, niveaux, victoire, défaite).  
- **CSS3** : Mise en page et design pour améliorer l’expérience utilisateur. Animation des boutons et gestion des transitions visuelles.  
- **JavaScript (ES6)** :  
  - Gestion de la logique du jeu, des niveaux et des interactions.  
  - Dynamisme des choix du joueur, actualisation des caractéristiques (force et vie).  
  - Utilisation de l’API Canvas pour dessiner la carte et gérer le positionnement du personnage.  
  - Système de gestion des niveaux via une Map pour enregistrer les choix possibles et les actions associées.  
  - Événements pour gérer les clics des boutons et les changements d’écran.  

---

## Installation et lancement  
### Prérequis  
- Un navigateur moderne prenant en charge HTML5 et JavaScript.  
- Aucun serveur externe n'est nécessaire, car le projet peut être lancé directement via un fichier local.  

### Étapes  
1. **Télécharger les fichiers** du projet (HTML, CSS, JavaScript, images).  
2. Ouvrir le fichier **index.html** dans votre navigateur.  
3. Commencer l’aventure et essayer de vous échapper du vaisseau de Dark Vador !  

---

## Structure du projet  
### Fichiers principaux  
- **index.html** : Contient la structure HTML du jeu.  
- **stylesheet.css** : Fichier de style pour la mise en page et le design.  
- **projetjs.js** : Contient la logique du jeu et la gestion des événements.  
- **Images** : Contient les assets graphiques utilisés (Yoda pixelisé, icônes, fonds, etc.).  

### Fonctionnalités JavaScript importantes  
- **Personnalisation du personnage** : Le joueur choisit entre deux skins et ajuste ses points de vie et de force grâce à un *input range*.  
- **Système de niveaux** : Chaque niveau est représenté par une entrée dans la variable `levels` (un `Map` JavaScript). Les actions, dialogues, et conséquences des choix sont définis dans chaque niveau.  
- **Canvas** : Dessin dynamique de la carte du donjon et du personnage. La visibilité est limitée autour de Yoda, simulant un "brouillard de guerre".  
- **Interactions utilisateur** : Les boutons et choix sont gérés via des événements *addEventListener*.

---

## Exemple de niveaux  
1. **Cellule initiale** :  
   - Choix entre persuader un Stormtrooper ou le menacer.  
   - Le mauvais choix peut entraîner une perte de vie.  
2. **Salle à trois portes** :  
   - Une porte mène à une potion, une autre à la défaite, et la dernière au sabre laser.  
3. **Récupération du sabre** :  
   - Permet de récupérer votre arme, indispensable pour la suite de l'aventure.

---

## Développeurs  
Créé par une équipe de jeunes développeurs passionnés par Star Wars et les jeux vidéo.  

---

## Améliorations possibles  
- Ajouter plus de niveaux et d’énigmes.  
- Intégrer des animations supplémentaires pour enrichir l’expérience visuelle.  
- Développer une mécanique de combat contre Dark Vador en phase finale.  
- Ajouter un système de sauvegarde pour reprendre la partie après un Game Over.  

---

## Licence  
Ce projet est libre d’utilisation à des fins éducatives et personnelles. Pour toute réutilisation ou modification, merci de mentionner les développeurs originaux.  

---

## Remerciements  
Un grand merci à la communauté Star Wars pour son inspiration et son univers captivant. 🌟 Que la Force soit avec vous !
