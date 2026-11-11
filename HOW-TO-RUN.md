# TechNeeds IGDTUW — website source

All pages: Home, Techboard, Team, Leaderboard, FAQ, Profile.
Photos are in `public/images/`. Content (courses, FAQs, testimonials, socials,
leaderboard) is in `src/data/site.ts`; the team list is in `src/data/team.ts`.

## Run it locally
1. Install Node 20+ and Bun (https://bun.sh).
2. In this folder run `bun install`
3. Then `bun run dev` and open http://localhost:8080
4. `bun run build` creates a production build.
