import IBasketRepository from "../../domain/repository/basket/IBasketRepository";
import IBasket from "../../domain/entity/basket/IBasket";
import IProduct from "../../domain/entity/product/IProduct";
import BasketRepositoryLocalStorage from "../../domain/repository/basket/BasketRepositoryLocalStorage";

export default class BasketService {
  basketRepository: IBasketRepository = new BasketRepositoryLocalStorage();

  getBasket(): IBasket {
    return this.basketRepository.getBasket();
  }
  
  addProduct(product: IProduct): void {
    return this.basketRepository.addProduct(product);
  }
  removeProduct(id: number): void {
    return this.basketRepository.removeProduct(id);
  }

  clearBasket(): void {
    return this.basketRepository.clearBasket();
  }

  subscribe(callback: (basket: IBasket) => void): void {
    window.addEventListener("storage", () => {
      callback(this.getBasket());
    });
  }

  unsubscribe(callback: (basket: IBasket) => void): void {
    window.removeEventListener("storage", () => {
      callback(this.getBasket());
    });
  }
}
