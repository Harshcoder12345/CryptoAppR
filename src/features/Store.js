import { configureStore } from "@reduxjs/toolkit";
import theme from './theme/themeSlice'
import coin from './coin/coinService.js'
import cart from './cart/cartSlice.js'
import auth from './auth/AuthSlice.js'

const store = configureStore(
    {
     reducer : {
          theme, coin, cart, auth
    }
    }
)


export default store;




