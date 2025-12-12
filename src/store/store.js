import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import productReducer from "./productSlice"

const store = configureStore({
    // multiple reducer will displayed here 
    reducer:{
        cart : cartReducer,
        product : productReducer
    }
})

export default store