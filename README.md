# On The Level Roofing and Construction, Website

Built overnight from the "Clean Modern Roof" logo direction you picked. Everything here is hand-built HTML, CSS, and a little JavaScript. No page builder, no dependencies, fully portable. It will drop straight onto GitHub Pages the same way Braziliana does.

## How to look at it

Open `index.html` in any browser. From Terminal:

```
open ~/Desktop/OnTheLevel_Website/index.html
```

That is the whole site, one page, all sections.

## What got built

- Refined the logo and produced a full variant set (horizontal, reversed/white, stacked, app icon, favicon) as clean SVG plus transparent PNG exports.
- A complete one-page marketing site: sticky header, hero, trust bar, four service cards (Remodeling, Rehab and Restoration, Roofing, General Contracting), the 1985 heritage story, why-us grid, a four-step process, service area, testimonials, a call-to-action band, an FAQ accordion, a quote-request form, and a footer.
- Fully responsive (desktop, tablet, phone) with a mobile menu, scroll-reveal animations, and an FAQ accordion.

## Brand system (so everything stays consistent)

| Token | Hex | Use |
|------|------|-----|
| Navy (primary) | `#13386B` | Logo, headings, primary surfaces |
| Deep navy | `#0F2C54` | Gradients, dark sections |
| Steel gray | `#697787` | Secondary text, the level bar |
| Light steel | `#97A4B2` | Reversed accents |
| Cloud | `#F4F6F9` | Section backgrounds |
| Gold (accent) | `#E0A11B` | Logo accents (roof triangle, level vial, rule), buttons, highlights |
| Bubble/marks grey | `#697787` | The bubble and gauge marks inside the level |

The gold now lives in the logo itself (the roof's inner triangle, the level vial, and the rule under the wordmark) and carries through to buttons and key accents, so the brand reads as one navy, gold, and grey system. To shift the accent everywhere on the site at once, edit `--amber` in `css/styles.css` (top of the file). The logo SVGs carry the gold as a hard-coded `#E0A11B`, so if you change the accent, update the logo files in `assets/` to match.

Fonts: headings in Montserrat (a geometric sans close to the logo's Futura feel), body in Inter. Both load free from Google Fonts.

## File structure

```
OnTheLevel_Website/
  index.html            the page
  css/styles.css        all styling (brand tokens at the top)
  js/main.js            menu, FAQ, reveal, form handling
  assets/
    logo-horizontal.svg       main logo (nav, light backgrounds)
    logo-reversed.svg         white logo (dark backgrounds, footer)
    logo-stacked.svg          icon-over-wordmark
    logo-stacked-reversed.svg white stacked (used in hero card)
    logo-icon.svg             square app icon
    favicon.svg               browser tab icon
    png/                      transparent PNG exports of all of the above
  img/                  (empty) drop real project photos here later
```

## Placeholders to replace before launch

Everything below is clearly marked as a placeholder in the code. None of it is real yet.

1. Phone number: `(910) 555-0100`. Search `index.html` for it and the `tel:+19105550100` link. Replace both.
2. Email: `you@onthelevelnc.com`.
3. The contact form does not send anywhere yet. It is wired for Formspree. Create a free form at formspree.io, then in `index.html` replace `https://formspree.io/f/your-form-id` with your real endpoint. The moment you do, the form starts emailing you submissions. Until then it shows a friendly confirmation so you can demo it.
4. Service-area towns (Fayetteville, Raleigh, Durham, Greensboro, Pinehurst, Lumberton) are placeholders. Swap in your real coverage.
5. Testimonials are sample copy, clearly labeled. Replace with real reviews as jobs close.
6. Photos: the site looks great with zero photos, but real project shots (before/after roofs, remodels) would make it shine. Drop them in `img/` and I can wire a gallery whenever you want.
7. Business details: license number, full company name, and any address can be added to the footer.

## To put it online (GitHub Pages, like Braziliana)

1. Make a new GitHub repo, for example `onthelevel-site`.
2. Put these files at the repo root.
3. Repo Settings, Pages, deploy from the `main` branch.
4. Point your domain at it when ready.

Tell me the repo name in the morning and I will push it and turn Pages on for you.

## The headline idea

The whole site leans on the double meaning of the name. "On the level" is both the tool (square, plumb, precise) and the idiom (honest, straight with you). The hero says it plainly: "Built square. Priced straight. On the level." The 1985 story ties it to your dad founding the original name and you bringing it back. That is the thread through every section.

Sleep well. It is ready for you in the morning.
