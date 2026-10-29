import { Link } from "react-router-dom";
import SearchBar from "./Search";

function Nav() {
  return (
    <nav className="bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 text-white h-16 flex items-center justify-between px-6 shadow-lg">
      {/* Logo */}
      <Link to="/">
        <div className=" text-sky-600 text-shadow-lg text-shadow-black shdow-black font-extrabold text-2xl px-3 py-1 rounded hover:text-blue-400">
          CritiX
        </div>
      </Link>

      {/* Search Bar */}

      <div>
        <SearchBar />
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center gap-6 text-sm font-medium">
        <li>
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
        </li>

        <li>
          <Link to="/movies" className="hover:text-blue-400 transition">
            Movies
          </Link>
        </li>

        <li>
          <Link to="/tvshows" className="hover:text-blue-400 transition">
            TV Shows
          </Link>
        </li>

        <li>
          <Link to="/watchlist" className="hover:text-blue-400 transition">
            Watchlist
          </Link>
        </li>

        <li>
          <Link to="/signin" className="hover:text-blue-400 transition">
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
