import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks"
import { productType } from "../redux/productSlice";

export const useProductHook = (category: string, filter: string)=>{
    const [products, setProducts] = useState<productType[]>([]);
    const Allproducts = useAppSelector((state) => state.product.products);
    useEffect(()=>{
        setProducts(Allproducts[category].filter((product)=> product.name.toLowerCase().includes(filter.toLowerCase()) || product.category.toLowerCase().includes(filter.toLowerCase())) || []);
    },[category, filter , Allproducts]);

    return {products};
}