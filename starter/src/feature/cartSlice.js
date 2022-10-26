import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from '../cartItems'; 

const URL = 'https://course-api.com/react-useReducer-cart-project';

export const getCart=createAsyncThunk('cart/getCart',()=>{
return fetch(URL)
.then((resp)=>resp.json())
.catch((error)=>console.warn(error))
});

const initialState={
    cartItems:cartItems,
    amount:3,
    total:0,
    isLoading:true,
}

const cartSlice= createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
             state.cartItems=[];
        },
        removeItem:(state,action)=>{
            console.log(action);
            const removeId=action.payload;
            state.cartItems=state.cartItems.filter((item)=>item.id!==removeId);
        },
        increaseItem:(state,{payload})=>{
            const cartItem=state.cartItems.find((item)=>item.id===payload.id);
            cartItem.amount=cartItem.amount + 1;
            console.log(cartItem.amount);
        },
        decreaseItem:(state,{payload})=>{
            const cartItem=state.cartItems.find((item)=>item.id===payload.id);
            cartItem.amount=cartItem.amount - 1;
            console.log(cartItem.amount);
        },
        calculateTotal:(state)=>{
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item)=>{
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount=amount;
            state.total=total.toFixed(2);
            console.warn(amount,total);
        },
    },
    extraReducers:{
        [getCart.pending]:(state)=>{
            state.isLoading=true;
        },
        [getCart.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.cartItems=action.payload;
        },
        [getCart.rejected]: (state) => {
            state.isLoading = false;
        },
    }
});

export const {clearCart,removeItem,increaseItem,decreaseItem,calculateTotal} = cartSlice.actions;
export default cartSlice.reducer;