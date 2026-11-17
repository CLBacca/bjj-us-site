# bjj-us.com

The BJJ-US marketing site and the legal pages the app links to. Plain HTML and
one stylesheet (`assets/site.css`) — no build step. Served by GitHub Pages from
`main`. Links are relative so the site also previews at
https://clbacca.github.io/bjj-us-site/ before the domain is connected. To go
live: add a `CNAME` file containing `bjj-us.com`, then point GoDaddy DNS at
GitHub Pages (A records 185.199.108-111.153, `www` CNAME clbacca.github.io).

| Path | Page |
| --- | --- |
| `/` | Home |
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

The privacy pages describe what the app actually stores (see
`JJ APP/src/account_router.py` for what account deletion erases). Change it in
the same commit as any app change that collects new data — all three privacy pages — and bump their dates.

Preview locally: `python -m http.server 8000`, then open http://localhost:8000.

## Search engines and AI answers

- `robots.txt`, `sitemap.xml` and `llms.txt` (a plain summary for AI crawlers) live at the root. Add every new public page to the sitemap and to `llms.txt`, and link it from the footer.
- The FAQ structured data (`application/ld+json` in the head) repeats each page's FAQ word for word: on the home page, the support page and the four feature pages. Change both together.
- No price anywhere (pages, structured data, `llms.txt`) without the owner's OK.
- Pages that shouldn't be in search carry `<meta name="robots" content="noindex">`: `/waiver/`, `/privacy/connection-bjj/`, `/privacy/gym-template/`.
- IndexNow: the key file is `b1f9426e5ac69dc2d83389e464500bfd.txt`. After a push changes pages, tell Bing and the other IndexNow engines:

  ```bash
  curl "https://api.indexnow.org/indexnow?url=https://bjj-us.com/&key=b1f9426e5ac69dc2d83389e464500bfd"
  ```
