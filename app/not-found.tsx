import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Exported as out/404.html, which GitHub Pages serves for unknown URLs.
export const metadata: Metadata = {
  title: "Page not found — BJJ-US",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0E0E11] text-zinc-100">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-24 pt-36">
        <p className="text-sm font-medium text-[#E63946]">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300">
          That page doesn&rsquo;t exist. Head back to the{" "}
          <a href="/" className="text-white underline underline-offset-4">
            home page
          </a>{" "}
          or visit{" "}
          <a href="/support/" className="text-white underline underline-offset-4">
            Support
          </a>
          .
        </p>
      </main>
      <Footer />
    </div>
  )
}
