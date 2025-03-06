import React from 'react'
import {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { loginUser } from '../features/auth/AuthSlice'
import { toast } from 'react-toastify'


const Login = () => {
    const {user, isLoading, isSuccess, isError, message} = useSelector(state => state.auth)

    const {theme} = useSelector(state => state.theme)

    const navigate = useNavigate()
    
    const dispatch = useDispatch();
    
    
    const [formData, setFormData] = useState({
        email : "",
        password : "",
    })
    
    const {email, password} = formData
    
    const  handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        })
    }
    
    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData))
    toast('Login Successfully', {
        position : "bottom-center",
    })
    }
    
    
    useEffect(()=> {
        if(user){
            navigate('/')
        }
    
        toast.error(message, {
            position : "bottom-center"
        })
    
    
    },[user, isError, message])
    
    
    
    return(
        <div className="p-10">
        <h1 className={`text-center text-2xl font-bold  ${theme ? 'text-white ' : 'text-slate-800 '}`}>Login</h1>
        <form onSubmit={handleSubmit} >
             
                <input type="email" className={` border border-amber-100 p-1 px-2 w-full rounded-md my-2  ${theme ? 'bg-white' : 'text-slate-800'} `} placeholder='Enter Email Id'
                name='email'
                value={email}
                onChange={handleChange}
    
                required />
                <input type="password" className={`border border-amber-100 p-1 px-2 w-full rounded-md my-2  ${theme ? 'bg-white' : 'text-slate-800'} `} placeholder='Enter Password'
                name= 'password'
                value={password}
                onChange={handleChange}
                required />
             
                <button type='submit' className='bg-amber-700 p-1 px-2 w-full rounded-md my-2 text-red-100 font-bold '>Login</button>
            </form>
      </div>
    )
    
}

export default Login
