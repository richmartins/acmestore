
import IProduct from './IProduct';

export default class Product implements IProduct {
    id: number;
    title: string;
    price: number;
    desc: string;
    img: string;

    constructor(id: number, name: string, price: number, description: string, img: string) {
        this.id = id;
        this.title = name;
        this.price = price;
        this.desc = description;
        this.img = img;
    }

    setPrice(price: number): void {
        this.price = price;
    }

    getPrice(): number {
        return this.price;
    }
}
