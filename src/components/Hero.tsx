import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="min-h-screen flex bg-sepia-light items-center">
      <div className="mx-auto  grid max-w-5xl grid-cols-1 gap-4 px-6 md:grid-cols-2">
        {/* Right */}
        <div className="grid items-center justify-center md:justify-start">
          <div className="h-100 w-100 col-start-1 row-start-1 rounded relative items-center overflow-hidden ">
            <Image
              src="/profile5.png"
              alt="Niloufar Asghari – Frontend Developer"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="col-start-1 row-start-1">
            <Image
              src="/parallax1.svg"
              alt="Niloufar Asghari – Frontend Developer"
              width={300}
              height={350}
              className="rounded-full border-4 border-amber-50 object-cover"
            />
          </div>
        </div>
        {/* Left */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="text-sm uppercase tracking-wide text-sepia-darkest">
            {t("intro")}
          </p>

          <h1 className="mt-2 text-4xl font-bold text-sepia-dark">
            {t("frontend")}
          </h1>

          <p className="mt-4 max-w-md text-sepia-darkest md:ml-auto">
            {t("description")}
          </p>

          <div className="mt-6 flex justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-md bg-sepia-darkest px-5 py-2 text-sm font-medium text-sepia-lightest transition hover:bg-zinc-800"
            >
              {t("ctaProjects")}
            </a>

            <a
              href="#contact"
              className="rounded-md border border-zinc-300 px-5 py-2 text-sm font-medium text-sepia-darkest
               transition hover:bg-zinc-100"
            >
              {t("ctaContact")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
