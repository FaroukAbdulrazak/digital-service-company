## Digital Studio – Interactive Home Page

This is a **React + Vite** project implementing the Digital Studio interactive homepage brief with a proper React structure (`src`, `public`, `package.json`, components, etc.).

The implementation focuses on:

- **Modern UI/UX** with a dark, cinematic theme
- **Smooth motion** using **GSAP + ScrollTrigger**
- **Micro-interactions** on hover and scroll
- **Responsive layout** for mobile, tablet and desktop

---

### 1. Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS** (via PostCSS) for layout/spacing/typography utilities
- **Material UI** for buttons and chips
- **GSAP + ScrollTrigger** for animation and scroll‑triggered reveals
- **jQuery** for a CTA hover micro‑interaction wired with GSAP
- **Framer Motion** available for extra interaction patterns (GSAP is the primary engine)

---

### 2. Running the Project (recommended)

```bash
npm install
npm run build
npm run preview
```

Then open the URL Vite prints in the terminal (typically `http://localhost:4173`).

or you can visit online (`https://digital-service-company.vercel.app/`)

---

### 3. Project Structure

- **`index.html`** – Vite HTML shell (mounts React at `#root` and loads `src/main.jsx`).
- **`src/main.jsx`** – React entry; renders `App`.
- **`src/App.jsx`** – Top-level layout; composes all sections and shared layout.
- **`src/components`**
  - `Section.jsx`
  - `HeroSection.jsx`
  - `ServicesSection.jsx`
  - `CaseStudiesSection.jsx`
  - `AboutSection.jsx`
  - `TestimonialsSection.jsx`
  - `ContactSection.jsx`
  - `Header.jsx`
  - `Footer.jsx`
- **`src/index.css`** – Tailwind directives and custom global styles (glass panel, hero gradient, noise overlay).
- **`tailwind.config.cjs`**, **`postcss.config.cjs`**, **`vite.config.mjs`** – tooling configuration.
- **`README.md`** – this documentation file.
- **`DESIGN.md`** – design doc: typography, colors, interaction & motion principles, wireframes.

---

### 4. GSAP Animations Overview

At least **five meaningful GSAP animations** are implemented:

- **Hero entrance** – `HeroSection` animates heading, subheading and CTA group on mount.
- **Hero orb background** – gradient orb slowly rotates and subtly scales with looping tweens.
- **Services scroll reveal + hover micro-interactions** – cards reveal on scroll and lift/scale on hover.
- **Case studies scroll reveal** – project cards fade/slide in with stagger as they enter the viewport.
- **About stats counters** – numbers count up from `0` to target values when the section scrolls into view.
- **Contact CTA entrance** – final call-to-action panel fades/slides in on scroll.
- **jQuery + GSAP hover pulse (CTA button)** – hero primary CTA uses jQuery events plus GSAP scale/shadow.

---

### 5. Design Decisions (summary)

- **Typography**
  - `Space Grotesk` for display headings.
  - `Inter` for body copy and labels.
- **Color System**
  - Dark navy/indigo background with cyan/purple accents.
  - Glassmorphism panels for depth and polish.
- **Layout**
  - `max-w-6xl` centered; generous vertical spacing.
  - Grids collapse to a single column on small screens.
- **Interaction & Motion Principles**
  - Motion supports comprehension and hierarchy, never blocks interaction.
  - Easing around `power2/3.out`, durations `0.6–1.1s`.

For a deeper design rationale (wireframes, interaction details, motion principles) see `DESIGN.md`.
