import React from "react";
import Navbar from "./Cartpart/Navbar";
import Stevejob from "./Cartpart/Stevejob";
import Cartitems from "./Cartpart/Cartitems";
import Bottomsection from "./Cartpart/Bottomsection";
import Link from "next/link";

const Chartpart = ({ cartitems, updateCart, totalcount, setPayment }) => {
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
            <Bottomsection
              cartitems={cartitems}
              totalcount={totalcount}
              setPayment={setPayment}
            />
          )}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="menuBar"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <h2 className="text-2xl font-bold text-center">Menu</h2>
            <li>
              <a>
                <i class="fa-solid fa-home"></i> Home
              </a>
            </li>
            <li>
              <a>
                <i class="fa-solid fa-user"></i> Account
              </a>
            </li>
            <li>
              <a>
                <i class="fa-solid fa-shopping-bag"></i> Orders
              </a>
            </li>
            <li>
              <a>
                <i class="fa-solid fa-cog"></i> Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chartpart;
