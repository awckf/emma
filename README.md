# emma-web

Site vitrine one-page pour Emma, community manager freelance en
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

- **Identité** : logo (svg/png), palette de couleurs définitive
  (actuellement : terracotta `#e07a5f`, sauge `#81b29a`, sable
  `#f2cc8f`), police définitive (actuellement Fraunces + Nunito Sans)
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
