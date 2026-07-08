'use client'

import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'

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
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const imageReveal = {
  hidden: { opacity: 0, scale: 1.04 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const infoReveal = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.15,
    },
  },
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Project() {
  const t = useTranslations('projects')
  const locale = useLocale()

  return (
    <section id="projects" className="bg-sepia-lightest py-12 md:py-24 text-sepia-darkest">
      <div className="mx-auto max-w-6xl md:max-w-7xl px-6 md:px-12">
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

        {/* Section description */}
        <div className="mb-12 md:mb-20">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-md text-base md:text-lg leading-relaxed opacity-80"
          >
            {t('description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="hidden md:block border-r border-sepia-dark/20" />

          <div className="md:col-span-2 space-y-12 md:space-y-16">
            {projects.map((project) => (
              <motion.div
                key={project.slug}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
              >
                <Link
                  href={`/${locale}/projects/${project.slug}`}
                  className="group block cursor-pointer"
                >
                  <motion.div
                    variants={imageReveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="overflow-hidden bg-sepia-dark/5 mb-6 md:mb-8 rounded-sm"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={800}
                      className="object-cover w-full h-auto grayscale transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                  </motion.div>

                  {/* ── Info block ── */}
                  <motion.div
                    variants={infoReveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="border-b border-sepia-dark/10 pb-6 md:pb-8 transition-all duration-300 group-hover:border-sepia-dark/40"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      {/* Left: category, title, description */}
                      <div className="flex-1">
                        <p className="text-sm uppercase tracking-widest opacity-50 mb-2">
                          {project.categories[0]}
                        </p>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif transition-all duration-300 ease-out group-hover:translate-x-1">
                          {project.title}
                        </h3>
                        <p className="mt-2 md:mt-3 text-sm opacity-70 max-w-md leading-relaxed">
                          {project.context.split('.')[0]}.
                        </p>
                      </div>

                      {/* Right: year */}
                      <span className="text-sm font-light italic opacity-60 shrink-0 md:pt-1 transition-all duration-300 group-hover:opacity-100">
                        {project.year}
                      </span>
                    </div>

                    {/* ── Tech stack tags ── */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs uppercase tracking-wider px-2 py-1 border border-sepia-dark/20 rounded-sm opacity-60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </Link>

                {project.live && (
                  <div className="mt-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                      Live Site ↗
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
