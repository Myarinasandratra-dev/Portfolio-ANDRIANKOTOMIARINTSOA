import React, { useEffect } from "react";
import "../styles/Footer.css";

function Footer() {
  useEffect(() => {
    const footer = document.querySelector("footer");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      footer.style.transform = `translateY(${scrollY * -0}px)`; // effet parallax
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer>
      <div className="footer-background"></div>
      <div className="footer-content">
        <h2>
          <strong>Myari N&apos;asandratra</strong>.
        </h2>

        {/* ✅ nouveau texte descriptif */}
        <p></p>
        <p className="footer-role">UI/UX – Dev Front-End & Graphiste</p>

        <p>© Copyright 2025</p>
      </div>
    </footer>
  );
}

export default Footer;
