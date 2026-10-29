import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 text-gray-300 ">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className=" text-sky-600 hover:text-blue-400 text-shadow-lg text-shadow-black shdow-black font-extrabold text-2xl px-4 py-2 rounded">
            CritiX
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm mb-6">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>

          <Link to="/movies" className="hover:text-blue-400">
            Movies
          </Link>

          <Link to="/tvshows" className="hover:text-blue-400">
            TV Shows
          </Link>

          <Link to="/watchlist" className="hover:text-blue-400">
            Watchlist
          </Link>

          <Link to="/signin" className="hover:text-blue-400">
            Sign In
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700  text-center text-sm">
          <p>© 2026 CritiX. All Rights Reserved.</p>
          <p className="mt-2 text-gray-500">Built with React.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
