import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { aToken, setAToken } = useContext(AdminContext);

  const logout = () => {
    navigate('/')  
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2 text-xs">
        <h1
          onClick={() => navigate("/")}
          className="text-3xl sm:text-4xl font-bold tracking-wide"
        >
          Carepilot<span className="text-primary text-4xl">+</span>
        </h1>
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">{aToken ? "Admin" : "Doctor"}</p>
      </div>
       <button onClick={logout} className="bg-primary text-white text-sm px-10 py-2 rounded-full">Logout</button>
    </div>
  );
};

export default Navbar;
