import { create } from "zustand";

import BasketService from "../presentation/service/BasketService";
import IProduct from "../domain/entity/product/IProduct";

let basketService = new BasketService();

interface BasketStore {
    nbItems: number;
    add: (product: IProduct) => void;
    remove: (product: IProduct) => void;
    clear: () => void;
}
const useBasketStore = create<BasketStore>((set) => ({
    nbItems: basketService.getBasket().products.length,
    products: basketService.getBasket().products,
    add: (product) => {
        basketService.addProduct(product);
        set((state) => ({
            nbItems: state.nbItems + 1,
        }));
    },
    remove: (product) => {
        basketService.removeProduct(product.id);
        set((state) => ({
            nbItems: state.nbItems - 1,
        }));
    },
    clear: () => {
        basketService.clearBasket();
        set({ nbItems: 0 });
    },
}));

export default useBasketStore;
