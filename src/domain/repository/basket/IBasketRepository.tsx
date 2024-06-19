import IBasket from "../../entity/basket/IBasket";
import IProduct from "../../entity/product/IProduct";

export default interface IBasketRepository {
    getBasket: () => IBasket;
    addProduct: (product: IProduct) => void;
    removeProduct: (id: number) => void;
    clearBasket: () => void;
}