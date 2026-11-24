import type { Metadata } from "next"

// Metadata for a content page. Pages that set their own openGraph don't
// inherit app/opengraph-image.png, so the share image is named here, as the
// old static pages did (assets/og-banner.png, 1200×630).
const OG_IMAGE = { url: "/assets/og-banner.png", width: 1200, height: 630 }

export function pageMetadata({
  path,
  title,
  description,
  ogTitle,
  ogDescription = description,
}: {
  // Without the leading slash, with the trailing one: "support/".
  path: string
  title: string
  description: string
  ogTitle: string
  ogDescription?: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `/${path}` },
    openGraph: {
      type: "website",
      siteName: "BJJ-US",
      url: `/${path}`,
      title: ogTitle,
      description: ogDescription,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
  }
}
