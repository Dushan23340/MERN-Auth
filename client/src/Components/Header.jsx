import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-blue-300">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/" className="flex items-center space-x-2">
          {/* Logo Image */}
          <img src="src/assets/images/logo.png" alt="Logo" className="h-16 w-16" />
          {/* Title */}
          <span className="text-xl font-bold font-serif bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
            BLUEWAVE
          </span>
        </Link>

        {/* Search Bar */}
        <form className="flex items-center border border-white rounded-full overflow-hidden flex-grow max-w-lg ml-6">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border-none outline-none w-full"
            aria-label="Search"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-700 transition"
            aria-label="Search Button"
          >
            Search
          </button>
        </form>

        <ul className="flex items-center gap-7 font-medium font-serif ml-6">
          <li>
            <Link to="/" className="hover:text-blue-700 transition">Home</Link>
          </li>
          <li className="hover:text-blue-700 transition">Products</li>
          <li>
            <Link to="/about" className="hover:text-blue-700 transition">About Us</Link>
          </li>
          <li>
            <Link to="/support" className="hover:text-blue-700 transition">Support</Link>
          </li>
          <li className="hover:text-blue-700 transition">Blog</li>
          <li>
            <Link to="/sign-in">
            <button className="bg-gradient-to-r from-[#4778F5] to-[#0056D2] text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#68a0fc] hover:to-[#4778F5]">
                Sign In
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}