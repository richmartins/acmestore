import IProduct from "../domain/entity/product/IProduct";

interface ProductBasketSet {
    products: ProductInBasket[];
}

interface ProductInBasket {
    id: number;
    title: string;
    desc: string;
    price: number;
    img: string;
    quantity: number;
}

let set: ProductBasketSet = { products: [] };

let count: number = 0
const SetBasket = (products: IProduct[]): ProductBasketSet => {

    console.log('counter', count++)
    console.log('length of products', products.length)

    products.forEach((product) => {
        const foundProduct = set.products.find((productInSet) => productInSet.id === product.id);
        console.log('==================== foundProduct ====================')
        console.table(foundProduct);

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

export default SetBasket;
