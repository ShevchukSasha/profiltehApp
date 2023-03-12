import {makeAutoObservable} from "mobx";

export default class ProductsStore {
    constructor() {
        this.data = [
            {
                id: 1,
                name: "Product 1",
                description: "Product"
            },
            {
                id: 2,
                name: "Product 2",
                description: "Product"
            }
        ];
        makeAutoObservable(this)
    }
}