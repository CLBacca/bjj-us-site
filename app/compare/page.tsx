import type { Metadata } from "next"

import {
  breadcrumbJsonLd,
  ContentPage,
  FaqSection,
  faqJsonLd,
  type FaqItem,
} from "@/components/content-page"
import { pageMetadata } from "@/lib/page-metadata"
import { TRIAL_DAYS } from "@/lib/trial"

// BJJ-US compared with general gym software. Names no competitor (the user's
// rule, 2026-11-24); the "other software" column describes the category with
// "often"/"usually", checked against a major general gym platform's own site
// in 2026-11. Keep it fair: no claim a reader could prove false of the
// category as a whole. No BJJ-US prices.

export const metadata: Metadata = pageMetadata({
  path: "compare/",
  title: "BJJ-US vs. General Gym Software: Built for Jiu-Jitsu Academies",
  description:
    "How BJJ-US differs from general gym software: belt tracking that follows the IBJJF belt system, confirmed check-ins, a member app with your gym's name and logo, Stripe payments with no markup, and Portuguese.",
  ogTitle: "BJJ-US vs. General Gym Software",
  ogDescription:
    "Software built only for jiu-jitsu gyms, compared with software for every kind of gym: belts, check-ins, the member app and payments.",
})

const ROWS = [
  {
    feature: "Who it's for",
    bjjUs: "Brazilian jiu-jitsu academies only.",
    other: "Many kinds of gyms at once: martial arts schools, fitness gyms, yoga and Pilates studios, dance and more.",
  },
  {
    feature: "Belts and stripes",
    bjjUs:
      "The IBJJF belt system built in: adult and kids belts by age, IBJJF minimum times at blue, purple and brown, and training days per stripe and belt.",
    other: "A rank system you set up for each program. IBJJF ages and minimum times usually aren't built in.",
  },
  {
    feature: "Check-in",
    bjjUs:
      "In the app, and every check-in is confirmed: by the member's phone on arrival, by the member, or by the professor after class.",
    other: "Often a front-desk kiosk or self check-in, counted as entered.",
  },
  {
    feature: "Member app",
    bjjUs: "Included. The free BJJ-US app shows your gym's name, logo and colors once members enter your invite code.",
    other: "Often an app with the software's own name, with your gym's own app as a paid add-on.",
  },
  {
    feature: "Payments",
    bjjUs: "Your gym's own Stripe account, through Stripe Connect, with 0.0% platform markup.",
    other: "Varies: some add a percentage on top of card fees or push their own payment processing.",
  },
  {
    feature: "Languages for members",
    bjjUs: "English and Portuguese. Spanish, Italian and French are coming.",
    other: "Often English only.",
  },
]

const FAQS: FaqItem[] = [
  {
    question: "How is BJJ-US different from general gym software?",
    answer:
      "General gym software is built for many kinds of gyms at once. BJJ-US is built only for Brazilian jiu-jitsu academies: belt tracking follows the IBJJF belt system, every check-in is confirmed, members use the app in English or Portuguese, and the app shows each gym's name, logo and colors.",
  },
  {
    question: "Does BJJ-US charge a markup on Stripe payments?",
    answer:
      "No. Your gym connects its own Stripe account through Stripe Connect, and BJJ-US adds 0.0% on memberships, shop orders and event sign-ups. You pay only Stripe's standard processing fees.",
  },
  {
    question: "How does BJJ-US track belts and stripes?",
    answer:
      "BJJ-US follows the IBJJF belt system. It tracks adult belts (white through black, then coral and red) and kids belts by age, time at belt and confirmed training days, and shows who is ready for a stripe or belt. The professor always makes the final decision.",
  },
  {
    question: "Do we need our own app in the App Store?",
    answer:
      "No. Members download the free BJJ-US app and enter your gym's invite code. The app then shows your gym's name, logo and colors, and changes you make appear right away, with no app of your own to publish.",
  },
  {
    question: "Can we move our members from our current software?",
    answer:
      "Yes. Export your member list from your current software and import it on the BJJ-US admin website from a spreadsheet: names, birth dates, belts and stripes, parents' emails to link families, start dates and membership plans. Past attendance doesn't carry over, so training days count from members' first classes on BJJ-US.",
  },
]

const structuredData = [breadcrumbJsonLd("BJJ-US vs. general gym software", "compare/"), faqJsonLd(FAQS)]

const link = "font-medium text-[#E63946] underline-offset-4 hover:underline"

