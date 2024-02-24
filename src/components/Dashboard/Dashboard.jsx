import React, { useState } from "react";
import Chartpart from "./Cartpart";
import Productpart from "./Productpart";
import { addttocart, deletefromcart, removefromcart } from "@/Service/Cart";

const Dashboard = () => {
  const [cartitems, setCartitems] = useState([]);

  const addtocartproduct = (product) => {
    addttocart(product, setCartitems, cartitems);
  };

  const updateCart = (type, product) => {
    if (type === "add") {
      addttocart(product, setCartitems, cartitems);
    } else if (type === "remove") {
      removefromcart(product, setCartitems, cartitems);
    } else if (type === "delete") {
      deletefromcart(product, setCartitems, cartitems);
    }
  };

  return (
    <div className=" grid lg:grid-cols-2 grid-cols-1 justify-between">
      <Chartpart cartitems={cartitems} updateCart={updateCart} />
      <Productpart addtocartproduct={addtocartproduct} />
    </div>
  );
};

export default Dashboard;
