import React from 'react'
import { FaTimes } from "react-icons/fa";
import { NavbarContext } from "../context";
import { useContext } from "react";
import { Link, NavLink } from 'react-router-dom';

const Navbarcom = () => {
    const { navbardisplay, setNavbardisplay } = useContext(NavbarContext);
  return (
    <div
    className="bg-gray-200 fixed min-h-[100vh] w-[60%]  flex  flex-col pt-14"
    style={{ display: navbardisplay }}
  >
    <div className="bg-none absolute border-black mt-[5px] ml-[105%]">
      <button
        onClick={() => {
          setNavbardisplay(navbardisplay === "none" ? "block" : "none");
        }}
      >
        <FaTimes className="w-[30px] h-[40px] text-black" />
      </button>
    </div>
    <div
      className="min-h-[40px] text-xl  justify-center items-center font-semibold "
      style={{ borderBottomStyle: "solid", borderBottomWidth: "1px" }}
    >
     <NavLink to="" className={({isActive})=>(isActive ?'bg-gray-300 font-extrabold':'text-black')} > <button className="items-center text-left w-full pl-2">Home</button></NavLink>
    </div>
    <div
      className="min-h-[40px] text-xl  justify-center items-center font-semibold "
      style={{ borderBottomStyle: "solid", borderBottomWidth: "1px" }}
    >
      <NavLink to="/About" className={({isActive})=>(isActive ?'bg-gray-300 font-extrabold':'text-black')} > <button className="text-left w-full pl-2 items-center">About</button></NavLink>
    </div>
    <div
      className="min-h-[40px] text-xl  justify-center items-center font-semibold  "
      style={{ borderBottomStyle: "solid", borderBottomWidth: "1px" }}
    >
         <NavLink to="/Contact" className={({isActive})=>(isActive ?'bg-gray-300 font-extrabold':'text-black')} >
      <button className="text-left w-full pl-2 items-center">Contact</button></NavLink>
    </div>
    <div
      className="min-h-[40px] text-xl  justify-center items-center font-semibold "
      style={{ borderBottomStyle: "solid", borderBottomWidth: "1px" }}
    >
      
      <NavLink to="/Github" className={({isActive})=>(isActive ?'bg-gray-300 font-extrabold':'text-black')} >
      <button className="text-left w-full pl-2 items-center">Github</button></NavLink>
    </div>
   
  </div>
  )
}

export default Navbarcom
