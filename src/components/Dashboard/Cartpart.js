import React from "react";
import Navbar from "./Cartpart/Navbar";
import Stevejob from "./Cartpart/Stevejob";

const Chartpart = () => {
  return (
    <div className=" border-0 border-r-2 h-screen overflow-y-auto">
      <div className="drawer">
        <input id="menuBar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col gap-3">
          <Navbar />
          <Stevejob/>
         
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
