import React from "react";
import { Link } from "react-router-dom";

type CardProps = {
  id: number;
  title: string;
  desc: string;
  price: number;
  img: string;
};

const Card: React.FC<CardProps> = ({ id, title, desc, img, price }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-500">{desc}</p>
        <img src={img} alt={title} className="w-full h-48 object-cover mt-2" />
        <p>{price}.- CHF</p>
      </div>
    </Link>
  );
};

export default Card;
