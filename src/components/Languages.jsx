import React from 'react';
import { languagesData } from '../assets/assets';

const Languages = () => {
    return (
        <section className="pb-0 mt-6 pt-4 px-1 sm:px-6 lg:px-8">
            
            <h1 className='text-center px-1 pt-3 pb-10 sm:px-20 text-2xl md:text-4xl font-semibold'>
                Programming <span className='text-background-secondary'>Languages</span>
            </h1>

            <div className="flex flex-wrap justify-center items-center  mx-auto gap-4 md:gap-5">
                {
                    languagesData.map((lang, index) => {
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-3 bg-[#0d1323]/40 px-5 py-3 md:px-6 md:py-3
                                         rounded-full border border-slate-700 shadow-sm
                                       hover:border-background-secondary
                                         hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] 
                                         hover:-translate-y-1 hover:scale-100 transition-all duration-300 cursor-default"
                            >
                                
                                <img
                                    src={lang.icon}
                                    alt={lang.name}
                                    className="w-7 h-7 md:w-8 md:h-8 object-contain group-hover:scale-10 transition-transform duration-300"
                                />

                                <span className="text-sm md:text-base font-medium text-slate-300">
                                    {lang.name}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Languages;