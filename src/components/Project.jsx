import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Project() {
  const t = useTranslations("projects");

  const projectList = [
    {
      id: 1,
      title: t("project1"),
      description: t("project1_desc"),
      category: "Frontend Application",
      year: "2025",
      image: "/movie.jpg",
      link: "https://github.com/nilou-asghari/movie-board",
    },
    {
      id: 2,
      title: t("project2"),
      description: t("project2_desc"),
      category: "Corporate SaaS Platform",
      year: "2025",
      image: "/calvergy.png",
      link: "https://calvergy.com/en",
    },
    {
      id: 3,
      title: t("project3"),
      description: t("project3_desc"),
      category: "Frontend Application",
      year: "2024",
      image: "/petfect.png",
      link: "https://petfectmatch.netlify.app/",
    },
    {
      id: 4,
      title: t("project4"),
      description: t("project4_desc"),
      category: "Corporate Website",
      year: "2024",
      image: "/adler.png",
      link: "https://adlerreinigung24.de/",
    },
  ];

  return (
    <section id="projects" className="bg-sepia-light py-32 text-sepia-darkest">
      <div className="mx-auto max-w-5xl px-4">
        {/* Title */}
        <h2 className="mb-20 text-left text-8xl font-serif">{t("title")}</h2>

        {/* ===== HEADER GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {/* Left Column */}
          <div className="hidden md:block border-r border-sepia-dark/20" />

          {/* Description */}
          <div className="md:col-span-2">
            <p className="max-w-md text-lg leading-relaxed opacity-80">
              {t("description")}
            </p>
          </div>
        </div>

        {/* ===== PROJECT LIST ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Empty Column for visual alignment */}
          <div className="hidden md:block border-r  border-sepia-dark/20" />

          {/* Projects */}
          <div className="md:col-span-2 space-y-15">
            {projectList.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {/* Image */}
                <div className="overflow-hidden bg-sepia-dark/5 mb-10 rounded-sm">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className="object-cover w-full h-full grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                {/* Info */}
                <div className="flex justify-between items-end border-b border-sepia-dark/10 pb-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-3">
                      {project.category}
                    </p>

                    <h3 className="text-4xl font-serif">{project.title}</h3>

                    <p className="mt-3 text-sm opacity-70 max-w-md">
                      {project.description}
                    </p>
                  </div>

                  <span className="text-sm font-light italic opacity-60">
                    {project.year}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
