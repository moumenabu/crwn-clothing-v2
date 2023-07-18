import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

import ProductCard from "../../product-card/ProductCard.js";
import './Shop.scss';

function Shop({addItems}){
    const {products} = useContext(ProductsContext);

    return (
        <div className="shop">
            <h1>Products</h1>
            <div className="product-gallery">
                {products.map(({name, imageUrl, price}, index) => (
                    <div key={index}>
                        <ProductCard name={name} imageUrl={imageUrl} price={price} c2a="Add to cart" addItemsHandler={addItems}></ProductCard>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop;