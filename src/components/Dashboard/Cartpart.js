import React from "react";
import Navbar from "./Cartpart/Navbar";
import Stevejob from "./Cartpart/Stevejob";
import Cartitems from "./Cartpart/Cartitems";
import Bottomsection from "./Cartpart/Bottomsection";

const Chartpart = ({ cartitems, updateCart, totalcount }) => {
  return (
    <div className=" border-0 border-r-2 h-screen overflow-y-auto z-10">
      <div className="drawer">
        <input id="menuBar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col gap-3">
          <Navbar />
          <Stevejob />
          {cartitems.length > 0 ? (
            <Cartitems
              cartitems={cartitems}
              updateCart={updateCart}
              totalcount={totalcount}
            />
          ) : (
            <div className="container p-2">
              <h1 className="text-3xl font-semibold text-center text-neutral">
                Your Cart is Empty
              </h1>
            </div>
          )}
          {cartitems.length > 0 && (
            <Bottomsection cartitems={cartitems} totalcount={totalcount} />
          )}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="menuBar"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chartpart;
