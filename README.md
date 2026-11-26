# Sri Sabarish — React + Vite Portfolio

React-based personal portfolio for Data Science, Machine Learning and AI. The original GSAP/Webflow visual design and interactions are retained during migration.

## Stack
- React 19 + Vite 7
- CSS (original styles retained in src/styles/legacy.css)
- GSAP, ScrollTrigger, SplitText and Lenis
- Netlify deployment

## Run locally
Requires Node.js 22.
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```
The production output is dist/.

## Netlify
Import this GitHub repository into Netlify. Build command: npm run build. Publish directory: dist. Node 22 is configured in .nvmrc and netlify.toml.

## Source layout
src/components contains React components for navigation, the page shell and semantic page sections. src/content contains preserved page content, src/styles contains CSS, and src/legacy contains controlled animation initialization. Static images, fonts and animation assets are served from public/.
