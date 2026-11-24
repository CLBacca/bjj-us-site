import Image from "next/image"
import logo from "@/public/assets/logo.svg"
import { APP_STORE_URL } from "@/lib/app-store"

// Links every public page: the Next content pages (features, families,
// compare, support) and the static legal pages in public/.
const FEATURE_LINKS = [
  { href: "/bjj-attendance-app/", label: "Attendance" },
  { href: "/bjj-belt-tracking/", label: "Belt tracking" },
  { href: "/bjj-gym-waivers/", label: "Waivers" },
  { href: "/branded-gym-app/", label: "Branded app" },
  { href: "/families/", label: "Families" },
  { href: "/compare/", label: "Compare" },
]

const HELP_LINKS = [
  { href: "/support/", label: "Support" },
  { href: "/privacy/", label: "Privacy" },
  { href: "/terms/", label: "Terms" },
]

const linkClass = "transition-colors hover:text-white"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0E0E11]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a
            href="/"
            aria-label="BJJ-US home"
            className="flex items-center gap-2 font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-wide text-white"
          >
            <Image src={logo} alt="" width={28} height={28} />
            BJJ-US
          </a>
          <p className="mt-2 text-xs text-zinc-500">
            bjj-us.com · The app for jiu-jitsu gyms
          </p>
          <a
            href="mailto:support@bjj-us.com"
            className="mt-4 inline-block text-xs text-zinc-300 underline-offset-4 hover:underline"
          >
            support@bjj-us.com
          </a>
          <a
            href={APP_STORE_URL}
            className="mt-4 flex w-fit items-center rounded-md border border-white/15 px-3 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-white/30 hover:text-white"
          >
            Download on the App Store
          </a>
          <p className="mt-4 text-xs text-zinc-500">&copy; 2026 BJJ-US</p>
        </div>

        <nav aria-label="Features" className="text-xs text-zinc-400">
          <p className="mb-3 font-semibold text-zinc-200">Features</p>
          <ul className="space-y-2.5">
            {FEATURE_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={linkClass}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Help and legal" className="text-xs text-zinc-400">
          <p className="mb-3 font-semibold text-zinc-200">Help</p>
          <ul className="space-y-2.5">
            {HELP_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={linkClass}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
