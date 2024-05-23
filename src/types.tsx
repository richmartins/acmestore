
import { IProduct } from './interfaces';

class Product implements IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    img: string;

    constructor(id: number, name: string, price: number, description: string, img: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.img = img;
    }

    setPrice(price: number): void {
        this.price = price;
    }

    getPrice(): number {
        return this.price;
    }
}

export {Product};
