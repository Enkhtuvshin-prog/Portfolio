import React from "react";
import { FaUser } from "react-icons/fa";

const About = () => {
  return (
    <div id="About">
      <h1>
        {" "}
        <FaUser />
        cAbout{" "}
        <span style={{ color: "#8E44AD" }}>
          <Typewriter words={["Me"]} loop={false} />
        </span>
      </h1>
    </div>
  );
};

export default About;
