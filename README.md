# Prudential Insurance Platform (Frontend)

This project recreates the frontend UI of `https://v0-prudential-insurance-platform.vercel.app/` using **Next.js (App Router)** + **Tailwind CSS**.

## Routes

- `/` (Home)
- `/packages`
- `/packages/[slug]` (placeholder details)
- `/claims`
- `/agent-portal`
- `/chat`

## Local development

Prerequisites: Node.js 18+ (recommended).

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a GitHub/GitLab repo.
2. In Vercel: **Add New → Project → Import** your repo.
3. Framework preset: **Next.js** (auto-detected).
4. Click **Deploy**.
