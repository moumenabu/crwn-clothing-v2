import './categories.scss';
import MenuImage from "../category-item/MenuImage";

function Menu({categories, c2a}) {
    return (
        <div className="categories-container">
            {categories.map((category) => <MenuImage key={category.id} category={category} c2a={c2a}/>)}
        </div>
    )
}

export default Menu;