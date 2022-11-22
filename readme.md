# Test technique FDJ réalisé par Nicolas Coulange

## Setup
Pour démarrer le frontend :
- `cd frontend`
- `npm install`
- `npm run dev`

Pour démarrer le backend :
- `cd backend`
- `npm install`
- `npm run dev`

## Technologies
### Backend
J'ai choisi le framework NestJS pour le backend.
Celui-ci propose une architecture robuste et complète.

Le code est organisé par modules, souvent liés directement à un domaine métier. Ici, les trois modules sont `leagues`, `players`, et `teams`.

### Frontend
J'ai choisi d'utiliser Vue 3 pour le frontend. J'ai utilisé le template (Vitesse)[https://github.com/antfu/vitesse] qui propose un agencement de librairies pour le moins complet.

## Documentation
Une documentation OpenAPI est disponible à l'url /api servie par NestJS.

## Fort traffic
Pour faire face au fort traffic, j'ai mis en place deux mécaniques de cache.
La première est du cache HTTP avec le header `Cache-Control`. Il permet à un seul et même utilisateur de ne pas effectuer la même requête de façon répété. Le TTL de ce cache est fixé à 1 heure.
La seconde est du cache automatique de réponse côté serveur. Cela permet de préserver la base de données de fortes montées en charge. Le TTL de ce cache est lui aussi fixé à 1 heure. Note : en l'état ce cache utilise la mémoire vive de NodeJS. Il serait recommandé d'utiliser Redis (ou équivalent) en production. 
Aussi, le caching de réponse est généralement effectué avec des outils commme Squid ou Varnish afin de réduire également la charge sur le serveur applicatif.

## Axes d'améliorations
J'avais peu de temps pour réaliser ce test technique et j'ai dû faire quelques concessions. Voici quelques points que j'aurais aimé améliorer :
- Le frontend charge beaucoup de librairies non utilisées (Pinia, i18n, nprogress, ...). Il serait bon de les désinstaller.
- Aucun test n'est effectué côté front ou back. J'aurais aimé avoir le temps de tester au moins le frontend avec Vitest ou Cypress.
- La doc d'api utilise des types nestés. Ainsi il est indiqué que sur l'endpoint `/leagues`, les leagues, teams et players sont renvoyés. Hors en realité, seuls les leagues et les teams. L'agencement des types en OpenAPI est parfois chronophage et j'ai préféré laisser cette petite erreur.
- La vue `liste de joueurs` ne propose pas de bouton retour. En effet, celui-ci aurait requis une refonte de la page de recherche ligue et liste d'équipes. Je m'en suis rendu compte à la fin et j'ai choisi de ne pas implémenter de bouton retour. Le retour de navigateur fonctionne mais fait revenir à un état vierge.
- L'API n'indique pas les liens liés à chaque ressource.
- Le frontend ne gère pas les éventuelles erreurs du serveur.

J'espère que malgré ces quelques manques, vous pourrez juger de mes compétences à leurs juste valeur.