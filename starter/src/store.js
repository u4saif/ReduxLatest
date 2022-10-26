import { configureStore } from "@reduxjs/toolkit";
import  cartReducer from './feature/cartSlice';
import modelReducer from "./feature/modelSlice";
export const store = configureStore({
    reducer:{
        cart:cartReducer,
        model:modelReducer
    },
});