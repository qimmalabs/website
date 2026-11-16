# Qimma Labs website

A static one-page site: plain HTML, CSS and a little JavaScript. No build step, no backend.

```
index.html               the page (English text lives here too)
assets/styles.css        all styles: dark by default, light when the device is set to light
assets/main.js           Arabic/English text, language switch, phone menu, example chat, copy email
assets/lang.js           picks the language before the page paints (keeps Arabic from flashing in English)
assets/fonts/            self-hosted Archivo, Noto Kufi Arabic, Inter (SIL Open Font License)
assets/favicon.svg       browser tab icon (follows light/dark)
assets/apple-touch-icon.png
assets/og-image.png      the preview image when the link is shared (WhatsApp, LinkedIn, etc.)
_headers                 Cloudflare Pages security and cache headers
robots.txt, sitemap.xml
```

## Deploy on Cloudflare Pages

**Option A: upload (quickest)**
1. Cloudflare dashboard → Workers & Pages → Create → Pages → Upload assets.
2. Name the project (for example `qimmalabs`) and drop in this folder (or the zip).
3. Deploy. You get a `*.pages.dev` address right away.

**Option B: from a Git repo (deploys on every push)**
1. Push this folder to a GitHub or GitLab repository.
2. Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Framework preset: None. Build command: leave empty. Build output directory: `/`.

**Custom domain:** in the Pages project → Custom domains → add `qimmalabs.com` (and `www`, redirecting to it).

## Before going live

- **Domain.** The page assumes `https://qimmalabs.com/`. If yours differs, replace it in `index.html` (canonical, `og:url`, `og:image`, the JSON-LD block), `robots.txt` and `sitemap.xml`.
- **WhatsApp.** The button is in `index.html` but hidden. Put the number in the link in international format, digits only (for example `https://wa.me/9627XXXXXXXX`), then delete the `hidden` attribute.
- **Social links.** LinkedIn, Instagram and Facebook point to `qimmalabs` handles; check they match the real pages.

## Editing text

- Every piece of text exists in both languages in `assets/main.js` (`STRINGS.en` and `STRINGS.ar`), keyed by the `data-i18n` attribute on the element.
- The English is also written in `index.html` so search engines and visitors without JavaScript see it. When you change English text, change it in both places.
- The example WhatsApp conversation is in `CHAT` in `assets/main.js`.

## How the language is chosen

1. `?lang=ar` or `?lang=en` in the address (handy for sharing an Arabic link: `https://qimmalabs.com/?lang=ar`)
2. otherwise the visitor's last choice (saved in their browser)
3. otherwise their browser language: Arabic browsers get Arabic, everyone else English

## Notes

- **Motion:** the summit line draws itself once on load. It's skipped for visitors who turn motion down in their device settings.
- **Accessibility:** text contrast is at least 4.5:1 in both themes, touch targets are at least 44 px, keyboard focus is always visible, and there's a "Skip to content" link.
- **Cloudflare Web Analytics:** if you turn it on, its script is blocked by the Content-Security-Policy in `_headers`. Add `https://static.cloudflareinsights.com` to `script-src` and `https://cloudflareinsights.com` to `connect-src`.
- **Preview locally:** run `python3 -m http.server` in this folder and open http://localhost:8000. Opening `index.html` directly from disk won't load the styles, because the paths start with `/`.
