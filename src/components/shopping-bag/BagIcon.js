import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import "./BagIcon.scss";

function BagDropdown({itemsAmount}){
    const numberOfItems = itemsAmount;

    return (
        <div className="shop-bag-container">
            <ShoppingIcon className="shop-bag-icon"/>
            <span className="items-count">{numberOfItems}</span>
        </div>
    )
}

export default BagDropdown;