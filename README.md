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

## Portfolio AI assistant (GitHub Pages + Cloudflare Worker)
1. In Cloudflare, create a Worker and paste the contents of `worker/index.js` into its editor, then deploy it.
2. In the Worker settings, store the Gemini key as an encrypted secret named `GEMINI_API_KEY` (never put it in this repository).
3. Copy the Worker's `workers.dev` URL and add `/api/chat`; put the full URL in `js/chat-config.js` as `window.PORTFOLIO_CHAT_ENDPOINT`.
4. Deploy this portfolio to GitHub Pages. The Worker currently allows requests from `https://eslaamashraaf.github.io`; update `SITE_ORIGIN` in `worker/index.js` if the site moves to another origin.
5. Configure a Cloudflare rate limit for the Worker route to protect the Gemini quota. CORS restricts browser access to the portfolio origin but is not a replacement for rate limiting.

The Worker uses Gemini `generateContent` and contains the public portfolio facts used to ground answers. Review/update `PORTFOLIO_CONTEXT` in `worker/index.js` when portfolio details change. Free model quotas and availability can change.
