import logo from "../assets/logo-text.png";

function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="h-16 w-16 object-contain sm:h-20 sm:w-20"
          />

          <div className="hidden items-center gap-6 text-sm md:flex">
            <button type="button" onClick={() => scrollToSection("home")} className="text-pink-500">
              Home
            </button>
            <button type="button" onClick={() => scrollToSection("technologies")}>
              Technologies
            </button>
            <button type="button" onClick={() => scrollToSection("your-stack")}>
              Projects
            </button>
            <button type="button" onClick={() => scrollToSection("about")}>
              About
            </button>
            <button type="button" onClick={() => scrollToSection("about")}>
              Contact
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs sm:gap-4 sm:text-sm">
            <button type="button" onClick={() => scrollToSection("about")}>
            Sign in
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("technologies")}
              className="rounded-full bg-pink-500 px-3 py-2 text-white sm:px-4"
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="-mx-4 flex gap-5 overflow-x-auto px-4 pb-3 text-sm md:hidden">
          <button type="button" onClick={() => scrollToSection("home")} className="shrink-0 text-pink-500">
            Home
          </button>
          <button type="button" onClick={() => scrollToSection("technologies")} className="shrink-0">
            Technologies
          </button>
          <button type="button" onClick={() => scrollToSection("your-stack")} className="shrink-0">
            Projects
          </button>
          <button type="button" onClick={() => scrollToSection("about")} className="shrink-0">
            About
          </button>
          <button type="button" onClick={() => scrollToSection("about")} className="shrink-0">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;