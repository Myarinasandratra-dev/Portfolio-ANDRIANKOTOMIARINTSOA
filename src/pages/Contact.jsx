import React from "react";
import ContactForm from "../components/ContactForm";
import "../styles/Contact.css";

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
              <span className="info-icon">📧</span>
              <div>
                <h3>Email</h3>
                <p>myari.nasandratra@example.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📱</span>
              <div>
                <h3>Téléphone</h3>
                <p>+33 6 12 34 56 78</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h3>Localisation</h3>
                <p>Paris, France</p>
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
