# Getting Started with Create React App

In the project directory, you can run:

## `npm start`

$ npm install (Installez les dépendances)
$ npm start

## `Utilisation`

Création d'une interface utilisateur dynamique et réactive.

fichier index.js :
Ce fichier comprend notre logique de route (react-router-dom)
"/" : Correspond à la page d'accueil
"/location/:id" : Correspond à la page produit (dynamique)
"/About" : Correspond à la page à propos
"\*" : Correspond à toutes routes ( page error)

Le composant navbar : Chaque fois qu'un utilisateur clique sur un lien dans le Navbar, l'état du composant Navbar est mis à jour, ce qui déclenche un re-rendu de l'interface utilisateur pour refléter le lien actif et mettre en évidence la section du site correspondante.

Le composant banner :
Chaque fois que le contenu du composant Banner change, l'état du composant est mis à jour, ce qui déclenche un re-rendu de l'interface utilisateur pour refléter le nouveau contenu.

Le composant collapse :
Chaque fois qu'un utilisateur clique sur le bouton "Afficher" ou "Masquer", l'état du composant Collapse est mis à jour, ce qui déclenche un re-rendu de l'interface utilisateur pour refléter l'état actuel.

Le composant slider :
Chaque fois qu'un utilisateur fait glisser la poignée, l'état du composant Slider est mis à jour, ce qui déclenche un re-rendu de l'interface utilisateur pour refléter la nouvelle valeur sélectionnée.

Le composant gallery :
Chaque fois qu'un utilisateur arrive sur le site, une gallery de logement lui est proposé.
Celle-ci est disponible grâce à un fichier de donnés. (Le backend est en cours de réalisation)
#   K a s a _ P r o j e t _ 7  
 