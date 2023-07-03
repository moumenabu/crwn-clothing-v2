import { Routes, Route } from 'react-router-dom';

import Nav from './components/routes/navigation/Nav';
import Home from './components/routes/Home';
import Authentication from './components/routes/Authentication';

function Shop(){
    return <h1>I am Teh Shop :P</h1>
}

function App(){
    return (
        <Routes>
            <Route path='/' element={<Nav />} >
                <Route index element={<Home />} />
                <Route path='/shop' element={<Shop />}>
                </Route>
                <Route path='/sign-in' element={<Authentication />}></Route>
            </Route>
        </Routes>
    )
}

export default App;