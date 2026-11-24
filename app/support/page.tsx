import type { Metadata } from "next"

import { pageMetadata } from "@/lib/page-metadata"

import { ContentPage, FaqList, faqJsonLd, type FaqItem } from "@/components/content-page"

const PATH = "support/"
const DESCRIPTION =
  "Help with the BJJ-US app: joining your gym, checking in, attendance, Apple Health, waivers and your account."

export const metadata: Metadata = pageMetadata({
  path: PATH,
  title: "Support — BJJ-US",
  description: DESCRIPTION,
  ogTitle: "BJJ-US Support",
})

const MEMBERS: FaqItem[] = [
  {
    question: "How do I join my gym?",
    answer:
      "Ask your gym for an invite code. Download BJJ-US, tap I have an invite, enter the code and create your account. The app then shows your gym's name, logo and colors.",
  },
  {
    question: "My invite code doesn't work.",
    answer: "Codes are single-use and can be cancelled by the gym. Check for typos, then ask your gym for a new code.",
  },
  {
    question: "I forgot my password.",
    answer:
      "On the sign-in screen, tap \"Forgot password?\" and follow the link sent to your email. Check your spam folder if it doesn't arrive in a few minutes.",
  },
  {
    question: "I forgot to check in to a class.",
    answer:
      "A professor at your gym can add or remove check-ins for the last 7 days. Next time, you can check in up to 36 hours ahead from the Train tab.",
  },
  {
    question: "The app asked \"Did you make it?\"",
    answer:
      "Your gym confirms each check-in. If your phone didn't confirm you arrived, the app asks you instead: tap Yes, or Remove my check-in if you couldn't go. Parents answer for the kids they checked in. You can answer until 15 minutes after the class; after that, your professor approves or removes it.",
  },
  {
    question: "I'm not getting notifications.",
    answer:
      "Make sure notifications are allowed for BJJ-US in your phone's Settings, and check Profile → Notification settings in the app.",
  },
  {
    question: "Why does the app ask for my location?",
    answer:
      "Only if you turn on Profile → Arrival check-in. Then the app can remind you to check in when you arrive at your gym, and, if you already checked in, tell your gym you made it. Your gym learns only that yes or no. Your location stays on your phone and is never shared. You can say no, or turn it off later in your phone's Settings; everything else keeps working.",
  },
  {
    question: "How does Apple Health work?",
    answer:
      "On iPhone, turn it on under Profile → Apple Health. Each class you made it to is saved as a Martial Arts workout. Set Your usual effort (1–10) and your weight to add estimated calories; if you wear an Apple Watch, you can turn calories off. Once a month the app asks if your usual effort is still right; ignore it to keep it. The app only writes to Apple Health and never reads it. Your effort and weight stay on your phone.",
  },
  {
    question: "How do I manage my kids' accounts?",
    answer:
      "Add your children under Profile → Family, and your gym confirms them. You can then view the app as each child, check them in, sign their waiver and see their progress. See Kids and families for more.",
    rich: (
      <>
        Add your children under Profile → Family, and your gym confirms them. You can then view the app as each child, check them in, sign their waiver and see their progress. See <a href="/families/">Kids and families</a> for more.
      </>
    ),
  },
  {
    question: "Can I use the app in Portuguese?",
    answer: "Yes. Go to Profile and set Language to Português. Notifications follow your choice too.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "In the app, go to Profile → Privacy & legal → Delete my account. See our App Privacy Notice for what's deleted and what your gym keeps anonymously.",
    rich: (
      <>
        In the app, go to Profile → Privacy &amp; legal → Delete my account. See our <a href="/privacy/app/">App Privacy Notice</a> for what&rsquo;s deleted and what your gym keeps anonymously.
      </>
    ),
  },
  {
    question: "I run a gym. How do I get BJJ-US?",
    answer:
      "Email support@bjj-us.com with your gym's name, logo and the owner's email, and we'll set you up.",
    rich: (
      <>
        Email <a href="mailto:support@bjj-us.com?subject=Set%20up%20my%20gym">support@bjj-us.com</a> with your gym&rsquo;s name, logo and the owner&rsquo;s email, and we&rsquo;ll set you up.
      </>
    ),
  },
]

const STAFF: FaqItem[] = [
  {
    question: "Arrival check-in doesn't work at our gym.",
    answer:
      "An admin needs to set the gym's location: Profile → Arrival check-in → Gym location. Use the gym's address from Gym details, paste coordinates from Apple Maps or Google Maps, or stand inside the gym and tap Use my current location. Then tap See it on the map to check the pin is on the gym. Members are only reminded once it's set.",
  },
  {
    question: "How do I approve attendance?",
    answer:
      "Go to Profile → Gym tools → Class attendance and pick a class. Each person shows made it, approved, or not confirmed. Approve, or Approve everyone left, unlocks 15 minutes after the class ends, and you get a reminder for the classes you checked in to. You can also add or remove check-ins for the last 7 days.",
  },
  {
    question: "How do we set up our waiver?",
    answer:
      "An admin adds the gym's legal name and address in Profile → Gym tools → Gym details, then opens Waiver text and taps Start from the BJJ-US template. Review it, edit it for your gym and publish it. Trial students can sign online before their first class, and Gym tools → Waiver signatures shows who still needs to sign.",
  },
]

export default function SupportPage() {
  return (
    <ContentPage
      crumb="Support"
      eyebrow="Help"
      title="Support"
      intro={
        <p>
          Questions about your membership, classes or billing? Ask your gym first; they manage those. For anything about the app, email <a href="mailto:support@bjj-us.com">support@bjj-us.com</a>.
        </p>
      }
      jsonLd={[faqJsonLd([...MEMBERS, ...STAFF])]}
      cta={{
        title: "Run a jiu-jitsu gym?",
        text: "Every gym starts with a 14-day free trial. Members always download the app for free.",
      }}
    >
      <FaqList items={MEMBERS} />

      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-white">For gym staff</h2>
        <FaqList items={STAFF} />
      </section>
    </ContentPage>
  )
}
