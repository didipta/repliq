import React from "react";
import Productlist from "./Productpart/Productlist";
import { categoryData } from "../ProjectDate/Categorydata";

const Productpart = ({ addtocartproduct }) => {
  
  return (
    <div className=" h-screen overflow-y-auto z-10 ">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}

          <div className=" flex justify-between items-center gap-2 px-5 py-2">
            <div className=" w-full grid md:grid-cols-4 grid-cols-3 justify-between gap-2 p-2 ">
              {categoryData.slice(0, 4).map((category) => {
                return (
                  <div
                    key={category.category_id}
                    className="flex flex-col gap-3 items-center justify-center shadow-md pb-3  bg-white rounded-md cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    <h2 className="text-base text-neutral line-clamp-1 px-2">
                      {category.category_name}
                    </h2>
                  </div>
                );
              })}
            </div>
            <label htmlFor="my-drawer-4" className=" cursor-pointer">
              <i class="fa-solid fa-ellipsis-vertical text-xl"></i>
            </label>
          </div>
          <Productlist addtocartproduct={addtocartproduct} />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-5/12 min-h-full bg-base-100 ">
            <div className="flex flex-wrap justify-start items-center gap-5 px-5 py-2">
              {categoryData.map((category) => {
                return (
                  <div
                    key={category.category_id}
                    className=" shadow-md   bg-white rounded-md cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    <h2 className="text-base text-neutral line-clamp-1 px-3 py-2">
                      {category.category_name}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpart;
