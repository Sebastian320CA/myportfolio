# Sebastian Cetina: Portfolio

Bilingual (English / Español) portfolio built with Next.js, TypeScript, Tailwind CSS and next-intl.

- English: `/`, `/projects`, `/about`, `/credentials`
- Español: `/es`, `/es/projects`, `/es/about`, `/es/credentials`

## Run it

Install dependencies with `npm install`. Use `npm run dev` for development.
For a lighter use of RAM, run `npm run build` and then `npm start`.

## Where things live

| What | Where |
|---|---|
| Translations | `messages/en.json`, `messages/es.json` |
| Languages and default locale | `i18n/routing.ts` |
| Projects (tech, repo, video) | `lib/projects.ts` |
| Tech icons | `lib/tech.tsx` |
| Contact links | `lib/site.ts` |
| Colors and fonts | `app/globals.css` |

## Project videos

Videos live on YouTube, not in the repo. To add or change one, set `youtubeId` on the project in
`lib/projects.ts`. An unlisted video works, and the page embeds it lazily.
