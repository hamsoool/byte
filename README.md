# BYTE — team portfolio

A Next.js (App Router) landing page for BYTE. Lights are off on landing;
as you scroll, a spotlight lights up over each team member in turn and
switches off the previous one — built off real scroll position, not a
canned timeline, so it holds up at any scroll speed.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build:

```bash
npm run build
npm run start
```

Requires Node 20.9+ (Next.js 16 requirement).

## Customize the team

Everything about the three members lives in one file:

```
data/members.ts
```

Edit `name`, `role`, `bio`, `skills`, and `github`. The shared team email
is exported as `companyEmail` from the same file. The member array drives
every team section in the order listed. Add or remove a person by adding
or removing an entry; the scroll sequence and lamp navigation adapt to
the number of members.

The member bios and roles are maintained in the same data file.

## Swap the logo / add real photos

- `public/byte-logo.png` — the wordmark shown on the landing section. It's
  already been processed to white-on-transparent so it reads on the black
  background; if you swap in a new export, do the same (white or
  light-colored logo, transparent background).
- There are no photo placeholders currently — each member's "reveal" is
  built from a giant ghost-echo of their name's first letter rather than a
  photo, to keep the brutalist/acid-graphics look. If you'd rather show
  real portraits, that's a change to `components/MemberSpotlight.tsx`
  (happy to build that version if you want it).

## How the scroll effect is built

`components/MemberSpotlight.tsx` — each member section tracks its own
scroll progress from the moment it enters the viewport to the moment it
leaves (via Framer Motion's `useScroll`/`useTransform`). The lamp is dark
at both ends of that range and fully lit through the middle. Because
adjacent sections' "lit" zones don't overlap, one lamp is fading out right
as the next is fading in — the handoff is automatic, no shared/global
state needed. `prefers-reduced-motion` is respected (the vertical
slide-in on content is disabled; opacity fades still play since they're
scroll-driven, not autoplaying).

`components/Nav.tsx` — the fixed header. The three dots mirror the lamps
(lit when that member is centered in the viewport); the thin vertical
line fills with total page-scroll progress.

## Stack

- Next.js 16 (App Router, Turbopack), TypeScript
- Tailwind CSS v4 (CSS-first config — tokens are defined in
  `app/globals.css` under `@theme`, not a `tailwind.config.js`)
- Framer Motion for the scroll-linked animation
- `@fontsource-variable/*` for self-hosted fonts (Unbounded, Space
  Grotesk, JetBrains Mono) — no runtime dependency on Google Fonts' CDN

## Design tokens

Colors and fonts are all defined once, in `app/globals.css`:

| Token | Value | Used for |
|---|---|---|
| `--ink` | `#0a0a09` | background |
| `--paper` | `#f2efe6` | primary text |
| `--dim` | `#6f6d63` | secondary text, unlit states |
| `--line` | `#2a2924` | hairline borders/dividers |
| `--acid` | `#d8f24e` | the one accent — lamp glow, active nav dot, scroll progress, link hover. Reserved for "this is lit right now"; not used decoratively elsewhere. |

Deploys as-is to Vercel, Netlify, or any Node host that supports Next.js 16.
