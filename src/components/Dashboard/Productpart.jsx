import React, { useState } from "react";
import Productlist from "./Productpart/Productlist";
import { categoryData } from "../ProjectDate/Categorydata";

const Productpart = ({ addtocartproduct }) => {
  const [categorys, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  return (
    <div className=" h-screen overflow-y-auto z-10 ">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Page content here */}

          <div className="flex justify-between items-center gap-2 px-5 py-4 shadow-lg">
            <div className=" flex items-center gap-3">
              <i class="fa-solid fa-search text-xl"></i>
              <input
                type="text"
                placeholder="Search"
                className="w-64 outline-none border-none"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <i class="fa-solid fa-barcode text-xl"></i>
          </div>
          <div className=" flex justify-between items-center gap-2 px-5 py-2">
            <div className=" w-full grid grid-cols-4 justify-between gap-2 p-2 ">
              <button
                onClick={() => setCategory([])}
                className={`shadow-md  bg-white rounded-md cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
                  categorys.length === 0 && "border-2 border-primary"
                }`}
              >
                <h2
                  className={`text-base text-neutral line-clamp-1 px-3 py-2 ${
                    categorys.length === 0 && "text-primary"
                  }`}
                >
                  All category
                </h2>
              </button>
              {categoryData.slice(0, 3).map((category) => {
                return (
                  <button
                    key={category.id}
                    onClick={() => setCategory(category)}
                    className={`shadow-md   bg-white rounded-md cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
                      category.id === categorys.id && "border-2 border-primary"
                    }`}
                  >
                    <h2
                      className={`text-base text-neutral line-clamp-1 px-3 py-2 ${
                        category.id === categorys.id && "text-primary"
                      }`}
                    >
                      {category.category_name}
                    </h2>
                  </button>
                );
              })}
            </div>
            <label htmlFor="my-drawer-4" className=" cursor-pointer">
              <i class="fa-solid fa-ellipsis-vertical text-xl"></i>
            </label>
          </div>
          <Productlist
            addtocartproduct={addtocartproduct}
            categorys={categorys}
            search={search}
          />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 lg:w-5/12 w-80 min-h-full bg-base-100 ">
            <div className="flex flex-wrap justify-start items-center gap-5 px-5 py-2">
              {categoryData.map((category) => {
                return (
                  <button
                    key={category.id}
                    onClick={() => setCategory(category)}
                    className={`shadow-md   bg-white rounded-md cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
                      category.id === categorys.id && "border-2 border-primary"
                    }`}
                  >
                    <h2
                      className={`text-base text-neutral line-clamp-1 px-3 py-2 ${
                        category.id === categorys.id && "text-primary"
                      }`}
                    >
                      {category.category_name}
                    </h2>
                  </button>
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
