// JSON-LD for the home page, carried over from the static index.html.
// Keep the @ids (#website, #org, #app) stable: they name these entities.
import { APP_STORE_URL } from "@/lib/app-store"
import { FAQ } from "@/lib/faq"

const SITE = "https://bjj-us.com/"

export const homeStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}#website`,
    name: "BJJ-US",
    alternateName: "BJJ US",
    url: SITE,
    publisher: { "@id": `${SITE}#org` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}#org`,
    name: "BJJ-US",
    url: SITE,
    logo: `${SITE}assets/logo.png`,
    email: "support@bjj-us.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@bjj-us.com",
    },
    description:
      "Brazilian Jiu-Jitsu gym management software and branded member mobile app with zero Stripe processing markup.",
    // Add G2, Capterra and YouTube here once those pages exist.
    sameAs: [APP_STORE_URL],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE}#app`,
    name: "BJJ-US",
    url: SITE,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Gym Management Software",
    operatingSystem: "iOS, Web",
    downloadUrl: APP_STORE_URL,
    installUrl: APP_STORE_URL,
    description:
      "BJJ academy management platform with confirmed mat-side check-ins, native adult and kids IBJJF belt tracking, digital waivers, branded member apps, and 0.0% Stripe billing markup.",
    featureList: [
      "Confirmed mat-side check-in and attendance",
      "0.0% platform markup direct Stripe Connect billing",
      "IBJJF adult and kids belt and stripe tracking",
      "Branded gym mobile app included",
      "Digital liability waivers and family accounts",
      "English and Portuguese member app support",
      "Arrival check-in that keeps members' locations on their phones",
      "Class schedule",
      "Promotion guidelines and promotions due",
      "Lesson library and weekly focus",
      "Events and seminars",
      "Attendance and membership reports",
      "Apple Health workouts",
    ],
    inLanguage: ["en", "pt"],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Brazilian jiu-jitsu gyms and academies",
    },
    publisher: { "@id": `${SITE}#org` },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  },
]

/** JSON for a <script type="application/ld+json">, safe to inline in HTML. */
export const toJsonLd = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c")
