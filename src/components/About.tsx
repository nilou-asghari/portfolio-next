import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("About");
  return (
    <section
      id="about"
      className="bg-sepia-lightest py-20 md:py-32 relative overflow-hidden text-sepia-darkest"
    >
      {/* Decorative image — z-0, hidden on mobile */}
      <Image
        src="/parallax2.svg"
        alt=""
        width={200}
        height={200}
        className="object-contain absolute bottom-5 left-5 w-16 md:w-32 lg:w-48 h-16 md:h-32 lg:h-48 z-0 pointer-events-none hidden md:block"
      />

      {/* All content sits above decorative image via z-10 */}
      <div className="mx-auto max-w-4xl px-6 md:px-12 relative z-10">
        {/* Title */}
        <h2 className="mb-8 md:mb-16 text-5xl md:text-7xl font-serif text-left">
          {t("title")}
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 md:justify-items-end">
          {/* Left – Stats */}
          <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-sepia-dark p-4 md:p-6 space-y-5">
            <div>
              <p className="text-sm uppercase tracking-widest opacity-50 text-sepia-dark">
                {t("bornLabel")}
              </p>
              <p className="font-semibold text-base md:text-lg leading-relaxed">
                {t("bornValue")}
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest opacity-50 text-sepia-dark">
                {t("experienceLabel")}
              </p>
              <p className="font-semibold text-base md:text-lg leading-relaxed">
                {t("experienceValue")}
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest opacity-50 text-sepia-dark">
                {t("birthLabel")}
              </p>
              <p className="font-semibold text-base md:text-lg leading-relaxed">
                {t("birthValue")}
              </p>
            </div>
          </div>

          {/* Right – Description */}
          <div className="md:col-span-2 p-4 md:p-6">
            <p className="mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
              {t("paragraph1")}
            </p>

            <p className="mb-6 md:mb-10 text-base md:text-lg leading-relaxed">
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
    </section>
  );
}
