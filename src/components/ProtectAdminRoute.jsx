import React, { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode";
import { Navigate, useNavigate } from 'react-router';
import { toast } from 'react-toastify'
import { useData } from '../context/ContextAPI';
import Spin from './Spin';

const ProtectAdminRoute = ({ children }) => {

   const { logOutAdmin } = useData();
   const jwtToken = localStorage.getItem('jwtToken');
   const navigate = useNavigate();
   const [isAuthorize, setIsAuthorize] = useState(null);



   useEffect(() => {
      try {
         if (!jwtToken) {
            toast.error("401! Authentication required for Admin Panel");
            setIsAuthorize(false);
            return;
         }

         const payload = jwtDecode(jwtToken);
         console.log("decode: ", payload);

         if (payload.role != 'admin') {
            toast.error("Unauthorized access! You are not admin");
            logOutAdmin();
            setIsAuthorize(false);
            return;
         }
         setIsAuthorize(true);
      } catch (error) {
         console.log("errrorin token: ", error);
         toast.error("Invalid token");
         logOutAdmin();
         navigate("/", { replace: true })
      }
   }, []);

   if (isAuthorize === null) {
      return (
         <>
            <div className='absolute inset-0 bg-black/20 backdrop-blur-md'>
               <Spin w="10" />
            </div>
         </>
      )
   }

   if (isAuthorize === false) {
      return <Navigate to="/" replace />
   }
   // if token is valid then return child that is Admindashboard

   return children
}

export default ProtectAdminRoute