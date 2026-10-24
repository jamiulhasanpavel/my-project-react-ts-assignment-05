import type { Technology } from "../App";

type TechnologyListProps = {
  onAdd: (technology: Technology) => void;
};

function TechnologyList({ onAdd }: TechnologyListProps) {
  const technologies: Technology[] = [
    {
      id: 1,
      name: "React",
      description:
        "A JavaScript library for building fast and interactive user interfaces.",
      category: "Frontend",
      level: "Beginner-Friendly",
      rating: 4.9,
      badge: "Popular",
    },
    {
      id: 2,
      name: "Vue.js",
      description:
        "An approachable, performant, and versatile framework for building web user interfaces.",
      category: "Frontend",
      level: "Beginner-Friendly",
      rating: 4.8,
      badge: "Versatile",
    },
    {
      id: 3,
      name: "Svelte",
      description:
        "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
      category: "Frontend",
      level: "Intermediate",
      rating: 4.8,
      badge: "Fast",
    },
    {
      id: 4,
      name: "Next.js",
      description:
        "The React framework for building modern and production-ready web applications.",
      category: "Frontend",
      level: "Intermediate",
      rating: 4.9,
      badge: "Popular",
    },
    {
      id: 5,
      name: "Node.js",
      description:
        "A JavaScript runtime built for scalable backend applications.",
      category: "Backend",
      level: "Intermediate",
      rating: 4.8,
      badge: "Popular",
    },
    {
      id: 6,
      name: "PostgreSQL",
      description:
        "A powerful open-source relational database system.",
      category: "Database",
      level: "Intermediate",
      rating: 4.9,
      badge: "Reliable",
    },
    {
      id: 7,
      name: "Redis",
      description:
        "An in-memory data store used for caching and fast data access.",
      category: "Database",
      level: "Intermediate",
      rating: 4.7,
      badge: "Cache",
    },
    {
      id: 8,
      name: "JavaScript",
      description:
        "A versatile programming language for creating dynamic web applications.",
      category: "Language",
      level: "Beginner-Friendly",
      rating: 4.9,
      badge: "Popular",
    },
    {
      id: 9,
      name: "TypeScript",
      description:
        "A strongly typed programming language built on top of JavaScript.",
      category: "Language",
      level: "Intermediate",
      rating: 4.9,
      badge: "Essential",
    },
    {
      id: 10,
      name: "Java",
      description:
        "A popular object-oriented programming language for enterprise applications.",
      category: "Language",
      level: "Intermediate",
      rating: 4.7,
      badge: "Robust",
    },
    {
      id: 11,
      name: "Tailwind CSS",
      description:
        "A utility-first CSS framework for building modern responsive interfaces.",
      category: "Styling",
      level: "Beginner-Friendly",
      rating: 4.8,
      badge: "Popular",
    },
    {
      id: 12,
      name: "Docker",
      description:
        "A platform for developing, shipping, and running applications in containers.",
      category: "DevOps",
      level: "Intermediate",
      rating: 4.8,
      badge: "Essential",
    },
  ];

  return (
    <section id="technologies" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Explore the{" "}
          <span className="text-pink-500">Technologies</span>
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <div
            key={technology.id}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7"
          >
            {/* Top */}
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-lg font-bold">
                {technology.name.charAt(0)}
              </div>

              <span className="rounded-full border border-green-200 bg-green-50 px-4 py-1 text-sm text-green-600">
                {technology.badge}
              </span>
            </div>

            {/* Name */}
            <h3 className="mt-6 text-xl font-semibold sm:mt-7 sm:text-2xl">
              {technology.name}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm leading-6 text-gray-500 sm:min-h-[72px] sm:text-base sm:leading-7">
              {technology.description}
            </p>

            {/* Info */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-3 text-sm">
              <span className="rounded-md bg-gray-100 px-3 py-1 text-gray-600">
                {technology.category}
              </span>

              <span className="text-gray-600">
                {technology.level}
              </span>

              <span>
                ⭐ {technology.rating}
              </span>
            </div>

            {/* Button */}
            <button
              onClick={() => onAdd(technology)}
              className="mt-5 w-full rounded-xl bg-[#080d1d] py-3 text-base font-semibold text-white hover:bg-pink-500"
            >
              Add to Stack
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnologyList;