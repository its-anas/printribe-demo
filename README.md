# PrinTribe — landing page

A small, self-contained marketing landing page. Plain HTML + CSS + a little vanilla JS. No build step, no framework.

## Run it locally

Open it through a local server (not `file://`) so relative asset paths resolve cleanly.

```bash
# from this folder
npx serve        # or: python3 -m http.server 8000
```

Then open the printed `localhost` URL.

## Files

- `index.html` — the page: markup, content, and a small inline `<style>` for page-specific tweaks.
- `assets/styles.css` — the design system. Colours live in the `:root` variables at the top; edit those to reskin the whole page.
- `assets/main.js` — mobile-nav toggle and small hover interactions.
- `assets/corners/` — frame-corner photos used in the hero and the frames grid.
- `assets/substrates/` — product photos.
- `assets/logos/` — platform logos.

## Notes

- The heading/body font (Hanken Grotesk) loads from Google Fonts, so it needs internet to look identical; offline it falls back to a system sans-serif.
- All navigation links currently point to `#` (they stay on this page).
