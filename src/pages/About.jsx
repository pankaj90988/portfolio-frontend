import React from 'react'
import Profile_Pic2 from '../assets/pankaj-2.jpg'
import { motion } from 'motion/react'

const About = () => {
  return (
    <>
      <section
        className=' bg-body-color w-full px-1 pt-24 lg:pt-16 sm:pb-8 sm:px-6 md:px-10 lg:px-24'
        id='about'
      >
        <div className=' relative flex flex-col justify-center items-center gap-4 p-2 text-white sm:gap-8 sm:px-10 sm:pt-4 md:flex md:flex-row md:px-2 lg:px-12 bg-body-color'>
          {/* LEFT PART */}
          <div
            className=' box-border p-0 w-full h-[100%] order-2 sm:order-2 md:order-1 sm:p-4 '
          >
            <div className=''>


              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1, ease:'easeOut' }}
                className='p-0 py-2 text-xl sm:p-2 sm:text-3xl font-semibold'>About
                <span className='text-background-secondary'> Me</span>
              </motion.h1>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration:0.5, delay: 0.2,ease:'easeOut',  }}
                className='p-0 text-2xl sm:p-2 sm:text-4xl font-semibold'>Full-Stack <span className='text-background-secondary'>Python Developer</span>
              </motion.h1>

            </div>

            <div className='p-1 sm:p-2'>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.3,ease:'easeOut', }}
                className='inline-block text-[16px] sm:text-[18px] mb-4'>
                Hii, I am Pankaj, currently pursuing my B.Tech in Electronics and Communication Engineering from the National Institute of Technology (NIT) Patna. My deep interest in software development has driven me to become a Full-Stack Python Developer specializing in the FARM stack (FastAPI, React, MongoDB).
              </motion.p>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.4,ease:'easeOut', }}
                className='inline-block text-[16px] sm:text-[18px] mb-4'>
                I am proficient in building high-performance, asynchronous backends using FastAPI and Pydantic models, seamlessly connected to dynamic and responsive frontends built with React.
              </motion.p>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.5,ease:'easeOut', }}
                className='inline-block text-[16px] sm:text-[18px] mb-4'
              >
                Furthermore, I am skilled in integrating secure authentication flows (JWT), OTP-based email verification via SendGrid, seamless media storage using Cloudinary and designing scalable NoSQL database architectures. I am passionate about writing clean code, following modern web standards, and solving problems using DSA in C++.
              </motion.p>
            </div>

          </div>

          {/* RIGHT PART */}
          <div
            className='p-1 w-full flex flex-col justify-center items-center order-1 sm:order-1 md:order-2'
          >
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2,ease:'easeOut', }}
              className='border-8 rounded-full shadow-portrait'
            >
              <img
                className='w-60 h-60 object-cover sm:w-72 sm:h-72 sm:object-cover cursor-pointer rounded-full'
                src={Profile_Pic2} alt="About-me-pic" />
            </motion.div>

          </div>
        </div>
      </section>

    </>
  )
}

export default About