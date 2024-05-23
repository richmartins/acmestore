interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    img: string;
    setPrice: (price: number) => void;
    getPrice: () => number;
}

interface IProductRepository {
    getProducts: () => IProduct[];
    getProductById: (id: number) => IProduct;
    addProduct: (product: IProduct) => void;
    updateProduct: (product: IProduct) => void;
    deleteProduct: (id: number) => void;
}

export type {IProduct, IProductRepository, };