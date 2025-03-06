import axios from "axios";

const API_URL = "https://authenticationeskills.vercel.app/api/user";

const register = async(formData) => {
    const response = await axios.get(  API_URL +  '/register',formData )
    console.log(response);
    localStorage.setItem('user', JSON.stringify(response.data))
    return response.data
}
const login = async(formData) => {
    const response = await axios.get(API_URL +'/login',formData )
    console.log(response);
    localStorage.setItem('user', JSON.stringify(response.data))
    return response.data
}

const CoinService =  {register, login}

export default CoinService;


