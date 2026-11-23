import { Navbar } from "@/components/navbar"
import { Component as ShaderHero } from "@/components/ui/shader-hero"
import { CapabilitiesBento } from "@/components/capabilities-bento"
import { AcademySandbox } from "@/components/academy-sandbox"
import { Faq } from "@/components/faq"
import { TrialSignup } from "@/components/trial-signup"
import { Footer } from "@/components/footer"
import { homeStructuredData, toJsonLd } from "@/lib/structured-data"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0E0E11] text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(homeStructuredData) }}
      />
      <Navbar />
      <main>
        <ShaderHero />
        <CapabilitiesBento />
        <AcademySandbox />
        <Faq />
        <TrialSignup />
      </main>
      <Footer />
    </div>
  )
}
