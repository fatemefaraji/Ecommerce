import { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visibale, setVisibale] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 px-4 sm:px-8 font-medium bg-white shadow-lg transition-all duration-300">
      <Link to="/"><img src={assets.logo} className="w-36 cursor-pointer hover:opacity-80" alt="Logo" />
      </Link>
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

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer hover:scale-110 transition-transform duration-200"
          alt="Search"
        />

        <div className="relative group">
          <img
            src={assets.profile_icon}
            alt="Profile"
            className="w-5 cursor-pointer hover:scale-110 transition-transform duration-200"
          />
          <div className="absolute right-0 hidden group-hover:block pt-2 z-50">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-500 rounded-lg shadow-xl">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5 hover:scale-110 transition-transform duration-200"
            alt="cart-icon"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>

        <img
          onClick={() => setVisibale(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden hover:scale-110 transition-transform duration-200"
          alt="menu_icon"
        />
      </div>

      {/* Side Menu for Small Screens */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-xl transition-transform duration-300 transform ${visibale ? "translate-x-0 w-3/4 sm:w-1/2" : "translate-x-full w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisibale(false)}
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
              onClick={() => setVisibale(false)}
              className="py-2 pl-6 border hover:bg-gray-100 transition-all"
              to={path}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
