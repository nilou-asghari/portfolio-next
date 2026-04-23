import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  const t = useTranslations("projects");

  const projectList = [
    {
      id: 1,
      slug: "movie-board",
      title: t("project1"),
      description: t("project1_desc"),
      category: "Frontend Application",
      year: "2025",
      image: "/movie.jpg",
    },
    {
      id: 2,
      slug: "calvergy",
      title: t("project2"),
      description: t("project2_desc"),
      category: "Corporate SaaS Platform",
      year: "2025",
      image: "/calvergy.png",
    },
    {
      id: 3,
      slug: "petfect-match",
      title: t("project3"),
      description: t("project3_desc"),
      category: "Frontend Application",
      year: "2024",
      image: "/petfect.png",
    },
    {
      id: 4,
      slug: "adler",
      title: t("project4"),
      description: t("project4_desc"),
      category: "Corporate Website",
      year: "2024",
      image: "/adler.png",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-sepia-lightest py-12 md:py-24 text-sepia-darkest"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        {/* Title */}
        <h2 className="mb-8 md:mb-16 text-4xl md:text-6xl lg:text-8xl font-serif text-left">
          {t("title")}
        </h2>

        {/* HEADER GRID */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 mb-12 md:mb-20">
          <div className="hidden md:block border-r border-sepia-dark/20" />

          <div className="md:col-span-2">
            <p className="max-w-md text-base md:text-lg leading-relaxed opacity-80">
              {t("description")}
            </p>
          </div>
        </div>

        {/* PROJECT LIST */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* visual alignment column */}
          <div className="hidden md:block border-r border-sepia-dark/20" />

          <div className="md:col-span-2 space-y-12 md:space-y-16">
            {projectList.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group block cursor-pointer"
              >
                {/* Image */}
                <div className="overflow-hidden bg-sepia-dark/5 mb-6 md:mb-10 rounded-sm">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className="object-cover w-full h-auto grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-sepia-dark/10 pb-6 md:pb-8 gap-4">
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2 md:mb-3">
                      {project.category}
                    </p>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif">
                      {project.title}
                    </h3>

                    <p className="mt-2 md:mt-3 text-sm opacity-70 max-w-md">
                      {project.description}
                    </p>
                  </div>

                  <span className="text-sm font-light italic opacity-60 shrink-0">
                    {project.year}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
