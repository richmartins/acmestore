import React, { useEffect, useState } from "react";
import LogoBasket from "./LogoBasket";
import BasketService from "../presentation/service/BasketService";

let basketService = new BasketService();

const Basket: React.FC = () => {
    const [nbItem, setNbItem] = React.useState(
        basketService.getBasket().products.length
    );

    useEffect(() => {
        setNbItem(basketService.getBasket().products.length);

        window.addEventListener("storage", () => {
            setNbItem(basketService.getBasket().products.length);
        });
    }, []);

    return (
        <>
            <div id="nbItem"
                className="flex mx-2 cursor-pointeri justify-around items-center"
            >
                <span
                    className="text-white text-sm font-bold  bg-red-500 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
                >
                    {nbItem}
                </span>
                <LogoBasket />
            </div>
        </>
    );
};

export default Basket;
