import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { logOut } from '../features/auth/AuthSlice'
import { clearcart } from '../features/cart/cartSlice'

const Navbar = () => {


  const {theme} = useSelector(state => state.theme)
  const {mycart} = useSelector(state => state.cart)

  const {user} = useSelector(state => state.auth)

  const dispatch = useDispatch()

const handleLogOut = () => {
    dispatch(logOut())
    dispatch(clearcart())
}


  return (
    <div>
        <div className='flex bg-slate-900 justify-between px-4 item-center py-6'>
         <Link to={'/'}><div className='font-sans text-xl text-white'> Crypto.com</div></Link>  
            <div>
               <Link to={'/cart'}><button className='text-slate-900 rounded px-3  bg-white mx-3 cursor-default font-bold '>Cart : {mycart.length}</button></Link> 
               
{
  !user ? (
    <>
    <Link to={"./login"} className=   'bg-amber-100 px-5 py-2 font-bold text-amber-600 rounded-md mx-2 '  >Login</Link>
    <Link to={"./register"} className='bg-amber-100 px-5 py-2 font-bold text-amber-600 rounded-md'>Register</Link>
    </>
  )
:
               
(<Link to={'/'}><button  onClick={handleLogOut} className='text-white text-xl hover:font-bold'>LogOut</button></Link>)
}  
            </div>
            </div>
    </div>
  )
}

export default Navbar