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

const PATH = "bjj-belt-tracking/"
const DESCRIPTION =
  "Track belts, stripes and promotions at your jiu-jitsu gym, for adult and kids belts. BJJ-US counts time at belt and training days, and shows who's ready."

export const metadata: Metadata = pageMetadata({
  path: PATH,
  title: "BJJ Belt and Stripe Tracking for Gyms | BJJ-US",
  description: DESCRIPTION,
  ogTitle: "BJJ-US: Belt and stripe tracking",
})

// The backend's DEFAULT_GUIDELINES (recommended values each gym can change).
const GUIDELINES = [
  { belt: "White", perStripe: 25, forBelt: 125, months: 12 },
  { belt: "Blue", perStripe: 30, forBelt: 150, months: 24 },
  { belt: "Purple", perStripe: 30, forBelt: 150, months: 18 },
  { belt: "Brown", perStripe: 25, forBelt: 125, months: 12 },
  { belt: "Each kids belt", perStripe: 12, forBelt: 60, months: 8 },
]

const FAQS: FaqItem[] = [
  {
    question: "Does BJJ-US track kids belts?",
    answer:
      "Yes. Members through age 15 use the kids belt system: white, then gray, yellow, orange and green, each in white, solid and black versions, with up to 4 stripes. From 16, members use the adult belts.",
  },
  {
    question: "Can my gym set its own promotion requirements?",
    answer:
      "Yes. Admins set training days per stripe, training days for the belt and months at the belt. Blue, purple and brown belts never go below the IBJJF minimum time.",
  },
  {
    question: "Does the app promote students automatically?",
    answer: "No. It shows who meets your gym's guidelines. A professor awards every stripe and belt.",
  },
  {
    question: "How long does it take to get a blue belt in BJJ?",
    answer:
      "IBJJF sets no minimum time at white belt, so each gym decides. BJJ-US recommends 12 months and 125 training days at white belt, and your gym can change both. The IBJJF minimum age for a blue belt is 16.",
  },
]

export default function BeltTrackingPage() {
  return (
    <ContentPage
      crumb="Belt tracking"
      eyebrow="Belts and promotions"
      title="BJJ belt and stripe tracking"
      intro={
        <p>
          BJJ-US keeps every member&rsquo;s belt, stripes and promotions, for the adult and kids belt systems. It counts time at belt and training days, and shows professors who meets your gym&rsquo;s guidelines for the next stripe or belt. The professor always decides.
        </p>
      }
      jsonLd={[breadcrumbJsonLd("Belt tracking", PATH), faqJsonLd(FAQS)]}
    >
      <div className={prose}>
        <h2>Adult and kids belts, by age</h2>
        <p>BJJ-US follows the IBJJF belt system and offers the right belts for each member&rsquo;s age.</p>
        <ul>
          <li>
            <strong>Kids, through age 15:</strong> white, then gray, yellow, orange and green belts, each in white, solid and black versions.
          </li>
          <li>
            <strong>Adults, from 16:</strong> white, blue, purple, brown and black, then coral and red belts. Belts start at the IBJJF minimum ages: blue and purple at 16, brown at 18 and black at 19.
          </li>
          <li>
            <strong>Stripes and degrees:</strong> up to 4 stripes on every belt below black, and up to 6 degrees on a black belt.
          </li>
        </ul>

        <h2>Who&rsquo;s ready for the next stripe or belt</h2>
        <p>
          BJJ-US counts each member&rsquo;s training days from their attendance, one per day, and their months at their current belt. Then it compares them with your gym&rsquo;s guidelines.
        </p>
        <ul>
          <li>
            <strong>Promotions due</strong> lists the members who meet the guidelines for their next rank.
          </li>
          <li>
            <strong>Stripe countdowns</strong> show how many training days each member has left until their next stripe.
          </li>
          <li>
            <strong>Members see their own progress:</strong> belt and stripes, classes trained, streaks and badges, promotions and competition results.
          </li>
        </ul>
        <p>BJJ-US never promotes anyone by itself. A professor awards every stripe and belt, and the member gets a notification.</p>

        <h2>Your gym&rsquo;s promotion guidelines</h2>
        <p>
          Each gym sets its own numbers: training days per stripe, training days for the belt, and months at the belt. They start from these recommended values:
        </p>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-[#18181B]">
        <table className="w-full min-w-[480px] border-collapse text-left text-sm">
          <thead className="text-xs uppercase tracking-wider text-zinc-400">
            <tr className="border-b border-white/10">
              <th scope="col" className="px-5 py-4 font-semibold">Belt</th>
              <th scope="col" className="px-5 py-4 font-semibold">Days per stripe</th>
              <th scope="col" className="px-5 py-4 font-semibold">Days for belt</th>
              <th scope="col" className="px-5 py-4 font-semibold">Months at belt</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {GUIDELINES.map((g) => (
              <tr key={g.belt}>
                <th scope="row" className="px-5 py-3.5 font-semibold text-white">{g.belt}</th>
                <td className="px-5 py-3.5 text-zinc-300">{g.perStripe}</td>
                <td className="px-5 py-3.5 text-zinc-300">{g.forBelt}</td>
                <td className="px-5 py-3.5 text-zinc-300">{g.months}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={prose}>
        <p>
          Your gym&rsquo;s admins can change them anytime, and professors can see them. Blue, purple and brown belts never go below the IBJJF minimum time: 2 years at blue, 18 months at purple and 1 year at brown. IBJJF sets no minimum time for white and kids belts, so that&rsquo;s your gym&rsquo;s choice.
        </p>
      </div>

      <FaqSection items={FAQS} />

      <RelatedLinks
        links={[
          { href: "/bjj-attendance-app/", label: "Attendance" },
          { href: "/bjj-gym-waivers/", label: "Waivers" },
          { href: "/branded-gym-app/", label: "Branded app" },
          { href: "/compare/", label: "Compare" },
          { href: "/", label: "Home" },
        ]}
      />
    </ContentPage>
  )
}
