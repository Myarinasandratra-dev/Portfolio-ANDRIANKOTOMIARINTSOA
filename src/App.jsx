import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CustomCursor from "./components/CustomCursor";
import "./styles/style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="page-container">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>

        <div className="padding-footer">
          <Footer />
        </div>

        <CustomCursor />
      </div>
    </Router>
  );
}

export default App;
