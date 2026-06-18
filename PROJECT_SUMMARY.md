# On The Level Roofing and Construction, Project Summary

Everything created and decided for this brand, in one place. Companion docs: `README.md` (site overview), `SETUP.md` (domain/email/number steps), `HANDOFF.md` (current state and next actions).

Last updated: 2026-06-18.

---

## The business

- **Name:** On The Level Roofing and Construction.
- **Story:** A relaunch of the original On The Level, founded in 1985 by Larry Bond's father, who later phased it out to focus on All American. Larry is bringing the name back to serve the same Carolinas markets. Second generation, founded 1985, relaunched 2026.
- **Services (four pillars):** Remodeling, Rehab and Restoration, Roofing, General Contracting. Residential and light-commercial.
- **Market:** Fayetteville, NC and across the Carolinas.
- **Office address:** 930 Robeson St, Fayetteville, NC 28305.
- **Positioning:** the double meaning of "on the level," precise craftsmanship (square, plumb) plus radical honesty (straight pricing). Hero line: "Built square. Priced straight. On the level."

## Brand

- **Logo:** "Clean Modern Roof," a navy roof peak over a spirit-level bar with a bubble vial. Chosen from a 6-direction exploration (see `~/Desktop/OnTheLevel_Logo/`).
- **Colors:** Navy `#13386B`, deep navy `#0F2C54`, steel gray `#697787`, cloud `#F4F6F9`, white, and gold accent `#E0A11B`.
- **Logo recolor (final):** gold replaced the grey in the icon (roof inner triangle and the level vial), the bubble and gauge marks are now grey, and the rule under the wordmark is gold. "ROOFING & CONSTRUCTION" and the rule are centered under "ON THE LEVEL."
- **Fonts:** Montserrat (headings), Inter (body), both from Google Fonts.
- **Logo files:** `assets/` (SVG) and `assets/png/` (transparent PNG). Variants: horizontal, reversed (white), stacked, stacked-reversed, square app icon, favicon.

## Website

- **What it is:** a hand-built, responsive one-page marketing site (HTML, CSS, a little JS). No page builder, no dependencies. GitHub-Pages hosted.
- **Sections:** sticky header, hero, trust bar, four service cards, the 1985 story, why-us grid, four-step process, service area, testimonials, CTA band, FAQ accordion, quote-request form, footer.
- **SEO:** title and meta description, canonical to onthelevelnc.com, RoofingContractor JSON-LD schema with the real address, Open Graph and Twitter card tags, plus a 1200x630 link-preview image at `assets/og-image.png` so the logo shows when the address is texted or shared.
- **Repo:** https://github.com/LJBOND7/On-The-Level-Roofing-Construction.git
- **Live URLs:** `https://onthelevelnc.com` (primary) and `https://ljbond7.github.io/On-The-Level-Roofing-Construction/` (GitHub Pages, redirects to the custom domain).

## Domains, email, phone

- **Primary domain:** `onthelevelnc.com` (registered at Cloudflare). DNS done: four GitHub Pages A records (`185.199.108-111.153`) plus `www` CNAME to `ljbond7.github.io`, all DNS-only. `CNAME` file in repo set to `onthelevelnc.com`.
- **Second domain:** `otlevel.com` (registered at Cloudflare). Intended to 301-redirect to the primary and to act as an email alias (`larry@otlevel.com`).
- **Email plan:** Google Workspace Business Starter (~$7/user/mo) on `onthelevelnc.com`. Chosen over Cloudflare free forwarding because Larry wants Claude to autodraft branded email from his account, which needs a real mailbox (Mail.app and/or the Gmail connection). Site contact address: `info@onthelevelnc.com`.
- **Phone plan:** free personal Google Voice to start; both personal and Workspace Voice run in the same Google Voice app.
- **Registrar note:** Cloudflare chosen over GoDaddy (cheaper, free privacy, easy redirects).

## Decisions log

- Logo direction: Clean Modern Roof (concept 2 of 6).
- Accent color: warm gold `#E0A11B`, now part of the logo as well as CTAs.
- Domains: both `onthelevelnc.com` (primary) and `otlevel.com` (redirect + alias).
- Email host: Google Workspace, not Cloudflare forwarding (autodraft requirement).
- Registrar: Cloudflare, not GoDaddy.
- Phone: free personal Google Voice to start.

## Local file map

- Website project: `~/Desktop/OnTheLevel_Website/`
- Logo exploration and contact sheet: `~/Desktop/OnTheLevel_Logo/`
- Docs: `README.md`, `SETUP.md`, `PROJECT_SUMMARY.md` (this file), `HANDOFF.md`
