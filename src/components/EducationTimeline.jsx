import { motion } from 'motion/react';
import React from 'react';

const EducationTimeline = () => {
    const educationData = [
        {
            degree: "B.Tech ECE",
            institution: "National Institute of Technology, Patna",
            year: "Ongoing"
        },
        {
            degree: "JEE Preparation",
            institution: "CSRL Concor Super30 Varanasi",
            year: "2023"
        },
        {
            degree: "Senior Secondary (Class XII)",
            institution: "Jawahar Navodaya Vidyalaya, Dabhasemar, Ayodhya",
            year: "2022"
        },
        {
            degree: "Secondary (Class X)",
            institution: "Jawahar Navodaya Vidyalaya, Dabhasemar, Ayodhya",
            year: "2020"
        },
    ];

    return (
        <div className='w-full p-4 flex justify-center items-center overflow-x-hidden'>
            <motion.div 
            initial={{x:250,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.15 }}
            className="p-4 md:p-4  bg-gray-800 rounded-3xl border border-slate-700 shadow-xl">
                <h3 className="text-2xl font-semibold text-white mb-6 pl-2">
                    Education Journey
                </h3>

                <div className="relative">

                    <div className="absolute left-[12px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-background-secondary to-cyan-400 rounded-full"></div>

                    {

                        educationData.map((item, index) => {
                            return (
                                <div key={index} className="flex items-start mb-4 last:mb-0 relative group">

                                    <div className="absolute left-0 top-1 w-6 h-6 flex items-center justify-center">
                                        <div className="w-6 h-6 bg-[#0f172a] border-4 border-slate-700 rounded-full flex items-center justify-center group-hover:border-cyan-400 transition-all year-300">
                                            <div className="w-2 h-2 bg-background-secondary rounded-full shadow-[0_0_15px_rgba(34,211,238,0.7)] group-hover:scale-110 transition-all year-300"></div>
                                        </div>
                                    </div>

                                    <div className="pl-8 pt-0.5">
                                        <h4 className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors year-300">
                                            {item.degree}
                                        </h4>
                                        <p className="text-slate-400 text-sm mt-1">
                                            {item.institution}
                                        </p>
                                        <p className="text-xs text-cyan-500/80 mt-1 font-mono">
                                            {item.year}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </motion.div>
        </div>
    );
};

export default EducationTimeline;