'use client'

import { Link, usePathname } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useState } from 'react'

export default function Navbar() {
  const locale = useLocale()
  const t = useTranslations('Navbar')
  const pathname = usePathname()
  const nextLocale = locale === 'en' ? 'de' : 'en'
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-sepia-dark/10 bg-sepia/80 backdrop-blur-md supports-backdrop-filter:bg-sepia/70">
      <nav className="mx-auto text-sepia-darkest flex max-w-6xl items-center justify-between px-6 md:px-12 py-3 md:py-2">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-semibold tracking-wide transition-opacity duration-300 hover:opacity-70">
          Niloufar
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm md:text-base font-medium">
          <Link
            href="/"
            locale={locale}
            className="
    relative
    transition-all
    duration-300
    ease-out
    hover:opacity-70
    after:absolute
    after:left-0
    after:-bottom-2.5
    after:h-px
    after:w-0
    after:bg-sepia-darkest
    after:transition-all
    after:duration-300
    hover:after:w-full
  "
          >
            {t('home')}
          </Link>
          <Link
            href="/#projects"
            locale={locale}
            className="
    relative
    transition-all
    duration-300
    ease-out
    hover:opacity-70
    after:absolute
    after:left-0
    after:-bottom-2.5
    after:h-px
    after:w-0
    after:bg-sepia-darkest
    after:transition-all
    after:duration-300
    hover:after:w-full
  "
          >
            {t('projects')}
          </Link>
          <Link
            href="/#about"
            locale={locale}
            className="
    relative
    transition-all
    duration-300
    ease-out
    hover:opacity-70
    after:absolute
    after:left-0
    after:-bottom-2.5
    after:h-px
    after:w-0
    after:bg-sepia-darkest
    after:transition-all
    after:duration-300
    hover:after:w-full
  "
          >
            {t('about')}
          </Link>
          <Link
            href="/#contact"
            locale={locale}
            className="
    relative
    transition-all
    duration-300
    ease-out
    hover:opacity-70
    after:absolute
    after:left-0
    after:-bottom-2.5
    after:h-px
    after:w-0
    after:bg-sepia-darkest
    after:transition-all
    after:duration-300
    hover:after:w-full
  "
          >
            {t('contact')}
          </Link>
        </div>

        {/* Desktop Language Toggle */}
        <Link href={pathname} locale={nextLocale} className="hidden md:flex">
          {nextLocale.toUpperCase()}
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-sepia-darkest transition-all duration-300 ease-out ${
              isOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-sepia-darkest transition-all duration-300 ease-out ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-sepia-darkest transition-all duration-300 ease-out ${
              isOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          className="
    md:hidden
    overflow-hidden
    bg-sepia
    border-t
    border-sepia-dark/10
    px-4
    py-4
    transition-all
    duration-300
    ease-out
    space-y-3
  "
        >
          <div className="flex flex-col gap-5 py-2 text-sm font-medium">
            <Link href="/" locale={locale} onClick={() => setIsOpen(false)}>
              {t('home')}
            </Link>
            <Link href="/projects" locale={locale} onClick={() => setIsOpen(false)}>
              {t('projects')}
            </Link>
            <Link href="/about" locale={locale} onClick={() => setIsOpen(false)}>
              {t('about')}
            </Link>
            <Link href="/contact" locale={locale} onClick={() => setIsOpen(false)}>
              {t('contact')}
            </Link>
          </div>
          <div className="border-t border-sepia-dark/10 pt-3">
            <Link
              href={pathname}
              locale={nextLocale}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium"
            >
              {nextLocale.toUpperCase()}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
