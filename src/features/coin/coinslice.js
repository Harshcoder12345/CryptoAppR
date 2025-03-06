import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinService from "./coinService";

const coinslice = createSlice({

name : 'coin',
initialState : {
    trendingCoins : [],
    coins : [],
    coin : {},
    isLoading : false,
    isSuccess : false,
    isError : false,
    messsage : ''

},

reducers : {},

extraReducers : (builder)=> {

    builder
    .addCase(getTrendingCoins.pending , (state, action)=> {
        state.isLoading = true,
        state.isSuccess = false,
        state.isError = false
    })
    .addCase(getTrendingCoins.rejected , (state, action)=> {
        state.isLoading = false,
        state.isSuccess = false,
        state.isError = true
      
    })
    .addCase(getTrendingCoins.fulfilled , (state, action)=> {
        state.isLoading = false,
        state.isSuccess = true,
        state.trendingCoins = action.payload
        state.isError = false
    })

    .addCase(getSearchCoin.pending , (state, action)=> {
        state.isLoading = true,
        state.isSuccess = false,
        state.isError = false
    })
    .addCase(getSearchCoin.rejected , (state, action)=> {
        state.isLoading = false,
        state.isSuccess = false,
        state.isError = true
      
    })
    .addCase(getSearchCoin.fulfilled , (state, action)=> {
        state.isLoading = false,
        state.isSuccess = true,
        state.coins = action.payload
        state.isError = false
    })


    .addCase(getCoinDetail.pending , (state, action)=> {
        state.isLoading = true,
        state.isSuccess = false,
        state.isError = false
    })
    .addCase(getCoinDetail.rejected , (state, action)=> {
        state.isLoading = false,
        state.isSuccess = false,
        state.isError = true
      
    })
    .addCase(getCoinDetail.fulfilled , (state, action)=> {
        state.isLoading = false,
        state.isSuccess = true,
        state.coin = action.payload
        state.isError = false
    })

}

})

export default coinslice.reducer

export const getTrendingCoins = createAsyncThunk('fetch/trendingcoin', async()=> {
    try {
    return await coinService.fetchTrendingCoins()
    } catch (error) {
        console.log(error);
        
    }
})

export const getSearchCoin = createAsyncThunk('fetch/searchcoin', async(searchterm)=> {
    try {
    return await coinService.SearchCoin(searchterm)
    } catch (error) {
        console.log(error);
        
    }
})
export const getCoinDetail = createAsyncThunk('fetch/coindetail', async(id)=> {
    try {
    return await coinService.Coinsummary(id)
    } catch (error) {
        console.log(error);
        
    }
})