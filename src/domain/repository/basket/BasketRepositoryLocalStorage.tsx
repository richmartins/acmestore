import IBasketRepository from "./IBasketRepository";
import IBasket from "../../entity/basket/IBasket";
import Basket from "../../entity/basket/Basket";
import IProduct from "../../entity/product/IProduct";

export default class BasketRepositoryLocalStorage implements IBasketRepository {

    basket: IBasket = new Basket(0);

    getBasket(): IBasket {
        const basket = localStorage.getItem('basket');
        if (basket) {
            return JSON.parse(basket);
        }

        return this.basket;
    }

    addProduct(product: IProduct): void {
        let basket = this.getBasket();
        this.basket['products'] = [...basket['products'], product]
        localStorage.setItem('basket', JSON.stringify(this.basket));
    }

    removeProduct(id: number): void {
        const basket = this.getBasket();
        this.basket['products'] = basket['products'].filter((product: IProduct) => product.id !== id);
        localStorage.setItem('basket', JSON.stringify(basket));
    }

    clearBasket(): void {
        localStorage.removeItem('basket');
    }
}