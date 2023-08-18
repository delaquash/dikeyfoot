import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import cart from "../data/cart";

// interface ICart

 export type CartProps = {
        items: [] ;
        deliveryFee: number;
        freeDelivery: number;
 }

const initialState = {
    items: [],
    deliveryFee: 15,
    freeDelivery: 200
} as CartProps

export const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        addCartItem: (state, action: PayloadAction<any>)=> {
            const newProduct:any = action.payload.product;
            const cartItem:CartItem[] = state.items.find((item: { product: { id: string; }; })=>item.product.id === newProduct.id)
            if(cartItem){
                cartItem.quantity += 1
            } else {
                state.items.push({product:newProduct, quantity: 1})
            }  
        }
    }
})

export default cartSlice.reducer