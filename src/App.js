import {useState} from 'react';
import categoriesObj from './categories.json';
import Menu from './components/category-menu/Menu'

function App() {
    const [categories, setCategories] = useState(categoriesObj);
    const callToAction = 'Shop Now';


    return(
        <Menu categories={categories} c2a={callToAction} />
    )
}

export default App;