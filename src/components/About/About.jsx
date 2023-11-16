import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-container">

      
        <div className="about-textWrapper">
          <div className="about-heading">
            <h1 id="i1">About Me</h1>
          </div>
          <p>Hi, I'm a 3rd year computer science undergrad at MAIT.</p>

          <p>
            A <span className="profession">Developer in making . . .</span>
          </p>

          <p>
            I love <span className="profession">problem solving</span>
          </p>

          <p>
            I love showcasing my front-end skills because the possibilities are
            endless.
          </p>

          <p>
            I also have knowledge of
            <span> Web3, Cryptography and Blockchain</span>
          </p>

          <p>
            Currently I'm learning Framer Motion, which is an awesome frontend
            animation library
          </p>
        </div>
        <div className="about-img-container">
          <motion.img
            className="about-img"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 75,
                restDelta: 0.001
              }
            }}
            src="https://shivambhadani.netlify.app/static/media/avatar.5852f40fbb38aa284829fa3fb7722225.svg"
            alt=""
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
