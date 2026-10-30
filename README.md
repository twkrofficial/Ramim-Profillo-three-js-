# Ramim Ahmed — 3D Developer Portfolio

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://twkrofficial.github.io/Ramim-Profillo-three-js-/)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](./LICENSE)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r161-black.svg)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg)](https://vitejs.dev/)

An immersive, interactive 3D developer portfolio engineered and maintained by **Ramim Ahmed**. Built with React 18, Three.js, React Three Fiber, TypeScript, Tailwind CSS, and Framer Motion, delivering an engaging user experience with high-performance 3D graphics, fluid animations, and responsive design across all devices.

---

## 🌟 Key Features

- **Interactive 3D Canvas:** Realistic 3D scene rendering powered by Three.js and `@react-three/fiber` / `@react-three/drei`.
- **Modern Responsive Design:** Crafted with Tailwind CSS for mobile, tablet, and high-resolution desktop screens.
- **Fluid Motion & Micro-interactions:** Page and element animations powered by Framer Motion.
- **Custom Profile Branding:** Featuring Ramim Ahmed's visual identity, glowing avatar banner, and tailored styling.
- **Direct Social Integration:** Seamless connection with Ramim Ahmed on Facebook ([@twkrofficial](https://facebook.com/twkrofficial)).
- **Automated Deployment:** Integrated GitHub Actions workflow for zero-downtime static builds and GitHub Pages hosting.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 18, React DOM |
| **Language & Typings** | TypeScript |
| **3D Graphics & Canvas** | Three.js, @react-three/fiber, @react-three/drei, Maath |
| **Styling & UI** | Tailwind CSS, PostCSS, Autoprefixer |
| **Animation & Interaction** | Framer Motion, React Parallax Tilt, React Vertical Timeline |
| **Bundler & Tooling** | Vite, ESLint, Prettier |
| **Deployment** | GitHub Pages & GitHub Actions |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/twkrofficial/Ramim-Profillo-three-js-.git
   cd Ramim-Profillo-three-js-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to the local URL displayed in your terminal (typically `http://localhost:5173/Ramim-Profillo-three-js-/`).

### Windows Quick Start

Double-click `START-PORTFOLIO.cmd` in the project root to automatically verify dependencies and launch the development server.

---

## 📦 Production Build

To generate the optimized production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

The compiled static assets will be located in the `dist/` directory, ready to be deployed to GitHub Pages, Vercel, Netlify, or any static web host.

---

## 📂 Project Architecture

```
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages CI/CD workflow
├── public/                      # Static assets, 3D model files & favicon
│   ├── desktop_pc/              # 3D desktop workstation model assets
│   ├── planet/                  # 3D Earth / planet model assets
│   ├── ramim-avatar.png         # Ramim Ahmed profile image
│   └── ramim.svg                # Favicon
├── src/
│   ├── assets/                  # Icons, tech badges, and media
│   ├── components/
│   │   ├── atoms/               # Reusable atomic UI components (Header, etc.)
│   │   ├── canvas/              # Three.js 3D canvas components (Computers, Earth, Stars)
│   │   ├── layout/              # Navbar, Loader, and structural layout
│   │   └── sections/            # Hero, About, Experience, Tech, Works, Contact
│   ├── constants/
│   │   ├── config.ts            # Site configuration and bio copy
│   │   ├── index.ts             # Navigation links, services, stack, and projects
│   │   └── styles.ts            # Tailwind CSS style utilities
│   ├── hoc/                     # Higher-Order Components (SectionWrapper)
│   ├── utils/                   # Animation and motion presets
│   ├── App.tsx                  # Root application component
│   └── main.tsx                 # Application entry point
├── index.html                   # HTML entry point with SEO & Open Graph meta tags
├── package.json                 # Project configuration and dependencies
├── tailwind.config.cjs          # Tailwind CSS theme configuration
└── vite.config.js               # Vite build configuration
```

---

## 📬 Contact & Connect

**Ramim Ahmed** — *Web & Software Developer*

- **Facebook:** [Ramim Ahmed (@twkrofficial)](https://facebook.com/twkrofficial)
- **GitHub Repository:** [twkrofficial/Ramim-Profillo-three-js-](https://github.com/twkrofficial/Ramim-Profillo-three-js-)

---

## 📄 License

This project is open-source and available under the [MIT License](./LICENSE).

Copyright © 2026 Ramim Ahmed. All rights reserved.
