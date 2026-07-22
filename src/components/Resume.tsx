'use client'

import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import { motion } from 'framer-motion'

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

const stagger = (delay = 0, gap = 0.13) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})

type Skill = { name: string; level: number }
type SkillGroup = { category: string; items: Skill[] }

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
          variants={{
            hidden: { scale: 0.4, opacity: 0 },
            show: {
              scale: 1,
              opacity: i < filled ? 1 : 0.25,
              transition: { type: 'spring' as const, stiffness: 400, damping: 20 },
            },
          }}
          className={`${dotClass} rounded-full ${
            i < filled ? 'bg-sepia-dark' : 'border border-sepia-dark/30'
          }`}
        />
      ))}
    </motion.div>
  )
}

export default function Resume() {
  const t = useTranslations('Resume')
  const locale = useLocale()

  const cvFile = locale === 'de' ? '/cv-de.pdf' : '/cv-en.pdf'

  // 5 = expert / daily use   4 = proficient   3 = comfortable   2 = familiar
  const skillGroups: SkillGroup[] = [
    {
      category: 'Frontend',
      items: [
        { name: 'JavaScript', level: 5 },
        { name: 'React', level: 4 },
        { name: 'Next.js', level: 4 },
        { name: 'TypeScript', level: 3 },
        { name: 'Redux', level: 3 },
      ],
    },
    {
      category: 'Styling',
      items: [
        { name: 'CSS / SCSS', level: 5 },
        { name: 'Tailwind CSS', level: 4 },
        { name: 'Bootstrap', level: 4 },
        { name: 'Responsive Design', level: 5 },
      ],
    },
    {
      category: 'Tools & Other',
      items: [
        { name: 'Git / GitHub', level: 4 },
        { name: 'Figma', level: 3 },
        { name: 'REST APIs', level: 3 },
        { name: 'Node.js / Express', level: 3 },
        { name: 'MongoDB', level: 2 },
        { name: 'Drupal / WordPress', level: 5 },
        { name: 'Jest', level: 2 },
      ],
    },
  ]

  const languages = [
    { name: 'Persian', level: 5, label: 'Native' },
    { name: 'English', level: 4, label: 'C1' },
    { name: 'German', level: 3, label: 'B2' },
  ]

  return (
    <section id="resume" className="bg-sepia-light py-20 md:py-32 relative text-sepia-darkest">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <motion.h2
          variants={titleVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-8 md:mb-16 text-5xl md:text-7xl font-serif text-left"
        >
          {t('title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-sepia-dark mb-6 md:mb-0 md:h-full" />

          <div className="md:col-span-2 space-y-12 md:space-y-20">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="text-base md:text-lg leading-relaxed"
            >
              {t('intro')}
            </motion.p>

            <div className="space-y-10">
              <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="text-xl md:text-2xl font-serif italic"
              >
                {t('skills')}
              </motion.h3>

              {skillGroups.map((group) => (
                <div key={group.category} className="space-y-4">
                  <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-xs uppercase tracking-[0.2em] opacity-40"
                  >
                    {group.category}
                  </motion.p>

                  <motion.ul
                    variants={stagger(0.05, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="space-y-3"
                  >
                    {group.items.map((skill) => (
                      <motion.li
                        key={skill.name}
                        variants={slideLeft}
                        className="flex items-center gap-4 md:gap-6"
                      >
                        <span className="w-36 text-sm font-medium shrink-0">{skill.name}</span>
                        <DotRow total={5} filled={skill.level} />
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              ))}
            </div>

            <motion.hr
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="border-sepia-dark/20"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
              <div className="space-y-12 md:space-y-16">
                <section>
                  <motion.h3
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-sm md:text-base font-bold uppercase tracking-widest mb-6 md:mb-8"
                  >
                    {t('educationTitle')}
                  </motion.h3>

                  <motion.div
                    variants={stagger(0, 0.16)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="space-y-6"
                  >
                    <motion.div variants={slideLeft}>
                      <span className="text-sm uppercase tracking-widest opacity-50">2024</span>
                      <h4 className="font-bold text-base md:text-lg leading-snug mt-0.5">
                        Full-Stack Web Development Certificate
                      </h4>
                      <p className="text-sm opacity-60 mt-0.5">WBS Coding School · Berlin</p>
                      <p className="text-xs opacity-50 mt-1">
                        680-hour intensive · React, Node.js, REST, SQL/NoSQL
                      </p>
                    </motion.div>

                    <motion.div variants={slideLeft}>
                      <span className="text-sm uppercase tracking-widest opacity-50">2007</span>
                      <h4 className="font-bold text-base md:text-lg leading-snug mt-0.5">
                        B.Eng. Computer Software Engineering
                      </h4>
                      <p className="text-sm opacity-60 mt-0.5">Khayyam University · Mashhad</p>
                    </motion.div>
                  </motion.div>
                </section>

                <section>
                  <motion.h3
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-sm md:text-base font-bold uppercase tracking-widest mb-6 md:mb-8"
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
                          <span className="text-[11px] uppercase tracking-tight opacity-50">
                            {lang.label}
                          </span>
                        </div>
                        <DotRow total={5} filled={lang.level} size="sm" />
                      </motion.li>
                    ))}
                  </motion.ul>
                </section>

                <section>
                  <motion.h3
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-sm md:text-base font-bold uppercase tracking-widest mb-6 md:mb-8"
                  >
                    Certifications
                  </motion.h3>

                  <motion.div
                    variants={stagger(0, 0.15)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="space-y-4"
                  >
                    <motion.div variants={slideLeft} className="space-y-0.5">
                      <p className="text-sm font-bold leading-snug">
                        telc Deutsch-Test für den Beruf
                      </p>
                      <p className="text-sm opacity-60">B2 Professional · 2023</p>
                    </motion.div>

                    <motion.div variants={slideLeft} className="space-y-0.5">
                      <p className="text-sm font-bold leading-snug">Google UX Design</p>
                      <p className="text-sm opacity-60">Foundations & UX Process</p>
                    </motion.div>
                  </motion.div>
                </section>
              </div>

              <div className="space-y-12 md:space-y-16">
                <section>
                  <motion.h3
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-sm md:text-base font-bold uppercase tracking-widest mb-6 md:mb-8"
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
                    <motion.div variants={slideLeft} className="space-y-1.5">
                      <span className="text-xs uppercase tracking-widest opacity-50">
                        Oct 2025 – Jan 2026
                      </span>
                      <h4 className="font-bold text-base md:text-lg uppercase leading-snug">
                        Frontend Developer (Intern)
                      </h4>
                      <p className="text-sm font-serif italic opacity-60">
                        Calvergy · Aachen (Remote)
                      </p>
                      <p className="text-sm leading-relaxed opacity-80 pt-1">{t('expCalvergy')}</p>
                    </motion.div>

                    <motion.div variants={slideLeft} className="space-y-1.5">
                      <span className="text-xs uppercase tracking-widest opacity-50">
                        2024 – 2025
                      </span>
                      <h4 className="font-bold text-base md:text-lg uppercase leading-snug">
                        Freelance Frontend Developer
                      </h4>
                      <p className="text-sm font-serif italic opacity-60">
                        Self-employed · Karlsruhe
                      </p>
                      <p className="text-sm leading-relaxed opacity-80 pt-1">{t('expFreelance')}</p>
                    </motion.div>

                    <motion.div variants={slideLeft} className="space-y-1.5">
                      <span className="text-xs uppercase tracking-widest opacity-50">
                        2020 – 2023
                      </span>
                      <h4 className="font-bold text-base md:text-lg uppercase leading-snug">
                        Frontend Web Developer
                      </h4>
                      <p className="text-sm font-serif italic opacity-60">
                        Naarvan Meta Communications · Kerman
                      </p>
                      <p className="text-sm leading-relaxed opacity-80 pt-1">{t('expNaarvan')}</p>
                    </motion.div>

                    <motion.div variants={slideLeft} className="space-y-1.5">
                      <span className="text-xs uppercase tracking-widest opacity-50">
                        2016 – 2020
                      </span>
                      <h4 className="font-bold text-base md:text-lg uppercase leading-snug">
                        Content Creator & Web Specialist
                      </h4>
                      <p className="text-sm font-serif italic opacity-60">
                        Rahavard Digital · Kerman
                      </p>
                      <p className="text-sm leading-relaxed opacity-80 pt-1">{t('expRahavard')}</p>
                    </motion.div>
                  </motion.div>
                </section>

                <motion.a
                  variants={popIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.8 }}
                  href={cvFile}
                  download="Niloufar-Asghari-CV.pdf"
                  className="inline-block w-full text-center py-2.5 md:py-3 border border-sepia-darkest text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 ease-out hover:bg-sepia-darkest hover:text-sepia-lightest"
                >
                  {t('download')}
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 }}
        className="absolute bottom-2 md:bottom-5 left-2 md:left-5 z-10 hidden sm:block pointer-events-none"
      >
        <Image
          src="/parallax3.svg"
          alt=""
          width={200}
          height={200}
          className="object-contain w-16 md:w-26 h-16 md:h-26 lg:w-48 lg:h-48"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.5 }}
        className="absolute top-32 md:top-180 right-2 z-10 hidden sm:block pointer-events-none"
      >
        <Image
          src="/parallax4.svg"
          alt=""
          width={200}
          height={200}
          className="object-contain w-16 md:w-32 h-16 md:h-32 lg:w-48 lg:h-48"
        />
      </motion.div>
    </section>
  )
}
