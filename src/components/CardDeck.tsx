import Card from "./Card";
import React from "react";

import ProductService from "../presentation/service/ProductService";

const products = new ProductService().getProducts();

const CardDeck: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card
          product={product}
        />
      ))}
    </div>
  );
};

export default CardDeck;
