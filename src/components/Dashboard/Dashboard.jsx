import React, { useState } from "react";
import Chartpart from "./Cartpart";
import Productpart from "./Productpart";
import { addttocart } from "@/Service/Cart";

const Dashboard = () => {
  const [cartitems, setCartitems] = useState([]);

  const addtocartproduct = (product) => {
    addttocart(product, setCartitems, cartitems);
  };

  return (
    <div className=" grid lg:grid-cols-2 grid-cols-1 justify-between">
      <Chartpart cartitems={cartitems} />
      <Productpart addtocartproduct={addtocartproduct} />
    </div>
  );
};

export default Dashboard;
