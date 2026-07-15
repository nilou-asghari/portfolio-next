'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const popIn = {
  hidden: { opacity: 0, scale: 0.88, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 280, damping: 22 },
  },
}

const slideFromRight = {
  hidden: { opacity: 0, x: 60, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 },
  },
}

const spinIn = {
  hidden: { opacity: 0, rotate: -15, scale: 0.9 },
  show: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.25 },
  },
}

export default function Hero() {
  const t = useTranslations('Hero')

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-sepia-light py-20 md:py-32 overflow-hidden"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:gap-4 px-6 md:px-12 md:grid-cols-2 w-full">
        <div className="order-first md:order-last flex justify-center md:justify-start">
          <div className="group relative w-64 h-64 md:w-90 md:h-110 shrink-0">
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              animate="show"
              className="absolute inset-0 col-start-1 row-start-1 rounded overflow-hidden z-10"
            >
              <Image
                src="/profile5.png"
                alt="Niloufar Asghari – Frontend Developer"
                fill
                sizes="(max-width: 768px) 256px, 360px"
                className="object-contain transition-all duration-700 ease-out group-hover:scale-[1.02]"
                priority
              />
            </motion.div>

            <motion.div
              variants={spinIn}
              initial="hidden"
              animate="show"
              className="absolute inset-0 col-start-1 row-start-1 z-0"
            >
              <Image
                src="/parallax1.svg"
                alt=""
                aria-hidden="true"
                fill
                loading="eager"
                className="rounded-full border-4 border-amber-50 object-cover transition-all duration-700 ease-out group-hover:rotate-2"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center text-center md:text-left order-last md:order-first"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm md:text-base uppercase tracking-[0.25em] text-sepia-darkest/60"
          >
            {t('intro')}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-sepia-dark"
          >
            {t('frontend')}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg mx-auto md:mx-0 text-lg md:text-xl leading-relaxed text-sepia-darkest/80"
          >
            {t('description')}
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4 md:gap-5"
          >
            <motion.a
              variants={popIn}
              href="#projects"
              className="rounded-md bg-sepia-darkest px-6 py-3 text-sm font-medium text-sepia-lightest
                         transition-all duration-300 ease-out hover:-translate-y-0.5
                         hover:bg-zinc-800 hover:shadow-lg text-center"
            >
              {t('ctaProjects')}
            </motion.a>

            <motion.a
              variants={popIn}
              href="#contact"
              className="rounded-md border border-zinc-300 px-6 py-3 text-sm font-medium text-sepia-darkest
                         transition-all duration-300 ease-out hover:-translate-y-0.5
                         hover:bg-zinc-100 hover:border-zinc-400 text-center"
            >
              {t('ctaContact')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
