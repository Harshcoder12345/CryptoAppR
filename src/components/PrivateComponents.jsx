import React from 'react'
import useCart from '../features/hooks/useCart'
import { Navigate, Outlet } from 'react-router'

const PrivateComponents = () => {

    const {islogedIn, checkingStatus} = useCart()

    if(checkingStatus){
       return <div className='text-2xl text-white font-bold'>Loading Checking Status</div>
    }

    return islogedIn ? <Outlet/> : <Navigate to={'/login'}/> 


}

export default PrivateComponents