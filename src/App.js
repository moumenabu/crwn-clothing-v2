import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Nav from './components/routes/navigation/Nav';
import Home from './components/routes/Home';
import Authentication from './components/routes/Authentication/Authentication';
import Shop from './components/routes/shop/Shop';

function App(){
    const [basketItems, setBasketItems] = useState([]);

    function addItemsToBasket(item) {
        setBasketItems((basket) => basket.concat(item));
    }

    return (
        <Routes>
            <Route path='/' element={<Nav basketItems={basketItems}/>} >
                <Route index element={<Home />} />
                <Route path='/shop' element={<Shop addItems={addItemsToBasket}/>}>
                </Route>
                <Route path='/authentication' element={<Authentication />}></Route>
            </Route>
        </Routes>
    )
}

export default App;