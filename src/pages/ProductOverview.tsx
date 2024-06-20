import React from "react";
import { useParams } from "react-router-dom";

import Button from "../components/Button";
import useBasketStore from "../stores/basketStore";
import ProductService from "../presentation/service/ProductService";

const productService = new ProductService();

const ProductOverview: React.FC = () => {
    const basketStore = useBasketStore();
    const { id } = useParams();
    const product = productService.getProductById(Number(id));
    return (
        <>
            <div className="bg-white p-4 rounded shadow-md w-[90%]  flex flex-col justify-between">
                <span className="">
                    <h2 className="text-lg font-semibold">{product.title}</h2>
                    <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-[50%] object-cover my-2"
                    />
                    <p className="text-gray-500">{product.desc}</p>
                </span>
                <span className="flex justify-end">
                    <span className="flex flex-col">
                        <p className="my-1">{product.price}.- CHF</p>
                        <Button
                            customClassName="p-2"
                            onClick={() => {
                                basketStore.add(product);
                            }}
                            type="button"
                            text="Add to cart"
                        />
                    </span>
                </span>
            </div>
        </>
    );
};

export default ProductOverview;
