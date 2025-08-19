import React, { useState, useRef } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const particleRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleLinkClick = (e, targetId) => {
    setMenuOpen(false);

    if (targetId) {
      e.preventDefault();
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Ajustement pour le header
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header>
      <div className="logo">Myari N'asandratra</div>

      <nav id="navMenu" className={`nav-links ${menuOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>
          ×
        </button>
        <Link to="/" className="nav-link" onClick={(e) => handleLinkClick(e)}>
          Accueil
        </Link>
        <a
          href="#work"
          className="nav-link"
          onClick={(e) => handleLinkClick(e, "work")}
        >
          Compétences
        </a>
        <Link
          to="/Contact"
          className="nav-link"
          onClick={(e) => handleLinkClick(e)}
        >
          Contact
        </Link>

        <button className="btn magnetic">
          <span>Télécharger CV</span>
          <div className="particles-field-header" ref={particleRef}></div>
        </button>
      </nav>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
}

export default Header;
