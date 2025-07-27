import { FiHeart, FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <div className="navbar bg-base-100 justify-between px-6 shadow-sm">
      {/* Left: Logo + Search */}
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold">cyber</span>

        <div className="form-control">
          <div className="input input-bordered rounded-full flex items-center gap-2 bg-base-200 px-4 py-2">
            <FiSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm w-48"
            />
          </div>
        </div>
      </div>

      {/* Center: Menu Links */}
      <div className="hidden lg:flex gap-6">
        <a className="font-semibold text-black">Home</a>
        <a className="text-gray-400 hover:text-black">About</a>
        <a className="text-gray-400 hover:text-black">Contact Us</a>
        <a className="text-gray-400 hover:text-black">Blog</a>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-6 text-2xl">
        <FiHeart className="cursor-pointer" />
        <FiShoppingCart className="cursor-pointer" />
        <FiUser className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;