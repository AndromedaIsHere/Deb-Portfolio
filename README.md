# Deb Portfolio

A lightweight Astro portfolio website.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Preview locally:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## GitHub Pages Deployment

1. Update `astro.config.mjs`:
   - Replace `<GITHUB_USERNAME>` with your GitHub username.
   - If you plan to host on a custom domain, update the `site` URL accordingly.

2. Push to GitHub in a repo named `Deb-Portfolio`.

3. In GitHub repo settings, enable Pages from the `gh-pages` branch or the `docs/` folder if you prefer a different workflow.

4. Use a deployment action or script to publish the `dist/` folder.

## Customization

- Edit `src/pages/index.astro` to update text, projects, and email.
- Edit `src/styles/global.css` for colors, fonts, and layout.
- Add new sections or pages under `src/pages`.
