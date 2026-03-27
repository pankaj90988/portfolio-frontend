import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './pages/About'
import Projects from './components/Projects'
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import ProtectAdminRoute from './components/ProtectAdminRoute'
import WelcomePage from './pages/WelcomePage'
import TechSkills from './pages/TechSkills'
import PageNotFound from './components/PageNotFound'
import EducationTimeline from './components/EducationTimeline'

function App() {

  const [isWelcome, setisWelcomes] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setisWelcomes(false)
    }, 3000)
    return () => clearTimeout(timeout);
  }, [isWelcome]);

  if (isWelcome) {
    return (
      <>
        <BrowserRouter>
          <WelcomePage />
        </BrowserRouter>
      </>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <section>
              <Home />
              <About />
              <EducationTimeline/>
              <Projects />
              <TechSkills />
              <Contact />
            </section>
          } />

          <Route path='/admin-login-form' element={<AdminLogin />} />

          <Route path='/admin-dashboard' element={
            <ProtectAdminRoute >
              <AdminDashboard />
            </ProtectAdminRoute>
          } />

          <Route path='*' element={
            <PageNotFound/>
          } />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
