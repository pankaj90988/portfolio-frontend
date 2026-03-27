import React, { useEffect, useState } from 'react'
import linkedin from '../assets/social-media-icon/linkedin.png'
import github from '../assets/social-media-icon/github.png'
import { Link, useLocation } from 'react-router';

const Footer = () => {
  const current_year = new Date().getFullYear();
  const [isadmin, setisadmin] = useState(true);
  const location = useLocation();



  return (
    <>
      <div className='bg-footer-color p-2 w-full sm:px-20 sm:py-3'>


        <div className='w-full flex flex-col items-center justify-center gap-4 pt-2'>

          <div className="text-white flex flex-row justify-center gap-4 text-center sm:gap-6">
            <a href="https://www.linkedin.com/in/pankaj-kumar-826153261" title='Linkedin' target='_blank'><img className='w-11 h-11 rounded-full border border-gray-700' src={linkedin} alt="Linkedin" /></a>
              <h1 className='p-0 font-semibold text-[18px] text-background-secondary text-center underline'>
              {
                (location.pathname === '/admin-login-form' || location.pathname === '/admin-dashboard') ?
                  (<Link to='/'>Portfolio</Link>) :
                  (<Link to='/admin-login-form'>Admin Login</Link>)
              }
            </h1>
            <a href="https://github.com/pankaj90988" title='Github' target='_blank'><img className='w-11 h-11 rounded-full border border-gray-700' src={github} alt="Github" /></a>
          </div>
        
        </div>
        <div className="text-center text-white py-3">
          <p>&copy; {current_year} | Pankaj's <span className='text-background-secondary'>Portfolio </span>| All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer