
# React Portfolio (Vite + Tailwind)

A clean, fast portfolio starter with dark mode, sections (About, Tech, Projects, Experience, Contact), and nice defaults.

## Quickstart
```bash
npm install
npm run dev
# build
npm run build
npm run preview
```

## Customize
- Edit `src/components/Hero.jsx` for your name/summary and resume link.
- Update projects in `src/data/projects.js` and experience in `src/data/experience.js`.
- Change social links in `src/components/Navbar.jsx`.
- Replace `/public/favicon.svg` as needed.
- Add your `public/resume.pdf`.

## Deploy (GCS static site)
1. `npm run build` (outputs `dist/`)
2. Create bucket named `www.yourdomain.com`
3. `gsutil web set -m index.html -e index.html gs://www.yourdomain.com`
4. `gsutil -m rsync -r dist gs://www.yourdomain.com`
5. Make public: `gsutil iam ch allUsers:objectViewer gs://www.yourdomain.com`
6. CNAME `www -> c.storage.googleapis.com`
