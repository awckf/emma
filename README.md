# emma-web

Site vitrine one-page pour Emmagpie (Emma), community manager freelance en
reconversion (ex-assistante sociale). Fil conducteur : **"Au service
des humains"**.

Stack : HTML / CSS / JavaScript vanilla, aucun framework, aucun
build — déployable directement tel quel.

## Structure

```
emma-web/
├── index.html                  # page unique, toutes les sections
├── legal/mentions-legales.html # mentions légales
├── css/{variables,reset,style}.css
├── js/main.js                  # menu mobile, reveal au scroll, formulaire
├── assets/images/{logo,hero,portfolio}/
├── robots.txt
└── CNAME                       # à créer une fois le domaine confirmé
```

## Aperçu en local

Pas de build nécessaire. Deux options :

```bash
# option simple : ouvrir directement le fichier
xdg-open index.html

# option recommandée (nécessaire pour que fetch() du formulaire fonctionne bien)
python3 -m http.server 8000
# puis http://localhost:8000
```

## Déploiement GitHub Pages

1. Pousser ce dépôt sur GitHub (branche `main`).
2. Repo → Settings → Pages → Source : branche `main`, dossier `/ (root)`.
3. Une fois le nom de domaine confirmé : créer un fichier `CNAME` à la
   racine contenant uniquement le domaine (ex. `www.emma-cm.fr`), et
   configurer un enregistrement DNS `CNAME`/`A` chez le registrar vers
   GitHub Pages.

## Informations encore attendues côté cliente

Le site est actuellement rempli avec des placeholders (marqués
`TODO` dans le code) en attendant :

- **Identité** : logo en place dans le Hero (`assets/images/logo/logo-badge.png`,
  fond détouré depuis la capture "papier" fournie — texte et oiseau
  bien lisibles sur ce fond, contrairement à la version fond noir).
  Favicon généré à partir de l'oiseau du logo
  (`assets/images/logo/favicon-32.png` / `favicon-180.png`). À
  remplacer par un export propre (SVG ou PNG haute résolution) dès que
  possible pour une netteté optimale. Police
  définitive (actuellement Fraunces + Nunito Sans, à confirmer si
  Canva utilise d'autres polices). Palette appliquée : bordeaux
  `#862043`, crème `#ede3d8`, blanc cassé `#f8f7f2`, anthracite
  `#272626`, quasi-noir `#0a0405` (palette officielle "Emmagpie"
  fournie par la cliente sur Canva).
- **Textes** : validation/réécriture de "Mon histoire" et "Pourquoi
  moi" (brouillons déjà en place), description finale des 3 services
- **Portfolio** : secteur du client, visuels anonymisés, chiffres
  réels (engagement, abonnés...)
- **Formulaire** : branché sur Web3Forms (`action="https://api.web3forms.com/submit"`),
  clé d'accès liée à `emmagpie.cm@gmail.com` (clé publique côté
  client par design chez Web3Forms, pas un secret à protéger). Note :
  Formspree a été abandonné en cours de route, leur ancien mode "email
  direct sans compte" a été supprimé par Formspree en 2024 (confirmé
  par un test réel qui a échoué en 404) — nécessite maintenant un
  compte, d'où le passage à Web3Forms.
- **Calendly** : en attente. Remplacé temporairement par un encart
  "Bientôt disponible" (`index.html`, section Contact) le temps que
  l'offre "Appel découverte" soit prête côté cliente.
- **Réseaux sociaux** : URL Instagram réelle (footer). LinkedIn déjà
  branché ; pas de Facebook (la cliente n'en a pas).
- **Nom de domaine** : pour créer le fichier `CNAME`
- **Mentions légales** : statut, SIRET, adresse (`legal/mentions-legales.html`)
- **Dépôt distant** : URL du repo GitHub pour configurer le remote et pousser

## Versioning

Dépôt git local initialisé dès le départ, un commit par étape
significative. Le remote GitHub sera ajouté dès que l'URL du dépôt
distant sera fournie :

```bash
git remote add origin <url-du-repo>
git push -u origin main
```
