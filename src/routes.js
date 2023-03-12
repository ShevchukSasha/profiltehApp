import About from "./pages/About";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Product from "./pages/Product";
import Production from "./pages/Production";
import ProductionProduct from "./pages/ProductionProduct";
import Products from "./pages/Products";
import {
    ABOUT_ROUTE, HOME_ROUTE, PRODUCTS_ROUTE, CONTACTS_ROUTE, PRODUCTION_ROUTE
} from './utils/consts'

export const publicRoutes = [{
    path: HOME_ROUTE, Component: Home
}, {
    path: ABOUT_ROUTE, Component: About
}, {
    path: PRODUCTS_ROUTE, Component: Products
}, {
    path: PRODUCTS_ROUTE + '/:id', Component: Product
}, {
    path: PRODUCTION_ROUTE, Component: Production
}, {
    path: PRODUCTION_ROUTE + '/:id', Component: ProductionProduct
}, {
    path: CONTACTS_ROUTE, Component: Contacts
}]

export const authRoutes = []
