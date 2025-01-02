import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import style from "./navbar.module.css";
import logo from "../assets/earth-globe.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle resize to reset menu state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Reset menu state on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={style.NavbarIteam}>
      <h1><img className={style.navbarlogo} src={logo} alt="" />RAS Tour</h1>
      <div className={style.menuicon} onClick={toggleMenu}>
        <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={`${style.navmenu} ${isMenuOpen ? style.active : ""}`}>
        <li>
          <Link to="/">
            <i className="fa-solid fa-house"></i>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="fa-solid fa-circle-info"></i>
            About
          </Link>
        </li>
        <li>
          <Link to="/service">
            <i className="fa-solid fa-briefcase"></i>
            Service
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i className="fa-solid fa-address-book"></i>
            Contact
          </Link>
        </li>
        <button>Sign up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
