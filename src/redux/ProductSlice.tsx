import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import products from "../data/products";
import { RootState } from "../../store";

type Product = {
    id: string;
    image: string;
    name: string;
    price: number;
    sizes: number[];
    description: any
}

type ProductsProps = {
    products: Product;
    selectedProducts: null | string
}

const initialState: ProductsProps = {
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