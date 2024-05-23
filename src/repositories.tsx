import { IProductRepository } from "./interfaces";
import { Product } from "./types";
import data from './mock/db.json'; // <----- cannot be async while doing DDD i guess :/ - `fetch` needs to be async, `require`cannot use a variable

class ProductRepositoryJson implements IProductRepository {
  products: Product[];

  constructor() {
    this.products = this.loadProducts();
  }

  loadProducts(): Product[] {
    return data.products.map( 
      (product: any) =>
        new Product(
          product.id,
          product.name,
          product.price,
          product.description,
          product.img
        )
    );
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product {
    const foundProduct = this.products.find(
      (product: Product) => product.id === id
    );
    if (foundProduct) {
      return new Product(
        foundProduct.id,
        foundProduct.name,
        foundProduct.price,
        foundProduct.description,
        foundProduct.img
      );
    }
    throw new Error("Product not found.");
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  updateProduct(product: Product): void {
    const foundProduct = this.products.find(
      (p: Product) => p.id === product.id
    );
    if (foundProduct) {
      foundProduct.name = product.name;
      foundProduct.price = product.price;
      foundProduct.description = product.description;
      foundProduct.img = product.img;
    }
  }

  deleteProduct(id: number): void {
    const index = this.products.findIndex(
      (product: Product) => product.id === id
    );
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }
}

export { ProductRepositoryJson };
