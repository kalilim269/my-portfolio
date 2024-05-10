import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LittleLemon from "./pages/LittleLemon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/little-lemon" element={<LittleLemon />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
