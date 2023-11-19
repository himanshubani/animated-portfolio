import "./About.css";
import { motion } from "framer-motion";

const variants = {
  initial: {
      opacity: 0,
      y: 400,
  },
  animate: {
      opacity: 1,
      y: 0,
      transition: {
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
          staggerChildren: 0.2,
      },
  },
}

const About = () => {
  return (
    <div className="about" >
      <div className="container">
        <motion.div className="about-container" variants={variants}
        initial='initial' whileInView='animate'>

      
        <motion.div className="about-textWrapper">
          <motion.div className="about-heading">
            <h1 id="i1">About Me</h1>
          </motion.div>
          <motion.p variants={variants}>Hi, I'm a 3rd year computer science undergrad at MAIT.</motion.p>

          <motion.p variants={variants}>
            A <span className="profession">Developer in making . . .</span>
          </motion.p>

          <motion.p variants={variants}>
            I love <span className="profession">problem solving</span>
          </motion.p>

          <motion.p variants={variants}>
            I love showcasing my front-end skills because the possibilities are
            endless.
          </motion.p>

          <motion.p variants={variants}>
            I also have knowledge of
            <span> Web3, Cryptography and Blockchain</span>
          </motion.p>

          <motion.p variants={variants}>
            Currently I'm learning Framer Motion, which is an awesome frontend
            animation library
          </motion.p>
        </motion.div>
        <motion.div variants={variants} className="about-img-container">
          <img
            src="https://shivambhadani.netlify.app/static/media/avatar.5852f40fbb38aa284829fa3fb7722225.svg"
            alt=""
          />
        </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