export default function ComparePage() {
  return (
    <ContentPage
      wide
      crumb="Compare"
      eyebrow="Compare"
      title="BJJ-US vs. general gym software"
      intro={
        <p>
          Most gym software is built for every kind of gym, from yoga studios to fitness centers. BJJ-US is built only for Brazilian jiu-jitsu academies: belt tracking that follows the IBJJF belt system, confirmed check-ins, a member app with your gym&rsquo;s name and logo, and Stripe payments with 0.0% platform markup.
        </p>
      }
      jsonLd={structuredData}
      cta={{
        title: "Try BJJ-US at your gym",
        text: `Every gym starts with a ${TRIAL_DAYS}-day free trial. We set up your gym the same day and can import your member list.`,
      }}
    >
        <section aria-labelledby="comparison" className="mb-16">
          <h2 id="comparison" className="mb-6 text-2xl font-bold tracking-tight text-white">
            Side by side
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#18181B]">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="text-xs uppercase tracking-wider text-zinc-400">
                <tr className="border-b border-white/10">
                  <th scope="col" className="w-1/5 px-5 py-4 font-semibold">
                    Feature
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold text-[#E63946]">
                    BJJ-US
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    General gym software
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {ROWS.map((row) => (
                  <tr key={row.feature} className="align-top">
                    <th scope="row" className="px-5 py-4 font-semibold text-white">
                      {row.feature}
                    </th>
                    <td className="px-5 py-4 leading-relaxed text-zinc-200">{row.bjjUs}</td>
                    <td className="px-5 py-4 leading-relaxed text-zinc-400">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-zinc-500">
            General gym software varies; this describes what it often does, not any one product.
          </p>
        </section>

        <section aria-labelledby="why" className="mb-16 max-w-3xl space-y-8">
          <h2 id="why" className="text-2xl font-bold tracking-tight text-white">
            Why jiu-jitsu gyms choose BJJ-US
          </h2>
          <div>
            <h3 className="text-lg font-semibold text-white">Belts that work the way jiu-jitsu does</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              There&rsquo;s no rank system to build.{" "}
              <a href="/bjj-belt-tracking/" className={link}>
                BJJ-US belt tracking
              </a>{" "}
              follows the IBJJF belt system: the right belts for each member&rsquo;s age, the IBJJF minimum times, and training days toward each stripe and belt. Your gym sets its own guidelines on top, and the professor always decides.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Attendance you can trust</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              Members check in from the app, and{" "}
              <a href="/bjj-attendance-app/" className={link}>
                every check-in is confirmed
              </a>{" "}
              by their phone on arrival, by the member, or by the professor after class. Confirmed classes are what count toward promotions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Your gym&rsquo;s app, included</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              Members download the free BJJ-US app and enter your invite code. From then on{" "}
              <a href="/branded-gym-app/" className={link}>
                the app shows your gym&rsquo;s name, logo and colors
              </a>
              , in English or Portuguese.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">0.0% platform markup</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              Payments go to your gym&rsquo;s own Stripe account through Stripe Connect. BJJ-US adds nothing on memberships, shop orders or event sign-ups; you pay only Stripe&rsquo;s standard fees.
            </p>
          </div>
        </section>

        <section aria-labelledby="fit" className="mb-16 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#18181B] p-6">
            <h2 id="fit" className="text-lg font-bold text-white">
              General gym software may suit you if
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400">
              <li>Your gym runs many disciplines, such as karate, yoga or fitness classes alongside jiu-jitsu.</li>
              <li>You want email and SMS marketing automations built in.</li>
              <li>You want your gym&rsquo;s own listing in the App Store and Google Play.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[#E63946]/30 bg-[#18181B] p-6">
            <h2 className="text-lg font-bold text-white">BJJ-US fits if</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-300">
              <li>You run a Brazilian jiu-jitsu academy, for adults, kids or both.</li>
              <li>You want belt tracking that follows the IBJJF belt system, with confirmed attendance behind every promotion.</li>
              <li>
                Your members speak English or Portuguese, and families need{" "}
                <a href="/families/" className={link}>
                  one login for parents and kids
                </a>{" "}
                and{" "}
                <a href="/bjj-gym-waivers/" className={link}>
                  waivers
                </a>{" "}
                they can sign online.
              </li>
            </ul>
          </div>
        </section>

        <FaqSection items={FAQS} />
    </ContentPage>
  )
}
