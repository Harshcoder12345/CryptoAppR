import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removecart,incrementQuantity,decrementQuantity,addsameitem } from '../features/cart/cartSlice';

const Cartitem = ({eachcart}) => {
     
    const dispatch = useDispatch()

  const {mycart} = useSelector(state => state.cart)

  const {item} = useSelector(state => state.cart)
  
    const HandleRemoveitem = (cartid) => {
      dispatch(removecart(cartid));
     

    };

    const SameItemAdd = () => {
      dispatch(addsameitem(eachcart.id))
    }

    
  return (
   
    <ul className='text-white border w-[100%] p-5 rounded-md border-gray-500  mb-[10px] flex md:justify-between md:flex-row flex-col'>
      <div className='flex'> 
      <div className='' >
        <li><img className='h-25' src={eachcart.image.large} alt="" /></li></div>
    <div className='flex font-semibold pl-10 flex-col'>
      <li className='text-3xl text-gray-400 '> {eachcart.name}</li>
      <li className='text-xl  text-gray-400 my-1'>Price : {eachcart.market_data.current_price.inr}</li>
      <li className='text-xl  text-gray-400 my-1'>Qty : {eachcart.qty} </li>
      <li className='text-xl  text-gray-400 my-1'>Total Value : {eachcart.qty *eachcart.market_data.current_price.inr } </li>
      <button className='bg-white text-black' onClick={SameItemAdd}><li className='text-xl  text-gray-400 my-1 '>ADD same Item </li></button>
      
      
    </div>
      </div>
 
    <li className=''><button onClick={()=>HandleRemoveitem(eachcart.id)} className='bg-red-500 text-bold  rounded p-1  md:p-2'>Remove</button></li>
    </ul>


  )
}

export default Cartitem