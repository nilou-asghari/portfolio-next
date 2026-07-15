'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Project = {
  slug: string
  title: string
  year: string
  technologies: string[]
  categories: string[]
  live?: string | null
  image: string
  context?: string
  solution?: string[]
  gallery?: string[]
  process?: string
  result?: string
  next?: string
}

type Labels = {
  year: string
  technology: string
  categories: string
  context: string
  solution: string
  process: string
  result: string
  nextProject: string
}

type Props = {
  project: Project
  nextProject: Project | null
  labels: Labels
  locale: string
}

const titleVariant = {
  hidden: { opacity: 0, y: 64 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const imageReveal = {
  hidden: { opacity: 0, scale: 1.04 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const stagger = (delay = 0, gap = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})

const metaItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 280, damping: 24 },
  },
}

function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ProjectPageClient({ project, nextProject, labels, locale }: Props) {
  return (
    <>
      <section className="relative">
        <div className="relative bg-sepia-lightest h-32 md:h-48 mx-auto max-w-6xl px-6">
          <div className="absolute -bottom-[1.8rem] md:-bottom-[3.6rem]">
            <motion.h1
              variants={titleVariant}
              initial="hidden"
              animate="show"
              className="text-[10vw] md:text-[8rem] font-serif leading-[0.9]"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>

        <div className="bg-sepia-light py-32">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="hidden md:block border-r border-sepia-dark" />

              <motion.div
                variants={stagger(0.35, 0.1)}
                initial="hidden"
                animate="show"
                className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                <motion.div variants={metaItem}>
                  <p className="text-sm uppercase tracking-widest opacity-50 mb-2">{labels.year}</p>
                  <p className="text-xl font-bold">{project.year}</p>
                </motion.div>

                <motion.div variants={metaItem}>
                  <p className="text-sm uppercase tracking-widest opacity-50 mb-2">
                    {labels.categories}
                  </p>
                  <p className="text-base font-bold leading-snug">
                    {project.categories.join(', ')}
                  </p>
                </motion.div>

                {project.live && (
                  <motion.div variants={metaItem}>
                    <p className="text-sm uppercase tracking-widest opacity-50 mb-2">Live</p>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-block text-xl font-bold transition-opacity duration-300 hover:opacity-60"
                    >
                      View →
                      <span className="absolute left-0 -bottom-1 h-px w-full bg-sepia-darkest transition-all duration-300 ease-out group-hover:w-0" />
                    </a>
                  </motion.div>
                )}
              </motion.div>
            </div>

            <motion.div
              variants={stagger(0.55, 0.08)}
              initial="hidden"
              animate="show"
              className="mt-10 md:mt-12 flex flex-wrap gap-2"
            >
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  variants={metaItem}
                  className="text-xs uppercase tracking-wider px-3 py-1.5 border border-sepia-dark/30 rounded-sm opacity-70"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <motion.section variants={imageReveal} initial="hidden" animate="show">
        <Image
          src={project.image}
          alt={project.title}
          width={1600}
          height={900}
          className="w-full h-auto object-cover"
          priority
        />
      </motion.section>

      {/* ── THE CHALLENGE ── */}
      {project.context && (
        <section className="py-20 bg-sepia-light">
          <div className="mx-auto max-w-4xl px-6">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-8">
                {labels.context}
              </h2>
              <p className="text-base md:text-lg leading-relaxed opacity-80">{project.context}</p>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── SOLUTION ── */}
      {project.solution && (
        <section className="py-20 bg-sepia-lightest">
          <div className="mx-auto max-w-4xl px-6">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-8">
                {labels.solution}
              </h2>
              <div className="space-y-5">
                {project.solution.map((paragraph, i) => (
                  <p key={i} className="text-base md:text-lg leading-relaxed opacity-80">
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── GALLERY ── */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-20 px-6 bg-sepia-light">
          <motion.div
            variants={stagger(0, 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                variants={imageReveal}
                className="group overflow-hidden rounded-sm"
              >
                <Image
                  src={img}
                  alt={`${project.title} — screenshot ${i + 1}`}
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* ── BEHIND THE WORK ── */}
      {project.process && (
        <section className="py-20 bg-sepia-lightest">
          <div className="mx-auto max-w-4xl px-6">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-8">
                {labels.process}
              </h2>
              <p className="text-base md:text-lg leading-relaxed opacity-80">{project.process}</p>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── RESULT ── */}
      {project.result && (
        <section className="py-20 bg-sepia-light">
          <div className="mx-auto max-w-4xl px-6">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-8">
                {labels.result}
              </h2>
              <p className="text-base md:text-lg leading-relaxed opacity-80">{project.result}</p>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── NEXT PROJECT — locale-aware link ── */}
      {nextProject && (
        <section className="py-32 border-t border-sepia-dark/10 text-center bg-sepia-lightest">
          <div className="mx-auto max-w-3xl px-6">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="text-sm uppercase tracking-[0.4em] opacity-50 mb-6"
            >
              {labels.nextProject}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Link
                href={`/${locale}/projects/${nextProject.slug}`}
                className="group relative inline-block"
              >
                <span className="text-6xl md:text-8xl font-serif transition-opacity duration-500 ease-out group-hover:opacity-70">
                  {nextProject.title}
                </span>
                <motion.span
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1] as const,
                    delay: 0.3,
                  }}
                  className="absolute left-0 -bottom-3 h-px bg-sepia-darkest group-hover:w-0 transition-all duration-500 ease-out"
                />
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </>
  )
}
