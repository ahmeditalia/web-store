import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { formType } from "./AddForm"
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
    filter: string,
}

const initialState: initialStateType = {
    products,
    keys: Object.keys(products),
    filter: "",
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addFilter: (state, action: PayloadAction<string>)=>{
            state.filter = action.payload;
        },
        addProduct: (state, action: PayloadAction<formType>)=>{
            let categoryProducts = state.products[action.payload.category]
            if(categoryProducts){
                state.products[action.payload.category] = [...categoryProducts , action.payload.product]
            }else{
                state.products = {
                    ...state.products,
                    [action.payload.category]: [action.payload.product]
                };
                state.keys = Object.keys(state.products);
            }
        }
    }
});

export const { addFilter, addProduct } = productSlice.actions;

export default productSlice.reducer;