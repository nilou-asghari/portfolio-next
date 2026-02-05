import { useTranslations } from "next-intl";
export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="min-h-screen flex items-center">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        {/* Left */}
        <div className="text-center md:text-right">
          <h1 className="text-4xl font-bold text-zinc-900">{t("designer")}</h1>
          <p className="mt-4 text-zinc-500">{t("uiux")}</p>
        </div>

        {/* Right */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-zinc-900">{t("frontend")}</h1>
          <p className="mt-4 text-zinc-500">{t("stack")}</p>
        </div>
      </div>
    </section>
  );
}
