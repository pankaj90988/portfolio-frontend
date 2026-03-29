import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Profile_Pic1 from '../assets/pankaj.png'

const Home = () => {

  const typeWriterText = [
    "Python Developer",
    "React Developer",
    "FARM Stack Developer",
    "Full-Stack Developer"
  ];

  const [dynamictext, setDynamicText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(false);


  useEffect(() => {
    const typingHandler = () => {

      // extracting fullword one by one from index 0 , 1, 2 ,3
      const currentIndex = index % typeWriterText.length;
      const fullWord = typeWriterText[currentIndex];

      //when to start typing and when to start deleting
      if (isDeleting) {
        setDynamicText(fullWord.substring(0, dynamictext.length - 1));
        setTypingSpeed(50);
      } else {
        setDynamicText(fullWord.substring(0, dynamictext.length + 1));
        setTypingSpeed(180);
      }

      //when to stop typing and when to stop deleting
      if (!isDeleting && dynamictext === fullWord) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 900);
      } else if (isDeleting && dynamictext === "") {
        setIsDeleting(false);
        setIndex(index + 1);

      }

    }
    const timer = setTimeout(() => {
      typingHandler();
    }, typingSpeed);
    return () => clearTimeout(timer);

  }, [dynamictext, isDeleting, index, typingSpeed]);



  return (
    <section id='home' className='min-h-[53vh] relative px-1 flex flex-col justify-center items-center text-white pt-40 pb-4 sm:gap-8 sm:min-h-screen sm:px-6 sm:pt-48 md:flex md:flex-row md:pt-40 bg-background-primary lg:pt-24'>

      {/* LEFT PART */}

      <div className="relative w-full h-[36vh] sm:p-1 flex justify-center items-center">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2,ease:'easeOut', }}
          whileHover={{ scale: 1.05 }}
          className="relative h-[16rem] w-[16rem] sm:h-[20rem] sm:w-[20rem] bg-background-secondary border-8 rounded-full cursor-pointer shadow-portrait"
        >

          <img
            className='absolute top-[-7rem] left-[0rem] h-[22rem] w-[16rem] rounded-full object-cover border-b sm:h-[26rem] sm:w-[19rem] sm:left-[0rem]' src={Profile_Pic1} alt="Profile_Pic" />

        </motion.div>

      </div>


      {/* RIGHT PART */}
      <div className="w-full box-border p-1 sm:p-4">
        <div className='p-1'>
          <motion.h3
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.2,ease:'easeOut', }}
            className='text-[18px] pt-3 font-semibold'
          >
            Hello, It's me
          </motion.h3>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.4,ease:'easeOut', }}
            className='text-[3rem] font-semibold'
          >
            Pankaj
          </motion.h1>
          <div>
            <motion.h4
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.6,ease:'easeOut', }}
              className='text-2xl sm:text-3xl py-1'
            >
              I'm a <span className='text-background-secondary font-medium'>{dynamictext}</span><span className='text-background-secondary font-semibold animate-pulse'>|</span>
            </motion.h4>
          </div>
        </div>

        <div className='pb-1'>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.8,ease:'easeOut', }}
            className='text-[16px] sm:text-[18px] sm:text-left p-1 tracking-wide'
          >
            A passionate Full-Stack Developer specializing in Python, FastAPI, and React. I build secure, high-performance web applications and seamless database architectures.
          </motion.p>
        </div>

        <div className='py-4 flex justify-center sm:flex sm:justify-start gap-4'
        >
          <motion.a
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2,ease:'easeOut', }}
            href='mailto:pankajjnv2005@gmail.com'
            className='p-2 px-4 bg-background-secondary border border-transparent hover:border-white rounded-full'
          >
            CONTACT ME
          </motion.a>
          <motion.a
            href='https://drive.google.com/file/d/1Ea2oQlPIE6Go9iW-bFp0TS4mDTrG_PPc/view?usp=sharing'
            target='_blank'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4,ease:'easeOut', }}
            className='p-2 px-4 bg-background-secondary border border-transparent hover:border-white rounded-full'
          >
            DOWNLOAD CV
          </motion.a>
        </div>
      </div>

    </section>
  )
}

export default Home