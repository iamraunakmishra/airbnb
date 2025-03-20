import { FaSearch, FaUserCircle, FaBars } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="border-b border-zinc-200 bg-white shadow-sm">
      <nav className="max-w-[1150px] mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/a.png" alt="Logo" className="h-8" />
          <span className="text-red-500 text-2xl font-bold"></span>
        </div>

        {/* Search Bar - Visible on Medium & Larger Screens */}
        <div className="hidden md:flex">
          <div className="flex items-center border rounded-full border-zinc-300 px-6 py-2 gap-4 hover:shadow-md">
            <button className="text-sm font-medium">Anywhere</button>
            <span className="text-gray-300">|</span>
            <button className="text-sm font-medium">Any week</button>
            <span className="text-gray-300">|</span>
            <button className="text-sm text-gray-500">Add guests</button>
            <div className="bg-red-500 text-white p-2 rounded-full cursor-pointer flex items-center justify-center w-8 h-8">
              <FaSearch size={14} />
            </div>
          </div>
        </div>

        {/* Small Search Icon - Visible on Small Screens */}
        <div className="md:hidden flex items-center">
          <div className="bg-red-500 text-white p-2 rounded-full cursor-pointer flex items-center justify-center w-10 h-10">
            <FaSearch size={16} />
          </div>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm rounded-full px-5 py-2 hover:bg-zinc-200">
            Airbnb your home
          </button>
          <IoGlobeOutline className="w-5 h-5" />

          {/* Mobile Menu */}
          <div className="flex items-center border rounded-full p-2 gap-2 cursor-pointer hover:shadow-md md:px-5 md:py-2 hover:bg-zinc-200">
            <FaBars className="text-gray-600" />
            <FaUserCircle className="text-gray-600 w-6 h-6" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
