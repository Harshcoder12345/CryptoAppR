import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const useCart = () => {

const {user} = useSelector(state => state.auth)

const [islogedIn , setislogedIn] = useState(false)
const [checkingStatus, setcheckingStatus] = useState(true)

useEffect(()=> {
user ? setislogedIn(true) : setislogedIn(false)
setcheckingStatus(false)


}, [user])

  return  {islogedIn, checkingStatus}
}

export default useCart