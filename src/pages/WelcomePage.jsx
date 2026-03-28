import React from 'react';
import { motion } from 'framer-motion';

const WelcomePage = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white font-sans overflow-hidden">
      <div>
        <motion.div
          initial={{ borderTop: "green" }}
          className='w-16 h-16 border-2 rounded-full p-10 mb-8 animate-pulse-border flex justify-center items-center'
        >
        </motion.div>
      </div>
      <div className="text-center">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-light text-gray-400 mb-2"
        >
          Welcome to
        </motion.h2>


        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl px-4 md:text-5xl font-bold tracking-tight"
        >
          <span className="text-background-secondary">Pankaj</span>'s Portfolio
        </motion.h1>


        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="mt-8 h-1 w-24 bg-background-secondary mx-auto rounded-full shadow-lg shadow-green-500/50"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-6 text-center px-6 text-gray-400 italic max-w-lg"
        >
          Build with React, Tailwind, FastAPI, and Python.
        </motion.p>

      </div>
    </div>
  );
};

export default WelcomePage;