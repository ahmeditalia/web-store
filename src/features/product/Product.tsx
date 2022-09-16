import { productType } from "./productSlice";
import { useProductHook } from "./useProductHook";
import "./Product.css";
import { useAppSelector } from "../../app/hooks";
import { useParams } from "react-router-dom";

type ProductPropsType = {
    category: string,
    product: productType
}

export const Product = ({ category, product }: ProductPropsType) => {
    return (
        <div id={product.name} className={`${category} product`}>
            <div className="picture">
                <img src={require(`../../assets/${product.pic_url}`)} alt={""}/>
            </div>
            <div className="description">
                <div className="name">{product.name}</div>
                <div className="category">{product.category}</div>
                <div className="price">{product.price}</div>
            </div>
        </div>
    );
}

type categoryProps = {
    category: string
}

const ProductSection = ({ category }: categoryProps) => {

    const { products } = useProductHook(category);
    return (
        <>
            <h3 className="title">{`${category} Section`}</h3>
            <div className="content">
                {
                    products.map((product) => {
                        return <Product key={product.name} category={category} product={product} />
                    })
                }
            </div>
        </>


    );
}

const ProductGrid = () => {
    const {category} = useParams();
    let categories = useAppSelector(state => state.product.keys);
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