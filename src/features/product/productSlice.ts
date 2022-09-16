import { createSlice } from "@reduxjs/toolkit"
import  products from "./product.json"

export type productType = {
    name: string,
    category: string,
    price: number,
    pic_url: string
}

export type categoryProductsType = {
    [key: string]: productType[]
}

type initialStateType = {
    products: categoryProductsType,
    keys: string[]
}

const initialState: initialStateType = {
    products,
    keys: Object.keys(products)
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    }
});

export default productSlice.reducer;