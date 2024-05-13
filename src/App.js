import React, { useState } from 'react';
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LittleLemon from "./pages/LittleLemon";
import FinalYearProject from "./pages/FinalYearProject"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/little-lemon" element={<LittleLemon />} />
          <Route path="/final-year-project" element={<FinalYearProject />} />
     
      
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
