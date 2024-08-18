import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-blue-400">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="flex items-center">
          {/* Logo Image */}
          <img src="src/assets/images/logo.png" alt="Logo" className="h-12 w-12 mr-2" />
          {/* Title */}
        </Link>
         {/* Search Bar */}
         <form className="flex items-center border border-white rounded-full overflow-hidden mr-96">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border-none outline-none"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-700 transition">
              Search
            </button>
          </form>
        <ul className="flex items-center gap-4 font-medium">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <li>Support</li>
          <li>Blog</li>
          <Link to="/sign-in">
            <button className="bg-gradient-to-r from-[#4778F5] to-[#0056D2] text-white px-4 py-2 rounded-full ml-4 hover:bg-blue-700 transition">
              Sign In
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}
