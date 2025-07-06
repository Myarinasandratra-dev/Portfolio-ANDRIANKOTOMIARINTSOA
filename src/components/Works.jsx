import React, { useEffect, useRef } from "react";
import "../styles/Works.css";

function Works() {
  const overlayRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    const handlePointerMove = (e) => {
      const x = e.pageX - container.offsetLeft;
      const y = e.pageY - container.offsetTop;
      overlay.style.setProperty("--x", `${x}px`);
      overlay.style.setProperty("--y", `${y}px`);
      overlay.style.setProperty("--opacity", 1);
    };

    document.body.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <section id="work" className="works" ref={containerRef}>
      <h2>Des compétences solides au service de vos projets.</h2>

      <div className="work-items cards">
        <div className="cards__inner">
          {[
            {
              title: "UI /UX",
              desc: "Passionné par le design d’interfaces, je transforme vos idées en solutions visuelles stratégiques.",
            },
            {
              title: "Graphic Design",
              desc: "Je conçois des designs uniques et captivants en mettant en avant des solutions innovantes.",
            },
            {
              title: "Dev Front-End",
              desc: "Je crée des interfaces dynamiques et réactives tout en offrant une expérience fluide et optimisée.",
            },
            {
              title: "Motion Design",
              desc: "J’anime des idées captivantes en maîtrisant des outils pour donner vie à vos projets.",
            },
          ].map((item, i) => (
            <div className="card work" key={i}>
              <img src="/images/real-estate.jpg" alt={item.title} />
              <div className="UIUX">
                <div className="text_work">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href="#">View Work →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="overlay" ref={overlayRef}></div>
      </div>
    </section>
  );
}

export default Works;

/*import React from "react";

import "./Works.css";

function Works() {
  return (
    <section id="work" className="works">
      <h2>Des compétences solides au service de vos projets.</h2>
      <div className="work-items">
        <div className="work">
          <img src="/images/real-estate.jpg" alt="Real Estate Template" />
          <div className="UIUX">
            <h3>UI /UX</h3>
            <p>
              Passionné par le design d’interfaces, je transforme vos idées en
              solutions <strong>visuelles stratégiques.</strong>
            </p>
            <a href="#">View Work →</a>
          </div>
        </div>
        <div className="work">
          <img src="/images/real-estate.jpg" alt="Real Estate Template" />
          <div className="UIUX">
            <h3>Graphic Design</h3>
            <p>
              Je conçois des designs uniques et captivants en mettant en avant
              des solutions innovantes{" "}
              <strong>des solutions innovantes.</strong>
            </p>
            <a href="#">View Work →</a>
          </div>
        </div>
        <div className="work">
          <img src="/images/real-estate.jpg" alt="Real Estate Template" />
          <div className="UIUX">
            <h3>Dev Front-End</h3>
            <p>
              Je crée des interfaces dynamiques et réactives tout en offrant une
              expérience <strong> fluide et optimisée.</strong>
            </p>
            <a href="#">View Work →</a>
          </div>
        </div>
        <div className="work">
          <img src="/images/real-estate.jpg" alt="Real Estate Template" />
          <div className="UIUX">
            <h3>Motion Design</h3>
            <p>
              J’anime des idées captivantes en maîtrisant des outils pour donner
              vie à vos projets.<strong>vie à vos projets.</strong>
            </p>
            <a href="#">View Work →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;*/
