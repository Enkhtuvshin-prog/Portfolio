import logo from "./logo.svg";
import "./App.css";
import { SocialIcon } from "react-social-icons";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.div
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
          transition={{ duration: 2git o }}
        >
          <SocialIcon url="" bgColor="orange" style={{ fontSize: 80 }} />
          <SocialIcon network="facebook" style={{ fontSize: 80 }} />
        </motion.div>

        <h1 style={{ color: "red" }}>
          <Typewriter words={["sain uu", "Pinecone"]} loop={false} />
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
