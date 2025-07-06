// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactFrom from "./components/ContactFrom";
import "./styles/style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="page-container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ContactFrom " element={<ContactFrom />} />
          </Routes>
        </div>
        <div className="padding-footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
