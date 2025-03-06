import React from 'react'
import { Link } from 'react-router'

const Coin = ({coin}) => {
  return (
    // <div className='flex flex-col text-center border border-gray-500 rounded-md m-3 w-[350px] h-[400px] py-[20px] px-[60px] gap-[20px]'> 
    <div className='flex flex-col justify-center items-center m-2 text-center border border-gray-500 rounded-md w-[350px] h-[400px]  gap-[20px]'> 
    <img className='rounded-full w-[200px]' src={coin.large} alt="" srcset="" />
    <div className='text-gray-500 font-bold text-auto '>{coin.name}</div>
    <Link to={"/coin/" + coin.id}>
    <button className='p-3 font-bold bg-green-600 text-black rounded-md'>View Details</button>
    </Link>
    
      </div>
  )
}

export default Coin