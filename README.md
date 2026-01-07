# MusicSkool

**Project**: Next.js demo site showcasing animated UI and music courses.

**Description**: A modern Next.js application (app directory) that demonstrates a responsive landing page with animated UI components, a courses list driven from JSON data, a contact page, and several reusable React components and UI effects.

**Features**
- **Animations**: Canvas and CSS-based animated UI helpers in `components/ui`.
- **3D/Graphics**: Uses `three` and `@react-three/fiber` for interactive effects.
- **Tailwind CSS**: Utility-first styling and responsive design.
- **Content**: Courses data is stored in `data/music_courses.json` and displayed in the `courses` page.

**Technologies**
- **Framework**: Next.js 16 (app router)
- **UI**: React 19, Tailwind CSS
- **Graphics**: three, @react-three/fiber
- **Utilities**: clsx, react-icons, simplex-noise

**Quick Start**

Prerequisites: Node.js (v18+ recommended) and a package manager (`npm`, `pnpm`, or `yarn`).

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

Linting:

```bash
npm run lint
```

**Scripts**
- **dev**: `next dev` — Start the Next.js development server.
- **build**: `next build` — Create an optimized production build.
- **start**: `next start` — Start the production server.
- **lint**: `eslint` — Run ESLint.

**Project Structure**
- `app/` : Next.js app router pages and global styles.
- `components/` : Reusable UI components (Card, Navbar, Footer, Hero, etc.).
- `components/ui/` : Small interactive UI utilities and effects.
- `data/` : JSON data used by the app (e.g., `music_courses.json`).
- `utils/` : Utility functions used across the app.
- `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs` : Project configuration.

**Pages**
- `/` — Landing / Home page (`app/page.tsx`) featuring hero, featured courses, and testimonials.
- `/courses` — Courses listing page (`app/courses/page.tsx`) using `data/music_courses.json`.
- `/contacts` — Contact page (`app/contacts/page.tsx`).

**Notes & Tips**
- The project uses the `app` directory and server components where appropriate. Inspect `components/ui` for creative animation examples you can reuse.
- If you customize Tailwind or PostCSS, update `postcss.config.mjs` and the Tailwind config accordingly.


**Contributing**
Contributions are welcome. Open an issue or submit a pull request with a clear description of changes.


---

