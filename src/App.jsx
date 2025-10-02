import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CustomCursor from "./components/CustomCursor";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="page-container">
          <Header />

          {/* Routes React Router v6 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>

        <div className="padding-footer">
          <Footer />
        </div>

        {/* Curseur lumineux */}
        <CustomCursor />
      </div>
    </BrowserRouter>
  );
}

export default App;
