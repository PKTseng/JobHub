import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer position="top-center" autoClose={1500} />
    </>
  )
}

export default MainLayout
