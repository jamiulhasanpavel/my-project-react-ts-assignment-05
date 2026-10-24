import bannerStack from "../assets/banner-stack.png";

function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-16 md:flex-row">

      {/* Left */}
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Build Your Ideal
          <br />
          <span className="text-pink-500">
            Development Stack
          </span>
        </h1>

        <p className="mt-5 max-w-lg text-sm leading-6 text-gray-500">
          Explore frontend, backend, databases, and tooling options.
          Pick the technologies you love and put together the stack
          that fits your next project.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => scrollToSection("technologies")}
            className="rounded bg-orange-500 px-5 py-2 text-sm font-medium text-white"
          >
            Explore Technologies
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="rounded border border-gray-200 px-5 py-2 text-sm"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="w-full max-w-sm md:w-auto">
        <img
          src={bannerStack}
          alt="Development Stack"
          className="h-auto w-full md:w-80"
        />
      </div>

    </section>
  );
}

export default Hero;