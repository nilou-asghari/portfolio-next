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

const popIn = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 260, damping: 22 },
  },
}

const statsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const statItem = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const rightContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
}

const decorDrift = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
  },
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function About() {
  const t = useTranslations('About')

  return (
    <section
      id="about"
      className="bg-sepia-lightest py-20 md:py-32 relative overflow-hidden text-sepia-darkest"
    >
      <motion.div
        variants={decorDrift}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-5 left-5 w-16 md:w-32 lg:w-48 h-16 md:h-32 lg:h-48 z-0 pointer-events-none hidden md:block"
      >
        <Image src="/parallax2.svg" alt="" fill className="object-contain" />
      </motion.div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 md:px-12 relative z-10">
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 md:justify-items-end">
          <motion.div
            variants={statsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-1 border-b md:border-b-0 md:border-r border-sepia-dark p-4 md:p-6 space-y-5"
          >
            <motion.div variants={statItem}>
              <p className="text-sm uppercase tracking-widest opacity-50 text-sepia-dark">
                {t('bornLabel')}
              </p>
              <p className="font-semibold text-base md:text-lg leading-relaxed">{t('bornValue')}</p>
            </motion.div>

            <motion.div variants={statItem}>
              <p className="text-sm uppercase tracking-widest opacity-50 text-sepia-dark">
                {t('experienceLabel')}
              </p>
              <p className="font-semibold text-base md:text-lg leading-relaxed">
                {t('experienceValue')}
              </p>
            </motion.div>

            <motion.div variants={statItem}>
              <p className="text-sm uppercase tracking-widest opacity-50 text-sepia-dark">
                {t('birthLabel')}
              </p>
              <p className="font-semibold text-base md:text-lg leading-relaxed">
                {t('birthValue')}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={rightContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="md:col-span-2 p-4 md:p-6"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 md:mb-6 text-base md:text-lg leading-relaxed"
            >
              {t('paragraph1')}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mb-6 md:mb-10 text-base md:text-lg leading-relaxed"
            >
              {t('paragraph2')}
            </motion.p>

            <motion.a
              variants={popIn}
              href="#contact"
              className="inline-block rounded-md border border-sepia-darkest px-4 md:px-6 py-2 md:py-3 text-sm font-medium transition hover:bg-sepia-darkest hover:text-sepia-lightest"
            >
              {t('cta')}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
