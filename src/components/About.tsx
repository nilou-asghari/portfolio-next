import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("About");
  return (
    <section
      id="about"
      className="bg-sepia-lightest py-24 relative text-sepia-darkest"
    >
      <div className="mx-auto max-w-3xl px-6 ">
        {/* Title */}
        <h2 className="mb-16 text-left text-8xl font-serif">{t("title")}</h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 justify-items-end gap-12 md:grid-cols-2">
          {/* Left – Stats */}
          <div className="grid grid-cols-1 gap-1 border-r border-sepia-dark p-6">
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
          <div className="max-w-xl">
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
        <Image
          src="/parallax2.svg"
          alt="Niloufar Asghari – Frontend Developer"
          width={200}
          height={200}
          className=" object-cover absolute bottom-10 left-10"
        />
      </div>
    </section>
  );
}
