import React from "react";
import Button from "./Button";
import BasketService from "../presentation/service/BasketService";
import { Link } from "react-router-dom";
import IProduct from "../domain/entity/product/IProduct";

type CardProps = {
  product: IProduct
};

let basketService = new BasketService();

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-500">{product.desc}</p>
        <img src={product.img} alt={product.title} className="w-full h-48 object-cover mt-2" />
        <p>{product.price}.- CHF</p>
        <Button
          customClassName="mt-2"
          type="button"
          text="Add to cart"
          onClick={() => {
            basketService.addProduct(product);
          }}
        />
      </div>
    </Link>
  );
};

export default Card;
