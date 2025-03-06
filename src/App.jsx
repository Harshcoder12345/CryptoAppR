import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router'
import CoinDetails from './pages/CoinDetails'
import AllCoins from './pages/AllCoins'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';

import ThemeButton from './components/ThemeButton'
import { useSelector } from 'react-redux'
import PrivateComponents from './components/PrivateComponents'


const App = () => {

  const {theme} = useSelector(state => state.theme)
  

  return (
    <div className=  {theme ? 'bg-[#010118] min-h-screen flex flex-col' : 'bg-white min-h-screen flex flex-col' }>
     <Router>
      <Navbar/>
      <ToastContainer />
      <div className='flex-grow'>
      <Routes>
        <Route path='/'  element = {<Home/>}/>
        <Route element={<PrivateComponents/>}>
        <Route path='/cart' element = {<Cart/>} />
        </Route>
       
        <Route path='/coin/:coinid' element = {<CoinDetails/>} />
        <Route path='/search/:coinQuery' element = {<AllCoins/>} />
        <Route path='*' element = {<NotFound/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='register' element = {<Register/>} />

      </Routes>
      </div>
      
     <ThemeButton/>
      <Footer/>
     </Router>



    </div>
  )
}

export default App