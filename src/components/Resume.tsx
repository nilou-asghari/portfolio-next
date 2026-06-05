'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { motion } from 'framer-motion'

// ─── Variants ────────────────────────────────────────────────────────────────

const titleVariant = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const popIn = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 260, damping: 22 },
  },
}

/** Generic stagger container */
const stagger = (delay = 0, gap = 0.13) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})

/** Dot fills in from transparent to solid */
const dotFill = (filled: boolean) => ({
  hidden: { scale: 0.4, opacity: 0 },
  show: {
    scale: 1,
    opacity: filled ? 1 : 0.35,
    transition: { type: 'spring' as const, stiffness: 400, damping: 20 },
  },
})

const decorDrift = (x: number, y: number) => ({
  hidden: { opacity: 0, x, y },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
  },
})

// ─── Reusable animated dot row ───────────────────────────────────────────────

function DotRow({
  total,
  filled,
  size = 'md',
}: {
  total: number
  filled: number
  size?: 'sm' | 'md'
}) {
  const dotClass = size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 md:w-2.5 h-2 md:h-2.5'

  return (
    <motion.div
      className="flex gap-1.5"
      variants={stagger(0, 0.07)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          variants={dotFill(i < filled)}
          className={`${dotClass} rounded-full ${
            i < filled ? 'bg-sepia-dark' : 'border border-sepia-dark/30'
          }`}
        />
      ))}
    </motion.div>
  )
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Resume() {
  const t = useTranslations('Resume')

  const languages = [
    { name: 'Persian', level: 5, label: 'Native' },
    { name: 'English', level: 4, label: 'C1' },
    { name: 'German', level: 3, label: 'B2' },
  ]

  const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']

  return (
    <section id="resume" className="bg-sepia-light py-20 md:py-32 relative text-sepia-darkest">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        {/* Title */}
        <motion.h2
          variants={titleVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-8 md:mb-16 text-5xl md:text-7xl font-serif text-left"
        >
          {t('title')}
        </motion.h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {/* Left border column */}
          <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-sepia-dark mb-6 md:mb-0 md:h-full" />

          {/* Right column */}
          <div className="md:col-span-2 space-y-12 md:space-y-20">
            {/* 1. Intro */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="text-base md:text-lg leading-relaxed"
            >
              {t('intro')}
            </motion.p>

            {/* 2. Skills */}
            <div className="space-y-6 md:space-y-8">
              <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="text-xl md:text-2xl font-serif italic"
              >
                {t('skills')}
              </motion.h3>

              {/* Skill rows stagger in */}
              <motion.ul
                variants={stagger(0.05, 0.12)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-3 md:space-y-4"
              >
                {skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={slideLeft}
                    className="flex items-center gap-4 md:gap-6"
                  >
                    <span className="w-28 text-sm font-medium">{skill}</span>
                    {/* Dots animate independently via DotRow */}
                    <DotRow total={5} filled={4} />
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <motion.hr
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="border-sepia-dark/20"
            />

            {/* 3. Nested Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
              {/* Left sub-column: Education & Languages */}
              <div className="space-y-12 md:space-y-16">
                {/* Education */}
                <section>
                  <motion.h3
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-sm md:text-xl font-bold uppercase tracking-widest mb-6 md:mb-8"
                  >
                    {t('educationTitle')}
                  </motion.h3>

                  <motion.div
                    variants={stagger(0, 0.16)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="space-y-5 md:space-y-6"
                  >
                    <motion.div variants={slideLeft} className="group">
                      <span className="text-sm uppercase tracking-widest opacity-50">2024</span>
                      <h4 className="font-bold text-base md:text-lg leading-relaxed leading-tight">
                        Web Development Bootcamp
                      </h4>
                      <p className="text-sm uppercase tracking-widest opacity-50 md:text-sm opacity-80">
                        WBS Coding School · Berlin
                      </p>
                    </motion.div>

                    <motion.div variants={slideLeft}>
                      <span className="text-sm uppercase tracking-widest opacity-50">2007</span>
                      <h4 className="font-bold text-base md:text-lg leading-relaxed leading-tight">
                        Bachelor's Degree in Computer Software Engineering
                      </h4>
                      <p className="text-sm uppercase tracking-widest opacity-50 md:text-sm opacity-80">
                        Khayyam University · Mashhad
                      </p>
                    </motion.div>
                  </motion.div>
                </section>

                {/* Languages */}
                <section>
                  <motion.h3
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-sm md:text-xl font-bold uppercase tracking-widest mb-6 md:mb-8"
                  >
                    {t('languages')}
                  </motion.h3>

                  <motion.ul
                    variants={stagger(0, 0.15)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="space-y-4"
                  >
                    {languages.map((lang) => (
                      <motion.li key={lang.name} variants={fadeUp} className="space-y-2">
                        <div className="flex justify-between items-end max-w-40">
                          <span className="text-sm font-bold">{lang.name}</span>
                          <span className="text-[11px] uppercase tracking-tighter opacity-50">
                            {lang.label}
                          </span>
                        </div>
                        {/* Each language's dots fill in individually */}
                        <DotRow total={5} filled={lang.level} size="sm" />
                      </motion.li>
                    ))}
                  </motion.ul>
                </section>
              </div>

              {/* Right sub-column: Experience & Download */}
              <div className="space-y-12 md:space-y-16">
                {/* Experience */}
                <section>
                  <motion.h3
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-sm md:text-xl font-bold uppercase tracking-widest mb-6 md:mb-8"
                  >
                    {t('experienceTitle')}
                  </motion.h3>

                  <motion.div
                    variants={stagger(0, 0.18)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    className="space-y-8 md:space-y-10"
                  >
                    {/* Calvergy */}
                    <motion.div variants={slideLeft} className="space-y-2">
                      <span className="text-sm uppercase tracking-widest opacity-50">
                        2025 – 2026
                      </span>
                      <h4 className="font-bold text-base md:text-lg leading-relaxed uppercase">
                        Frontend Developer (Intern)
                      </h4>
                      <p className="text-sm uppercase tracking-widest opacity-50 md:text-sm font-serif italic">
                        Calvergy GmbH
                      </p>
                      <p className="text-sm leading-relaxed opacity-80">{t('expCalvergy')}</p>
                    </motion.div>

                    {/* Naarvan */}
                    <motion.div variants={slideLeft} className="space-y-2">
                      <span className="text-sm uppercase tracking-widest opacity-50">
                        2020 – 2023
                      </span>
                      <h4 className="font-bold text-base md:text-lg leading-relaxed uppercase">
                        Web & CMS Developer
                      </h4>
                      <p className="text-sm uppercase tracking-widest opacity-50 md:text-sm font-serif italic">
                        Naarvan Meta-communication
                      </p>
                      <p className="text-sm leading-relaxed opacity-80">{t('expNaarvan')}</p>
                    </motion.div>

                    {/* Rahavard */}
                    <motion.div variants={slideLeft} className="space-y-2">
                      <span className="text-sm uppercase tracking-widest opacity-50">
                        2017 – 2022
                      </span>
                      <h4 className="font-bold text-base md:text-lg leading-relaxed uppercase">
                        Content Creator & Web Specialist
                      </h4>
                      <p className="text-sm uppercase tracking-widest opacity-50 md:text-sm font-serif italic">
                        Rahavard Digital
                      </p>
                      <p className="text-sm leading-relaxed opacity-80">{t('expRahavard')}</p>
                    </motion.div>
                  </motion.div>
                </section>

                {/* Download CV */}
                <motion.a
                  variants={popIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.8 }}
                  href="/path-to-your-cv.pdf"
                  className="inline-block w-full text-center py-2 md:py-3 border border-sepia-darkest text-sm opacity-50 md:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 ease-out hover:bg-sepia-darkest hover:text-sepia-lightest"
                >
                  Download CV
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative SVGs — animate on mount, no whileInView (absolute elements confuse the observer) */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 }}
        className="absolute bottom-2 md:bottom-5 left-2 md:left-5 z-10 hidden sm:block"
      >
        <Image
          src="/parallax3.svg"
          alt=""
          width={200}
          height={200}
          className="object-cover w-16 md:w-26 h-16 md:h-26 lg:w-48 lg:h-48"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.5 }}
        className="absolute top-32 md:top-180 right-2 z-10 hidden sm:block"
      >
        <Image
          src="/parallax4.svg"
          alt=""
          width={200}
          height={200}
          className="object-cover w-16 md:w-32 h-16 md:h-32 lg:w-48 lg:h-48"
        />
      </motion.div>
    </section>
  )
}
