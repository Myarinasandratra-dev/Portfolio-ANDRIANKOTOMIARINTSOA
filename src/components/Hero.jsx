import React, { useEffect, useRef } from "react";
import "../styles/Hero.css";

function Hero() {
  const particleRef = useRef(null);

  useEffect(() => {
    const particleField = particleRef.current;
    if (!particleField) return;

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
      particle.style.setProperty("--y", `${Math.random() * 200 - 100}px`);
      particle.style.animation = `particleFloat ${
        1 + Math.random() * 2
      }s infinite alternate`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particleField.appendChild(particle);
    }
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="avatar"></div>
        <div className="container">
          <h1>
            Graphiste, Web Designer et Développeur Front-End : <br />{" "}
            <span className="highlight">Je donne vie à vos idées</span>
          </h1>
        </div>
      </section>
      <div className="center">
        <button className="btn magnetic">
          <span>Découvrir maintenant</span>
          <div className="particles-field" ref={particleRef}></div>
        </button>
      </div>
    </div>
  );
}

export default Hero;
