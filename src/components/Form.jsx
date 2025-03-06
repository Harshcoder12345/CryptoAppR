import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchCoin } from '../features/coin/coinslice'
import { Navigate, useNavigate } from 'react-router'



const Form = () => {

const {theme} = useSelector(state => state.theme)

const [text, setText] = useState('')

const dispatch = useDispatch()
const navigate = useNavigate()

const HandleSubmit = (e) => {
    e.preventDefault()
    dispatch(getSearchCoin(text))

    navigate("/search/"+ text)

    setText("")

}


  return (
    <div className='text-center  flex justify-center flex-col items-center md:flex-row gap-[10px] my-2 '>
        <form className='w-[100%]' onSubmit={(e)=>HandleSubmit(e)} >
    <input value={text}  onChange={(e)=> setText(e.target.value)}  className= {theme ? 'p-3 border border-white w-[70%] rounded-md  text-white ' : 'p-3 border border-slate-900 text-slate-800 w-[70%] rounded-md ' }   placeholder='Enter the bitcoin name Here' type="text" />
    <button className= {theme ? 'text-xl mx-2  md:w-[15%] text-black bg-white py-3 px-2 rounded-md' : 'text-xl mx-2 md:w-[15%] bg-slate-900 py-3 px-2 rounded-md text-white' } >Search</button>
    </form>
    </div>
  )
}

export default Form