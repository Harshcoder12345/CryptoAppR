import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({


    name : 'cart',
    initialState : {

        mycart : [],
        totalBill : 0


    },

    reducers : {

        addcart:(state, action)=> {

    const existingUser = state.mycart.find((item)=>item.id === action.payload.id)
    if(existingUser){
        existingUser.qty += 1;
    }else{
        state.mycart.push({...action.payload, qty:1 })
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
        addsameitem:(state, action)=> {
            
                const existingUser = state.mycart.find((item)=>item.id === action.payload)

                if(existingUser) {
                    existingUser.qty += 1
                }
        },

    }
})

export default cartSlice.reducer




export const {addcart, removecart,clearcart,addsameitem,      incrementQuantity, decrementQuantity} = cartSlice.actions


