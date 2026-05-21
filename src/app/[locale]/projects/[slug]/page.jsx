import { projects } from "@/data/projects";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const t = await getTranslations("project");

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Project not found
      </div>
    );
  }

  const nextProject = projects.find((p) => p.slug === project.next);

  return (
    <main className="bg-sepia-lightest text-sepia-darkest">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative">
        {/* Title bar */}
        <div className="relative bg-sepia-lightest h-32 md:h-48 mx-auto max-w-6xl px-6">
          <div className="absolute -bottom-[1.8rem] md:-bottom-[3.6rem]">
            <h1 className="text-[10vw] md:text-[8rem] font-serif leading-[0.9]">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Meta info */}
        <div className="bg-sepia-light py-32">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="hidden md:block border-r border-sepia-dark" />

              <div className="md:col-span-2 md:pl-12 grid grid-cols-2 md:grid-cols-4 gap-10">
                <div>
                  <p className="text-sm uppercase tracking-widest opacity-50 mb-2">
                    {t("year")}
                  </p>
                  <p className="text-xl font-bold">{project.year}</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest opacity-50 mb-2">
                    {t("technology")}
                  </p>
                  <p className="text-xl font-bold leading-tight">
                    {project.technologies.join(", ")}
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest opacity-50 mb-2">
                    {t("categories")}
                  </p>
                  <p className="text-xl font-bold leading-tight">
                    {project.categories.join(", ")}
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest opacity-50 mb-2">
                    Live
                  </p>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold underline hover:opacity-70"
                    >
                      View →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <section>
        <Image
          src={project.image}
          alt={project.title}
          width={1600}
          height={900}
          className="w-full h-auto object-cover"
        />
      </section>

      {/* ── THE CHALLENGE ── */}
      {project.context && (
        <section className="py-20 bg-sepia-light">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-5xl font-serif font-semibold mb-8">
              {t("context")}
            </h2>
            <p className="leading-relaxed opacity-80 ">{project.context}</p>
          </div>
        </section>
      )}

      {/* ── SOLUTION ── */}
      {project.solution && (
        <section className="py-20 bg-sepia-lightest">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-5xl font-serif font-semibold mb-8">
              {t("solution")}
            </h2>
            {project.solution.map((paragraph, i) => (
              <p key={i} className="leading-relaxed mb-6 opacity-80 ">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* ── GALLERY ── */}
      {project.gallery && (
        <section className="py-20 px-6 bg-sepia-light">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
            {project.gallery.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`${project.title} gallery image ${i + 1}`}
                width={900}
                height={600}
                className="w-full h-auto object-cover"
              />
            ))}
          </div>
        </section>
      )}

      {/* ── BEHIND THE WORK ── */}
      {project.process && (
        <section className="py-20 bg-sepia-lightest">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-5xl font-serif font-semibold mb-8">
              {t("process")}
            </h2>
            <p className="leading-relaxed opacity-80 ">{project.process}</p>
          </div>
        </section>
      )}

      {/* ── RESULT ── */}
      {project.result && (
        <section className="py-20 bg-sepia-light">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-5xl font-serif font-semibold mb-8">
              {t("result")}
            </h2>
            <p className="leading-relaxed opacity-80 ">{project.result}</p>
          </div>
        </section>
      )}

      {/* ── NEXT PROJECT ── */}
      {nextProject && (
        <section className="py-32 border-t border-sepia-dark/10 text-center bg-sepia-lightest">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-sm uppercase tracking-[0.4em] opacity-50 mb-6">
              {t("nextProject")}
            </p>
            <Link href={`/projects/${nextProject.slug}`}>
              <span className="text-6xl md:text-8xl font-serif hover:opacity-70 transition-opacity">
                {nextProject.title}
              </span>
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
