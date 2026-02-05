"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const nextLocale = locale === "en" ? "de" : "en";
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold">Niloufar</div>
        <div className="flex items-center gap-4">
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
        <Link href={pathname} locale={nextLocale}>
          {nextLocale.toUpperCase()}
        </Link>
      </nav>
    </header>
  );
}
