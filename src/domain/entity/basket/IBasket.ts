import IProduct from "../product/IProduct";

export default interface IBasket {
    id: number;
    products: IProduct[];
    addProduct: (product: IProduct) => void;
    removeProduct: (id: number) => void;
    getProducts: () => IProduct[];
    getTotalPrice: () => number;
    getTotalItems: () => number;
    clearBasket: () => void;
} 