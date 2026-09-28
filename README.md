# Álvaro Ras Carmona — Portfolio

Static portfolio website for **Álvaro Ras Carmona, PhD** — AI/ML Scientist in Computational Biology.

## Deploy on GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio` or `username.github.io`).
2. Upload **all files** from this folder to the root of the repository:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `favicon.svg`
   - `robots.txt`
   - `alvaro-ras-carmona-profile-cv.pdf`
   - `assets/` (folder with images)
3. In the repo: **Settings → Pages → Source → Deploy from a branch → `main` / `/ (root)`**.
4. After a minute, the site will be live at:
   - `https://<username>.github.io/<repo>/`  
   - or `https://<username>.github.io/` if the repo is named `<username>.github.io`.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python -m http.server 8080
```

## Structure

```
├── index.html
├── styles.css
├── script.js
├── favicon.svg
├── robots.txt
├── alvaro-ras-carmona-profile-cv.pdf
└── assets/
    ├── protein-field.jpg
    ├── rag-network.jpg
    ├── sequence-embedding.jpg
    └── peptide-design.jpg
```

Pure HTML + CSS + vanilla JS. No build step required.
