import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const {aToken,setAToken} = useContext(AdminContext)

    const navigate = useNavigate()
const Logout = ()=>{
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
}

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 bg-white pt-2'>
        <div className='flex items-center gap-2 text-xs'>
        <img className='cursor-pointer w-36 sm:w-40' src={assets.admin_logo} alt="" />
        <p className='border border-gray-500 px-2.5 py-0.5 rounded-full'>{aToken?'Admin':'Doctor'}</p>
    </div>
    <button onClick={Logout} className='bg-primary text-white px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar