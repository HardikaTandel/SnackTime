# SnackTime

A responsive React + Vite website for a children’s community. It includes React Router page navigation, Framer Motion transitions, reusable CSS Modules, accessible controls, and responsive layouts.

## Run locally

```bash
npm install
npm run dev
```

Build for production with `npm run build`.

## Replacing placeholder content

- **Logo:** Add your logo under `src/assets/logo/`, then replace the text brand in `src/components/Navbar/Navbar.jsx` and `src/components/Footer/Footer.jsx` with the image import.
- **Hero video:** Place your optimized `hero-background.mp4` at `src/assets/videos/hero-background.mp4`. It will automatically be used by the home hero. The CSS gradient remains as a graceful fallback.
- **Project images/content:** Update `src/data/projects.js`. Project cards and detail pages consume this single data source.
- **Sticky notes:** Edit `src/data/stickyNotes.js`.
- **Contact details:** Edit `src/data/contactInfo.js`.

The temporary remote project images are lazy-loaded and can be replaced with local imports when final assets are available.
