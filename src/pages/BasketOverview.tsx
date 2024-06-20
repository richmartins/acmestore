import React from "react";

import BasketService from "../presentation/service/BasketService";
import useBasketStore from "../stores/basketStore";
import SetBasket from "../utils/SetBasket";
import Button from "../components/Button";

const basket = new BasketService().getBasket();
const basketSet = SetBasket(basket["products"]).products;

const BasketOverview: React.FC = () => {
    const basketStore = useBasketStore();

    if (basket["products"].length === 0) {
        return (
            <>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold">Basket Overview</h1>
                    <p className="text-gray-500">Your basket is empty</p>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="w-full">
                    <h1 className="px-2 text-2xl font-bold w-full text-center">Basket Overview</h1>
                    <span className="flex flex-row justify-center">
                        <div className="flex flex-col w-[60%]">
                            {basketSet.map((product: any) => {
                                return (
                                    <div
                                        key={product.id}
                                        className="flex justify-between items-center my-2 p-2 border-b-2"
                                    >
                                        <span className="flex flex-col">
                                            <h2 className="text-lg font-semibold">
                                                {product.title} 
                                            </h2>
                                            <p className="text-gray-500">
                                                {product.price}.- CHF
                                            </p>
                                            <p className="text-gray-500">
                                                {product.desc}
                                            </p>
                                        </span>
                                        <span className="flex flex-col">
                                            <p className="my-1 text-center">
                                                {product.price * product.quantity}.- CHF
                                            </p>
                                            <p>
                                                <Button
                                                    customClassName="p-2"
                                                    onClick={() => {
                                                        basketStore.add(
                                                            product
                                                        );
                                                    }}
                                                    type="button"
                                                    text="+"
                                                />
                                                <span className="mx-3">Quantity: {product.quantity}</span>
                                                <Button
                                                    customClassName="p-2"
                                                    onClick={() => {
                                                        basketStore.remove(
                                                            product
                                                        );
                                                    }}
                                                    type="button"
                                                    text="-"
                                                />
                                            </p>
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </span>
                    <span className="flex flex-row justify-end mx-auto mt-5 w-[60%]">
                        <Button
                            type="button"
                            onClick={() => {
                                basketStore.clear();
                            }}
                            text="Clear basket"
                        />
                    </span>
                </div>
            </>
        );
    }
};

export default BasketOverview;
