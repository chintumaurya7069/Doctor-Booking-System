import React, { useContext, useState } from 'react'
import Login from './pages/login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import { Route, Routes } from 'react-router-dom';
import Dashboad from './pages/Admin/Dashboad'
import AllApoitment from './pages/Admin/AllApoitment'
import DoctorsList from './pages/Admin/DoctorsList'
import AddDoctors from './pages/Admin/AddDoctors'



const App = () => {

const {aToken} = useContext(AdminContext)
  
  return aToken ? (
    <div className='bg-[#F8F(FD'>
        <ToastContainer />
        <Navbar />
        <div className='flex items-start'>
          <SideBar />
          <Routes>
            <Route path='/' element={<></>}/>
            <Route path='/dashboad' element={<Dashboad />}/>
            <Route path='/all-apoitment' element={<AllApoitment/>}/>
            <Route path='/doctors-list' element={<DoctorsList/>}/>
            <Route path='/add-doctor' element={<AddDoctors/>}/>
          </Routes>
        </div>
    </div>
  ) : (
    <>
    <Login />
    <ToastContainer />
    </>
  )
}

export default App