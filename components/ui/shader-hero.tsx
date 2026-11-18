"use client"

import { Fragment, useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { MeshGradient } from "@paper-design/shaders-react"
import { ArrowRight, ShieldCheck } from "lucide-react"

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const containerAnimation = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.025 },
  },
}

export interface ShaderHeroProps {
  onStartTrial?: () => void
  onExploreSandbox?: () => void
}

export const Component = ({ onStartTrial, onExploreSandbox }: ShaderHeroProps) => {
  const title = "Run Your Gym With Precision"
  const words = title.split(" ")
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }
    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  const handlePrimaryAction = () => {
    if (onStartTrial) {
      onStartTrial()
      return
    }
    const target = document.getElementById("trial-signup")
    target?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSecondaryAction = () => {
    if (onExploreSandbox) {
      onExploreSandbox()
      return
    }
    const target = document.getElementById("mat-sandbox")
    target?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-[92vh] w-full overflow-hidden bg-black flex items-center justify-center pt-20 pb-16"
    >
      <svg className="pointer-events-none absolute inset-0 h-0 w-0" aria-hidden="true">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.004" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.25" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className="pointer-events-none absolute inset-0 h-full w-full"
        colors={["#000000", "#161616", "#2e2e2e", "#E63946"]}
        distortion={0.85}
        swirl={0.55}
        speed={isActive ? 0.38 : 0.25}
      />
      <MeshGradient
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30 mix-blend-screen"
        colors={["#000000", "#ffffff", "#161616"]}
        distortion={0.45}
        swirl={0.75}
        grainOverlay={0.14}
        speed={isActive ? 0.24 : 0.15}
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-[#0E0E11]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-6 text-center">
        {/* The h1 starts with the search keyword "The BJJ gym app", as on the
            old home page. The spaces between word spans keep the heading's
            text readable ("Run Your Gym…", not "RunYourGym…"). */}
        <h1 className="flex max-w-4xl flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex items-center gap-2 font-sans text-sm font-medium normal-case tracking-wide text-zinc-200"
          >
            <ShieldCheck className="h-4 w-4 text-[#E63946]" aria-hidden="true" />
            The BJJ gym app
          </motion.span>{" "}
          <motion.span
            variants={containerAnimation}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-x-[0.26em] text-balance text-5xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl"
          >
            {words.map((word, wordIdx) => (
              <Fragment key={wordIdx}>
                <span className="inline-flex whitespace-nowrap">
                  {word.split("").map((char, charIdx) => (
                    <motion.span key={charIdx} variants={letterAnimation}>
                      {char}
                    </motion.span>
                  ))}
                </span>{" "}
              </Fragment>
            ))}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl"
        >
          Check-ins, belt progress, promotions and zero-markup Stripe memberships, all in an app your members open with your gym&rsquo;s name and logo.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400"
        >
          Best for jiu-jitsu academies that want their own branded member app and attendance they can trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            onClick={handlePrimaryAction}
            className="h-13 rounded-xl bg-[#E63946] px-7 text-base font-semibold text-white hover:bg-[#B42332]"
            size="lg"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            onClick={handleSecondaryAction}
            variant="outline"
            className="h-13 rounded-xl border-white/20 bg-black/40 px-6 text-base font-medium text-zinc-100 backdrop-blur-md hover:bg-white/10"
            size="lg"
          >
            Test Mat Check-In Demo
          </Button>
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-zinc-400">
          <span>Zero Stripe processing markup</span>
          <span aria-hidden="true">·</span>
          <span>14-day free trial</span>
          <span aria-hidden="true">·</span>
          <span>Free app for your members</span>
        </div>
      </div>
    </section>
  )
}

export const ShaderHero = Component
