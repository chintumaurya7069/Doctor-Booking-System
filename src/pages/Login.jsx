import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
    const [state, setState] = useState('Admin')
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')



    const { setAToken, backendUrl } = useContext(AdminContext)

    const onSUbmitHandler = async (e) => {
        e.preventDefault()
        try {

            if (state === 'Admin') {
                const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })

                if (data.success) {
                    localStorage.setItem('aToken', data.token)
                    setAToken(data.token);

                }
                else {
                    toast.error(data.message)
                }
            }
            else {


            }
        } catch (error) {

        }
    }


    return (
        <form onSubmit={onSUbmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
                <p className='text-2xl font-semibold'>{state}<span> Login</span></p>

                <div className='w-full'>
                    <p>Email</p>
                    <input className='border border-zinc-300 rounder w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                </div>
                <div className='w-full'>
                    <p>Password</p>
                    <input className='border border-zinc-300 rounder w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                </div>
                <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Login</button>
                {
                    state === "Admin"
                        ? <p>Doctor Login ?<span onClick={() => setState('Doctor')} className='text-primary underline cursor-pointer'>Click Here</span></p>
                        : <p>Admin Login ? <span onClick={() => setState('Admin')} className='text-primary underline cursor-pointer'>Click here</span> </p>
                }
            </div>
        </form>
    )
}

export default Login