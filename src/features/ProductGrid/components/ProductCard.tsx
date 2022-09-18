import { productType } from "../../../redux/productSlice";

type ProductProps = {
    category: string,
    product: productType
}

export const ProductCard = ({ category, product }: ProductProps) => {
    return (
        <div id={product.name} className={`${category} product`}>
            <div className="picture">
                <img src={`${product.pic_url}`} alt={""} />
            </div>
            <div className="description">
                <div className="name">{product.name}</div>
                <div className="category">{product.category}</div>
                <div className="price">{product.price}</div>
            </div>
        </div>
    );
}