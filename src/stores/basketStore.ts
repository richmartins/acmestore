import { create } from "zustand";

import BasketService from "../presentation/service/BasketService";
import {SetBasket, ProductBasketSet} from "../utils/SetBasket";
import IProduct from "../domain/entity/product/IProduct";

let basketService = new BasketService();

interface BasketStore {
    nbItems: number;
    products: ProductBasketSet;
    add: (product: IProduct) => void;
    remove: (product: IProduct) => void;
    clear: () => void;
}
const useBasketStore = create<BasketStore>((set) => ({
    nbItems: basketService.getBasket().products.length,
    products: SetBasket(basketService.getBasket().products),
    add: (product) => {
        basketService.addProduct(product);
        set((state) => ({
            produtcs: state.products = SetBasket(basketService.getBasket().products),
            nbItems: state.nbItems + 1,
        }));
    },
    remove: (product) => {
        basketService.removeProduct(product.id);
        set((state) => ({
            produtcs: state.products = SetBasket(basketService.getBasket().products),
            nbItems: state.nbItems - 1,
        }));
    },
    clear: () => {
        basketService.clearBasket();
        set({ 
            nbItems: 0,
            products: SetBasket(basketService.getBasket().products),
        });
    },
}));

export default useBasketStore;
