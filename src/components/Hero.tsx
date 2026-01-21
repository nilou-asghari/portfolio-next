export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        {/* Left */}
        <div className="text-center md:text-right">
          <h1 className="text-4xl font-bold text-zinc-900">Designer</h1>
          <p className="mt-4 text-zinc-500">UI / UX focused</p>
        </div>

        {/* Right */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-zinc-900">
            Frontend Developer
          </h1>
          <p className="mt-4 text-zinc-500">React · TypeScript · Next.js</p>
        </div>
      </div>
    </section>
  );
}
