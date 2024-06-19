import Card from "./Card";
import React from "react";

import { ProductService } from "../domain/service/ProductService";

const products = new ProductService().getProducts();

const CardDeck: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          desc={product.desc}
          price={product.price}
          img={product.img}
        />
      ))}
    </div>
  );
};

export default CardDeck;
