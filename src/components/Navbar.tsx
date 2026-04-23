"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const nextLocale = locale === "en" ? "de" : "en";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sepia">
      <nav className="mx-auto text-sepia-darkest flex max-w-6xl items-center justify-between px-4 md:px-6 py-3 md:py-2">
        {/* Logo */}
        <div className="text-lg md:text-xl font-semibold">Niloufar</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3 text-sm font-medium">
          <Link href="/" locale={locale}>
            {t("home")}
          </Link>
          <Link href="/projects" locale={locale}>
            {t("projects")}
          </Link>
          <Link href="/about" locale={locale}>
            {t("about")}
          </Link>
          <Link href="/contact" locale={locale}>
            {t("contact")}
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
            className={`w-6 h-0.5 bg-sepia-darkest transition-all ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-sepia-darkest transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-sepia-darkest transition-all ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-sepia border-t border-sepia-dark/10 px-4 py-4 space-y-3">
          <div className="flex flex-col gap-3 text-sm font-medium">
            <Link href="/" locale={locale} onClick={() => setIsOpen(false)}>
              {t("home")}
            </Link>
            <Link
              href="/projects"
              locale={locale}
              onClick={() => setIsOpen(false)}
            >
              {t("projects")}
            </Link>
            <Link
              href="/about"
              locale={locale}
              onClick={() => setIsOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              href="/contact"
              locale={locale}
              onClick={() => setIsOpen(false)}
            >
              {t("contact")}
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
  );
}
