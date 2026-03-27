import React, { useState } from 'react'
import { motion, time } from 'motion/react'
import { toast } from 'react-toastify';
import Spin from '../components/Spin';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { BASE_URL } from '../api/apiConfig';


const Contact = () => {

  const [isloading, setIsloading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: ""
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const contactformHandler = async (e) => {
    e.preventDefault();
    setIsloading(true);

    try {
      const response = await fetch(`${BASE_URL}/api/contact-form/save-message`, {
        method: 'POST',
        headers: {
          'content-type': 'Application/json'
        },
        body: JSON.stringify(user)
      })

      console.log(response);
      const data = await response.json();
      console.log("contact saning res: ", data);
      if (response.ok) {
        toast.success(data.message);
        setUser({
          name: "",
          email: "",
          message: ""
        })
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error("Something went wrong in contact form. Please check your internet connection!")
      console.log("Something went wrong in contact form: ", error);
    } finally {
      setIsloading(false);
    }

  }




  return (
    <>
      <section id='contact' className='relative px-1 pt-20 pb-6 w-full text-white border-t border-gray-700'>
        <h1 className='p-3 text-center text-3xl font-semibold'>Contact <span className='text-background-secondary'>Me</span></h1>

        <div className='flex justify-center px-2 sm:p-2'>
          <div className='max-w-lg p-4 border border-slate-700 rounded-xl bg-gray-800'>
            <h2 className=' text-2xl pb-3 font-semibold font-serif text-background-secondary  text-center'>Let's Connect</h2>
            <p className='sm:text-[16px] text-center text-gray-400'>I am currently looking for new opportunities. Whether you have a question, a potential project, or just want to say hi, my inbox is always open. Feel free to reach out, and I'll get back to you as soon as I can!.</p>
          </div>

        </div>



        <div className="md:flex md:justify-evenly md:gap:8 md:py-3 lg:px-20">
          {/* LEFT PART */}
          <div
            className="p-2 sm:p-0 sm:pt-5 md:p-5 flex flex-col gap-6 ">
            <h1 className='px-1 mt-4 sm:mt-1'>Contact Info</h1>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: 'easeInOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className='p-4 py-3 bg-gray-800 flex-grow border border-gray-700 rounded-md hover:border-background-secondary hover:shadow-[0_8px_24px_rgba(32,178,166,0.2)] transition-transform duration-300'
            >
              <div className='flex items-center gap-1'>
                <MdEmail className='text-2xl text-background-secondary' />
                <p
                  className='p-1'
                >Email
                </p>
              </div>

              <p
                className='text-gray-400 p-1'>pankajjnv200@gmail.com
              </p>
            </motion.div>


            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className='p-4 py-3 bg-gray-800 flex-grow border border-gray-700 rounded-md hover:border-background-secondary hover:shadow-[0_8px_24px_rgba(32,178,166,0.2)] transition-transform duration-300'
            >
              <div className='flex items-center gap-1'>
                <FaPhoneAlt className='text-xl text-background-secondary' />
                <p
                  className='p-1'
                >Phone</p>
              </div>

              <p
                className='text-gray-400 p-1'>+91 895322 4298</p>
            </motion.div>


            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className='p-4 py-3 bg-gray-800 flex-grow border border-gray-700 rounded-md hover:border-background-secondary hover:shadow-[0_8px_24px_rgba(32,178,166,0.2)] transition-transform duration-300'
            >

              <div className='flex items-center gap-1'>
                <FaLocationDot className='text-2xl text-background-secondary' />
                <p
                  className='p-1'
                >Location</p>
              </div>

              <p
                className='text-gray-400 p-1'>Milkipur Amaniganj Ayodhya, Uttar Pradesh</p>
            </motion.div>

          </div>

          {/* RIGHT PART CONTACT FORM*/}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
            className="p-2 py-6 sm:p-0 sm:pt-6 md:p-6  ">
            <form
              onSubmit={(e) => contactformHandler(e)}
              className='flex flex-col justify-between gap-6 p-4 px-5 sm:px-8 py-12 bg-gray-800 border border-gray-700 rounded-lg hover:border-background-secondary transition-transform duration-300 hover:shadow-[0_8px_24px_rgba(32,178,166,0.2)]'>

              <div className='flex flex-col relative'>

                <input
                  className='peer bg-transparent p-2 outline-none border border-gray-600 rounded-md focus:border-background-secondary '
                  id='name'
                  name='name'
                  type="text"
                  placeholder=' '
                  onChange={inputHandler}
                  value={user.name}
                  autoComplete='off'
                  required
                />
                <label
                  className='absolute left-2 bg-gray-800 duration-300 transform -top-4 peer-placeholder-shown:translate-y-6 peer-focus:-translate-y-0'
                  htmlFor="name">
                  Name
                </label>
              </div>

              <div className='flex flex-col relative'>

                <input
                  className='peer bg-transparent p-2 outline-none border border-gray-600 rounded-md focus:border-background-secondary'
                  id='email'
                  name='email'
                  type="email"
                  placeholder=' '
                  onChange={inputHandler}
                  value={user.email}
                  autoComplete='off'
                  required
                />
                <label
                  className='absolute left-2 bg-gray-800 duration-300 transform -top-4 peer-placeholder-shown:translate-y-6 peer-focus:-translate-y-0'
                  htmlFor="email">
                  Email
                </label>
              </div>

              <div className='flex flex-col relative'>

                <textarea
                  className='peer bg-transparent placeholder-transparent p-2 outline-none border border-gray-600 rounded-md focus:border-background-secondary resize-none overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] '
                  name="message"
                  id="message"
                  placeholder=' '
                  onChange={inputHandler}
                  value={user.message}
                  autoComplete='off'
                  maxLength={200}
                  required
                  rows={4}
                  cols={40}
                >
                </textarea>
                <label
                  className='absolute left-2 bg-gray-800 duration-300 transform -top-4 peer-placeholder-shown:translate-y-6 peer-focus:-translate-y-0'
                  htmlFor="message">
                  Message
                </label>
              </div>

              <motion.button
                whileTap={{ scale: 0.8 }}
                className='p-2 rounded-full bg-background-secondary flex justify-center'
                type='submit'
              >
                {isloading ? <Spin /> : <p>Send Message</p>}
              </motion.button>

            </form>
          </motion.div>
        </div>
        <div
          className='border border-gray-700 absolute right-10 bottom-4 rounded-full p-2 cursor-pointer animate-pulse
         hover:after:content-["ScrollUp"] 
         after:h-[2px]
         after:absolute after:bottom-0 after:-left-2
         after:text-background-secondary
         after:duration-300
         after:transition-all
         after:ease-in-out'
        >
          <a href="#home"><FaArrowUp className='text-2xl text-background-secondary' /></a>
        </div>
      </section>
    </>
  )
}

export default Contact