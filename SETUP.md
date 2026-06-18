# On The Level, Domain, Email, and Phone Setup

This is your copy/paste checklist. The plan: two domains, Google Workspace email on the primary, and a free Google Voice number. Your part is mostly clicking and pasting. The items marked **(only you)** need your login, payment, or phone.

Decisions locked:
- Primary domain: `onthelevelnc.com` (Google Workspace email)
- Second domain: `otlevel.com` (redirects to the site, plus an email alias)
- Email: Google Workspace Business Starter, about $7/user/mo
- Phone: free personal Google Voice to start

---

## Step 1, Register the domains (only you)

Easiest, most hands-off path: register `onthelevelnc.com` during the Google Workspace signup (Step 2). Google's wizard will auto-add all the email DNS for you, so you skip Step 3 almost entirely.

Register `otlevel.com` separately at **Cloudflare** (cloudflare.com, Registrar, about $10/yr, free privacy). We will point it at the site and add it as an alias later.

If you would rather own both at Cloudflare for one control panel, register both there and we do Step 3 by hand. Tell me which and I will tailor the rest.

## Step 2, Google Workspace (only you)

1. Go to workspace.google.com and start Business Starter.
2. When asked about a domain, choose "I want to buy a new domain" and enter `onthelevelnc.com` (this triggers the auto-DNS setup), or "use a domain I own" if you already grabbed it at Cloudflare.
3. Create your first user. Suggested: `larry@onthelevelnc.com`.
4. Pay. About $7/user/mo on the annual plan.

## Step 3, DNS records (skip if Google auto-configured in Step 2)

If `onthelevelnc.com` lives at Cloudflare, add these in Cloudflare, DNS, Records. Static values are paste-as-is. Two are account-specific and Google hands them to you in its setup wizard.

**MX (receive mail).** One record:

| Type | Name | Priority | Value |
|------|------|----------|-------|
| MX | @ | 1 | smtp.google.com |

(If your panel wants the older 5-record set instead: `1 ASPMX.L.GOOGLE.COM`, `5 ALT1.ASPMX.L.GOOGLE.COM`, `5 ALT2.ASPMX.L.GOOGLE.COM`, `10 ALT3.ASPMX.L.GOOGLE.COM`, `10 ALT4.ASPMX.L.GOOGLE.COM`.)

**SPF (lets Google send as you).** TXT record:

| Type | Name | Value |
|------|------|-------|
| TXT | @ | `v=spf1 include:_spf.google.com ~all` |

**DMARC (anti-spoofing).** TXT record:

| Type | Name | Value |
|------|------|-------|
| TXT | _dmarc | `v=DMARC1; p=none; rua=mailto:postmaster@onthelevelnc.com; pct=100` |

**Verification (account-specific, only you):** Google shows a unique `google-site-verification=...` string in setup. Add it as a TXT record on `@`.

**DKIM (account-specific, only you):** In Google Admin, Apps, Google Workspace, Gmail, Authenticate email. Generate a 2048-bit key. Google gives you a host like `google._domainkey` and a long value. Paste it as a TXT record, then click Start Authentication.

> Tip: if your panel will not save a second TXT on `@` for SPF and verification, that is fine, multiple TXT records on the same name are allowed, add them as separate records.

## Step 4, Second domain otlevel.com (only you, I will guide)

1. In Cloudflare, add a Redirect Rule: `otlevel.com/*` and `www.otlevel.com/*` to `https://onthelevelnc.com/$1` (301 permanent). Free.
2. In Google Admin, Account, Domains, Manage domains, add `otlevel.com` as a **user alias domain**. That makes `larry@otlevel.com` automatically deliver to `larry@onthelevelnc.com`, no extra cost. (Google will give you a couple of DNS records to add at Cloudflare to verify and route it.)

## Step 5, Google Voice number (only you, takes 5 min)

1. Open voice.google.com, signed in as the Google account you want it under (your Workspace account is fine, or a personal Gmail to keep it free).
2. Pick an area code near your market and choose a number.
3. Verify with your cell once. Set it to forward calls and texts to your cell.
4. On your phone, install the Google Voice app. It shows this number alongside any other Voice account, you just switch accounts in the app.

## Step 6, So I can autodraft from the branded address (only you)

Pick whichever you prefer, then I can draft and queue branded email for you:
- Add `larry@onthelevelnc.com` to **Mail.app** on your Mac (Apple Mail, Add Account, Google). I can draft and send through Mail.app, attachments included.
- And/or authorize the new mailbox to the Gmail connection in Claude so I can create drafts directly.

## What I have already done

- Updated the website contact block to `info@onthelevelnc.com`.
- The phone on the site is still the placeholder `(910) 555-0100`. Send me the Voice number once you have it and I will drop it in (both the visible number and the click-to-call link).

## Costs at a glance

| Item | Cost |
|------|------|
| onthelevelnc.com | ~$12/yr (or ~$10 at Cloudflare) |
| otlevel.com (Cloudflare) | ~$10/yr |
| Google Workspace Business Starter | ~$7/user/mo |
| otlevel.com email alias | free |
| Cloudflare redirect + extra forwarding aliases | free |
| Google Voice number (personal) | free |

So roughly $7/mo plus about $22/yr in domains to start. Adding a teammate later is another ~$7/mo for a real mailbox.
