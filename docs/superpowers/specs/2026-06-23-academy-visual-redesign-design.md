# Academy Visual Redesign Design

## Goal

Align the International Youth AI Community frontend with the visual language of the provided AI Youth Academy reference site while preserving the existing React/Firebase product behavior.

## Visual Direction

The redesign moves away from the previous dark neon interface toward a polished academy brand system:

- Warm paper background: `#fbfaf6`
- Soft secondary paper: `#f1efe6`
- Ink text: `#15141a`
- Brand blue: `#2536e8`
- Coral accent: `#ff4a2b`
- Teal accent: `#0c8c7a`
- Sun accent: `#ffc400`
- Smaller, cleaner rounded corners
- Editorial headline typography using Noto Sans SC plus display-style Latin fallback
- Opening hero animation with star field, orbit lines, and rising title treatment

## Scope

Modify frontend presentation only. Keep data fetching, Firebase Auth, Firestore services, project creation, applications, star behavior, and profile update behavior unchanged.

## Files

- `src/index.css`: global visual system, opening animation, shared page/card/button/input/modal styles, compatibility overrides for existing utility-heavy JSX.
- `src/pages/HomePage.js`: rebuild the first viewport around academy-style hero, orbit animation, paper layout, brand CTA, and project highlights.
- `src/components/Navbar.js`: switch fixed glass navigation to paper/brand navigation.
- `src/components/homeEffects/DockNav.js`: restyle navigation controls for the academy UI.
- `src/components/UserMenu.js`: restyle GitHub login and account dropdown.
- `src/components/Modal.js`: restyle modal overlay and dialog for the light brand system.
- `src/components/Footer.js`: align footer with paper system and updated tech copy.
- `tailwind.config.js`: update named colors and font stacks to match the new visual tokens.

## Non-Goals

- No new backend behavior.
- No Firebase schema changes.
- No GitHub API integration in this pass.
- No external asset copying from the reference site.

## Verification

- Fetch changed GitHub files after update to confirm content landed on `main`.
- Run lightweight static checks where possible in the current environment.
- Full Netlify build must be verified by Netlify because the current local environment does not provide a working `npm` command.
