import IBasketRepository from "../../../domain/repository/basket/IBasketRepository";
import IBasket from "../../entity/basket/IBasket";
import Basket from "../../entity/basket/Basket";
import IProduct from "../../entity/product/IProduct";

export default class BasketRepositoryLocalStorage implements IBasketRepository {
    getBasket(): IBasket {
        const basket = localStorage.getItem("basket");
        if (basket) {
            return JSON.parse(basket);
        }
        return new Basket(0);
    }

    addProduct(product: IProduct): void {
        let basket = this.getBasket();
        basket["products"] = [...basket["products"], product];
        localStorage.setItem("basket", JSON.stringify(basket));
    }

    removeProduct(id: number): void {
        const basket = this.getBasket();
        basket["products"] = basket["products"].filter(
            (product: IProduct) => product.id !== id
        );
        localStorage.setItem("basket", JSON.stringify(basket));
    }

    clearBasket(): void {
        localStorage.removeItem("basket");
    }
}
