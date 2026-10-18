# Eslam Ashraf Selim — Portfolio

A static portfolio site (HTML, CSS, JavaScript — no build step) with an Apple-style design.

```
index.html          page structure
css/style.css       all styles (light + dark mode)
js/data.js          PROJECT DATA — cards and project details screens are rendered from this
js/app.js           rendering, project details routing (#/project/<id>), screenshot gallery, animations
assets/             logo-mark.svg, logo.svg, Eslam_Ashraf_Selim_CV.pdf
assets/projects/    screenshots per project: <project-id>/1.webp, 2.webp, 3.webp
```

## Run locally
Open `index.html` in a browser, or serve the folder: `python3 -m http.server 8000`.

## Edit your content
- **Projects:** edit `js/data.js`. Each project drives its home-page card, its details screen (`#/project/farrah-now`, `#/project/mv-limousine`, `#/project/babytrack`, `#/project/foteek`, `#/project/rbcs`, `#/project/gobite`) and its screenshot gallery. Add a new object to the array to add a project.
- **Screenshots:** put 3 images in `assets/projects/<project-id>/` as `1.webp`, `2.webp`, `3.webp` and list them in the project's `images` array. Convert PNGs with: `cwebp -q 80 in.png -o out.webp` (keep them under ~150 KB each).
- **Store links:** in `js/data.js` replace every `'#'` in `links` with your Google Play / App Store URLs.
- **LinkedIn / GitHub:** in `index.html`, replace the two `href="#"` links in the contact section.
- **CV:** replace `assets/Eslam_Ashraf_Selim_CV.pdf` with a newer file of the same name.

## Deploy
Upload the whole folder to Netlify (drag & drop), Vercel, Cloudflare Pages or GitHub Pages. The details screens use hash routes, so no server configuration is needed.
