
import './Contact.css'
import { motion} from 'framer-motion'

const variants = {
    initial: {
        opacity: 0,
        y: 500,
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
const Contact = () => {
    return (
        <motion.div className="contact" variants={variants} 
        initial='initial' whileInView='animate'>
            <motion.div className="textContainer" variants={variants}>
                <motion.h1>Let's work together</motion.h1>
                <div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>himanshu.bani123@gmail.com</span>
                </div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>+91 1234567892</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>Delhi, India</span>
                </motion.div>
            </motion.div>
            <div className="form-container">
                <motion.form 
                action=""
                initial={{opacity:0, y:500}}
                whileInView={{opacity:1, y:0}}
                transition={{ease: [0, 0.71, 0.2, 1.01],duration:1}}
                >
                    <input type="text" required placeholder='Name'/>
                    <input type="email" required placeholder='Email'/>
                    <textarea name="" placeholder='Message'id=""    cols="30" rows="8"></textarea>
                    <button>Submit</button>
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact