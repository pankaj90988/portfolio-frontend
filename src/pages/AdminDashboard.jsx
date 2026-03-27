import React, { useState } from 'react'
import AddProject from '../components/AddProject'
import Projects from '../components/Projects'
import UserMessages from '../components/UserMessages'

const AdminDashboard = () => {
    const [getpage, setgetpage] = useState(1);
    // console.log(getpage)


    return (
        <>
            <section className='min-h-screen px-0 pt-24 pb-12 sm:px-3 md:px-8 lg:px-16 xl:px-28'>
                <h1 className='text-center mb-4 px-1 pt-3 pb-6 text-2xl sm:text-3xl font-semibold sm:px-20'>Admin <span className='text-background-secondary'>Dashboard</span>
                </h1>

                <div className='flex justify-center items-center gap-6 pb-4 border-b border-b-gray-600'>
                    <p onClick={() => setgetpage(1)} className={`p-2 px-4 border border-gray-600 rounded-full cursor-pointer ${getpage == 1 ? "bg-background-secondary" : ""}`}>Messages</p>
                    <p onClick={(e) => setgetpage(2)} className={`p-2 px-4 border border-gray-600 rounded-full cursor-pointer ${getpage == 2 ? "bg-background-secondary" : ""}`}>Add Project</p>
                </div>


                <div>
                    {
                        getpage == 1 &&
                        <div className='px-4'><UserMessages /></div>
                    }

                    {
                        getpage == 2 &&
                        <div>
                            <AddProject />
                            <Projects btn1="Edit" btn2="Delete" />
                        </div>
                    }
                </div>
            </section>

        </>
    )
}

export default AdminDashboard