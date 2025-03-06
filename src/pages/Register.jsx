import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { registerUser } from '../features/auth/AuthSlice';


const Register = () => {

    const {user, isLoading, isError, message} = useSelector((state)=> state.auth);

    const {theme}  = useSelector(state => state.theme)


    const [formData, setFormData] = useState({
        name: "",
        email : "",
        password : "",
        password2 : "", 
    })



    const {name, email, password, password2} = formData;


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        })
        // console.log(e.target.name);
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== password2){
            toast.error("Password Not Match")
        }else{
            dispatch(registerUser(formData))
        }
    }





    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    useEffect(()=> {
        if(user){
            navigate("/")
        }

          if(isError && message){
                    toast.error(message,{
                        position : "bottom-center",
                        theme : "dark"
                    })
                }
    },[user, isError, message])

if(isLoading){
    return (
        <div className='text-center p-10'>
            <h1 className='text-center font-bold text-gray-500'>Loading.....</h1>
        </div>
    )
}



  return (
    <div className="p-10">
        <h1 className= {`text-center text-2xl font-bold  ${theme ? 'text-white ' : 'text-slate-800 '}`}  >Register</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" className= {` border border-amber-100 p-1 px-2 w-full rounded-md my-2  ${theme ? 'text-white ' : 'text-slate-800 '}`} placeholder='Enter Name Here'
            name = "name"
            value = {name}
            onChange={handleChange}
            required
            />
            <input type="email" className={` border border-amber-100 p-1 px-2 w-full rounded-md my-2  ${theme ? 'text-white ' : 'text-slate-800 '}`} placeholder='Enter Email Id'
            name = "email"
            value = {email}
            onChange={handleChange}
            required />
            <input type="password" className={` border border-amber-100 p-1 px-2 w-full rounded-md my-2  ${theme ? 'text-white ' : 'text-slate-800 '}`} placeholder='Enter Password'
            name = "password"
            value = {password}
            onChange={handleChange}
            required />
            <input type="password" className={` border border-amber-100 p-1 px-2 w-full rounded-md my-2  ${theme ? 'text-white ' : 'text-slate-800 '}`} placeholder='Confirm Password' 
            name = "password2"
            value = {password2}
            onChange={handleChange}
            required />
            <button type='submit' className='bg-amber-700 p-1 px-2 w-full rounded-md my-2 text-red-100 font-bold '>Submit</button>
        </form>
      </div>
  )
}

export default Register