"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Award, CheckCircle2, RotateCcw, Search } from "lucide-react"

type BeltRank = "White" | "Blue" | "Purple" | "Brown" | "Black"

interface StudentRecord {
  id: string
  name: string
  program: string
  belt: BeltRank
  stripes: number
  daysAtBelt: number
  checkedInToday: boolean
  lastCheckIn: string
}

// Recommended training days for the next belt: the app's default guidelines
// (the same table as the home page). Black belt has no next belt here.
const DAYS_FOR_NEXT_BELT: Record<BeltRank, number | null> = {
  White: 125,
  Blue: 150,
  Purple: 150,
  Brown: 125,
  Black: null,
}

const INITIAL_STUDENTS: StudentRecord[] = [
  {
    id: "stu-1",
    name: "Marcus Holloway",
    program: "Evening Gi · Fundamentals",
    belt: "White",
    stripes: 3,
    daysAtBelt: 118,
    checkedInToday: false,
    lastCheckIn: "2 days ago",
  },
  {
    id: "stu-2",
    name: "Elena Vasconcelos",
    program: "Competition No-Gi",
    belt: "Purple",
    stripes: 2,
    daysAtBelt: 148,
    checkedInToday: true,
    lastCheckIn: "Today · 6:12 PM",
  },
  {
    id: "stu-3",
    name: "Devon Takahashi",
    program: "All-Levels Gi",
    belt: "Blue",
    stripes: 4,
    daysAtBelt: 156,
    checkedInToday: false,
    lastCheckIn: "Yesterday",
  },
  {
    id: "stu-4",
    name: "Sofia Alencar",
    program: "Morning Gi & Drilling",
    belt: "Brown",
    stripes: 1,
    daysAtBelt: 92,
    checkedInToday: true,
    lastCheckIn: "Today · 6:04 PM",
  },
  {
    id: "stu-5",
    name: "Liam O'Connor",
    program: "Evening Gi · Advanced",
    belt: "Black",
    stripes: 2,
    daysAtBelt: 212,
    checkedInToday: false,
    lastCheckIn: "3 days ago",
  },
]

function daysRequired(belt: BeltRank) {
  return DAYS_FOR_NEXT_BELT[belt]
}

function isPromotionReady(student: StudentRecord) {
  const required = daysRequired(student.belt)
  return required !== null && student.daysAtBelt >= required
}

const BELT_STYLES: Record<BeltRank, { bar: string; tip: string; label: string }> = {
  White: { bar: "bg-zinc-100 border border-zinc-400", tip: "bg-zinc-950", label: "White" },
  Blue: { bar: "bg-blue-600", tip: "bg-zinc-950", label: "Blue" },
  Purple: { bar: "bg-purple-700", tip: "bg-zinc-950", label: "Purple" },
  Brown: { bar: "bg-amber-900", tip: "bg-zinc-950", label: "Brown" },
  Black: { bar: "bg-zinc-900 border border-zinc-700", tip: "bg-[#E63946]", label: "Black" },
}

const BELT_ORDER: BeltRank[] = ["White", "Blue", "Purple", "Brown", "Black"]
const FILTER_OPTIONS: ("All" | BeltRank)[] = ["All", "White", "Blue", "Purple", "Brown", "Black"]

function BeltGraphic({ belt, stripes }: { belt: BeltRank; stripes: number }) {
  const style = BELT_STYLES[belt]
  return (
    <div className="flex items-center gap-3">
      <div
        className={`relative flex h-3.5 w-16 overflow-hidden rounded-[2px] ${style.bar}`}
        aria-label={`${belt} belt with ${stripes} stripes`}
      >
        <div className="flex-1" />
        <div className={`flex w-5 items-center justify-end gap-0.5 px-0.5 ${style.tip}`}>
          {Array.from({ length: stripes }).map((_, i) => (
            <span key={i} className="h-full w-[2px] bg-white" />
          ))}
        </div>
      </div>
      <span className="text-xs font-medium text-zinc-300 whitespace-nowrap">
        {belt} · {stripes} {stripes === 1 ? "stripe" : "stripes"}
      </span>
    </div>
  )
}

