import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-sepia-lighter border-t border-sepia-dark/20 p-10">
      <div className="mx-auto max-w-4xl px-8 flex items-center justify-between text-sm text-sepia-darkest">
        {/* Social icons */}
        <div className="flex items-center gap-2">
          {/* GitHub */}
          <a
            href="https://github.com/nilou-asghari"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative pb-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5C5.73.5.94 5.29.94 11.56c0 4.86 3.15 8.98 7.52 10.44.55.1.75-.24.75-.53v-1.86c-3.06.67-3.7-1.48-3.7-1.48-.5-1.27-1.23-1.6-1.23-1.6-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.16 1.71 1.16.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.19 1.15-2.96-.12-.28-.5-1.41.11-2.95 0 0 .94-.3 3.08 1.13a10.7 10.7 0 0 1 5.6 0c2.14-1.43 3.08-1.13 3.08-1.13.61 1.54.23 2.67.11 2.95.72.77 1.15 1.76 1.15 2.96 0 4.23-2.58 5.16-5.04 5.43.4.35.75 1.04.75 2.1v3.11c0 .29.2.64.76.53 4.36-1.46 7.5-5.58 7.5-10.44C23.06 5.29 18.27.5 12 .5z" />
            </svg>

            <span className="absolute left-0 bottom-0 h-px w-0 bg-sepia-darkest transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/niloufarasghari/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative pb-1 hover:opacity-80 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z" />
            </svg>

            <span className="absolute left-0 bottom-0 h-px w-0 bg-sepia-darkest transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          © {new Date().getFullYear()} {t("rights")}
        </div>

        {/* Credit */}
        <div>
          Developed by <span className="font-semibold">Niloufar</span>
        </div>
      </div>
    </footer>
  );
}
