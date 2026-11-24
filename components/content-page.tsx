import type { ReactNode } from "react"
import { ChevronDown } from "lucide-react"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { DEMO_URL } from "@/lib/demo"
import { toJsonLd } from "@/lib/structured-data"
import { TRIAL_DAYS } from "@/lib/trial"

// The layout every content page shares (feature pages, families, support,
// compare): the navbar, a breadcrumb, the title, the page's text, its
// questions, a "Start Trial" box and the footer — the look of the home page.
// The legal pages (terms, privacy) stay static HTML in public/: the app and
// Apple link to them.

const SITE = "https://bjj-us.com/"

export type FaqItem = {
  question: string
  // Plain text: shown on the page and repeated word for word in the FAQPage
  // JSON-LD, so the two never drift apart.
  answer: string
  // Optional rich version of the same answer (with links) for the page.
  rich?: ReactNode
}

// Text styles for the page body: headings, paragraphs, lists and links.
export const prose =
  "text-[15px] leading-relaxed text-zinc-300 " +
  "[&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-white " +
  "[&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_li::marker]:text-[#E63946] " +
  "[&_strong]:font-semibold [&_strong]:text-white " +
  "[&_a]:font-medium [&_a]:text-[#E63946] [&_a]:underline-offset-4 [&_a:hover]:underline"

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#18181B]">
      {items.map(({ question, answer, rich }) => (
        <details key={question} className="group px-6 sm:px-7">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
            {question}
            <ChevronDown
              className="h-4 w-4 shrink-0 text-zinc-400 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="max-w-3xl pb-6 text-sm leading-relaxed text-zinc-300 [&_a]:font-medium [&_a]:text-[#E63946] [&_a]:underline-offset-4 [&_a:hover]:underline">
            {rich ?? answer}
          </p>
        </details>
      ))}
    </div>
  )
}

// The main action on every content page: start the free trial on the home
// page's form, or book a demo on Cal.com.
export function TrialCta({
  title = "Let’s set up your gym",
  text = `Every gym starts with a ${TRIAL_DAYS}-day free trial. Members always download the app for free.`,
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="mt-16 rounded-2xl border border-white/10 bg-[#18181B] px-8 py-10 text-center">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-300">{text}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a
          href="/#trial-signup"
          className="inline-block rounded-lg bg-[#E63946] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#B42332]"
        >
          Start Trial
        </a>
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/30 hover:text-white"
        >
          Book a Demo
        </a>
      </div>
    </section>
  )
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }
}

export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name, item: `${SITE}${path}` },
    ],
  }
}

export function ContentPage({
  crumb,
  eyebrow,
  title,
  intro,
  jsonLd,
  wide = false,
  children,
  cta,
}: {
  // The breadcrumb's last item.
  crumb: string
  eyebrow: string
  title: string
  // The paragraph(s) under the title.
  intro?: ReactNode
  jsonLd?: object[]
  // Wide pages (compare) use the full width for tables; others a reading width.
  wide?: boolean
  children: ReactNode
  cta?: { title?: string; text?: string }
}) {
  return (
    <div className="min-h-screen bg-[#0E0E11] text-zinc-100">
      {jsonLd?.length ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }} />
      ) : null}
      <Navbar />
      <main className={`mx-auto px-6 pb-24 pt-32 ${wide ? "max-w-5xl" : "max-w-3xl"}`}>
        <nav aria-label="Breadcrumb" className="mb-8 text-xs text-zinc-500">
          <a href="/" className="hover:text-zinc-200">
            Home
          </a>
          <span className="mx-2">/</span>
          <span className="text-zinc-300">{crumb}</span>
        </nav>

        <header className="mb-10 max-w-3xl">
          <p className="text-sm font-medium text-[#E63946]">{eyebrow}</p>
          <h1 className="font-[family-name:var(--font-display)] mt-3 text-balance text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {intro ? (
            <div className="mt-5 text-base leading-relaxed text-zinc-300 [&_a]:font-medium [&_a]:text-[#E63946] [&_a]:underline-offset-4 [&_a:hover]:underline [&_p+p]:mt-3">
              {intro}
            </div>
          ) : null}
        </header>

        {children}

        <TrialCta {...cta} />
      </main>
      <Footer />
    </div>
  )
}

// A page's questions, under an h2, as on the feature pages.
export function FaqSection({ title = "Questions", items }: { title?: string; items: FaqItem[] }) {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-white">{title}</h2>
      <FaqList items={items} />
    </section>
  )
}

// "More about BJJ-US: …" under a feature page.
export function RelatedLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <p className="mt-10 text-sm text-zinc-400">
      More about BJJ-US:{" "}
      {links.map(({ href, label }, i) => (
        <span key={href}>
          {i ? " · " : ""}
          <a href={href} className="font-medium text-zinc-200 underline-offset-4 hover:underline">
            {label}
          </a>
        </span>
      ))}
    </p>
  )
}
