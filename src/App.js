import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LittleLemon from "./pages/LittleLemon";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/little-lemon" element={<LittleLemon />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
