

import { LOGO_URL } from "../utils/constants";

import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setbtnName] =useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  
    return (
      <div className="flex justify-between bg-pink-200 shadow-lg sm:bg-yellow-300 lg:bg-yellow-300">
        <div className="logo-container">
          <img
            src= {LOGO_URL}
            alt="App Logo"
            className="w-48"
          />
        </div>
        <div className="flex items-center ">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              Online Status : {onlineStatus ? "✅" : "🔴" }
            </li>
            <li className="px-4">
              <Link to="/">Home </Link>
            </li>

            <li className="px-4">
              <Link to="/about">About Us </Link>
            </li>

            <li>
              <Link to="/contact">contact Us </Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">grocery </Link>
            </li>

            <li className="px-4"> 
              <Link to="/about">Cart </Link>
            </li>
            <button 
            className="login"
            onClick={()=>{
              btnName=== "Login" ?
              setbtnName("Logout"):
              setbtnName("Login");
              
            }}> {btnName}</button>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;