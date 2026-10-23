import logo from "../assets/logo-text.png";

function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="h-20 w-20 object-contain"
          />
        </div>

        {/* Navigation */}
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

        {/* Right side */}
        <div className="flex items-center gap-4 text-sm">
          <button type="button" onClick={() => scrollToSection("about")}>
            Sign in
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("technologies")}
            className="rounded-full bg-pink-500 px-4 py-2 text-white"
          >
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;