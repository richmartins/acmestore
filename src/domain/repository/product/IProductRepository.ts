import IProduct from "../../entity/product/IProduct";

export default interface IProductRepository {
    getProducts: () => IProduct[];
    getProductById: (id: number) => IProduct;
    addProduct: (product: IProduct) => void;
    updateProduct: (product: IProduct) => void;
    deleteProduct: (id: number) => void;
}
