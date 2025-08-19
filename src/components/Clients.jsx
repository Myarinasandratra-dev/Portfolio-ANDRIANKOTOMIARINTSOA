import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/Clients.css";
import thirtyone from "../assets/thirtyone.png";
import ferber from "../assets/ferber.png";
import netykom from "../assets/netykom.png";

function Clients() {
  const logosRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 }); // Infinite repeat

      tl.to(".logos-track", {
        xPercent: -50,
        duration: 10,
        ease: "linear",
      });
    }, logosRef);

    return () => ctx.revert();
  }, []);

  const logos = [
    { src: thirtyone, alt: "Thirty-one" },
    { src: ferber, alt: "FerberEnterprise" },
    { src: netykom, alt: "Netykom" },
  ];

  return (
    <section id="decouvrir" className="clients" ref={logosRef}>
      <p>
        J’ai travaillé avec <strong>plusieurs sociétés</strong> sur des projets
        de design et de développement web.
      </p>

      <div className="logos-slider">
        <div className="logos-track">
          {[...logos, ...logos].map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
