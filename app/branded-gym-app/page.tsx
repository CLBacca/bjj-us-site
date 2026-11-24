import type { Metadata } from "next"

import { pageMetadata } from "@/lib/page-metadata"

import {
  breadcrumbJsonLd,
  ContentPage,
  FaqSection,
  faqJsonLd,
  prose,
  RelatedLinks,
  type FaqItem,
} from "@/components/content-page"

const PATH = "branded-gym-app/"
const DESCRIPTION =
  "Give members an app with your gym's name, logo and colors, without building one. Members download BJJ-US, join with your invite code and see your brand."

export const metadata: Metadata = pageMetadata({
  path: PATH,
  title: "Branded App for Your BJJ Gym | BJJ-US",
  description: DESCRIPTION,
  ogTitle: "BJJ-US: Your gym's own branded app",
})

const FAQS: FaqItem[] = [
  {
    question: "Will my gym have its own listing in the App Store?",
    answer:
      "No. Members download BJJ-US from the App Store. Once they join with your gym's invite code, the app shows your gym's name, logo and colors.",
  },
  {
    question: "Does branding cost extra?",
    answer: "No. Your name, logo and colors are always included, starting with a 14-day free trial.",
  },
  {
    question: "How do members join my gym in the app?",
    answer:
      "With an invite code from your gym. You can upload your member list as a spreadsheet (CSV) on the BJJ-US admin website, and BJJ-US creates an invite code for each member.",
  },
  {
    question: "Is the app available in Portuguese?",
    answer: "Yes. Each member can switch the app to Portuguese in their profile.",
  },
]

export default function BrandedAppPage() {
  return (
    <ContentPage
      crumb="Branded app"
      eyebrow="Your brand"
      title="A branded app for your BJJ gym"
      intro={
        <p>
          With BJJ-US, members open an app with your gym&rsquo;s name, logo and colors, and you never build or publish an app yourself. Members download BJJ-US, join with your gym&rsquo;s invite code, and from then on the app shows your gym.
        </p>
      }
      jsonLd={[breadcrumbJsonLd("Branded app", PATH), faqJsonLd(FAQS)]}
    >
      <div className={prose}>
        <h2>What members see</h2>
        <ul>
          <li>Your gym&rsquo;s name, logo and colors throughout the app.</li>
          <li>Your class schedule, with what&rsquo;s on now and next.</li>
          <li>Your lesson library and the week&rsquo;s focus, from your professors.</li>
          <li>Your events: seminars, camps and competitions, with sign-up in the app.</li>
          <li>Your waiver, and an online waiver page for trial students in your logo and color.</li>
        </ul>

        <h2>Change it anytime</h2>
        <p>
          Change your logo or colors and every member sees the new look right away. There&rsquo;s no app update to wait for and no extra fee.
        </p>

        <h2>Why one app instead of your own</h2>
        <p>
          Publishing your own app means a developer account, app store reviews and updates to maintain. With BJJ-US there&rsquo;s one app in the App Store, and every gym gets new features as soon as they ship. The app&rsquo;s icon and store name are BJJ-US; everything inside is your gym.
        </p>

        <h2>Your gym&rsquo;s data stays yours</h2>
        <p>Each gym&rsquo;s members, attendance and payments are kept separate from every other gym&rsquo;s.</p>

        <h2>English and Portuguese, with more to come</h2>
        <p>
          Each member can use the app in English or Portuguese, and notifications follow their choice. More languages are coming, including Spanish, Italian and French.
        </p>
      </div>

      <FaqSection items={FAQS} />

      <RelatedLinks
        links={[
          { href: "/bjj-attendance-app/", label: "Attendance" },
          { href: "/bjj-belt-tracking/", label: "Belt tracking" },
          { href: "/bjj-gym-waivers/", label: "Waivers" },
          { href: "/compare/", label: "Compare" },
          { href: "/", label: "Home" },
        ]}
      />
    </ContentPage>
  )
}
