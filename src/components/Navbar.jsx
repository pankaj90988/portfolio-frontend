import React, { useState } from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link, NavLink, replace, useLocation, useNavigate } from 'react-router'
import { navLink } from '../assets/assets';
import { motion } from 'motion/react';
import { useData } from '../context/ContextAPI';
import { toast } from 'react-toastify';

const Navbar = () => {

    const name = "<PANKAJ/>"
    const location = useLocation();
    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

    const navigate = useNavigate();
    const { logOutAdmin } = useData();

    const logoutButtonHandler = () => {
        logOutAdmin();
        toast.success("Logout successfully");
        navigate("/");
    }

    return (
        <>
            <header className='fixed top-0 left-0 right-0 py-2 bg-background-primary z-50'>
                <nav className="mx-auto overflow-x-hidden flex justify-between sm:px-6">

                    <div className="p-3">
                        <h1 className='text-background-secondary text-[18px] font-bold '>{name}</h1>
                    </div>

                    {/* MENU FOR DESKTOP SCREEN */}
                    {!(location.pathname === '/admin-login-form' || location.pathname === '/admin-dashboard') &&
                        (
                            <div className='hidden md:flex p-3 relative'>
                                <div className='relative flex justify-between gap-10 text-white pr-8'
                                >
                                    {
                                        navLink.map((nav, index) => {

                                            if (nav.label === "AdminPanel") {
                                                return (
                                                    <Link to={nav.href} key={index}>
                                                        <p className={`relative inline-block text-[18px] ${location.hash === nav.href ? "text-background-secondary" : "text-white"} border-b-transparent active:border-b-background-secondary hover:w-full
                                                           after:content-[''] 
                                                           after:absolute after:bottom-0 after:left-0
                                                           after:h-[2px]
                                                           after:w-0
                                                           after:bg-background-secondary
                                                           after:transition-all
                                                           after:duration-300
                                                           after:ease-in-out
                                                           hover:after:w-full`}>
                                                            {nav.label}
                                                        </p>
                                                    </Link>
                                                )
                                            }


                                            return (
                                                <motion.a
                                                    initial={{ y: -20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ duration: 0.3, delay: index * 0.15, ease: 'easeInOut' }}
                                                    className={`relative inline-block text-[18px] ${location.hash === nav.href ? "text-background-secondary" : "text-white"} border-b-transparent active:border-b-background-secondary hover:w-full
                                                           after:content-[''] 
                                                           after:absolute after:bottom-0 after:left-0
                                                           after:h-[2px]
                                                           after:w-0
                                                           after:bg-background-secondary
                                                           after:transition-all
                                                           after:duration-300
                                                           after:ease-in-out
                                                           hover:after:w-full`}
                                                    key={index} href={nav.href}>
                                                    {nav.label}
                                                </motion.a>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        )

                    }


                    {/* MENU FOR MOBILE SCREEN */}
                    <>
                        {isMobileMenuOpen &&
                            <div
                                onClick={() => setisMobileMenuOpen(!isMobileMenuOpen)}
                                className=' md:hidden'>
                                <div className='fixed inset-0 h-[100%] w-full flex flex-col gap-6 p-5 top-[4.3rem] bg-[#1f2a2d30] backdrop-blur-lg'>
                                    {
                                        navLink.map((nav, index) => {

                                            if (nav.label === "AdminPanel") {
                                                return (
                                                    <Link to={nav.href} key={index}>
                                                        <p className='block text-[18px] p-2 rounded-lg bg-background-secondary text-white'>{nav.label}</p>
                                                    </Link>
                                                )
                                            }

                                            return (
                                                <motion.a
                                                    onClick={() => setisMobileMenuOpen(!isMobileMenuOpen)}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ duration: 0.3, delay: index * 0.15, ease: 'easeInOut' }}
                                                    className='block text-[18px] p-2 rounded-lg bg-background-secondary text-white'
                                                    key={index}
                                                    href={nav.href}>
                                                    {nav.label}
                                                </motion.a>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }
                    </>

                    {/* THREE LINE MENU BUTTON */}

                    <div className='p-3 md:hidden'>
                        {
                            isMobileMenuOpen ?
                                (
                                    <>
                                        {
                                            !(location.pathname === '/admin-login-form' || location.pathname === '/admin-dashboard') &&
                                            <RiCloseLargeFill onClick={() => setisMobileMenuOpen(!isMobileMenuOpen)} className='text-white text-3xl' />

                                        }
                                    </>
                                ) :
                                (
                                    <>
                                        {
                                            !(location.pathname === '/admin-login-form' || location.pathname === '/admin-dashboard') &&

                                            <RiMenu3Line onClick={() => setisMobileMenuOpen(!isMobileMenuOpen)} className='text-white text-3xl' />

                                        }
                                    </>

                                )


                        }
                    </div>

                    {/* LOGOUT BUTTON WHEN ON ADMIN-DASHBOARD */}
                    {
                        (location.pathname === '/admin-dashboard') && (
                            <div className='text-white p-3 px-5 sm:px-8 flex justify-center items-center'>
                                <button
                                    onClick={() => logoutButtonHandler()}
                                    className='bg-red-500 rounded-full py-2 px-4'>
                                    Logout
                                </button>

                            </div>
                        )
                    }

                    {/* GO BACK BUTTON WHEN ON LOGIN ROUTE */}
                    {
                        (location.pathname === '/admin-login-form') && (
                            <div className='text-white p-3 px-5 sm:px-8 flex justify-center items-center'>
                                <Link to='/'
                                    className='bg-background-secondary rounded-full py-2 px-4'>
                                    Go Back
                                </Link>

                            </div>
                        )
                    }

                </nav>
            </header >
        </>
    )
}

export default Navbar