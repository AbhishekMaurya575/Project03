import React from "react";
import { FaBars } from "react-icons/fa";
import { NavbarContext } from "../context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { navbardisplay, setNavbardisplay } = useContext(NavbarContext);
  return (
    <div className=" pl-4 fixed bg-white border-b-4 items-center h-[60px]  flex w-full z-20 top-0">
      <button
        onClick={() => {
          setNavbardisplay(navbardisplay === "none" ? "block" : "none");
        }}
        className="sm:hidden"
      >
        <FaBars className="w-[100%] h-[30px]" />
      </button>
      <div
        className="logo w-[80vw]  sm:w-[30vw] justify-center flex items-center text-2xl text-purple-900"
        style={{ fontFamily: "cursive" }}
      >
        Welcome !
      </div>
      <div className="justify-around items-center font-bold text-black gap-2  px-4 w-[30vw] hidden sm:flex text-xl">
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? "text-orange-700 font-extrabold " : "text-black"
          }
        >
          {" "}
          <button className="justify-center items-center p-1 px-2 ">
            Home
          </button>
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? "text-orange-700 font-extrabold " : "text-black"
          }
        >
          <button className="justify-center items-center">About</button>
        </NavLink>

        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? "text-orange-700 font-extrabold " : "text-black"
          }
        >
         
          <button className="justify-center items-center">Contact</button>
        </NavLink>
        <NavLink
          to="/Github"
          className={({ isActive }) =>
            isActive ? "text-orange-700 font-extrabold " : "text-black"
          }
        >
        <button className="justify-center items-center">Github</button></NavLink>
      </div>
     
    </div>
  );
};

export default Navbar;
