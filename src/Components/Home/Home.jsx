import React from "react";
import { Link } from "react-router-dom";


    export default function Home() {
      return (
          <div className="mx-auto w-full max-w-7xl">
             <div className="lg:flex">
              <div className="justify-center items-center"><img src="src\assets\image1.avif" className="mt-16  w-96 lg:h-[100%] lg:w-full"></img></div>
             <div className="h-full lg:h-[50vh] w-full justify-center items-center flex-col flex "><div style={{fontFamily:"cursive"}} className="  text-xl sm:text-4xl lg:text-7xl font-bold justify-center items-center">Welcome to the</div>
             <div className="text-xl sm:text-3xl lg:text-6xl font-bold justify-end items-end text-right w-full mr-4" style={{fontFamily:"cursive"}}>developer world</div>  </div>
             </div>
  
           
          </div>
      );
  }
  

