"use client"

import { useState, type FormEvent, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import {
  INCLUDED_STUDENTS,
  TIERS,
  TRIAL_DAYS,
  formatCents,
  formatDollars,
  monthlyTotalCents,
  type TierId,
} from "@/lib/pricing"

const SUPPORT_EMAIL = "support@bjj-us.com"

// `faq` is rendered between the pricing cards and the signup form.
export function ProofAndPricing({ faq }: { faq?: ReactNode }) {
  const [selectedTier, setSelectedTier] = useState<TierId>("open-mat")

  const [academyName, setAcademyName] = useState("")
  const [ownerName, setOwnerName] = useState("")
  const [email, setEmail] = useState("")
  const [formError, setFormError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const tierFor = (id: TierId) => TIERS.find((t) => t.id === id) ?? TIERS[0]

  const handlePlanSelect = (tier: TierId) => {
    setSelectedTier(tier)
    const formSection = document.getElementById("trial-signup")
    formSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmedAcademy = academyName.trim()
    const trimmedOwner = ownerName.trim()
    const trimmedEmail = email.trim()

    if (!trimmedAcademy || !trimmedOwner || !trimmedEmail) {
      setFormError("Please complete your academy name, coach name, and work email.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedEmail)) {
      setFormError("Please enter a valid work email address.")
      return
    }

    // The site is static, so the request goes out as an email from the
    // visitor's own mail app, the same way as "Set up my gym" on the old site.
    const tier = tierFor(selectedTier)
    const body = [
      `Academy: ${trimmedAcademy}`,
      `Head coach / owner: ${trimmedOwner}`,
      `Email: ${trimmedEmail}`,
      `Active students: ${tier.range} (${tier.name})`,
    ].join("\n")
    window.location.href =
      `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Set up my gym")}` +
      `&body=${encodeURIComponent(body)}`

    setFormError(null)
    setSubmitted(true)
  }

  return (
    <>
      {/* Pricing */}
      <section
        id="pricing"
        className="mx-auto max-w-6xl border-t border-white/10 px-6 py-24"
      >
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium text-[#E63946]">Pricing</p>
          <h2 className="font-[family-name:var(--font-display)] mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            First {INCLUDED_STUDENTS} students included. Every tier.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            Every gym starts with a {TRIAL_DAYS}-day free trial. Your tier is set
            by your number of active students.
          </p>
        </div>

        {/* One column until there's room for three readable cards. */}
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col justify-between rounded-2xl border p-7 ${
                tier.featured
                  ? "border-[#E63946]/70 bg-[#1a1213]"
                  : "border-white/10 bg-[#18181B]"
              }`}
            >
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                    tier.featured ? "text-[#E63946]" : "text-zinc-400"
                  }`}
                >
                  {tier.range}
                </p>
                <h3 className="font-[family-name:var(--font-display)] mt-3 text-2xl font-bold text-white">
                  {tier.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-white tabular-nums">
                    {formatDollars(tier.baseCents)}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-zinc-500">
                    /mo
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-300">
                  + {formatCents(tier.perStudentCents)} per student after{" "}
                  {INCLUDED_STUDENTS}
                </p>

                <dl className="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm">
                  {tier.examples.map((students) => (
                    <div key={students} className="flex justify-between gap-4">
                      <dt className="text-zinc-400">{students} students</dt>
                      <dd className="font-semibold text-white tabular-nums">
                        {formatCents(monthlyTotalCents(tier, students))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-8">
                <Button
                  type="button"
                  onClick={() => handlePlanSelect(tier.id)}
                  variant={tier.featured ? "default" : "outline"}
                  size="lg"
                  className="w-full"
                  aria-label={`Start ${TRIAL_DAYS}-Day Free Trial on ${tier.name}`}
                >
                  Start {TRIAL_DAYS}-Day Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-zinc-500">
          Monthly total = base fee + (active students − {INCLUDED_STUDENTS}) ×
          per-student rate.
        </p>
      </section>

      {faq}

      {/* Trial Onboarding Lead Form */}
      <section
        id="trial-signup"
        className="mx-auto max-w-6xl border-t border-white/10 px-6 py-24"
      >
        <div className="grid grid-cols-1 gap-12 rounded-2xl border border-white/10 bg-[#18181B] p-6 sm:p-12 lg:grid-cols-2">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium text-[#E63946]">
                {TRIAL_DAYS}-day free trial
              </p>
              <h2 className="font-[family-name:var(--font-display)] mt-3 text-balance text-3xl font-bold tracking-tight text-white">
                Let&rsquo;s set up your gym
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                Send us your gym&rsquo;s name, logo, brand color and the owner&rsquo;s email. We create your gym the same day, the owner adds the schedule and plans, and members join with their invite codes. A member list is optional; we can invite everyone in bulk.
              </p>
            </div>

            <div className="mt-8 space-y-2 border-t border-white/10 pt-6 text-xs text-zinc-400">
              <div>Members always download the app for free.</div>
              <div>
                Questions?{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-zinc-200 underline-offset-4 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="flex h-full flex-col justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-7">
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
                    One step left: send the email
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  Your email app should have opened a message to{" "}
                  <span className="font-medium text-white">{SUPPORT_EMAIL}</span>{" "}
                  with your details. Send it and we&rsquo;ll set up{" "}
                  <span className="font-medium text-white">{academyName}</span> on the{" "}
                  <span className="font-medium text-white">
                    {tierFor(selectedTier).name}
                  </span>{" "}
                  plan. Nothing opened? Email us at {SUPPORT_EMAIL}.
                </p>
                <div className="mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false)
                      setAcademyName("")
                      setOwnerName("")
                      setEmail("")
                    }}
                  >
                    Start Over
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="academy-name"
                      className="mb-1.5 block text-xs font-medium text-zinc-300"
                    >
                      Academy Name
                    </label>
                    <input
                      id="academy-name"
                      type="text"
                      value={academyName}
                      onChange={(e) => setAcademyName(e.target.value)}
                      placeholder="e.g. Northside Jiu-Jitsu"
                      className="h-10 w-full rounded-lg border border-white/15 bg-[#0E0E11] px-3 text-sm text-white placeholder:text-zinc-500 focus:border-[#E63946] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="owner-name"
                      className="mb-1.5 block text-xs font-medium text-zinc-300"
                    >
                      Head Coach / Owner
                    </label>
                    <input
                      id="owner-name"
                      type="text"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      placeholder="e.g. Professor Rodrigo"
                      className="h-10 w-full rounded-lg border border-white/15 bg-[#0E0E11] px-3 text-sm text-white placeholder:text-zinc-500 focus:border-[#E63946] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="work-email"
                    className="mb-1.5 block text-xs font-medium text-zinc-300"
                  >
                    Work Email
                  </label>
                  <input
                    id="work-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="coach@youracademy.com"
                    className="h-10 w-full rounded-lg border border-white/15 bg-[#0E0E11] px-3 text-sm text-white placeholder:text-zinc-500 focus:border-[#E63946] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="student-count"
                    className="mb-1.5 block text-xs font-medium text-zinc-300"
                  >
                    Active Students
                  </label>
                  <select
                    id="student-count"
                    value={selectedTier}
                    onChange={(e) => setSelectedTier(e.target.value as TierId)}
                    className="h-10 w-full rounded-lg border border-white/15 bg-[#0E0E11] px-3 text-sm text-white focus:border-[#E63946] focus:outline-none"
                  >
                    {TIERS.map((tier) => (
                      <option key={tier.id} value={tier.id}>
                        {tier.range} · {tier.name}
                      </option>
                    ))}
                  </select>
                </div>

                {formError && (
                  <p role="alert" className="text-xs font-medium text-[#E63946]">
                    {formError}
                  </p>
                )}

                <Button type="submit" size="lg" className="w-full">
                  Set Up My Gym
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
