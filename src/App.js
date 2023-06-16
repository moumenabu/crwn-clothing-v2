import { Routes, Route } from 'react-router-dom';

import Nav from './components/routes/navigation/Nav';
import Home from './components/routes/Home';
import SignIn from './components/routes/SignIn';

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
                <Route path='/sign-in' element={<SignIn />}></Route>
            </Route>
        </Routes>
    )
}

export default App;