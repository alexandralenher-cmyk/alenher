# Project guide

## Architecture

This is a small React single-page site built with Vite. `index.html` contains the document metadata and loads `src/main.jsx`. The entire interface and public link inventory live in `src/main.jsx`; visual styling, responsive behavior, and motion live in `src/styles.css`.

## Conventions

- Keep external destinations in the `links` and `socials` arrays rather than duplicating card markup.
- Use Lucide icons and CSS-drawn decoration instead of emoji or fragile remote image assets. Brand marks are bundled locally in `public/brands`.
- Preserve accessible labels, visible focus states, semantic sections, and reduced-motion support.
- Keep the palette centralized in CSS custom properties.
- Design mobile-first; the desktop layout is an enhancement at 700px and wider.

## Design decisions

The visual language combines deep forest green and warm pink with trail-map lines, a mountain ridge, MTB tire tread, cat paw prints, a custom mountain-bike illustration, irregular corners, tactile shadows, and activity icons. There is no uploaded portrait, so an `AL` monogram serves as the personal mark. Links stack in one column on mobile and align in two columns on wider screens, with Strava spanning the full grid as the featured destination. No database or server-side code is needed because all content is public and static.
