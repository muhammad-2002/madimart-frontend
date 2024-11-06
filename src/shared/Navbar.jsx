import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import LanguageDropdown from "../components/LanguageDropdown";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-none border-none outline-none font-bold text-[var(--second)] hover:text-[var(--second)]  "
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="bg-none">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "bg-none border-none outline-none font-bold text-[var(--second)] hover:text-[var(--second)] "
              : ""
          }
        >
          shop
        </NavLink>
      </li>
    </>
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navbar shadow-md px-14 fixed z-30 bg-[#033B4C]">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="text-2xl font-bold flex gap-1 justify-center items-center ">
          <div className="w-[60px] h-[60px]">
            <img src={logo} className="w-full h-full" alt="psz-logo"></img>
          </div>
          <div>
            <h1 className="font-bold">MediMart</h1>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-5 gap-7 text-white">{links}</ul>
      </div>

      <div className="navbar-end text-black flex gap-3">
        <div className="text-[25px] relative text-white">
          <BsCart2 />
          <div className="text-[16px] hidden rounded-md px-1 bg-white text-black absolute top-[-15px] left-[-10px]">
            +0
          </div>
        </div>
        <LanguageDropdown></LanguageDropdown>

        <div
          href="#_"
          class=" px-5 py-1.5 overflow-hidden group bg-[var(--second)] rounded-sm relative cursor-pointer hover:bg-gradient-to-r hover:from-black-500 hover:to-green-400 text-white hover:ring-1 hover:ring-[var(--second)] transition-all ease-out duration-300"
        >
          <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span class="relative font-semibold">Join Us</span>
        </div>
        <div className="avatar hidden" onClick={handleDropdown}>
          <div className="ring-primary ring-offset-base-100 w-8 cursor-pointer rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
      <div
        className={`${
          showDropdown ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } transform transition-all duration-300 ease-out absolute right-3 top-20 w-[150px] text-center bg-[var(--blue)] flex justify-center p-3 rounded-md ${
          !showDropdown ? "pointer-events-none" : ""
        }`}
      >
        <ul>
          <li className="cursor-pointer hover:font-bold">Update profile</li>
          <li className="cursor-pointer hover:font-bold">Dashboard</li>
          <li className="cursor-pointer hover:font-bold">Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
