import ReactDOM from "react-dom/client";
import App from "./App";
import React, { useEffect } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Smooth scroll

function SmoothScroll() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    // Nettoyage (important pour éviter les doublons)
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
    };
  }, []); // [] = exécuter une seule fois au chargement

  return null; // Ce composant ne rend rien visuellement
}

export default SmoothScroll;
