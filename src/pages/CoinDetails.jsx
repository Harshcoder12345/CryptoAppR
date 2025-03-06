import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router'
import { getCoinDetail } from '../features/coin/coinslice'
import { addcart } from '../features/cart/cartSlice'

const CoinDetails = () => {

const {theme} = useSelector(state => state.theme)

const {coin, isLoading, isError} = useSelector(state => state.coin)

const {user} = useSelector(state => state.auth)


const {coinid} = useParams()
const dispatch = useDispatch()



useEffect(()=> {
  
    dispatch(getCoinDetail(coinid))

},[coinid])

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

const HandleAddCoin = (coin) => {
dispatch(addcart(coin))

  // console.log(coin);
  
}





  return (
    <div className='my-[150px] md:mx-[100px] m-[50px]'>
      <div> <Link to = {'/'} ><button  className='p-3 bg-gray-300 my-2 rounded-md'  >Back</button></Link>  </div>
    <div  className={`border rounded-md p-4 flex flex-col justify-center items-center md:flex-row  ${theme ? 'border-white' : 'border-slate-900' }` }> 
      <div className='w-[70%] mx-3 flex' ><img className='md:h-50 h-80' src={coin?.image?.large} alt="" /></div>
      <div className=''>

        <ul className='text-white w-[70%]  md:w-3/4 flex flex-col md:ml-20 m-auto '>
        <div className='flex w-full justify-between'>
        <li className='md:text-4xl font-bold text-gray-400 '>Name : {coin?.name}</li>
        <li className=' w-[50px] md:w-[120px] flex justify-center content-center items-center rounded-md bg-white text-black'>Rank:{coin?.market_cap_rank}</li>
        </div>
         
          <li className='md:text-3xl font-bold text-gray-400 my-1'>Symbol : {coin?.symbol}</li>
          <li className='text-green-600 font-bold my-1'>Price : {coin?.market_data?.current_price?.inr}</li>
          <li className= {theme ? 'text-white' : 'text-gray-800' }>{coin?.description?.en}</li>




          <li>
            {user ? <button  onClick={()=>HandleAddCoin(coin)} className='p-3 my-3  w-full bg-green-500 font-bold rounded-md'>Add to cart </button> :  
                      <button  disabled onClick={()=>HandleAddCoin(coin)} className='p-3 my-3  w-full bg-green-500 font-bold rounded-md'>Add to cart </button>}
            </li>

        </ul>
       

      </div>
     
      </div>
      </div>
  )
}

export default CoinDetails