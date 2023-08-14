import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import products from "../data/products";
import { RootState } from "../../store";


const initialState= {
    products: products,
    selectedProducts: null
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        selectedProducts: (state, action: PayloadAction<string>)=> {
            const productId = action.payload;
            state.selectedProducts = state.products.find((p: { id: string; })=> p.id === productId)
        }
    }
})


export default productsSlice.reducer;