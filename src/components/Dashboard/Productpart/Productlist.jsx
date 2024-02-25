import { productData } from "@/components/ProjectDate/Productdata";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Productlist = ({ addtocartproduct, categorys, search }) => {
  const [productDatas, setProductData] = useState(productData);
  useEffect(() => {
    if (categorys.length === 0) {
      setProductData(productData);
    } else {
      setProductData(
        productData.filter((product) => product.category_id === categorys.id)
      );
    }
  }, [categorys]);

  useEffect(() => {
    if (search === "") {
      setProductData(productData);
    } else {
      setProductData(
        productData.filter((product) =>
          product.product_name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  return (
    <div className=" grid md:grid-cols-4 grid-cols-3 justify-between gap-2 p-2 ">
      {productDatas.length === 0 && (
        <div className="flex justify-center items-center h-full w-full">
          <h2 className="text-lg text-neutral">No Product Found</h2>
        </div>
      )}
      {productDatas.map((product) => {
        return (
          <div
            key={product.product_id}
            onClick={() => addtocartproduct(product)}
            className="flex flex-col gap-3 items-center justify-center shadow-md pb-3  bg-white rounded-md cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <img
              src={product.product_img}
              alt={product.product_name}
              className="w-64 h-40 object-contain"
            />
            <p className="w-full text-center text-sm font-bold text-neutral bg-neutral-100 p-1">
              ${product.product_price}
            </p>
            <h2 className="text-base text-neutral line-clamp-1 px-2">
              {product.product_name}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Productlist;
