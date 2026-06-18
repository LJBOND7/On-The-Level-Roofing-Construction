# On The Level, Session Handoff

Pick-up notes for the next session. Read `PROJECT_SUMMARY.md` for the full picture. This file is just current state and what is left.

Last updated: 2026-06-18.

---

## Current state (what is live and done)

- Logo and full brand asset set: DONE (`assets/`, `assets/png/`).
- One-page website: DONE and deployed.
- Repo: https://github.com/LJBOND7/On-The-Level-Roofing-Construction.git (gh CLI authed as `LJBOND7`).
- GitHub Pages: enabled, source `main` branch root. Custom domain set via `CNAME` file (`onthelevelnc.com`).
- Live: `http://onthelevelnc.com/` returns 200. `www` and apex resolve to GitHub Pages.
- Cloudflare DNS for `onthelevelnc.com`: DONE (four `185.199.x.153` A records + `www` CNAME, all DNS-only).
- Cloudflare DNS for `otlevel.com`: now points at GitHub Pages (four `185.199.x.153` A records + `www` CNAME, DNS-only). Placeholder records removed.
- `otlevel.com` redirect: DONE via Plan B. Separate repo `LJBOND7/otlevel-redirect` (local: `~/Desktop/otlevel-redirect/`) hosts a client-side redirect page (CNAME `otlevel.com`) forwarding to `https://onthelevelnc.com`, path-preserving. Its own HTTPS cert provisions via GitHub Pages too.
- Link-preview image: `assets/og-image.png` (1200x630) plus Open Graph and Twitter meta tags in `index.html`, so texting the URL shows a branded card.

Cloudflare zone IDs (for API work): `onthelevelnc.com` = `17f0037dd4f25890ef8117be3848ce30`, `otlevel.com` = `a3a92359b31e4bebd5233f069d643a17`. (API token is not stored here for security; Larry issues a short-lived scoped token when API work is needed.)

## Open items (what is left)

1. **HTTPS certificate on onthelevelnc.com.** Provisioning via GitHub Pages (automatic, can take up to an hour the first time). Verify with:
   `curl -s -o /dev/null -w "%{http_code}\n" https://onthelevelnc.com/`
   Once it returns 200, enable Enforce HTTPS:
   `gh api -X PUT /repos/LJBOND7/On-The-Level-Roofing-Construction/pages --input - <<<'{"https_enforced":true}'`

2. **otlevel.com redirect to onthelevelnc.com.** DONE via Plan B (GitHub Pages redirect repo `LJBOND7/otlevel-redirect`). Just confirm it resolves once its Pages cert issues: `curl -sL -o /dev/null -w "%{url_effective}\n" http://otlevel.com/` should land on onthelevelnc.com.

3. **Google Workspace email.** Not set up. Larry signs up (Business Starter), adds DNS (MX/SPF/DKIM/DMARC, values in `SETUP.md`), then adds `larry@onthelevelnc.com` to Mail.app and/or authorizes it in the Gmail connection so Claude can autodraft. Add `otlevel.com` as a Workspace alias domain for `larry@otlevel.com`.

4. **Google Voice number.** Not set up. Larry creates a free personal number, then sends it to Claude to wire into the site (currently the placeholder `(910) 555-0100` in `index.html`, both the visible text and the `tel:` link).

5. **Contact form backend.** The form action is still `https://formspree.io/f/your-form-id`. Replace with a real Formspree endpoint to make submissions email through.

6. **Content polish.** Real project photos (drop in `img/`, then wire a gallery), real testimonials (currently labeled samples), service-area town list, and license number / company details in the footer.

## Workflow reminders

- Never commit to `main` directly. Use a feature branch and a PR (Claude has been self-merging doc/asset PRs to keep deploys moving; #1 and #2 already merged).
- The site is plain static files. To preview locally: `open ~/Desktop/OnTheLevel_Website/index.html`. To re-render screenshots, use Chrome headless (see how the og-image and logo checks were built).
- Larry is building two more brand sites this week; one Google Workspace can host all their domains as additional domains.
