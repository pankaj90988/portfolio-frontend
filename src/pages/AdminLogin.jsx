import React, { useState } from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router';
import { useData } from '../context/ContextAPI';
import Spin from '../components/Spin';
import { toast } from 'react-toastify';
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { BASE_URL } from '../api/apiConfig';

const AdminLogin = () => {

  const navigate = useNavigate();
  const [isopenEye, setisopenEye] = useState(false)
  const { isAPICalling, setisAPICalling} = useData();
  const [credential, setCredential] = useState({
    email: "",
    password: ""
  });

  const inputHandlerAdminLogin = (e) => {
    const { name, value } = e.target;

    setCredential({
      ...credential,
      [name]: value
    })
  }

  const adminLoginSubmitHandler = async (e) => {
    e.preventDefault();
    setisAPICalling(true);
    try {
      const response = await fetch(`${BASE_URL}/api/admin/auth/admin-login`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(credential)
      })

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        localStorage.removeItem('jwtToken');
        localStorage.setItem('jwtToken', data.jwt_token);
        navigate("/admin-dashboard");
      } else {
          toast.error(data.detail);
      }
    } catch (error) {
      toast.error("Please check your internet connection !")
      console.log("Something went wrong in admin login in catch", error)
    } finally {
      setCredential({
        email: "",
        password: ""
      })
      setisAPICalling(false);
    }
  }



  return (
    <>
      <section className="w-full h-[80vh] px-3 pt-20 pb-8 flex justify-center items-center relative sm:h-[86vh] sm:px-0 sm:pt-20 sm:pb-8">

        <div className='flex flex-col justify-center items-center w-full sm:w-[45%]'>
          <h1 className='p-1 pt-9 sm:pt-2 text-xl font-semibold'>Admin <span className='text-background-secondary'>Login</span></h1>
          <h3 className='p-1 pb-4 text-center'>Enter credential to access the Dashboard</h3>
          <form
            onSubmit={(e) => adminLoginSubmitHandler(e)}
            className='flex flex-col justify-center items-center gap-5 p-3 py-10 border border-gray-700 bg-gray-800 w-full h-full rounded-md sm:w-full sm:px-2 sm:py-14 lg:w-2/3 lg:px-8'
          >
            <div
              className='flex flex-col w-full p-2 sm:w-full sm:p-2 md:w-full md:px-2 lg:w-full lg:px-2 relative'
            >
              <input
                className='peer bg-transparent w-full p-2 outline-none border rounded-md border-gray-600'
                type="email"
                id='email'
                name='email'
                value={credential.email}
                onChange={inputHandlerAdminLogin}
                placeholder=' '
                autoComplete='off'
                required
              />
              <label
                className='text-background-secondary bg-gray-800 absolute left-3.5 -top-2 duration-300 peer-placeholder-shown:translate-y-6 peer-focus:-translate-y-0'
                htmlFor="email"
              >
                Enter Email
              </label>
            </div>

            <div
              className='flex flex-col w-full p-2 sm:w-full sm:p-2 md:w-full md:px-2 lg:w-full lg:px-2 relative'
            >
              <input
                className='peer bg-transparent p-2 outline-none border border-gray-600 rounded-md'
                type={`${isopenEye?"text":"password"}`}
                id='password'
                name='password'
                placeholder=' '
                value={credential.password}
                onChange={inputHandlerAdminLogin}
                autoComplete='off'
                required


              />
              <label
                className='text-background-secondary bg-gray-800 absolute left-3.5 -top-2 duration-300 peer-placeholder-shown:translate-y-6 peer-focus:-translate-y-0'
                htmlFor="password"
              >
                Enter Password
              </label>
              {
                isopenEye ? (<BsEye onClick={()=>setisopenEye(!isopenEye)}  className='absolute top-5 right-5 text-xl cursor-pointer'/>) : (<BsEyeSlash onClick={()=>setisopenEye(!isopenEye)} className='absolute top-5 right-5 text-xl cursor-pointer' />)
              }

            </div>


            <motion.button
              whileTap={{ scale: 0.9 }}
              className='py-2 px-16 rounded-full bg-background-secondary'
              type='submit'
            >
              {isAPICalling ? <Spin /> : <p>Login</p>}
            </motion.button>
          </form>

        </div>
      </section>
    </>
  )
}

export default AdminLogin