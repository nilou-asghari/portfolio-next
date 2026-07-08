'use client'

import { Link, usePathname } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Shared nav link style — extracted from 4 copy-pasted identical strings ──
const navLinkClass = `
  relative transition-all duration-300 ease-out hover:opacity-70
  after:absolute after:left-0 after:-bottom-2.5
  after:h-px after:w-0 after:bg-sepia-darkest
  after:transition-all after:duration-300 hover:after:w-full
`.trim()

// ─── Mobile menu animation ────────────────────────────────────────────────────
const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const },
  },
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Navbar() {
  const locale = useLocale()
  const t = useTranslations('Navbar')
  const pathname = usePathname()
  const nextLocale = locale === 'en' ? 'de' : 'en'
  const [isOpen, setIsOpen] = useState(false)

  const close = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-sepia-dark/10 bg-sepia-light/80 backdrop-blur-md supports-backdrop-filter:bg-sepia-light/70">
      <nav className="mx-auto text-sepia-darkest flex max-w-6xl items-center justify-between px-6 md:px-12 py-3 md:py-4">
        <Link
          href="/"
          locale={locale}
          className="text-xl md:text-2xl font-semibold tracking-wide transition-opacity duration-300 hover:opacity-70"
        >
          Niloufar
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm md:text-base font-medium">
          <Link href="/" locale={locale} className={navLinkClass}>
            {t('home')}
          </Link>
          <Link href="/#projects" locale={locale} className={navLinkClass}>
            {t('projects')}
          </Link>
          <Link href="/#about" locale={locale} className={navLinkClass}>
            {t('about')}
          </Link>
          <Link href="/#contact" locale={locale} className={navLinkClass}>
            {t('contact')}
          </Link>
        </div>

        <Link
          href={pathname}
          locale={nextLocale}
          className="hidden md:flex text-sm font-medium transition-opacity duration-300 hover:opacity-60"
        >
          {nextLocale.toUpperCase()}
        </Link>

        <div className="md:hidden flex items-center gap-4">
          <Link
            href={pathname}
            locale={nextLocale}
            className="text-sm font-medium transition-opacity duration-300 hover:opacity-60"
          >
            {nextLocale.toUpperCase()}
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 p-1"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span
              className={`w-6 h-0.5 bg-sepia-darkest transition-all duration-300 ease-out origin-center ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-sepia-darkest transition-all duration-300 ease-out ${
                isOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-sepia-darkest transition-all duration-300 ease-out origin-center ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="md:hidden overflow-hidden bg-sepia-light border-t border-sepia-dark/10"
          >
            <div className="px-6 py-5 flex flex-col gap-5 text-sm font-medium">
              <Link href="/" locale={locale} onClick={close}>
                {t('home')}
              </Link>
              <Link href="/#projects" locale={locale} onClick={close}>
                {t('projects')}
              </Link>
              <Link href="/#about" locale={locale} onClick={close}>
                {t('about')}
              </Link>
              <Link href="/#contact" locale={locale} onClick={close}>
                {t('contact')}
              </Link>

              <div className="border-t border-sepia-dark/10 pt-4">
                <Link
                  href={pathname}
                  locale={nextLocale}
                  onClick={close}
                  className="text-sm font-medium"
                >
                  {nextLocale.toUpperCase()}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
