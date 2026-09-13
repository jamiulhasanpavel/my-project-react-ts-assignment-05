import logo from "../assets/logo-text.png";

function Navbar() {
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
          <a href="#" className="text-pink-500">
            Home
          </a>

          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 text-sm">
          <button>
            Sign in
          </button>

          <button className="rounded-full bg-pink-500 px-4 py-2 text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;