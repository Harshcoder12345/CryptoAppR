import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CoinService from "./AuthService";

const ExistingUser = JSON.parse(localStorage.getItem('user'))

const AuthSlice = createSlice({

name : 'auth',
initialState  : {
    user : ExistingUser || null,
    isLoading : false,
    isSuccess : false,
    isError : false,
    message : 'Error message'
},

reducers : {},

extraReducers : (builder) => {

    builder
    .addCase(registerUser.pending, (state, action)=> {
           state.isLoading = true
           state.isSuccess = false
           state.isError = false
    })
    .addCase(registerUser.fulfilled, (state, action)=> {
           state.isLoading = false
           state.isSuccess = true
           state.isError = false
           state.user = action.payload
    })
    .addCase(registerUser.rejected, (state, action)=> {
           state.isLoading = false
           state.isSuccess = false
           state.isError = true
           state.message = action.payload
    })

    .addCase(loginUser.pending, (state, action)=> {
           state.isLoading = true
           state.isSuccess = false
           state.isError = false
    })
    .addCase(loginUser.fulfilled, (state, action)=> {
           state.isLoading = false
           state.isSuccess = true
           state.isError = false
           state.user = action.payload
    })
    .addCase(loginUser.rejected, (state, action)=> {
           state.isLoading = false
           state.isSuccess = false
           state.isError = true
           state.message = action.payload
    })
    .addCase(logOut.fulfilled, (state, action)=> {
           state.isLoading = false
           state.isSuccess = false
           state.isError = true
           state.user = null
           state.message = action.payload
    })

    
}

})

export default AuthSlice.reducer


// REGISTER USER
export const registerUser = createAsyncThunk('AUTH/Register', async(formData,thunkAPI)=> {
try {
    return await CoinService.register(formData)
} catch (error) {
   const message = error.respone.data.message 
   return thunkAPI.rejectWithValue(message)
}

}) 


// LOGIN
export const loginUser = createAsyncThunk('login', async(formData, thunkAPI)=> {
try {
    return await CoinService.login(formData)
} catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)

}
})


// LOGOUT

export const logOut = createAsyncThunk('logout', async()=> {
        localStorage.removeItem('user')
    
    })


