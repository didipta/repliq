import { productData } from "@/components/ProjectDate/Productdata";
import Image from "next/image";
import React from "react";

const Productlist = () => {
  return (
    <div className=" grid md:grid-cols-4 grid-cols-3 justify-between gap-2 p-2">
      {productData.map((product) => {
        return (
          <div
            key={product.product_id}
            className="flex flex-col gap-3 items-center justify-center shadow-md pb-3  bg-white rounded-md"
          >
            <img
              src={product.product_img}
              alt={product.product_name}
              className="w-64 h-40 object-contain"
            />
             <p className="w-full text-center text-sm font-bold text-neutral bg-neutral-100 p-1">${product.product_price}</p>
            <h2 className="text-base text-neutral line-clamp-1 px-2">{product.product_name}</h2>
           
          </div>
        );
      })}
    </div>
  );
};

export default Productlist;
