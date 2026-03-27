import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [isAPICalling, setisAPICalling] = useState(false);
  const [jwtToken,setjwtToken]=useState(localStorage.getItem('jwtToken'));

  const [confirmation,setconfirmation]=useState(null);
  const [showDeletePopUp,setshowDeletePopUp]=useState(false);
  const [isDeleting,setIsDeleting]=useState(false);
  const [isAddingProject, setIsAddingProject] = useState(false);

  const [allProjects, setAllProjects] = useState(null);
  const [projectInputData, setprojectInputData] = useState({
    title: "",
    description: "",
    techstack: "",
    githubUrl: "",
    liveLink: "",
  });

  const logOutAdmin=()=>{
    localStorage.removeItem('jwtToken');
  }

  return (
    <>
      <DataContext.Provider value={{ jwtToken,setjwtToken,allProjects, setAllProjects, projectInputData, setprojectInputData, isAPICalling, setisAPICalling,confirmation,setconfirmation,showDeletePopUp,setshowDeletePopUp,isDeleting,setIsDeleting,isAddingProject, setIsAddingProject,logOutAdmin }}>
        {children}
      </DataContext.Provider>
    </>
  )
}

export const useData = () => {
  return useContext(DataContext);
}