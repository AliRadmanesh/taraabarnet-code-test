import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyles = "text-blue-700";
  const inactiveStyles = "text-gray-700 hover:text-blue-700";

  return (
    <nav className="bg-white px-2 py-4 mb-4 border-b border-gray-200">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <ul className="flex flex-row space-x-8 mt-0 text-base font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeStyles : inactiveStyles
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeStyles : inactiveStyles
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
