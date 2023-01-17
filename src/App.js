import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
// import { SocialIcon } from "react-social-icons";
// import { Typewriter } from "react-simple-typewriter";
// import { motion } from "framer-motion";
import NavbarMenu from "./component/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
// import Footer from "./pages/Footer";
// import Chatbot from "./component/Chatbot";

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Chatbot /> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
