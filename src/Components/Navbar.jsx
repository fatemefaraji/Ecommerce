import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {setShowSearch,getCartCount}=useContext(ShopContext)
  return (
    <div className="flex items-center justify-between py-5 px-4 sm:px-8 font-medium bg-white  rounded-b-xl shadow-lg transition-all duration-300">
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          className="w-36 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          alt="Logo"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-8 text-gray-700">
        {[
          { path: "/", label: "HOME" },
          { path: "/collection", label: "COLLECTION" },
          { path: "/about", label: "ABOUT" },
          { path: "/contact", label: "CONTACT" },
        ].map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className="flex flex-col items-center gap-1 group relative"
          >
            <p className="group-hover:text-black transition-colors duration-200">{label}</p>
            <span className="absolute bottom-[-5px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-3/4"></span>
          </NavLink>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <img onClick={()=> setShowSearch(true)} src={assets.search_icon}
          
          className="w-5 cursor-pointer hover:scale-110 transition-transform duration-200"
          alt="Search"
        />

        {/* Profile Dropdown */}
        <div className="relative group">
          <Link to='/login'>
          <img
            src={assets.profile_icon}
            alt="Profile"
            className="w-5 cursor-pointer hover:scale-110 transition-transform duration-200"
          />
          </Link>
          <div className="absolute right-0 hidden group-hover:block pt-2 z-50">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-500 rounded-lg shadow-xl">
              <p className="cursor-pointer hover:text-black transition-colors duration-200">My Profile</p>
              <p className="cursor-pointer hover:text-black transition-colors duration-200">Orders</p>
              <p className="cursor-pointer hover:text-black transition-colors duration-200">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5 hover:scale-110 transition-transform duration-200"
            alt="cart-icon"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-5 h-5 flex items-center justify-center bg-black text-white text-[10px] rounded-full shadow-md">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setIsVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden hover:scale-110 transition-transform duration-200"
          alt="menu_icon"
        />
      </div>

      {/* Side Menu for Small Screens */}
      {isVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setIsVisible(false)}
        >
          <div
            className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white shadow-xl transition-transform duration-300 transform translate-x-0"
            onClick={(e) => e.stopPropagation()} // 
          >
            <div className="flex flex-col text-gray-600">
              <div
                onClick={() => setIsVisible(false)}
                className="flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-100 transition-all"
              >
                <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="dropDownIcon" />
                <p>Back</p>
              </div>
              {[
                { path: "/", label: "HOME" },
                { path: "/collection", label: "COLLECTION" },
                { path: "/about", label: "ABOUT" },
                { path: "/contact", label: "CONTACT" },
              ].map(({ path, label }) => (
                <NavLink
                  key={path}
                  onClick={() => setIsVisible(false)}
                  className="py-2 pl-6 border hover:bg-gray-100 transition-all"
                  to={path}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
