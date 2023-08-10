import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  useEffect(() => {
    const handleScroll = () => {
      const navContainer = document.querySelector(".nav-container");
      const scrollOffset = window.scrollY;
      navContainer.style.backgroundPosition = `center top ${
        -scrollOffset * 0.5
      }px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav-container">
      <nav className="fancy-nav">
        <NavLink to="/" className="nav-link" activeclasscame="active">
          About
        </NavLink>
        <NavLink to="/projects" className="nav-link" activeclassname="active">
          Projects
        </NavLink>
        <NavLink to="/contact" className="nav-link" activeclassname="active">
          Contact
        </NavLink>
      </nav>
    </div>
  );
}
