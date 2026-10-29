# Ramim Ahmed — 3D Developer Portfolio

A personalized version of
[ladunjexa/reactjs18-3d-portfolio](https://github.com/ladunjexa/reactjs18-3d-portfolio), built with
React, TypeScript, Vite, Tailwind CSS, and Three.js.

## Run on Windows

Node.js and npm are required. Dependencies are already installed on this computer.

Double-click **START-PORTFOLIO.cmd**, then open the Local URL printed in the terminal. Keep that
terminal open while using the preview. Press Ctrl+C to stop it.

Or use PowerShell:

```powershell
Set-Location -LiteralPath 'B:\Priffilo project'
npm.cmd install
npm.cmd run dev
```

## Production build

```powershell
npm.cmd run build
npm.cmd run preview
```

Upload the contents of **dist/** to a static host. Open the site through a web server;
double-clicking dist/index.html will not load the modules or 3D models correctly.

## Edit your details

- **src/constants/config.ts** — name, page title, Facebook URL, introduction, section copy.
- **src/constants/index.ts** — role cards, professional focus, portfolio stack, project concepts.
- **src/components/sections/Contact.tsx** — Facebook contact section.
- **index.html** — search and social preview metadata.
- **public/ramim.svg** — RA favicon.

The Facebook contact link is https://facebook.com/twkrofficial. No email service or API keys are
needed.

## Content notes

This version uses the supplied name and professional roles. Employers, employment dates, completed
project claims, client quotes, and performance statistics have not been invented. The original
sample employment history and testimonials have been removed from the displayed page.

The three project cards are clearly labeled **concept examples**, with illustrative images retained
from the template. Replace them with your actual project descriptions, screenshots, and links when
available. The professional expertise section describes development focus and approach rather than
verified employment history.

The technology list describes this portfolio's implementation.

## Original template and assets

Original template by Liron Abutbul: https://github.com/ladunjexa/reactjs18-3d-portfolio

The original MIT license is retained in **LICENSE**. Keep the 3D model credits and license files in
**public/desktop_pc/license.txt** and **public/planet/license.txt** when distributing the site.
