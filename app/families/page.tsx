import type { Metadata } from "next"

import { pageMetadata } from "@/lib/page-metadata"

import { ContentPage, prose } from "@/components/content-page"

const PATH = "families/"
const DESCRIPTION =
  "How kids use BJJ-US: parents manage children under 16, what the app does and doesn't include, and who can see a child's information."

export const metadata: Metadata = pageMetadata({
  path: PATH,
  title: "Kids and Families — BJJ-US",
  description: DESCRIPTION,
  ogTitle: "BJJ-US for Kids and Families",
})

export default function FamiliesPage() {
  return (
    <ContentPage
      crumb="Families"
      eyebrow="Parents"
      title="Kids and families"
      intro={
        <>
          <p className="text-xs text-zinc-500">Updated November 3, 2026</p>
          <p>
            BJJ-US is the app jiu-jitsu gyms use for check-ins, class schedules, belt progress and events. Many gyms teach kids, so this page explains how children use the app, what&rsquo;s in it, and who can see a child&rsquo;s information.
          </p>
        </>
      }
      cta={{
        title: "Run a jiu-jitsu gym?",
        text: "Every gym starts with a 14-day free trial. Members always download the app for free.",
      }}
    >
      <div className={prose}>
        <h2>Age rating</h2>
        <p>
          The App Store age rating for BJJ-US is 9+. The app is about training and fitness, including optional Apple Health workouts. Its illustrated technique stories show self-defense escapes, such as escaping a headlock.
        </p>
        <p>Parents should still decide what&rsquo;s right for their own child, and stay involved in how the app is used.</p>

        <h2>Children under 16 use a parent&rsquo;s account</h2>
        <p>Children under 16 don&rsquo;t have a login of their own. A parent or guardian manages them from the parent&rsquo;s app:</p>
        <ul>
          <li>
            <strong>Add a child</strong> under Profile → Family, with their date of birth. The gym confirms the child and their belt.
          </li>
          <li>
            <strong>Switch to the child</strong> to check them in to class, sign the gym&rsquo;s waiver for them, and follow their belt progress.
          </li>
          <li>
            <strong>Get their notifications</strong>, such as a new stripe or belt.
          </li>
          <li>
            <strong>Invite the other parent</strong> to manage the child too.
          </li>
        </ul>
        <p>
          From age 16, or earlier if the parent allows it, the parent can give the child their own login with an invite from the app. Until then, the child can&rsquo;t sign in.
        </p>

        <h2>What the app includes and doesn&rsquo;t</h2>
        <ul>
          <li>No chat or messaging between members.</li>
          <li>No public profiles or social feed.</li>
          <li>No ads.</li>
          <li>
            No in-app purchases. Paid gym events, such as seminars, open a secure Stripe checkout page. For a child under 16, a parent signs them up from the parent&rsquo;s account.
          </li>
          <li>Some technique lessons link to a video on YouTube or Vimeo, which opens that website.</li>
        </ul>

        <h2>Content comes from your gym</h2>
        <p>
          Technique videos, event flyers and photos are added by your gym&rsquo;s staff, not by BJJ-US, and BJJ-US doesn&rsquo;t review them before they appear. Our <a href="/terms/">Terms of Use</a> don&rsquo;t allow unlawful, harassing or hateful content. If you see something that isn&rsquo;t appropriate, tell your gym, or email <a href="mailto:support@bjj-us.com">support@bjj-us.com</a>.
        </p>

        <h2>A child&rsquo;s information</h2>
        <ul>
          <li>
            A child&rsquo;s personal details, such as their date of birth, emergency contact and any notes for their professor, are visible only to their parents and the gym&rsquo;s professors and admins.
          </li>
          <li>
            Other members may see a child&rsquo;s name and belt, for example in class or event lists. Other gyms can&rsquo;t see it.
          </li>
          <li>
            Arrival check-in is optional and works on the phone of the person who is signed in. If a parent turns it on, arriving at the gym also tells the gym that the kids they checked in made it to class: a yes or no, never a location.
          </li>
          <li>Apple Health is optional and saves only the signed-in person&rsquo;s own classes, never a child&rsquo;s.</li>
          <li>
            We don&rsquo;t knowingly collect information from a child under 13 without a parent&rsquo;s or guardian&rsquo;s involvement. If you believe we have, contact us and we&rsquo;ll delete it.
          </li>
        </ul>
        <p>
          Our <a href="/privacy/app/">App Privacy Notice</a> explains in full what the app collects, who can see it and how to delete it.
        </p>

        <h2>Questions</h2>
        <p>
          About your child&rsquo;s classes, belt or membership, ask your gym. About the app, email <a href="mailto:support@bjj-us.com">support@bjj-us.com</a>.
        </p>
      </div>
    </ContentPage>
  )
}
