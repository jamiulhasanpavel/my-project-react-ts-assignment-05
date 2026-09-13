import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row">

          <div>
            <img
              src={logo}
              alt="Dev Stack Logo"
              className="h-12 w-auto object-contain"
            />

            <p className="mt-2 max-w-sm text-sm text-gray-500">
              Curate your ideal development stack and
              explore modern technologies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">
              Product
            </h4>

            <div className="mt-3 space-y-2 text-sm text-gray-500">
              <p>Home</p>
              <p>Technologies</p>
              <p>Projects</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">
              Company
            </h4>

            <div className="mt-3 space-y-2 text-sm text-gray-500">
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>

        </div>

        <div className="mt-8 border-t pt-6 text-xs text-gray-400">
          © 2026 Dev Stack. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;