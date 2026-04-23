import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="min-h-screen flex bg-sepia-light items-center py-12 md:py-0">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:gap-4 px-4 md:px-6 md:grid-cols-2 w-full">
        {/* Image */}
        <div className="order-first md:order-last flex justify-center md:justify-start">
          <div className="relative w-64 h-64 md:w-80 md:h-96 shrink-0">
            <div className="absolute inset-0 col-start-1 row-start-1 rounded overflow-hidden">
              <Image
                src="/profile5.png"
                alt="Niloufar Asghari – Frontend Developer"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute inset-0 col-start-1 row-start-1">
              <Image
                src="/parallax1.svg"
                alt="Niloufar Asghari – Frontend Developer"
                fill
                className="rounded-full border-4 border-amber-50 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center text-center md:text-left order-last md:order-first">
          <p className="text-xs md:text-sm uppercase tracking-wide text-sepia-darkest">
            {t("intro")}
          </p>

          <h1 className="mt-3 md:mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-sepia-dark">
            {t("frontend")}
          </h1>

          <p className="mt-4 md:mt-4 max-w-md mx-auto md:mx-0 text-sm md:text-base text-sepia-darkest">
            {t("description")}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3 md:gap-4">
            <a
              href="#projects"
              className="rounded-md bg-sepia-darkest px-5 py-2 text-sm font-medium text-sepia-lightest transition hover:bg-zinc-800 text-center"
            >
              {t("ctaProjects")}
            </a>

            <a
              href="#contact"
              className="rounded-md border border-zinc-300 px-5 py-2 text-sm font-medium text-sepia-darkest transition hover:bg-zinc-100 text-center"
            >
              {t("ctaContact")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
