import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import OwnProductionStore from "./stores/ownProductionStore";
import ProductsStore from "./stores/productsStore";
import {ProductsProvider} from "./context/products_context";

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Context.Provider value={{
    production: new OwnProductionStore(),
    products: new ProductsStore(),
}}>
    <ProductsProvider>
        <App/>
    </ProductsProvider>
</Context.Provider>);

reportWebVitals();
