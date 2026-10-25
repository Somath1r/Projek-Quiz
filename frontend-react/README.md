# React UI layer for Arcade Quiz

This is an incremental UI migration scaffold. The existing HTML/CSS/JS quiz and C++ API are retained. The first React component is an Aceternity-inspired `BackgroundBeamsWithCollision`, mounted behind the existing home page.

## Stack
- React + TypeScript
- Vite
- Tailwind CSS v4 (utilities only; preflight intentionally omitted to avoid resetting the existing vanilla UI)
- Motion (`motion/react`)
- shadcn/ui-compatible configuration and `cn()` utility

## Build on Windows
Open a terminal in `frontend-react`:

```powershell
npm install
npm run build
```

Vite writes `background.js` and `background.css` to `frontend/assets/ui-background/`, which the existing C++ static server already serves. Then run the existing C++ server as usual and open `http://localhost:8080/index.html`.

The first version intentionally changes only the homepage background. `game.html`, `admin.html`, the C++ backend, API endpoints, and database are untouched. Once this works, additional React/shadcn components can be added and pages migrated gradually.