export function AcademySandbox() {
  const [students, setStudents] = useState<StudentRecord[]>(INITIAL_STUDENTS)
  const [beltFilter, setBeltFilter] = useState<"All" | BeltRank>("All")
  const [query, setQuery] = useState("")

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesBelt = beltFilter === "All" || student.belt === beltFilter
      const matchesQuery =
        query.trim() === "" ||
        student.name.toLowerCase().includes(query.trim().toLowerCase()) ||
        student.program.toLowerCase().includes(query.trim().toLowerCase())
      return matchesBelt && matchesQuery
    })
  }, [students, beltFilter, query])

  const checkedInCount = students.filter((s) => s.checkedInToday).length
  const eligibleCount = students.filter(isPromotionReady).length

  const toggleCheckIn = (id: string) => {
    setStudents((prev) =>
      prev.map((student) => {
        if (student.id !== id) return student
        const nextChecked = !student.checkedInToday
        return {
          ...student,
          checkedInToday: nextChecked,
          daysAtBelt: nextChecked
            ? student.daysAtBelt + 1
            : Math.max(0, student.daysAtBelt - 1),
          lastCheckIn: nextChecked ? "Today · Just now" : "Earlier",
        }
      })
    )
  }

  const awardStripeOrPromote = (id: string) => {
    setStudents((prev) =>
      prev.map((student) => {
        if (student.id !== id) return student
        if (student.stripes < 4) {
          return { ...student, stripes: student.stripes + 1 }
        }
        const currentIndex = BELT_ORDER.indexOf(student.belt)
        if (currentIndex < BELT_ORDER.length - 1) {
          return {
            ...student,
            belt: BELT_ORDER[currentIndex + 1],
            stripes: 0,
            daysAtBelt: 0,
          }
        }
        return student
      })
    )
  }

  const resetSandbox = () => {
    setStudents(INITIAL_STUDENTS)
    setBeltFilter("All")
    setQuery("")
  }

  return (
    <section
      id="mat-sandbox"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#E63946]">
            Interactive mat-side console
          </p>
          <h2 className="font-[family-name:var(--font-display)] mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Test check-ins and belt progression live
          </h2>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <div>
            <span className="text-zinc-400">On mat today: </span>
            <span className="font-[family-name:var(--font-mono)] font-semibold text-white tabular-nums">
              {checkedInCount} / {students.length}
            </span>
          </div>
          <div>
            <span className="text-zinc-400">Promotion ready: </span>
            <span className="font-[family-name:var(--font-mono)] font-semibold text-[#E63946] tabular-nums">
              {eligibleCount}
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#18181B]">
        <div className="flex flex-col justify-between gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-1 rounded-lg bg-[#0E0E11] p-1">
            {FILTER_OPTIONS.map((rank) => {
              const active = beltFilter === rank
              return (
                <button
                  key={rank}
                  type="button"
                  onClick={() => setBeltFilter(rank)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    active
                      ? "bg-[#E63946] text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {rank}
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-56">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500"
                aria-hidden="true"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search student or class..."
                aria-label="Search student or class"
                className="h-9 w-full rounded-lg border border-white/10 bg-[#0E0E11] pl-8 pr-3 text-xs text-white placeholder:text-zinc-500 focus:border-[#E63946] focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={resetSandbox}
              title="Reset sandbox roster"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/10 px-3 text-xs font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Reset
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-zinc-400">
                <th className="px-6 py-3.5 font-medium">Student</th>
                <th className="px-6 py-3.5 font-medium">Rank</th>
                <th className="px-6 py-3.5 font-medium">Training Days</th>
                <th className="px-6 py-3.5 font-medium">Status</th>
                <th className="px-6 py-3.5 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-sm text-zinc-400"
                  >
                    No students match your current belt filter or search query.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => {
                  const required = daysRequired(student.belt)
                  const progressPct =
                    required === null
                      ? 0
                      : Math.min(100, Math.round((student.daysAtBelt / required) * 100))
                  const isReady = isPromotionReady(student)
                  const atMaxRank = student.belt === "Black" && student.stripes === 4

                  return (
                    <tr
                      key={student.id}
                      className="transition-colors hover:bg-white/[0.02]"
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-white">{student.name}</div>
                        <div className="mt-0.5 text-xs text-zinc-400">
                          {student.program}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <BeltGraphic belt={student.belt} stripes={student.stripes} />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="font-[family-name:var(--font-mono)] text-xs text-zinc-200 tabular-nums whitespace-nowrap">
                            {required === null
                              ? `${student.daysAtBelt} days`
                              : `${student.daysAtBelt} / ${required} days`}
                          </span>
                          {required !== null && (
                            <div className="hidden h-1.5 w-20 overflow-hidden rounded-full bg-zinc-800 sm:block">
                              <div
                                className={`h-full transition-all duration-300 ${
                                  isReady ? "bg-[#E63946]" : "bg-zinc-400"
                                }`}
                                style={{ width: `${progressPct}%` }}
                              />
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs">
                        {student.checkedInToday ? (
                          <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
                            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                            Checked in · {student.lastCheckIn}
                          </span>
                        ) : (
                          <span className="text-zinc-400">
                            Last seen {student.lastCheckIn}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="inline-flex items-center gap-2">
                          <Button
                            type="button"
                            size="sm"
                            variant={student.checkedInToday ? "secondary" : "default"}
                            onClick={() => toggleCheckIn(student.id)}
                            className="h-8 px-3 text-xs"
                          >
                            {student.checkedInToday ? "Undo Check-In" : "Check In"}
                          </Button>
                          <Button
                            type="button"
                            size="sm"
                            variant="outline"
                            disabled={atMaxRank}
                            onClick={() => awardStripeOrPromote(student.id)}
                            className="h-8 px-3 text-xs"
                          >
                            <Award className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
                            {student.stripes === 4 && student.belt !== "Black"
                              ? "Promote"
                              : "+ Stripe"}
                          </Button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
