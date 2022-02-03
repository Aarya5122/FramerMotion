import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import Loader from "../components/Loader"

const buttonVariants = {
    hover:{
        // scale: [1, 1.1, 1, 1.1, 1, 1.1, 1], //#keyframe No transition
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255, 255, 255)",
        boxShadow: "0px 0px 8px rgb(255, 255, 255)",
        transition: { yoyo: Infinity, duration: 0.3 }
    }
}

const Home = () => {

    const containerVariants = {
        hidden:{ opacity: 0 },
        visible:{ 
            opacity: 1,
            transition: { delay: 1.5, duration: 1.5 } 
        },
        exit: {
            x: "-100vw",
            transition: { ease: "easeInOut" }
        }
    }

    return(
        <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="home container"
        >
            <h2>Welcome to Pizza Joint</h2>
            <Link to="/base">
                <motion.button
                variants={buttonVariants}
                // animate="visible"
               whileHover="hover"
                >
                     Create Your Pizza
                </motion.button>
            </Link>
            <Loader/>
        </motion.div>
        
    )
}

export default Home