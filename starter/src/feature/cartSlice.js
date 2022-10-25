import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../cartItems'; 
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
});

export const {clearCart,removeItem,increaseItem,decreaseItem,calculateTotal} = cartSlice.actions;
export default cartSlice.reducer;