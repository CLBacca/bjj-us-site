# bjj-us.com

The BJJ-US marketing site and the legal pages the app links to.

- **Home page:** a Next.js app (`app/`, `components/`, `lib/`), exported as
  static files.
- **Every other page:** plain HTML with one stylesheet
  (`public/assets/site.css`), in `public/`. Next copies `public/` into the
  export unchanged, so those URLs never change.

Served by GitHub Pages from the `out/` folder that
`.github/workflows/deploy.yml` builds on every push to `main`. The Pages
source must be set to **GitHub Actions**; the custom domain is `bjj-us.com`.
To roll back to the old plain-HTML site, set the Pages source back to "Deploy
from a branch" on a commit from before the switch.

```bash
npm ci
npm run dev      # http://localhost:3000. The static pages load too: /support/, /terms/ …
npm run build    # static export to out/
npx serve out    # preview the export exactly as Pages serves it
```

The home page's prices live in `lib/pricing.ts`, and its FAQ in `lib/faq.ts`.
The visible FAQ and the FAQPage structured data are both built from that list.

| Path | Page |
| --- | --- |
| `/` | Home (Next.js: `app/page.tsx`) |
| `/privacy/` | Privacy Policy for Gyms — BJJ-US as the gyms' service provider |
| `/privacy/app/` | App Privacy Notice for members — linked from the app and App Store Connect |
| `/privacy/gym-template/` | Privacy policy template gyms adapt for their own websites |
| `/privacy/connection-bjj/` | Connection BJJ Academy's own privacy policy, hosted for the gym (email and phone load live from Gym details) |
| `/terms/` | Terms of Use — linked from the app |
| `/support/` | Support / FAQ — App Store support URL |
| `/bjj-attendance-app/` | Feature page: confirmed check-ins and attendance |
| `/bjj-belt-tracking/` | Feature page: belts, stripes, promotion guidelines (numbers mirror the backend's DEFAULT_GUIDELINES) |
| `/bjj-gym-waivers/` | Feature page: waiver template, signing in the app and online |
| `/branded-gym-app/` | Feature page: each gym's name, logo and colors |
| `/families/` | Kids and families — App Store Age Suitability URL: how children use the app, what it leaves out, who sees a child's information |
| `/waiver/?gym=<subdomain>` | A gym's waiver for trial students (no account yet); `&t=<token>` is a lead's personal link. Talks to `api.bjj-us.com/public/waiver` (JJ APP `src/waiver_web.py`); locally to `127.0.0.1:8001` |

`/terms/` and `/privacy/app/` are used by the app and by Apple: never move or
rename them. Keep `public/.well-known/apple-app-site-association` (universal
links) and `public/CNAME`.

The privacy pages describe what the app actually stores (see
`JJ APP/src/account_router.py` for what account deletion erases). Change it in
the same commit as any app change that collects new data — all three privacy pages — and bump their dates.

## Search engines and AI answers

- `public/robots.txt`, `public/sitemap.xml` and `public/llms.txt` (a plain summary for AI crawlers) are served at the root. Add every new public page to the sitemap and to `llms.txt`, and link it from the footer (`components/footer.tsx` and the static pages' footers).
- FAQ structured data: on the home page it's built from `lib/faq.ts`. On the support page and the four feature pages, the `application/ld+json` in the head repeats each page's FAQ word for word: change both together.
- Prices appear on the home page, in its FAQ and in `llms.txt`, all taken from `lib/pricing.ts` or matching it. Don't add prices anywhere else (other pages, the SoftwareApplication structured data, store listings) without the owner's OK.
- Pages that shouldn't be in search carry `<meta name="robots" content="noindex">`: `/waiver/`, `/privacy/connection-bjj/`, `/privacy/gym-template/`.
- IndexNow: the key file is `public/b1f9426e5ac69dc2d83389e464500bfd.txt`. After a deploy changes pages, tell Bing and the other IndexNow engines:

  ```bash
  curl "https://api.indexnow.org/indexnow?url=https://bjj-us.com/&key=b1f9426e5ac69dc2d83389e464500bfd"
  ```
