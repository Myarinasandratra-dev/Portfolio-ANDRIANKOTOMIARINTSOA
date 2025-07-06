import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header>
      <div className="logo">Dezign</div>

      {/* Navigation */}
      <nav id="navMenu" className={`nav-links ${menuOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>
          ×
        </button>

        <Link to="/" className="nav-link" onClick={handleLinkClick}>
          Accueil
        </Link>
        <a href="#work" className="nav-link" onClick={handleLinkClick}>
          Compétences
        </a>
        <Link to="/contact" className="nav-link" onClick={handleLinkClick}>
          Contact
        </Link>
      </nav>

      {/* Bouton Hamburger */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
}

export default Header;

/*  function Header() {
  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const closeBtn = document.getElementById("closeBtn");

    if (hamburger && navMenu && closeBtn) {
      hamburger.addEventListener("click", () => {
        navMenu.classList.add("active");
      });

      closeBtn.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });

      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("active");
        });
      });
    }
  }, []);


*/
