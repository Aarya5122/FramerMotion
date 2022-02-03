import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

const Modal = ({showModal, setShowModal}) => {
    return(
        <AnimatePresence exitBeforeEnter>
            {(showModal) && (
                <motion.div
                variants={backdropVariant}
                initial="hidden"
                animate="visible"
                className="backdrop"
                >

                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;