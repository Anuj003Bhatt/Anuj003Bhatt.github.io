# Portfolio application architecture

## Goals

1. Keep the finalized visual design from `main`.
2. Keep portfolio content separate from rendering.
3. Avoid duplicating global navigation, footer and interaction logic.
4. Make content changes possible without editing multiple route files.
5. Keep the implementation small enough for a static personal portfolio.

## Dependency direction

```text
src/data
   ↓
src/components
   ↓
src/pages
   ↓
src/app
```

Data modules do not import React components. Reusable components receive content through props. Pages compose components and select the relevant data.

## SOLID / DRY application

### Single Responsibility
- `Header` owns navigation presentation and menu behavior.
- `Footer` owns global footer presentation.
- `SEO` owns route metadata.
- `Reveal` owns intersection-based reveal behavior.
- Page components compose sections; they do not own global behavior.

### Open/Closed
- Toolkit, testimonials, projects and experience render from arrays.
- Adding a toolkit card or recommendation should normally require a data change only.

### Interface Segregation
- Components receive narrow props such as `title`, `description`, `tags`, or `items`.
- There is no global `everything` prop object passed through unrelated components.

### Dependency Inversion
- Rendering components consume typed data models.
- Route-level pages decide which data to present.
- The data layer is independent of presentation.

### DRY
- One navigation definition.
- One header and mobile menu.
- One footer.
- One testimonial dataset powering featured and archive views.
- One project dataset powering the work index and case-study routes.
- One toolkit dataset powering the complete toolkit grid.
- One experience dataset powering homepage preview and full timeline.

## Why not add a state-management framework?

The portfolio is a content-driven static application. Global state management would add complexity without solving a current problem. React state is kept local to interaction components such as the mobile navigation.
