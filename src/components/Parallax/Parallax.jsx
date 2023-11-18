import { useRef } from 'react'
import './Parallax.css'
import {motion, useScroll, useTransform} from 'framer-motion'

const Parallax = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })
    const yRange = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
    const yRange2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const yRange3 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    return(
        <div className='parallax'
            ref={ref}>
            <motion.h1 style={{y:yRange}}>What I built</motion.h1>
            <motion.div className='mountains' ></motion.div>
            <motion.div className="planets" style={{y:yRange2}}></motion.div>
            <motion.div className="stars" style={{x:yRange3}}></motion.div>
        </div>
    )
}

export default Parallax 