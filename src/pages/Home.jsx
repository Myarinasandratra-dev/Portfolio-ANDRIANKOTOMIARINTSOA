// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Works from "../components/Works";
import About from "../components/About";

const Home = () => {
  return (
    <main>
      <Hero />
      <Clients />
      <Works />
      <About />
    </main>
  );
};

export default Home;
