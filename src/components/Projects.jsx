import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { useData } from '../context/ContextAPI'
import { toast } from 'react-toastify';
import Spin from './Spin';
import { BASE_URL } from '../api/apiConfig';
import DeleteConfirmationPopUp from './DeleteConfirmationPopUp';

const Projects = ({ btn1, btn2 }) => {

  const { allProjects, setAllProjects, setprojectInputData, isAPICalling, setisAPICalling, confirmation, setconfirmation, showDeletePopUp, setshowDeletePopUp,isDeleting,setIsDeleting,isAddingProject } = useData();
  const [deleteProjectId, setdeleteProjectId] = useState(null);

  const getAllProjects = async () => {
    setisAPICalling(true);
    try {
      const response = await fetch(`${BASE_URL}/api/projects/get-all-projects`, {
        method: "GET"
      });
    
      const data = await response.json();
      if (response.ok) {
        setAllProjects(data.data);
      } else {
        toast.error(data.detail)
      }
    } catch (error) {
      console.log("Something went wrong during getting all projects", error);
    } finally {
      setisAPICalling(false);
    }
  }


  useEffect(() => {
    getAllProjects();
  }, [isDeleting,isAddingProject]);


  // Delete Project Id Handler
  const deleteProjectIdHandler = (del_project_id) => {
    setshowDeletePopUp(true);
    setdeleteProjectId(del_project_id);
  }

  const deleteConfirmationProjectMainHandler = async () => {
    console.log("hello delete", deleteProjectId)
    setIsDeleting(true);
    try {

      const response = await fetch(`${BASE_URL}/api/admin/delete-project/${deleteProjectId}`, {
        method: "DELETE"
      });

      const data = await response.json();
      if (response.ok) {
        const updateData = allProjects.filter((project) => project.id != deleteProjectId)
        setAllProjects(updateData);
        toast.success("Project deleted succesfully");
      } else {
        toast.error(data.detail);
      }

    } catch (error) {
      toast.error("Something went wrong during project deleteion");
      console.log("Error occured during API Call:", error)
    } finally {
      setshowDeletePopUp(false);
      setdeleteProjectId(null);
      setconfirmation(null);
      setIsDeleting(false);
      console.log("main delete: ", deleteProjectId)
    }
  }

  const cancelConfirmationMainHandler = () => {
    console.log("main cancel: ", deleteProjectId)
    setshowDeletePopUp(false);
    setdeleteProjectId(null);
    setconfirmation(null);
    console.log("main cancel 2: ", deleteProjectId)
  }

  useEffect(() => {
    if (confirmation === "Yes") {
      deleteConfirmationProjectMainHandler();
    }
    if (confirmation === "Cancel") {
      cancelConfirmationMainHandler();
    }
  }, [confirmation]);




  // Edit Projects
  const editProjectDetailsHandler = (edit_project_id) => {
    console.log("edit : ", edit_project_id)
    try {
      if (edit_project_id) {
        allProjects.map((each_project) => {

          if (each_project._id == edit_project_id) {
            console.log("tecj: ", typeof (each_project.techstack.join(",")))
            setprojectInputData({
              title: each_project.title,
              description: each_project.description,
              techstack: each_project.techstack.join(","),
              githubUrl: each_project.githubUrl,
              liveLink: each_project.liveLink,
            });
            console.log(each_project.techstack)
            return;
          }

        })
      } else {
        toast.info("You can't edit because we could not find item id!")
        return;
      }
    } catch (error) {
      console.log("Some thing went wrong in edit", error);
    }
  }



  if (isAPICalling) {
    return (
      <section id='projects' className='px-2 sm:px-5 md:px-10 py-20 lg:px-20 xl:px-32 border-t border-t-gray-700'>
        <h1 className='text-center px-16 pt-3 pb-6 text-3xl font-semibold'>My <span className='text-background-secondary'>Projects</span></h1>
        <div className='flex justify-center items-center mt-10'>
          <Spin w="10" />
        </div>
      </section>
    )
  }

  return (
    <>
      <section id='projects' className='px-4 sm:px-5 md:px-10 py-20 lg:px-20 xl:px-32 border-t border-t-gray-700'>
        <h1 className='text-center px-1 sm:px-16 pt-3 pb-6 text-3xl font-semibold'>My <span className='text-background-secondary'>Projects</span></h1>
        <div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {
            allProjects && allProjects.length > 0 ? (
              allProjects.map((project, index) => {
                return (

                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 * index }}
                    viewport={{ once: false, amount: 0.25 }}
                    key={project._id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-gray-700 cursor-pointer hover:shadow-[0_8px_24px_rgba(32,178,166,0.2)]">

                  
                    <div className="w-full h-48 overflow-hidden bg-gray-900 border-b border-gray-700">
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                      />
                    </div>

                  
                    <div className="p-5 flex flex-col flex-grow">

                      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-[8]">
                        {project.description}
                      </p>

                      
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.techstack.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gray-900 text-background-secondary text-xs font-medium px-2.5 py-1 rounded-full border border-[#20b2a6]/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 mt-auto">

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          GitHub
                        </a>

                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center bg-background-secondary hover:bg-[#188c83] text-white py-2 rounded-lg text-sm font-bold shadow-md shadow-[#20b2a6]/20 transition-all"
                          >
                            Livelink
                          </a>
                        )}
                      </div>

                      {
                        (btn1 && btn2) &&
                        <div className="flex gap-3 mt-4">

                          {/* EDIT BUTTON */}
                          <button
                            onClick={() => editProjectDetailsHandler(project._id)}
                            className="flex-1 text-center bg-green-500/10 hover:bg-green-500/20 text-green-300-500 border border-green-500/30 py-2 rounded-lg text-sm font-semibold transition-colors"
                          >
                            Edit
                          </button>

                          {/* DELETE BUTTON*/}

                          <button
                            onClick={() => deleteProjectIdHandler(project._id)}
                            className="flex-1 text-center bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 py-2 rounded-lg text-sm font-semibold transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      }

                    </div>
                  </motion.div>

                )

              })
            ) :
              (
                <div className='flex justify-center flex-col items-center'>
                  <p className='text-center'>No projects details found...</p>
                  <p className='text-center text-red-500'>Please check your internet connection...</p>
                </div>
              )
          }

        </div>
        {
          (showDeletePopUp) &&
          <DeleteConfirmationPopUp message="Project" />
        }
      </section>

    </>

  )
}

export default Projects
