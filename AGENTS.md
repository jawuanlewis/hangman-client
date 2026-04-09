# Project Context - `hangman-client`

React SPA frontend for the Hangman word-guessing game. Communicates with `hangman-api`.

## Stack

- **Framework:** React 19 with React Router 7
- **Build tool:** Vite (with `@` alias pointing to `src/`)
- **HTTP:** Axios (custom instance with interceptors)
- **Styling:** Plain CSS (no CSS-in-JS, no Tailwind)
- **Type checking:** PropTypes (runtime only, no TypeScript)
- **Package manager:** pnpm
- **Deployment:** Vercel (SPA rewrite rule in `vercel.json`)

## Project Structure

```text
src/
├── assets/         # Fonts, icons, level images
├── components/
│   ├── game/       # Hangman, Keyboard, CurrentProgress, Messages, GameOver
│   ├── global/     # Header, NavBar, Footer
│   └── home/       # Levels, Level
├── layouts/        # MainLayout, HangmanLayout, GameLayout
├── pages/          # HomePage, GamePage, DisabledPage
├── services/       # apiClient.js, gameService.js, tokenService.js, validation.js
└── styles/         # global.css, homepage.css, gamepage.css, disabledpage.css
```

## Routing

```text
/ (MainLayout)
├── /               → HomePage (level selection)
├── /game?level=X   → GamePage (active game)
└── /disabled       → DisabledPage (rate limit)
```

## Services Layer

- `apiClient.js` — Axios instance; auto-attaches Bearer token; extracts `.data` from responses; handles 401 (clears token) and 429 (redirects to `/disabled`)
- `tokenService.js` — localStorage wrapper; key: `"hangman_token"`
- `gameService.js` — all API calls (`initGame`, `getCurrGame`, `makeGuess`, `endGame`)
- `validation.js` — validates API responses; defines `ApiError` class with `type` (network/client/server)

## Conventions

- Component files: PascalCase `.jsx`; utility/service files: camelCase `.js`
- Functional components only; all exported as `export default`
- CSS selectors: lowercase-hyphenated (e.g., `.game-layout`, `#keyboard-container`)
- No global state — local `useState` per page; token persisted in localStorage
- All imports use `@/` alias (e.g., `@/services/gameService`)

## Dev Commands

```bash
pnpm dev        # dev server (http://localhost:5173)
pnpm build      # production build
pnpm preview    # preview production build
pnpm lint       # ESLint
pnpm format     # Prettier
```

**Environment variable:** `VITE_API_URL` (default: `http://localhost:3000/api/v1`)

## Gotchas

- No test framework — there are no automated tests in this project
- Game level is passed via URL query param (`?level=Movies`); it's immutable once the game starts
- `GamePage` resumes an existing game if the stored token's level matches the URL param; otherwise starts fresh
- 429 responses trigger a hard navigation to `/disabled` (not a React error state)
- `Hangman.jsx` uses SVG `visibility` attribute (not conditional rendering) to show/hide body parts
- The game layout is a fixed 40/60 left/right split; not fully optimized for mobile
