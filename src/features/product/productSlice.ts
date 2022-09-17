import { createSlice, PayloadAction } from "@reduxjs/toolkit"
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
    keys: string[],
    filter: string
}

const initialState: initialStateType = {
    products,
    keys: Object.keys(products),
    filter: ""
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addFilter: (state, action: PayloadAction<string>)=>{
            state.filter = action.payload;
        }
    }
});

export const { addFilter } = productSlice.actions;

export default productSlice.reducer;