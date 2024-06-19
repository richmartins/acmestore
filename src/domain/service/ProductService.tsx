
import { Product } from '../entity/product/Product';
import { IProductRepository } from '../repository/product/IProductRepository';
import { ProductRepositoryJson } from '../repository/product/ProductJsonRepository';

class ProductService {
    productRepository: IProductRepository = new ProductRepositoryJson();

    getProducts(): Product[] {
        return this.productRepository.getProducts();
    }

    getProductById(id: number): Product {
        return this.productRepository.getProductById(id);
    }

    addProduct(product: Product): void {
        this.productRepository.addProduct(product);
    }
    
    updateProduct(product: Product): void {
        this.productRepository.updateProduct(product);
    }
    
    deleteProduct(id: number): void {
        this.productRepository.deleteProduct(id);
    }
}

export { ProductService}