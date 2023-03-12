import {makeAutoObservable} from "mobx";

export default class OwnProductionStore {
    constructor() {
        this.types = [
            {id: 1, name: "Paint"},
            {id: 2, name: "Profile"},
        ]
        this.data = [
            {
                id: 1,
                name: "Product 1",
                type: 1,
                description: "Product"
            },
            {
                id: 2,
                name: "Product 2",
                type: 2,
                description: "Product"
            }
        ];

        makeAutoObservable(this)
    }
}