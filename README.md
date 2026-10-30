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
| `/terms/` | Terms of Use — linked from the app |
| `/support/` | Support / FAQ — App Store support URL |

The privacy pages describe what the app actually stores (see
`JJ APP/src/account_router.py` for what account deletion erases). Change it in
the same commit as any app change that collects new data — all three privacy pages — and bump their dates.

Preview locally: `python -m http.server 8000`, then open http://localhost:8000.
