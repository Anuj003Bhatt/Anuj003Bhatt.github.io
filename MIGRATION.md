# Static HTML → React migration map

| Previous | React |
| --- | --- |
| `index.html` | `src/pages/HomePage.tsx` |
| `experience.html` | `src/pages/ExperiencePage.tsx` |
| `architecture.html` | `src/pages/ArchitecturePage.tsx` |
| `about.html` | `src/pages/AboutPage.tsx` |
| `contact.html` | `src/pages/ContactPage.tsx` |
| `testimonials.html` | `src/pages/TestimonialsPage.tsx` |
| `work/index.html` | `src/pages/WorkPage.tsx` |
| `work/*.html` | `src/pages/CaseStudyPage.tsx` + `src/data/projects.ts` |
| `insights/index.html` | `src/pages/InsightsPage.tsx` |
| repeated `<header>` | `src/components/layout/Header.tsx` |
| repeated mobile navigation | `src/components/layout/Header.tsx` |
| repeated `<footer>` | `src/components/layout/Footer.tsx` |
| `app.js` reveal/menu behavior | React state + `Reveal` + `ScrollManager` |
| inline page content | `src/data/*.ts` |

Legacy `.html` routes are also redirected by React so existing portfolio URLs can continue to resolve when GitHub Pages serves the SPA fallback.
