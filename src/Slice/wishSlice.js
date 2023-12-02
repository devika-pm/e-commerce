import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
             state.push(action.payload)
        },
        removeFromWishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})
export const{addToWishlist,removeFromWishlist} = wishSlice.actions
export default wishSlice.reducer