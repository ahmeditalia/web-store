import { useAppSelector } from "../../../app/hooks";
import { useProductHook } from "../../../hooks/useProductHook";
import { ProductCard } from "./ProductCard";

type SectionProps = {
    category: string
}

export const ProductSection = ({ category }: SectionProps) => {
    const { filter } = useAppSelector(state => state.product);
    const { products } = useProductHook(category, filter);
    if (products.length === 0) return <></>;
    return (
        <>
            <h3 className="title">{`${category} Section`}</h3>
            <div className="content">
                {
                    products.map((product) => {
                        return <ProductCard key={product.name} category={category} product={product} />
                    })
                }
            </div>
        </>


    );
}