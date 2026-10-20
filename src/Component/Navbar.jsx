import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gray-900 text-white shadow-lg">
      {/* Top bar */}
      <div className="flex h-16 items-center justify-between px-4 sm:px-8 lg:px-16 xl:px-24">
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl sm:text-3xl lg:text-4xl black-ops-one-regular"
        >
          Portfolio
        </Link>

        {/* Desktop menu (768px and up) */}
        <div className="hidden items-center gap-6 text-base md:flex lg:gap-10 lg:text-lg black-ops-one-regular">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative cursor-pointer transition-colors duration-300 hover:text-orange-400
                 after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:h-0.5 after:bg-orange-400
                 after:transition-all after:duration-500
                 ${
                   isActive
                     ? "text-orange-400 after:w-full"
                     : "after:w-0 hover:after:w-full"
                 }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Hamburger button (below 768px) */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="cursor-pointer p-2 text-2xl transition-colors hover:text-orange-400 md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-gray-900 transition-all duration-300 md:hidden ${
          open ? "visible max-h-80 border-t border-white/10" : "invisible max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 py-2 text-lg sm:px-8 black-ops-one-regular">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `border-b border-white/5 py-3 transition-colors last:border-0 hover:text-orange-400 ${
                  isActive ? "text-orange-400" : "text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
