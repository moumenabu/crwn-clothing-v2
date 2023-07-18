import Button from "../buttons/Button";
import "./BagDropdown.scss";

function BagDropdown({item}){
    
    return (
        <div className="bag-dropdown">
            <div className="items-list">
                {item.map(({name, price}, index) => (
                    <div key={index}>
                        <h3>{`${name} - ${price}`}</h3>
                    </div>
                ))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default BagDropdown;