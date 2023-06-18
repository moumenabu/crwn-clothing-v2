import {useState} from 'react';

import categoriesObj from '../product-categories/categories.json';
import Menu from '../product-categories/category-menu/Menu'

function Home() {
    const [categories, setCategories] = useState(categoriesObj);
    const callToAction = 'Shop Now';

    return(
        <div>
            <Menu categories={categories} c2a={callToAction} />
        </div>
    )
}

export default Home;