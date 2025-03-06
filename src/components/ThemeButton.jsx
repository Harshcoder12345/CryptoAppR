import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { FaSun } from "react-icons/fa";
import { themeChange } from '../features/theme/themeSlice';

const ThemeButton = () => {
const {theme} = useSelector(state => state.theme)
const dispatch  = useDispatch()

const ThemeSubmit = () => {
    dispatch(themeChange())
    localStorage.setItem("theme", JSON.stringify(theme ? false : true))
}

  return (
    <button onClick={()=>ThemeSubmit()}>
           <div className='fixed bottom-5 left-5 w-[30px] border h-[30px] flex justify-center items-center bg-white rounded-full'>
        {theme ? <FaSun /> :  <MdDarkMode />}
   
    </div> 
    </button>
 
  )
}

export default ThemeButton