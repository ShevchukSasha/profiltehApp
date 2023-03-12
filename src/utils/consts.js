import {UilCog, UilSwatchbook, UilShieldCheck} from '@iconscout/react-unicons'

export const HOME_ROUTE = '/home'
export const ABOUT_ROUTE = '/about'
export const PRODUCTS_ROUTE = '/products'
export const PRODUCTION_ROUTE = '/production'
export const CONTACTS_ROUTE = '/contact'

export const links = [{
    id: 1, text: 'Головна', url: '/',
}, {
    id: 2, text: 'Про нас', url: '/about',
}, {
    id: 3, text: 'Власне виробництво', url: '/production',
}, {
    id: 4, text: 'Продукція', url: '/products',
}, {
    id: 5, text: 'Контакти', url: '/contact',
}]

export const services = [{
    id: 1,
    icon: <UilCog/>,
    title: 'Власне виробництво',
    text: 'Виготовлення металочерепиці та металопрофіля на сучасному європейському обладнанні.',
}, {
    id: 2,
    icon: <UilShieldCheck/>,
    title: 'Якісні матеріали',
    text: 'Для виробництва ми закуповуємо якісні метали з Польщі, Німеччини, Китаю і України.',
}, {
    id: 3,
    icon: <UilSwatchbook/>,
    title: 'Великий вибір',
    text: 'Наше підприємство виробляє металопродукцію в широкій кольоровій гамі.',
},]