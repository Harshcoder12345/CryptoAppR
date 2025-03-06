import React, { useEffect } from 'react'
import { Link } from 'react-router';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingCoins } from '../features/coin/CoinSlice';
import Form from '../components/Form';

const Home = () => {

  const {theme} = useSelector(state => state.theme)

const { trendingCoins} = useSelector(state => state.coin)
// console.log(trendingCoins);


const dispatch = useDispatch()

useEffect(()=> {
  dispatch(getTrendingCoins())
},[])






  return (
    <div>
      
        <div className= {theme ? 'text-white mx-auto text-center' : 'text-slate-900 mx-auto text-center' }>
        <div className=' pt-[150px] pb-[20px] text-6xl font-bold text-center' >The World’s Premier
        Crypto Trading Platform</div>
        <div className='hidden  md:flex flex-col   '>
        <div> Search Bitcoin, Ethereum, and 400 crypto on You fingertips</div>
        <div className='flex item-center justify-center items-center' > <span className='mx-2 '> <BsArrowUpRightCircleFill /></span> Trade with <span>20+ currencies</span>  and Apple/Google Pay</div>
        <div className='flex item-center justify-center items-center' > <span className='mx-2 '> <BsArrowUpRightCircleFill /></span>Leader in <span>regulatory compliance</span>  and <span>security certifications</span> </div>
        <div className='flex item-center justify-center items-center' > <span className='mx-2 '> <BsArrowUpRightCircleFill /></span>Trusted by <span> over 100 million users</span> worldwide</div>
        
        </div>
      <Form/>

      {trendingCoins?.map((coin)=> {
        return (
         <Link key={coin.item.id}  to = {`/coin/${coin.item.id}`}> <button  className='my-2 p-2 rounded-md font-bold bg-blue-800 text-white '>{coin.item.name} </button></Link> 
        )
      })}
       
        </div>
    </div>
  )
}

export default Home