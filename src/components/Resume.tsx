import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Resume() {
  const t = useTranslations("Resume");

  const languages = [
    { name: "Persian", level: 5, label: "Native" },
    { name: "English", level: 4, label: "C1" },
    { name: "German", level: 3, label: "B2" },
  ];

  return (
    <section
      id="resume"
      className="bg-sepia-lightest py-24 z-10 relative text-sepia-darkest"
    >
      <div className="mx-auto max-w-3xl  px-6">
        {/* Title */}
        <h2 className="mb-16 text-left text-8xl font-serif">{t("title")}</h2>

        {/* Main Grid: 1/3 for empty space/border, 2/3 for content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column (Empty with Border) */}
          <div className="hidden md:block md:col-span-1 border-r border-sepia-dark h-full" />

          {/* Right Column (All Content) */}
          <div className="md:col-span-2 space-y-20">
            {/* 1. Intro Section */}
            <p className="text-lg leading-relaxed">{t("intro")}</p>

            {/* 2. Skills Section (Existing) */}
            <div className="space-y-8">
              <h3 className="text-2xl font-serif italic">{t("skills")}</h3>
              <ul className="space-y-4">
                {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                  (skill) => (
                    <li key={skill} className="flex items-center gap-6">
                      <span className="w-28 text-sm font-medium">{skill}</span>
                      <div className="flex gap-1.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-2.5 h-2.5 rounded-full ${i < 4 ? "bg-sepia-dark" : "border border-sepia-dark"}`}
                          />
                        ))}
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <hr className="border-sepia-dark/20" />

            {/* 3. Nested Grid (Education & Experience Area) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {/* Left Sub-Column: Education & Languages */}
              <div className="space-y-16">
                {/* Education */}
                <section>
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-8">
                    {t("educationTitle")}
                  </h3>

                  <div className="space-y-6">
                    {/* WBS */}
                    <div className="group">
                      <span className="text-xs opacity-60">2024</span>
                      <h4 className="font-bold text-md leading-tight">
                        Web Development Bootcamp
                      </h4>
                      <p className="text-xs opacity-80">
                        WBS Coding School · Berlin
                      </p>
                    </div>

                    {/* Bachelor */}
                    <div>
                      <span className="text-xs opacity-60">2007</span>
                      <h4 className="font-bold text-md leading-tight">
                        Bachelor’s Degree in Computer Software Engineering
                      </h4>
                      <p className="text-xs opacity-80">
                        Khayyam University · Mashhad
                      </p>
                    </div>
                  </div>
                </section>

                {/* Languages */}
                <section>
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-8">
                    {t("languages")}
                  </h3>
                  <ul className="space-y-4">
                    {languages.map((lang) => (
                      <li key={lang.name} className="space-y-2">
                        <div className="flex justify-between items-end max-w-40">
                          <span className="text-sm font-bold">{lang.name}</span>
                          <span className="text-[9px] uppercase tracking-tighter opacity-50">
                            {lang.label}
                          </span>
                        </div>
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full ${i < lang.level ? "bg-sepia-dark" : "border border-sepia-dark/30"}`}
                            />
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Right Sub-Column: Experience & Download CV */}
              <div className="space-y-16">
                {/* Experience */}
                {/* Experience */}
                <section>
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-8">
                    {t("experienceTitle")}
                  </h3>

                  <div className="space-y-10">
                    {/* Calvergy */}
                    <div className="space-y-2">
                      <span className="text-xs opacity-60">2025 – 2026</span>
                      <h4 className="font-bold text-md uppercase">
                        Frontend Developer (Intern)
                      </h4>
                      <p className="text-[11px] font-serif italic">
                        Calvergy GmbH
                      </p>
                      <p className="text-xs leading-relaxed opacity-70">
                        {t("expCalvergy")}
                      </p>
                    </div>

                    {/* Naarvan */}
                    <div className="space-y-2">
                      <span className="text-xs opacity-60">2020 – 2023</span>
                      <h4 className="font-bold text-md uppercase">
                        Web & CMS Developer
                      </h4>
                      <p className="text-[11px] font-serif italic">
                        Naarvan Meta-communication
                      </p>
                      <p className="text-xs leading-relaxed opacity-70">
                        {t("expNaarvan")}
                      </p>
                    </div>

                    {/* Rahavard */}
                    <div className="space-y-2">
                      <span className="text-xs opacity-60">2017 – 2022</span>
                      <h4 className="font-bold text-md uppercase">
                        Content Creator & Web Specialist
                      </h4>
                      <p className="text-[11px] font-serif italic">
                        Rahavard Digital
                      </p>
                      <p className="text-xs leading-relaxed opacity-70">
                        {t("expRahavard")}
                      </p>
                    </div>
                  </div>
                </section>

                {/* Download CV Button */}
                <a
                  href="/path-to-your-cv.pdf"
                  className="inline-block w-full text-center py-3 border border-sepia-darkest text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-sepia-darkest hover:text-sepia-lightest"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/parallax3.svg"
        alt="Niloufar Asghari – Frontend Developer"
        width={200}
        height={200}
        className=" object-cover absolute bottom-5 left-5 z-0 w-26 h-26 md:w-48 md:h-48"
      />
      <Image
        src="/parallax4.svg"
        alt="Niloufar Asghari – Frontend Developer"
        width={150}
        height={150}
        className=" object-cover absolute top-180 right-2 z-0 w-32 h-32 md:w-48 md:h-48"
      />
    </section>
  );
}
