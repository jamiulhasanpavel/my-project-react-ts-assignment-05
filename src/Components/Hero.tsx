import bannerStack from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 px-6 py-16 md:flex-row">

      {/* Left */}
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
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

        <div className="mt-6 flex gap-3">
          <button className="rounded bg-orange-500 px-5 py-2 text-sm font-medium text-white">
            Explore Technologies
          </button>

          <button className="rounded border border-gray-200 px-5 py-2 text-sm">
            Learn More
          </button>
        </div>
      </div>

      {/* Right */}
      <div>
        <img
          src={bannerStack}
          alt="Development Stack"
          className="w-80"
        />
      </div>

    </section>
  );
}

export default Hero;