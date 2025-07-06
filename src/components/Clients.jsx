import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/Clients.css";

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
    { src: "/logos/airbnb.png", alt: "Thirty-one" },
    { src: "/logos/google.png", alt: "FerberEnterprise" },
    { src: "/logos/microsoft.png", alt: "Netykom" },
  ];

  return (
    <section className="clients" ref={logosRef}>
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
