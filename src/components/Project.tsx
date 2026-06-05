'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// ─── Variants ────────────────────────────────────────────────────────────────

const titleVariant = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

/** Each project card fades up and lifts in */
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

/** Image reveals with a slight scale-down from slightly zoomed */
const imageReveal = {
  hidden: { opacity: 0, scale: 1.04 },
  show: {
    opacity: 1, scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

/** Info block slides up after image */
const infoReveal = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: 0.15 },
  },
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Project() {
  const t = useTranslations('projects')

  const projectList = [
    {
      id: 1,
      slug: 'movie-board',
      title: t('project1'),
      description: t('project1_desc'),
      category: 'Frontend Application',
      year: '2025',
      image: '/movie.jpg',
    },
    {
      id: 2,
      slug: 'calvergy',
      title: t('project2'),
      description: t('project2_desc'),
      category: 'Corporate SaaS Platform',
      year: '2025',
      image: '/calvergy.png',
    },
    {
      id: 3,
      slug: 'petfect-match',
      title: t('project3'),
      description: t('project3_desc'),
      category: 'Frontend Application',
      year: '2024',
      image: '/petfect.png',
    },
    {
      id: 4,
      slug: 'adler',
      title: t('project4'),
      description: t('project4_desc'),
      category: 'Corporate Website',
      year: '2024',
      image: '/adler.png',
    },
  ]

  return (
    <section
      id="projects"
      className="bg-sepia-lightest py-12 md:py-24 text-sepia-darkest"
    >
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

        {/* Header description */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 mb-12 md:mb-20">
          <div className="hidden md:block border-r border-sepia-dark/20" />
          <div className="md:col-span-2">
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
        </div>

        {/* Project list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="hidden md:block border-r border-sepia-dark/20" />

          <div className="md:col-span-2 space-y-12 md:space-y-16">
            {projectList.map((project) => (
              // Each card triggers its own whileInView independently
              <motion.div
                key={project.id}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block cursor-pointer transition-all duration-300 ease-out hover:opacity-90"
                >
                  {/* Image — reveals with subtle zoom-out */}
                  <motion.div
                    variants={imageReveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="overflow-hidden bg-sepia-dark/5 mb-6 md:mb-10 rounded-sm"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={800}
                      className="object-cover w-full h-auto grayscale transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                  </motion.div>

                  {/* Info block slides up after image */}
                  <motion.div
                    variants={infoReveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-sepia-dark/10 pb-6 md:pb-8 gap-4 transition-all duration-300 group-hover:border-sepia-dark/40"
                  >
                    <div className="flex-1">
                      <p className="text-sm uppercase tracking-widest opacity-50 mb-2 md:mb-3">
                        {project.category}
                      </p>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif transition-all duration-300 ease-out group-hover:translate-x-1">
                        {project.title}
                      </h3>
                      <p className="mt-2 md:mt-3 text-sm opacity-70 max-w-md">
                        {project.description}
                      </p>
                    </div>
                    <span className="text-sm font-light italic opacity-60 shrink-0 transition-all duration-300 group-hover:opacity-100">
                      {project.year}
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
