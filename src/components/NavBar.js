import React from "react";
import "./NavBar.css";
import logo from "../assets/android-chrome-192x192.png";
function NavBar(props) {

  const handleOnclick=()=>{
props.setIsHome((prev)=> !prev);
  }
  return (
    <div className="NavBar flex">
      <div className="container">
        <div id="navigation" className="flex">
          <div className="logo flex">
            <h2>VIT</h2>
            <img src={logo} alt="logo"></img>
          </div>
          <ul className="flex" id="nav-links">
            <li onClick={handleOnclick} className={props.isHome? "active":""}>Calculate GPA</li>
            <li onClick={handleOnclick} className={props.isHome? "":"active"}>Calculate CGPA</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
