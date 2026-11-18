// JSON-LD for the home page, carried over from the static index.html.
// The static feature pages point at the same @ids (#website, #org, #app).
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
      "BJJ-US makes the app Brazilian jiu-jitsu gyms use for check-ins, the class schedule, belt progress, promotions and waivers.",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE}#app`,
    name: "BJJ-US",
    url: SITE,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Jiu-jitsu gym management",
    operatingSystem: "iOS",
    description:
      "An app for Brazilian jiu-jitsu gyms: confirmed check-ins, the class schedule, belt and stripe tracking, promotions, waivers and family accounts, branded with each gym's name, logo and colors.",
    featureList: [
      "Confirmed check-ins and attendance",
      "Arrival check-in that keeps members' locations on their phones",
      "Class schedule",
      "Adult and kids belt and stripe tracking",
      "Promotion guidelines and promotions due",
      "Online and in-app waivers, with parents signing for kids",
      "Family accounts for parents and kids",
      "Lesson library and weekly focus",
      "Events and seminars",
      "Attendance and membership reports",
      "Branding with each gym's name, logo and colors",
      "Apple Health workouts",
      "English and Portuguese",
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
