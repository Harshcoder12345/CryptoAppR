import React from 'react'
import { Link } from 'react-router'
import Cartitem from '../components/Cartitem'
import { useSelector } from 'react-redux'

const Cart = () => {

const {mycart} = useSelector(state => state.cart)


const totalBill = mycart.reduce((total, eachcart)=>{return total +(eachcart.qty * eachcart.market_data.current_price.inr) },0 )

  return (
    <div className='flex flex-col items-center' >
<div className='w-[90%]'>
   <div className='my-[40px]'> <Link to = {'/'} ><button  className='p-3 w-[100px] bg-gray-300 my-2 rounded-md'>Back</button></Link>  </div>
  <div className='text-center font-bold text-gray-500 text-2xl mb-2'>Your Cart</div>
</div>

<div className='w-[90%] border border-gray-400 rounded-md m-auto '>
<div  className=' w-[100%] flex md:flex-row   p-5 flex-col '> 
<div className=' md:w-[70%] w-[100%] flex flex-col '>
  {
    mycart.map((eachcart)=><Cartitem  id={eachcart.id}  eachcart={eachcart}/> )
  }




</div>
        <div className='w-[100%] md:w-[30%] border border-gray-500 p-5 rounded-md mx-2'>
          <ul>
            <li className='font-bold text-xl text-gray-500'>Your Bill : {totalBill}</li>
            <li  className='font-bold text-xl text-gray-500' >Your Items : {mycart.length}</li>
            
            {/* <li  className='font-bold text-xl text-gray-500'>Total Amount : $10000</li> */}
            <li className='w-[100%]'><button className='p-3 w-[100%] rounded-md font-bold text-gray-300 bg-green-700 my-3'>Pay Now</button></li>
          </ul>
        </div>
</div>
</div>
</div>
  )
}

export default Cart