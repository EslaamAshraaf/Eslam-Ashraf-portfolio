# Eslam Ashraf Selim — Portfolio

A static portfolio site (HTML, CSS, JavaScript — no build step) with an Apple-style design.

```
index.html          page structure
css/style.css       all styles (light + dark mode)
js/data.js          PROJECT DATA — cards and project details screens are rendered from this
js/app.js           rendering, project details routing (#/project/<id>), animations
assets/             logo-mark.svg, logo.svg, Eslam_Ashraf_Selim_CV.pdf
```

## Run locally
Open `index.html` in a browser, or serve the folder: `python3 -m http.server 8000`.

## Edit your content
- **Projects:** edit `js/data.js`. Each project drives its home-page card and its details screen (`#/project/farrah-now`, `#/project/mv-limousine`, `#/project/babytrack`). Add a new object to the array to add a project.
- **Store links:** in `js/data.js` replace every `'#'` in `links` with your Google Play / App Store URLs.
- **LinkedIn / GitHub:** in `index.html`, replace the two `href="#"` links in the contact section.
- **CV:** replace `assets/Eslam_Ashraf_Selim_CV.pdf` with a newer file of the same name.

## Deploy
Upload the whole folder to Netlify (drag & drop), Vercel, Cloudflare Pages or GitHub Pages. The details screens use hash routes, so no server configuration is needed.
