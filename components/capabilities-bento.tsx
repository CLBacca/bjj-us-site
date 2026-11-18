import Image from "next/image"
import matAcademyImg from "@/src/assets/images/bjj_mat_academy_1794950481668.jpg"
import beltsRackImg from "@/src/assets/images/bjj_belts_rack_1794950482301.jpg"
import { ArrowRight, Check } from "lucide-react"

// Links to the static feature pages (public/<page>/index.html).
function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#E63946] underline-offset-4 hover:underline"
    >
      {children}
      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
    </a>
  )
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E63946]" aria-hidden="true" />
      <span>{children}</span>
    </li>
  )
}

export function CapabilitiesBento() {
  return (
    <section
      id="features"
      className="mx-auto max-w-6xl px-6 py-24 sm:py-28"
    >
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#E63946]">
            Built exclusively for Jiu-Jitsu schools
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Every workflow from <span className="whitespace-nowrap">check-in</span> to your Stripe payout
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-zinc-400">
          Generic gym software forces BJJ academies into fitness-class templates. BJJ-US models belts, stripes, training days, promotions and family accounts natively.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* 01. Check-in & attendance (col-span-2) */}
        <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#18181B] lg:col-span-2">
          <div className="relative h-56 w-full overflow-hidden bg-zinc-900 sm:h-80">
            <Image
              src={matAcademyImg}
              alt="Athletes training on slate tatami mats inside a modern Brazilian Jiu-Jitsu academy"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-[#18181B]/45 to-transparent"
              aria-hidden="true"
            />
          </div>

          <div className="relative -mt-12 p-6 sm:p-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                01. Mat-Side Check-In &amp; Attendance
              </h3>
              <span className="text-xs text-zinc-400">Every check-in confirmed</span>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300">
              Members check in to class in one tap on their own phone. With arrival check-in on, the phone confirms they made it; otherwise the app asks &ldquo;Did you make it?&rdquo; and the professor approves the rest after class. Every confirmed class counts toward their next promotion.
            </p>
            <MoreLink href="/bjj-attendance-app/">More about attendance</MoreLink>
          </div>
        </article>

        {/* 02. Zero-markup billing (col-span-1) */}
        <article className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#18181B] p-6 sm:p-8">
          <div>
            <h3 className="text-xl font-bold text-white">02. Zero-Markup Billing</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Connect your own Stripe account directly. Keep 100% of tuition minus standard Stripe card fees—never pay percentage SaaS markups on recurring memberships.
            </p>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-zinc-400">Platform surcharge</span>
              <span className="font-[family-name:var(--font-mono)] text-3xl font-bold text-white tabular-nums">
                0.0%
              </span>
            </div>
            <ul className="mt-5 space-y-2.5 text-xs text-zinc-300">
              <CheckItem>Pro-shop gear sold in the app</CheckItem>
              <CheckItem>Paid event &amp; seminar sign-ups</CheckItem>
            </ul>
          </div>
        </article>

        {/* 03. Belt & stripe tracking (col-span-1) */}
        <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#18181B]">
          <div className="relative h-48 w-full overflow-hidden bg-zinc-900 sm:h-56">
            <Image
              src={beltsRackImg}
              alt="Brazilian Jiu-Jitsu belts in white, blue, purple, brown, and black arranged on a wooden bench"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
            <div>
              <h3 className="text-xl font-bold text-white">03. Belt &amp; Stripe Tracking</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Set training days per stripe and per belt, plus minimum time at each belt, for both the adult and kids belt systems.
              </p>
              <MoreLink href="/bjj-belt-tracking/">Belt and stripe tracking</MoreLink>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400">
              <span>Adult White–Black</span>
              <span aria-hidden="true">·</span>
              <span>Kids Gray–Green</span>
            </div>
          </div>
        </article>

        {/* 04. Professor tools & waivers (col-span-2). The AI-generated coach
            photo was removed: it showed real team and gi brands. */}
        <article className="grid gap-8 overflow-hidden rounded-2xl border border-white/10 bg-[#18181B] p-6 sm:p-8 md:grid-cols-2 lg:col-span-2">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              04. Professor Tools &amp; Digital Waivers
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Professors see who made it to each class, see who meets your gym&rsquo;s promotion guidelines, and award stripes and belts. Trial students sign your waiver in the app or online before their first class.
            </p>
            <MoreLink href="/bjj-gym-waivers/">More about waivers</MoreLink>
          </div>

          <div className="flex flex-col justify-center">
            <ul className="space-y-3 border-t border-white/10 pt-6 text-sm text-zinc-300 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <CheckItem>Approve the rest after class, or fix the past week</CheckItem>
              <CheckItem>Waivers from a ready template, signed in the app or online</CheckItem>
              <CheckItem>The professor always decides promotions</CheckItem>
            </ul>
          </div>
        </article>

        {/* 05. Branded app (full width) */}
        <article className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#18181B] p-6 sm:p-8 lg:col-span-3 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <h3 className="text-xl font-bold text-white sm:text-2xl">05. Your Gym&rsquo;s Own App</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Members download BJJ-US and join with your gym&rsquo;s invite code; from then on the app shows your gym&rsquo;s name, logo and colors. Change them anytime and every member sees the new look, with no app update. Members use the app in English or Portuguese, and more languages are coming, including Spanish, Italian and French.
            </p>
          </div>
          <MoreLink href="/branded-gym-app/">How your branded app works</MoreLink>
        </article>
      </div>
    </section>
  )
}
