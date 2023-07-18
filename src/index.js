import React from "react";
import ReactDom from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {UserContextProvider} from './components/contexts/UserContext';
import { ProductsContextProvider } from "./components/contexts/ProductsContext";

import './index.scss';
import App from './App';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserContextProvider>
                <ProductsContextProvider>
                    <App />
                </ProductsContextProvider>
            </UserContextProvider>
        </BrowserRouter>    
    </React.StrictMode>
)
