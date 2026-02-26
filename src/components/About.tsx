import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("About");
  return (
    <section
      id="about"
      className="bg-sepia-lightest py-24 relative z-10 text-sepia-darkest"
    >
      <div className="mx-auto max-w-3xl px-6  ">
        {/* Title */}
        <h2 className="mb-16 text-left text-8xl font-serif">{t("title")}</h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 justify-items-end gap-12 md:grid-cols-3 space-y-4 ">
          {/* Left – Stats */}
          <div className="md:col-span-1 border-r border-sepia-dark p-6 space-y-5">
            <div>
              <p className="text-xs text-sepia-dark">{t("bornLabel")}</p>
              <p className="font-semibold">{t("bornValue")}</p>
            </div>
            <div>
              <p className="text-xs text-sepia-dark">{t("experienceLabel")}</p>
              <p className="font-semibold">{t("experienceValue")}</p>
            </div>
            <div>
              <p className="text-xs text-sepia-dark">{t("birthLabel")}</p>
              <p className="font-semibold">{t("birthValue")}</p>
            </div>
          </div>
          {/* Right – Description */}
          <div className="md:col-span-2">
            <p className="mb-6 leading-relaxed">{t("paragraph1")}</p>

            <p className="mb-10 leading-relaxed">{t("paragraph2")}</p>

            <a
              href="#contact"
              className="inline-block rounded-md border border-sepia-darkest px-6 py-3 text-sm font-medium transition hover:bg-sepia-darkest hover:text-sepia-lightest"
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
        className=" object-cover absolute bottom-5 left-5 w-32 z-0 h-32 md:w-48 md:h-48"
      />
    </section>
  );
}
