import { createSlice } from "@reduxjs/toolkit";


const ExistingTheme = JSON.parse(localStorage.getItem('theme'))





const themeSlice = createSlice({

    

name : 'theme',
initialState : {
    theme : ExistingTheme || false
},

reducers: {
   themeChange : (state, action)=> {
    return {
        ...state,
        theme : state.theme ? false : true
    }
   }
    

  },

})

export default themeSlice.reducer
export const {themeChange} = themeSlice.actions