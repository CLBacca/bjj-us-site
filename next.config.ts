import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

// bjj-us.com is served by GitHub Pages, so the site is a static export:
// `npm run build` writes plain files to out/, and the Pages workflow
// (.github/workflows/deploy.yml) publishes that folder.
//
// public/ holds the pages that are still plain HTML (support, privacy,
// terms, waiver, families and the feature pages), plus .well-known, CNAME,
// robots.txt, sitemap.xml and llms.txt. They are copied to out/ as they are,
// so their URLs don't change. The app and Apple depend on /terms/ and
// /privacy/app/: never move them.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  // No custom distDir: with output 'export', Next treats distDir as the
  // export folder and still builds in .next. Stop `next dev` before
  // `next build`, since both use .next.
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // No image server on GitHub Pages: images are served as they are.
  images: {
    unoptimized: true,
  },
  transpilePackages: ['motion'],
  // In `next dev` only: serve public/<page>/index.html at /<page>/, the way
  // GitHub Pages does, so links to the static pages work locally too.
  // (A static export ignores rewrites; Pages does this by itself.)
  ...(isDev && {
    async rewrites() {
      return [{ source: '/:path+/', destination: '/:path+/index.html' }];
    },
  }),
};

export default nextConfig;
