import React from 'react'
import { Link } from 'react-router'
import Coin from '../components/Coin'
import { useSelector } from 'react-redux'

const AllCoins = () => {

const {theme} = useSelector(state => state.theme)
// console.log(theme);

const {coins, isLoading, isSucces, isError} = useSelector(state => state.coin)

if(isLoading){
  return (
    <div>
      <h1 className='text-gray-400 text-center'>Searching the Coin....</h1>
    </div>
  )
}
if(isError){
  return (
    <div>
      <h1 className='text-gray-400 text-center'>Coin Not Found 404....</h1>
    </div>
  )
}



  return (
    <div className='flex flex-col items-center' >
    <div className='w-[90%]'>
       <div className='my-[40px]'> <Link to = {'/'} ><button  className='p-3 w-[100px] bg-gray-300 my-2 rounded-md'>Back</button></Link>  </div>
      <div className='text-center font-bold text-gray-500 text-2xl mb-2'>Your Search Result</div>
    </div>
    
  <div className='w-[90%] border flex justify-center m-auto rounded-md flex-wrap '>

    {coins.map((coi)=><Coin coin={coi}/> )}


    </div>
    </div>
  )
}

export default AllCoins