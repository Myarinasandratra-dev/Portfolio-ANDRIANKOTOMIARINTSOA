// src/pages/Home.jsx
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Works from "../components/works";
import About from "../components/About";
import Footer from "../components/Footer";
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
