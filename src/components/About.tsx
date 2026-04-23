import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("About");
  return (
    <section
      id="about"
      className="bg-sepia-lightest py-12 md:py-24 relative z-10 text-sepia-darkest"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        {/* Title */}
        <h2 className="mb-8 md:mb-16 text-4xl md:text-6xl lg:text-8xl font-serif text-left">
          {t("title")}
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 md:justify-items-end">
          {/* Left – Stats */}
          <div className="md:col-span-1 md:border-r border-sepia-dark p-4 md:p-6 space-y-5">
            <div>
              <p className="text-xs text-sepia-dark">{t("bornLabel")}</p>
              <p className="font-semibold text-sm md:text-base">
                {t("bornValue")}
              </p>
            </div>
            <div>
              <p className="text-xs text-sepia-dark">{t("experienceLabel")}</p>
              <p className="font-semibold text-sm md:text-base">
                {t("experienceValue")}
              </p>
            </div>
            <div>
              <p className="text-xs text-sepia-dark">{t("birthLabel")}</p>
              <p className="font-semibold text-sm md:text-base">
                {t("birthValue")}
              </p>
            </div>
          </div>
          {/* Right – Description */}
          <div className="md:col-span-2 p-4 md:p-6">
            <p className="mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              {t("paragraph1")}
            </p>

            <p className="mb-6 md:mb-10 leading-relaxed text-sm md:text-base">
              {t("paragraph2")}
            </p>

            <a
              href="#contact"
              className="inline-block rounded-md border border-sepia-darkest px-4 md:px-6 py-2 md:py-3 text-sm font-medium transition hover:bg-sepia-darkest hover:text-sepia-lightest"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </div>
      <Image
        src="/parallax2.svg"
        alt="Niloufar Asghari – Frontend Developer"
        width={200}
        height={200}
        className="object-contain absolute bottom-2 md:bottom-5 left-2 md:left-5 w-20 md:w-32 lg:w-48 z-0 h-20 md:h-32 lg:h-48"
      />
    </section>
  );
}
