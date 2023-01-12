import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { SocialIcon } from "react-social-icons";
// import { Typewriter } from "react-simple-typewriter";
// import { motion } from "framer-motion";
import NavbarMenu from "./component/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Hero />
      <About />
    </div>
  );
}

export default App;
