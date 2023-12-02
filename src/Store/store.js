import { configureStore } from "@reduxjs/toolkit";
import wishSlice from "../Slice/wishSlice";
import cartSlice from "../Slice/cartSlice";

const store = configureStore({
    reducer:{
      wishlistReducer:wishSlice,
      cartReducer:cartSlice
    }
})
export default store 