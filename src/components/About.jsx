import React from "react";
import "../styles/About.css";
import img1 from "../assets/music.jpg";
import img2 from "../assets/gaming.jpg";
import img3 from "../assets/football.jpg";

function About() {
  return (
    <section id="competences" className="about-section">
      <div className="about-content">
        <div className="text-left">
          <h4>UN PEU DE MOI</h4>
          <p>
            Je suis un designer UI/UX passionné par la création de expériences
            numériques belles et joyeuses Outre le design, j'aime la musique,
            les jeux et le football.
          </p>
        </div>
        <div className="images-right">
          <div className="column-left">
            <img src={img1} alt="music" className="img-item" />
          </div>
          <div className="column-right">
            <img src={img2} alt="gaming" className="img-item" />
            <img src={img3} alt="football" className="img-item" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
