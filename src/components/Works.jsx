import React, { useEffect, useRef } from "react";
import "../styles/Works.css";
import { MdOutlineWeb } from "react-icons/md";
import { FaPaintBrush, FaCode, FaFilm } from "react-icons/fa";

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

  const worksData = [
    {
      title: "UI /UX",
      desc: "Passionné par le design d’interfaces, je transforme vos idées en solutions visuelles stratégiques.",
      icon: <MdOutlineWeb />,
      link: "https://dribbble.com/nasandratra-andriankotomiarint", // 🔗 lien vers page/section UIUX
    },
    {
      title: "Graphic Design",
      desc: "Je conçois des designs uniques et captivants en mettant en avant des solutions innovantes.",
      icon: <FaPaintBrush />,
      link: "https://www.behance.net/nasandrmiarint", // 🔗 lien vers page/section Graphic Design
    },
    {
      title: "Dev Front-End",
      desc: "Je crée des interfaces dynamiques et réactives tout en offrant une expérience fluide et optimisée.",
      icon: <FaCode />,
      link: "https://github.com/Myarinasandratra-dev", // 🔗 lien vers page/section Dev Front-End
    },
  ];

  return (
    <section id="work" className="works" ref={containerRef}>
      <h2>Des compétences solides au service de vos projets.</h2>

      <div className="work-items cards">
        <div className="cards__inner">
          {worksData.map((item, i) => (
            <div className="card work" key={i}>
              <div className="UIUX">
                <div className="text_work">
                  <h3>
                    <span className="icon">{item.icon}</span> {item.title}
                  </h3>
                  <div className="paragraphe">{item.desc}</div>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Voir le travail →
                  </a>
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
