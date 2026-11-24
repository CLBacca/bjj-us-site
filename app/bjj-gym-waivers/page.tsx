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

const PATH = "bjj-gym-waivers/"
const DESCRIPTION =
  "Digital waivers for jiu-jitsu gyms: start from a template, members sign in the app, trial students sign online before class, and parents sign for kids."

export const metadata: Metadata = pageMetadata({
  path: PATH,
  title: "Online Waivers for BJJ Gyms | BJJ-US",
  description: DESCRIPTION,
  ogTitle: "BJJ-US: Waivers without the clipboard",
})

const FAQS: FaqItem[] = [
  {
    question: "Can trial students sign before their first class?",
    answer:
      "Yes. They sign online on their phone, with no account needed. When they join your gym in the app, the signature links to their account.",
  },
  {
    question: "Can a parent sign for a child?",
    answer: "Yes. Parents sign for their kids in the app, or on the online form for participants under 18.",
  },
  {
    question: "Do I have to write our waiver from scratch?",
    answer:
      "No. Start from the BJJ-US template, filled in with your gym's legal name, address and state, then edit it for your gym.",
  },
  {
    question: "How do I know who hasn't signed?",
    answer: "Waiver signatures lists only who still has to sign, with each child's parent.",
  },
]

export default function WaiversPage() {
  return (
    <ContentPage
      crumb="Waivers"
      eyebrow="Waivers"
      title="Online waivers for BJJ gyms"
      intro={
        <p>
          BJJ-US replaces the paper waiver at the front desk. Start from our template, publish it, and collect signatures in the app and online. Every signature is on record, with the exact version each person signed.
        </p>
      }
      jsonLd={[breadcrumbJsonLd("Waivers", PATH), faqJsonLd(FAQS)]}
    >
      <div className={prose}>
        <h2>Start from the template</h2>
        <p>
          An admin adds the gym&rsquo;s legal name and address, then starts from the BJJ-US waiver template. It comes filled in with your gym&rsquo;s legal name, address and state. Review it, edit it for your gym and publish it.
        </p>
        <p>The template is a starting point, not legal advice. Have it reviewed for your state before you publish it.</p>

        <h2>Three ways to sign</h2>
        <ul>
          <li>
            <strong>Members sign in the app.</strong>
          </li>
          <li>
            <strong>Trial students sign online,</strong> on their phone, before their first class and before they have an account. The form also asks how they found your gym and about their martial arts experience. They get a copy by email, and when they join, the signature links to their account.
          </li>
          <li>
            <strong>Parents sign for kids,</strong> in the app, or on the online form for participants under 18.
          </li>
        </ul>
        <p>The online waiver page shows your gym&rsquo;s logo and color, not ours.</p>

        <h2>See who still has to sign</h2>
        <p>
          Waiver signatures lists only who still has to sign, with each child&rsquo;s parent. Every member and child shows when they signed, which version, and who signed for them.
        </p>
      </div>

      <FaqSection items={FAQS} />

      <RelatedLinks
        links={[
          { href: "/bjj-attendance-app/", label: "Attendance" },
          { href: "/bjj-belt-tracking/", label: "Belt tracking" },
          { href: "/branded-gym-app/", label: "Branded app" },
          { href: "/compare/", label: "Compare" },
          { href: "/", label: "Home" },
        ]}
      />
    </ContentPage>
  )
}
