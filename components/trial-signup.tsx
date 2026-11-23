"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { TRIAL_DAYS } from "@/lib/trial"

const SUPPORT_EMAIL = "support@bjj-us.com"

// The gym's size, so we know what to set up. The site shows no prices.
const STUDENT_RANGES = ["1–60", "61–140", "141 or more"] as const

export function TrialSignup() {
  const [academyName, setAcademyName] = useState("")
  const [ownerName, setOwnerName] = useState("")
  const [email, setEmail] = useState("")
  const [students, setStudents] = useState<string>(STUDENT_RANGES[0])
  const [formError, setFormError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

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
    const body = [
      `Academy: ${trimmedAcademy}`,
      `Head coach / owner: ${trimmedOwner}`,
      `Email: ${trimmedEmail}`,
      `Active students: ${students}`,
    ].join("\n")
    window.location.href =
      `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Set up my gym")}` +
      `&body=${encodeURIComponent(body)}`

    setFormError(null)
    setSubmitted(true)
  }

  return (
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
              Pricing or questions?{" "}
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
                <span className="font-medium text-white">{academyName}</span>.
                Nothing opened? Email us at {SUPPORT_EMAIL}.
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
                  value={students}
                  onChange={(e) => setStudents(e.target.value)}
                  className="h-10 w-full rounded-lg border border-white/15 bg-[#0E0E11] px-3 text-sm text-white focus:border-[#E63946] focus:outline-none"
                >
                  {STUDENT_RANGES.map((range) => (
                    <option key={range} value={range}>
                      {range}
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
  )
}
