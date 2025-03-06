import axios from "axios";

const fetchTrendingCoins = async() => {
     const response = await axios.get('https://api.coingecko.com/api/v3/search/trending')
    // console.log(response.data.coins);
    return response.data.coins    
}


const SearchCoin = async(searchterm) => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/search?query=${searchterm}`)
    // console.log(response.data.coins)
    return response.data.coins
    
    

}

const  Coinsummary = async (id) => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    // console.log(response.data);
    return response.data
    
} 



const coinService = {fetchTrendingCoins, SearchCoin, Coinsummary}

export default coinService;