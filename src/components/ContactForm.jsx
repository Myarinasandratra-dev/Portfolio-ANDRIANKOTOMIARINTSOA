import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    sujet: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyer les données à EmailJS
    emailjs
      .send(
        "service_42ypjba", // Service ID
        "template_lvj11ki", //  ID EmailJS
        formData,
        "2L_UTku-LOJKmpeii" //  EmailJS
      )
      .then(
        (result) => {
          console.log("Email envoyé avec succès !", result.text);
          alert("Message envoyé !");
          setFormData({ nom: "", sujet: "", email: "", message: "" });
        },
        (error) => {
          console.log("Erreur :", error.text);
          alert("Erreur lors de l'envoi, réessaie.");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nom">Nom:</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="sujet">Sujet:</label>
        <input
          type="text"
          id="sujet"
          name="sujet"
          value={formData.sujet}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn">
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
