import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-blue-300">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
      <Link to="/" className="flex items-center space-x-2">
  {/* Logo Image */}
  <img src="src/assets/images/logo.png" alt="Logo" className="h-16 w-16" />
  {/* Title */}
  <span className="text-xl font-bold font-serif bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
  BLUEWAVE
</span>

</Link>

         {/* Search Bar */}
       <form className="flex items-center border border-white rounded-full overflow-hidden mr-64">
          <input
             type="text"
             placeholder="Search..."
             className="px-2 py-1 border-none outline-none"
          />
          <button type="submit" className="bg-blue-500 text-white px-2 py-1 hover:bg-blue-700 transition">
          Search
          </button>
       </form>

        <ul className="flex items-center gap-7 font-medium font-serif">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/support">
          <li>Support</li>
          </Link>
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
