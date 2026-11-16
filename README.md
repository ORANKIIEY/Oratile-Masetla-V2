# Oratile Masetla — Portfolio

**Live:** https://oratile-masetla-v2.vercel.app

Personal portfolio of **Oratile (Ora) Masetla**, software engineer at WeThinkCode_ and Richfield IT graduate:
Java full-stack, cybersecurity, cloud and data.

- Projects with case studies, guided step-by-step demos and in-page live demos
- 7 hackathons (FNB App of the Year, #GKHack26, SheHacks, Entelect Hack<IT>, GirlCode Top 10, MoMo, Node Engine)
- Experience, education and 11 certifications
- Light and dark themes (automatically follows your device), printable résumé page

Built with React 19, Vite, Tailwind CSS v4 and GSAP.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
```

## Editing content

All content lives in two files:

- `src/data/resume.js` — bio, stats, hackathons, experience, education, certifications, skills
- `src/data/projects.js` — projects, live links and demo walkthrough steps

Project screenshots are in `src/assets/projects/`. A project without `image` gets a generated cover.
Set `embed: true` only if the live site allows being shown in an iframe.

## Deploying

Deployed on Vercel (`vercel.json` rewrites every route to `index.html` for client-side routing):

```bash
npx vercel deploy --prod --yes
```

© 2026 Oratile Masetla
