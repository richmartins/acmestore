import React from "react";
import LogoBasket from "./LogoBasket";
import useBasketStore from "../stores/basketStore";

// get the number of items in the basket and re-render it when new product is added or removed from the basket
const Basket: React.FC = () => {

    const nbItem = useBasketStore((state) => state.nbItems); 

  return (
    <>
      <div
        id="nbItem"
        className="flex mx-2 cursor-pointeri justify-around items-center"
      >
        <span className="text-white text-sm font-bold  bg-red-500 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer">
          {nbItem}
        </span>
        <LogoBasket />
      </div>
    </>
  );
};

export default Basket;
