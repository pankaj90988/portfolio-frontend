import React from 'react'
import { motion } from 'motion/react'
import { techskillsData } from '../assets/assets'
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { FaPython } from 'react-icons/fa'
import { SiFastapi } from 'react-icons/si'
import { SiPydantic } from "react-icons/si";
import { SiMongodb } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiCloudinary } from 'react-icons/si'
import { SiOpencv } from 'react-icons/si'
import { SiPandas } from 'react-icons/si'
import { SiNumpy } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiPostman } from "react-icons/si";
import Languages from '../components/Languages';


const TechSkills = () => {

    // creating a object to get the react icon b/c in skill react-icon is in string formate
    const mapIcon = {
        FaJsSquare: FaJsSquare,
        FaReact: FaReact,
        SiTailwindcss: SiTailwindcss,
        FaPython: FaPython,
        SiFastapi: SiFastapi,
        SiPydantic: SiPydantic,
        SiMongodb: SiMongodb,
        SiPostgresql: SiPostgresql,
        SiCloudinary: SiCloudinary,
        SiOpencv: SiOpencv,
        SiPandas: SiPandas,
        SiNumpy: SiNumpy,
        FaGitAlt: FaGitAlt,
        FaGithub: FaGithub,
        SiPostman: SiPostman,
    }

    // each techskill different styling
    const cssStyleMap={
        FaJsSquare: 'text-3xl text-yellow-400 hover:scale-110 transition-transform duration-300 ',
        FaReact: 'text-3xl text-cyan-400  hover:scale-110 transition-transform duration-300 ',
        SiTailwindcss: 'text-3xl text-cyan-400  hover:scale-110 transition-transform duration-300 ',
        FaPython: 'text-3xl text-background-secondary hover:scale-110 transition-transform duration-300 ',
        SiFastapi: 'text-3xl bg-white text-background-secondary rounded-full text-background-secondary hover:scale-110 transition-transform duration-300 ',
        SiPydantic: 'text-3xl text-pink-500 hover:scale-110 transition-transform duration-300 ',
        SiMongodb: 'text-3xl text-green-500 hover:scale-110 transition-transform duration-300 ',
        SiPostgresql: 'text-3xl bg-sky-700 text-white hover:scale-110 transition-transform duration-300 ',
        SiCloudinary: 'text-3xl bg-blue-500 text-white rounded-full hover:scale-110 transition-transform duration-300 ',
        SiOpencv: 'text-3xl text-background-secondary hover:scale-110 transition-transform duration-300 ',
        SiPandas: 'text-3xl text-amber-900 hover:scale-110 transition-transform duration-300 ',
        SiNumpy: 'text-3xl text-cyan-600 hover:scale-110 transition-transform duration-300 ',
        FaGitAlt: 'text-3xl text-orange-600 hover:scale-110 transition-transform duration-300 ',
        FaGithub: 'text-3xl text-slate-200 bg-black rounded-full hover:scale-110 transition-transform duration-300 ',
        SiPostman: 'text-3xl text-orange-600 bg-white rounded-full hover:scale-110 transition-transform duration-300 ',
    }




    return (
        <>
            <section id='skills' className='px-4 py-20 scroll-p-5 sm:px-5 md:px-10 lg:px-16 border-t 2xl:px-40 border-gray-700'>
                <h1 className='text-center px-1 sm:px-20 pt-3 pb-6 text-3xl font-semibold'>Tech <span className='text-background-secondary'>Stack</span></h1>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6'>


                    {
                        techskillsData.map((skill) => {
                            
                            const Icon = mapIcon[skill.logo]
                            const cssStyle=cssStyleMap[skill.logo]
                            return (
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.2, delay: 0.1 * skill.id }}
                                    viewport={{ once: false, amount: 0.10 }}
                                    key={skill.id}
                                    className="bg-gray-800 border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center backdrop-blur-md hover:bg-[#1e293b]/80 hover:border-[#20b2a6]/60 hover:shadow-[0_0_20px_rgba(32,178,166,0.25)] transition-all duration-300 transform hover:-translate-y-2 cursor-pointer w-full h-full"
                                >
                                    
                                    <div className="bg-slate-800/60 p-4 rounded-full mb-5 border border-slate-600 hover:border-[#20b2a6]/50 transition-all duration-300">

                                        {
                                            Icon ? (
                                                <Icon className={cssStyle} />
                                            ) : (
                                                <div className="w-10 h-10 bg-slate-700 rounded-full" />
                                            )
                                        }


                                    </div>

                                  
                                    <h3 className="text-xl font-semibold text-white mb-2 tracking-wide">
                                        {skill.name}
                                    </h3>

                                 
                                    {
                                        skill.category && (
                                            <span className="inline-block bg-slate-800 text-background-secondary text-xs font-medium px-3 py-1 rounded-full mb-3 border border-slate-700 group-hover:bg-[#20b2a6]/10 transition-colors">
                                                {skill.category}
                                            </span>
                                        )
                                    }

                                   
                                    <p className="text-sm text-slate-400 leading-relaxed mt-auto group-hover:text-slate-300 transition-colors">
                                        {skill.description}
                                    </p>
                                </motion.div>

                            )
                        })
                    }

                </div>
                <Languages/>
            </section>
        </>

    )
}

export default TechSkills
