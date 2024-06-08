import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({fix, setFix, setFixed}) => {
  const [nav, setNav] = useState(false);
  const [menu, setMenu] = useState("home");
 
  const handleClick = () => {
    setNav(!nav);
  };

  
  return (
    <div className={fix ? 'fixed index-1 bg-[#ECF0F3] text-[#61615e] w-full' : 'bg-gradient-to-r from-blue-300 to-blue-600'}>
       <div className={fix ? 'text-gray-900 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-1' : 'text-[#FFFFFD] flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-1'}>
      <h1 className={fix ? 'text-3xl font-bold text-gray-900 ml-4' : 'text-3xl font-bold text-white ml-4'}>M.ILYAS</h1>
      <ul className="hidden md:flex">
        <li className={menu==="home" ? "border-gray-300 border-b-4 p-2 ": "p-2"}><a onClick={()=>setMenu("home")} href="#home">Home</a></li>
        <li className={menu==="portfolio" ? "border-gray-300 border-b-4 p-2": "p-2"}><a onClick={()=>setMenu("portfolio")} href="#portfolio">Portfolio</a></li>
        <li className={menu==="skill" ? "border-gray-300 border-b-4 p-2": "p-2"}><a onClick={()=>setMenu("skill")} href="#skill">Tech Skill</a></li>
        <li className={menu==="services" ? "border-gray-300 border-b-4 p-2": "p-2"}><a onClick={()=>setMenu("services")} href="#services">Services</a></li>
        <li className={menu==="certificate" ? "border-gray-300 border-b-4 p-2": "p-2"}><a onClick={()=>setMenu("certificate")} href="#certificate">Certificate</a></li>
        <li className={menu==="contact" ? "border-gray-300 border-b-4 p-2": "p-2"}><a onClick={()=>setMenu("contact")} href="#contact">Contact</a></li>
      </ul>
      <div onClick={handleClick} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

        <div className={nav ? "text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r-gray-900 bg-[#202121] ease-in-out duration-500" : "fixed left-[-100%]"}>
          <h1 className="text-3xl  primary-color ml-4">M.ILYAS</h1>
          <ul className="p-8 text-2xl">
            <li className="p-2"><a href="#home">Home</a></li>
            <li className="p-2"><a href="#portfolio">Portfolio</a></li>
            <li className="p-2"><a href="#services">Services</a></li>
            <li className="p-2"><a href="#certificate">Certificate</a></li>
            <li className="p-2"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Navbar;
