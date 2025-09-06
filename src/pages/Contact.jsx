import React from "react";
import ContactForm from "../components/ContactForm";
import "../styles/Contact.css";
import { MdPhoneIphone } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <main className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Contactez-moi</h1>
          <p className="contact-subtitle">
            Prêt à discuter de votre projet ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Informations de contact</h2>
            <div className="info-item">
              <span className="info-icon">
                <BiLogoGmail />
              </span>
              <div>
                <h3>Email</h3>
                <p>andriankotomiarintsoa24@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">
                <MdPhoneIphone />
              </span>
              <div className="phone-info">
                <h3>Téléphone/whatsApp</h3>
                <p>+261 34 56 856 92</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">
                <FaLinkedin />
              </span>
              <div>
                <h3>LinkedIn</h3>
                <p>
                  <a
                    href="https://www.linkedin.com/in/nasandratra-andriankotomiarintsoa-115206358/" // remplace par ton URL LinkedIn
                    target="_blank" // ouvre dans un nouvel onglet
                    rel="noopener noreferrer" // sécurité
                    className="linkedin-link"
                  >
                    Nasandratra Andriankotomiarintsoa
                  </a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">
                <FaLocationArrow />
              </span>
              <div>
                <h3>Localisation</h3>
                <p>Antananarivo,Madagascar</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
