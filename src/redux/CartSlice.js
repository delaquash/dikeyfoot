import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// type CartProps = {
    //     item: [];
    //     deliveryFee: number;
    //     freeDelivery: number;
    // }
const initialState = {
    item: [],
    deliveryFee: 15,
    freeDelivery: 200
}

export const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        addCartItem: (state, action)=> {
            const newProduct = action.payload.product;
            state.item.push({product:newProduct, quantity: 1})
        }
    }
})