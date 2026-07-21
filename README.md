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

- **Identité** : logo en place dans le Hero à titre de test
  (`assets/images/logo/logo-badge.png`, fond détouré depuis une
  capture Canva). À remplacer par un export propre dès que possible :
  le texte "Emmagpie" du haut du badge est quasi invisible dans le
  fichier actuel (texte bordeaux très sombre sur fond noir, contraste
  quasi nul). Police
  définitive (actuellement Fraunces + Nunito Sans, à confirmer si
  Canva utilise d'autres polices). Palette appliquée : bordeaux
  `#862043`, crème `#ede3d8`, blanc cassé `#f8f7f2`, anthracite
  `#272626`, quasi-noir `#0a0405` (palette officielle "Emmagpie"
  fournie par la cliente sur Canva).
- **Textes** : validation/réécriture de "Mon histoire" et "Pourquoi
  moi" (brouillons déjà en place), description finale des 3 services
- **Portfolio** : secteur du client, visuels anonymisés, chiffres
  réels (engagement, abonnés...)
- **Formulaire** : identifiant Formspree réel (`js`/`index.html`,
  actuellement `YOUR_FORM_ID`) et adresse email de réception
- **Calendly** : lien réel de l'événement "Appel découverte"
  (actuellement un lien d'exemple dans `index.html`)
- **Réseaux sociaux** : URLs Instagram / LinkedIn / Facebook (footer)
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
