import { ChevronDown } from "lucide-react"
import { FAQ } from "@/lib/faq"

// Plain <details>, no JavaScript: every answer is in the HTML for search
// engines and AI answers, and the FAQPage JSON-LD uses the same list.
export function Faq() {
  return (
    <section
      id="faq"
      className="mx-auto max-w-6xl border-t border-white/10 px-6 py-24"
    >
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-medium text-[#E63946]">FAQ</p>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Questions gym owners ask
        </h2>
      </div>

      <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#18181B]">
        {FAQ.map(({ question, answer }) => (
          <details key={question} className="group px-6 sm:px-7">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
              {question}
              <ChevronDown
                className="h-4 w-4 shrink-0 text-zinc-400 transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="max-w-3xl pb-6 text-sm leading-relaxed text-zinc-300">
              {answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
