"use client"

import Image from "next/image"
import logo from "@/public/assets/logo.svg"
import { Button } from "@/components/ui/button"
import { DEMO_URL } from "@/lib/demo"

export function Navbar() {
  // The navbar is also on the 404 page, so links go to "/#…" and the
  // trial button falls back to the home page's signup form.
  const scrollToTrial = () => {
    const el = document.getElementById("trial-signup")
    if (el) el.scrollIntoView({ behavior: "smooth" })
    else window.location.href = "/#trial-signup"
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0E0E11]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6">
        <a
          href="/"
          aria-label="BJJ-US home"
          className="flex items-center gap-2.5 font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wide text-white whitespace-nowrap shrink-0"
        >
          <Image src={logo} alt="" width={34} height={34} priority />
          BJJ-US
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400"
        >
          {[
            { href: "/#features", label: "Features" },
            { href: "/#mat-sandbox", label: "Demo" },
            { href: "/#faq", label: "FAQ" },
            { href: "/support/", label: "Support" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="whitespace-nowrap shrink-0 transition-colors hover:text-white hover:underline underline-offset-4"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center rounded-lg border border-white/15 px-4 text-xs font-semibold text-zinc-200 whitespace-nowrap transition-colors hover:border-white/30 hover:text-white sm:inline-flex"
          >
            Book a Demo
          </a>
          <Button
            onClick={scrollToTrial}
            size="sm"
            className="h-9 rounded-lg bg-[#E63946] px-4 text-xs font-semibold text-white whitespace-nowrap shrink-0 hover:bg-[#B42332]"
          >
            Start Trial
          </Button>
        </div>
      </div>
    </header>
  )
}
