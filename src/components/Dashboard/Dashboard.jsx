import React, { useState } from "react";
import Chartpart from "./Cartpart";
import Productpart from "./Productpart";
import {
  addttocart,
  deletefromcart,
  removefromcart,
  totalamount,
} from "@/Service/Cart";
import Order from "./Order";

const Dashboard = () => {
  const [cartitems, setCartitems] = useState([]);
  const totalcount = totalamount(cartitems);
  const [payment, setPayment] = useState(false);

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
      <Chartpart
        cartitems={cartitems}
        updateCart={updateCart}
        totalcount={totalcount}
        setPayment={setPayment}
      />
      {payment ? (
        <Order totalcount={totalcount} setPayment={setPayment} />
      ) : (
        <Productpart addtocartproduct={addtocartproduct} />
      )}
      
    </div>
  );
};

export default Dashboard;
