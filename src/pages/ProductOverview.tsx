import React from "react";
import { useParams } from "react-router-dom";

import ProductService from "../presentation/service/ProductService";

const productService = new ProductService();

const ProductOverview: React.FC = () => {
    const { id } = useParams();
    const product = productService.getProductById(Number(id));
    return (
        <>
            <h1>Product Overview</h1>
            <div className="bg-white p-4 rounded shadow-md">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-500">{product.desc}</p>
                <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-48 object-cover mt-2"
                />
                <p>{product.price}.- CHF</p>
            </div>
        </>
    );
};

export default ProductOverview;
