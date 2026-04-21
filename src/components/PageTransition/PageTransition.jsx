import React from 'react';
import { motion } from 'framer-motion';
import './PageTransition.css';

const PageTransition = ({ children }) => {
  return (
    <>
      <motion.div
        className="slide-in"
        initial={{ y: "120vh" }}
        animate={{ y: "120vh" }}
        exit={{ y: "0vh" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg className="curve-top" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0 100 Q 50 0 100 100 Z" />
        </svg>
      </motion.div>
      
      <motion.div
        className="slide-out"
        initial={{ y: "0vh" }}
        animate={{ y: "-120vh" }}
        exit={{ y: "-120vh" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg className="curve-bottom" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0 0 Q 50 100 100 0 Z" />
        </svg>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }} // Delay slightly to let the wipe reveal it
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
