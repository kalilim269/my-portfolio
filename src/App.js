import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Skill from "./components/Skills";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skill />
      <Work/>
      <Experience/>
      <Contact/>
      <Footer/>
    
    </div>
    
  );
}

export default App;
