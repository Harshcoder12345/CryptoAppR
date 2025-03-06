import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({


    name : 'cart',
    initialState : {

        mycart : [],
        totalBill : 0


    },

    reducers : {

        addcart:(state, action)=> {

    
   
            return {
                ...state,
                mycart : [action.payload,   ...state.mycart]

            }
        },
        removecart:(state, action)=> {
            return {
                ...state,
                mycart : state.mycart.filter((item)=> item.id !== action.payload)

            }
        

        },
        clearcart:(state, action)=> {
            return {
                ...state,
                mycart : []

            }
        

        },

    }
})

export default cartSlice.reducer




export const {addcart, removecart,clearcart,  incrementQuantity, decrementQuantity} = cartSlice.actions


