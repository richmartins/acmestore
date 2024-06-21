import IProduct from "../domain/entity/product/IProduct";

interface ProductInBasket {
    id: number;
    title: string;
    desc: string;
    price: number;
    img: string;
    quantity: number;
}

class ProductBasketSet {
    products: ProductInBasket[];
    constructor(products: ProductInBasket[]) {
        this.products = products;
    }
}

let set: ProductBasketSet = { products: [] };

const SetBasket = (products: IProduct[]): ProductBasketSet => {
    products.forEach((product) => {
        const foundProduct = set.products.find((productInSet) => productInSet.id === product.id);

        if (foundProduct) {
            foundProduct.quantity++;
        } else {
            set.products.push({
                id: product.id,
                title: product.title,
                desc: product.desc,
                price: product.price,
                img: product.img,
                quantity: 1,
            });
        }
    });

    return set;
}

export {SetBasket, ProductBasketSet};
