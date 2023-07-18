import Button from "../buttons/Button";

import "./ProductCard.scss";

function ProductCard({imageUrl, name, price, c2a, addItemsHandler}) {
    const itemData = {imageUrl, name, price};
    
    function addItemClickHandler(){
        addItemsHandler(itemData);
    }
    
    return (
        <div className="product-card">
            <img src={imageUrl} alt={`${name}`} />
            <div className="product-info">
                <span className="product-name">{name}</span>
                <span className="product-price">{price}</span>
            </div>
            <Button onClick={addItemClickHandler} buttonStyle="inverted">{c2a}</Button>
        </div>
    )
}

export default ProductCard;