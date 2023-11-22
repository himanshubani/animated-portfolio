import { useRef } from 'react'
import './Projects.css'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: 'Food Delivery App',
        img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
        link: 'https://picsum.photos/200/300',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
    },
    {
        id: 2,
        title: 'Fitness App',
        img: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
        link: 'https://picsum.photos/200/300',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
    },
    {
        id: 3,
        title: 'Music App',
        img: 'https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=400',
        link: 'https://picsum.photos/200/300',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'

    },
    {
        id: 4,
        title: 'Travel App',
        img: 'https://images.pexels.com/photos/837745/pexels-photo-837745.jpeg?auto=compress&cs=tinysrgb&w=400',
        link: 'https://picsum.photos/200/300',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'

    }
]

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref
    });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return (
        <section className='projSection' >
            <div className="container">
                <div className="wrapper">
                    <div className="imgcontainer" ref={ref}>

                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button className='demo-button'>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Projects = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref, offset:["end end","start start"]
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
    return (
        <div className="projects" ref = {ref}>
            <div className="progress">
                <h1>My Projects</h1>
                <motion.div className="progressBar"
                    style={{scaleX}}></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Projects