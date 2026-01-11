import { NavLink, useNavigate } from "react-router-dom";
import React, { useState }  from "react";
import { assets } from "../assets/assets";

const Navbar = () => {

  const navigate = useNavigate();

  const [ showMenu, setShowMenu ] = useState(false);
  const [ token, setToken ] = useState(true);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Doctors", path: "/doctors" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-wide">
        Carepilot<span className="text-primary text-4xl">+</span>
      </h1>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        {navLinks.map(({ label, path }) => (
          <NavLink key={path} to={path}>
            {({ isActive }) => (
              <div
                className={`flex flex-col items-center py-1 ${
                  isActive ? "text-primary" : ""
                }`}
              >
                <li>{label}</li>
                <hr
                  className={`border-none h-0.5 bg-primary w-3/5 m-auto transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            )}
          </NavLink>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        {
           token
           ? <div className="flex items-center gap-2 cursor-pointer group relative">
               <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
               <img className="w-2.5" src={assets.dropdown_icon} alt="" />
               <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block ">
                  <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                     <p onClick={()=>navigate('my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                     <p onClick={()=>navigate('my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                     <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>   
                  </div>
               </div>
             </div>
           : <button onClick={() => navigate('/login')} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">Create Account</button> 
        }         
      </div>
    </div>
  );
};

export default Navbar;
