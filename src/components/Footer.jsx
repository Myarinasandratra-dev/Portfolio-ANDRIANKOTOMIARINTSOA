import React, { useEffect } from "react";
import "../styles/Footer.css";

function Footer() {
  useEffect(() => {
    const footer = document.querySelector("footer");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      footer.style.transform = `translateY(${scrollY * -0}px)`; // parallax vers le bas
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer>
      <h2>
        Get <strong>in Touch</strong>.
      </h2>
      <div className="socials">
        <a href="#">
          <i className="icon">Bē</i>
        </a>
        <a href="#">
          <i className="icon">@</i>
        </a>
        <a href="#">
          <i className="icon">in</i>
        </a>
      </div>
      <p>Myari N'asandratra </p>
    </footer>
  );
}

export default Footer;
