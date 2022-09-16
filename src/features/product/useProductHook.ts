import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks"
import { productType } from "./productSlice";

export const useProductHook = (category: string)=>{
    const [products, setProducts] = useState<productType[]>([]);
    const Allproducts = useAppSelector((state) => state.product.products);
    useEffect(()=>{
        setProducts(Allproducts[category] || []);
    },[category, Allproducts]);

    return {products};
}