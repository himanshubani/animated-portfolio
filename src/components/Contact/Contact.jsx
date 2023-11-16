import './Contact.css'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="contact-container">
                    <div className="contact-heading">
                        <h1 id="i1">Contact</h1>
                    </div>
                    <div className="contact-textWrapper">
                        <p>Let's get in touch</p>
                    </div>
                    <div className="contact-img-container">
                        <motion.img
                            className="contact-img"
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

export default Contact