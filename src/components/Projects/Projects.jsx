import './Projects.css'
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <div className="projects">
            <div className="container">
                <div className="projects-container">
                    <div className="projects-heading">
                        <h1 id="i1">Projects</h1>
                    </div>
                    <div className="projects-textWrapper">
                        <p>Here are some of my projects</p>
                    </div>
                    <div className="projects-img-container">
                        <motion.img
                            className="projects-img"
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
    )
}

export default Projects