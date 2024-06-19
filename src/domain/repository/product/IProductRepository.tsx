import { IProduct } from "../../entity/product/IProduct";

interface IProductRepository {
    getProducts: () => IProduct[];
    getProductById: (id: number) => IProduct;
    addProduct: (product: IProduct) => void;
    updateProduct: (product: IProduct) => void;
    deleteProduct: (id: number) => void;
}

export type {IProductRepository };