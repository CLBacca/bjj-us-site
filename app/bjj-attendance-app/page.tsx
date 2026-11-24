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

const PATH = "bjj-attendance-app/"
const DESCRIPTION =
  "An attendance app for BJJ gyms where every check-in is confirmed: the phone confirms arrival, the member answers, or the professor approves after class."

export const metadata: Metadata = pageMetadata({
  path: PATH,
  title: "BJJ Attendance App for Jiu-Jitsu Gyms | BJJ-US",
  description: DESCRIPTION,
  ogTitle: "BJJ-US: Attendance you can trust",
})

const FAQS: FaqItem[] = [
  {
    question: "How does BJJ-US confirm attendance?",
    answer:
      "The member's phone confirms they arrived at the gym, or the member answers \"Did you make it?\", or a professor approves the check-in after class.",
  },
  {
    question: "Does the app track where members are?",
    answer:
      "No. Arrival check-in is optional, and the gym learns only whether a member made it to a class they checked in to. The location never leaves the phone.",
  },
  {
    question: "What if someone forgets to check in?",
    answer: "A professor can add or remove check-ins for the last 7 days.",
  },
  {
    question: "Can parents check in their kids?",
    answer: "Yes. Parents check in their children from their own app and answer \"Did you make it?\" for them.",
  },
]

export default function AttendancePage() {
  return (
    <ContentPage
      crumb="Attendance"
      eyebrow="Attendance"
      title="The BJJ attendance app with confirmed check-ins"
      intro={
        <p>
          BJJ-US is an attendance app for Brazilian jiu-jitsu gyms. Members check in to class from their phone, and every check-in is confirmed. Your attendance shows who actually trained, and it feeds belt progress, promotions and reports.
        </p>
      }
      jsonLd={[breadcrumbJsonLd("Attendance", PATH), faqJsonLd(FAQS)]}
    >
      <div className={prose}>
        <h2>How every check-in is confirmed</h2>
        <p>A check-in is confirmed in one of three ways, in this order:</p>
        <ul>
          <li>
            <strong>The phone confirms arrival.</strong> With arrival check-in on, the member&rsquo;s phone tells the gym &ldquo;made it&rdquo; when it reaches the gym: yes or no, nothing else.
          </li>
          <li>
            <strong>The member answers.</strong> Otherwise the app asks &ldquo;Did you make it?&rdquo; Members can answer until 15 minutes after class, and parents answer for the kids they checked in.
          </li>
          <li>
            <strong>The professor approves.</strong> After class, professors get a reminder to approve or remove whoever is left, one by one or all at once.
          </li>
        </ul>

        <h2>Checking in to class</h2>
        <ul>
          <li>Members check in from the class schedule, up to 36 hours ahead.</li>
          <li>The app can remind them before class, and again when they arrive at the gym.</li>
          <li>Parents check in their kids from their own phone.</li>
          <li>Professors can add or remove check-ins for the last 7 days, so a forgotten check-in is easy to fix.</li>
        </ul>

        <h2>What attendance powers</h2>
        <ul>
          <li>
            <strong>Belt progress.</strong> Each day a member trains counts toward their next stripe and belt, by your gym&rsquo;s promotion guidelines. See <a href="/bjj-belt-tracking/">belt and stripe tracking</a>.
          </li>
          <li>
            <strong>Class attendance.</strong> Professors see who made it to each class, who was approved and who isn&rsquo;t confirmed yet.
          </li>
          <li>
            <strong>Reports.</strong> Owners see attendance and membership reports.
          </li>
          <li>
            <strong>Apple Health.</strong> On iPhone, members can save each confirmed class as a Martial Arts workout, with estimated calories. It&rsquo;s optional.
          </li>
        </ul>

        <h2>Locations stay on the phone</h2>
        <p>
          Arrival check-in is optional. When it&rsquo;s on, the gym learns only whether a member made it to a class they checked in to. Members&rsquo; locations never leave their phones, and they can turn arrival check-in off at any time; everything else keeps working.
        </p>
      </div>

      <FaqSection items={FAQS} />

      <RelatedLinks
        links={[
          { href: "/bjj-belt-tracking/", label: "Belt tracking" },
          { href: "/bjj-gym-waivers/", label: "Waivers" },
          { href: "/branded-gym-app/", label: "Branded app" },
          { href: "/compare/", label: "Compare" },
          { href: "/", label: "Home" },
        ]}
      />
    </ContentPage>
  )
}
