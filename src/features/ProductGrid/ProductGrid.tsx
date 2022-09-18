import "./ProductGrid.css";
import { useAppSelector } from "../../app/hooks";
import { useParams } from "react-router-dom";
import { ProductSection } from "./components/ProductSection";


const ProductGrid = () => {
    const { category } = useParams();
    let { keys: categories } = useAppSelector(state => state.product);
    if (category) {
        categories = [category];
    }
    return (
        <div id="container">
            {categories.map((category) => <ProductSection key={category} category={category} />)}
        </div>
    )

}

export default ProductGrid;