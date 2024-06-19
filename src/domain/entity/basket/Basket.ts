import IProduct from "../product/IProduct";
import IBasket from "./IBasket";

export default class Basket implements IBasket {
    id: number;
    products: IProduct[];

    constructor(id: number) {
        this.id = id;
        this.products = [];
    }

    addProduct(product: IProduct): void {
        this.products.push(product);
    }

    removeProduct(id: number): void {
        this.products = this.products.filter(product => product.id !== id);
    }

    getProducts(): IProduct[] {
        return this.products;
    }

    getTotalPrice(): number {
        return this.products.reduce((acc, product) => acc + product.price, 0);
    }

    getTotalItems(): number {
        return this.products.length;
    }

    clearBasket(): void {
        this.products = [];
    }
}