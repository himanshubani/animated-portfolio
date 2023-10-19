import "./Hero.css";
import {motion} from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 10,
        },
    },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial='initial' animate='animate'>
          <h2>Hello, There</h2>
          <motion.h1 variants={textVariants}>
            I am <span>Himanshu Bani.</span>
          </motion.h1>
          <h3>a MERN Stack Developer</h3>
        </motion.div>
      </div>
      <div className="imgContainer">
        <img
          src="https://framerusercontent.com/images/Ja9kdeGLqLrGhXm2z8vNoB5nEFE.png?scale-down-to=1024"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
