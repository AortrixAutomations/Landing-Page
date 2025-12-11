# Aortrix - Compiled-Tailwind Ready Website

## Overview
This repository contains a static multi-page site for Aortrix. It is configured to use a compiled Tailwind CSS build (not CDN).

## How to build the compiled CSS (locally or CI)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Build Tailwind CSS:
   ```bash
   npm run build
   ```
   This command reads `src/tailwind.css` and outputs the compiled file to `public/styles/tailwind.css`.

3. After build, commit `public/styles/tailwind.css` or configure your CI to build at deploy time (recommended).

## Deploying
- For GitHub Pages: push the `public` folder to the `gh-pages` branch or configure Pages to serve from `/public`.
- For Vercel / Netlify: point the deploy root to `public/` and set up a build step to run `npm install && npm run build`.

## Placeholders to replace
- WhatsApp number: +916235483001
- Contact email: support@aortrix.com
- Contact phone: +91 7034690881
- Company: AORTRIX AUTOMATIONS
- UDYAM: UDYAM-KL-13-0099342

## Notes
- The `public/styles/tailwind.css` currently contains a placeholder. Run the build command to generate the real CSS.
- The booking form posts to `/webhook/demo`. Replace this with your n8n webhook URL or server endpoint.
