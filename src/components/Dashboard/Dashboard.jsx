import React from "react";
import Chartpart from "./Cartpart";
import Productpart from "./Productpart";

const Dashboard = () => {
  return (
    <div className=" grid lg:grid-cols-2 grid-cols-1">
      <Chartpart />
      <Productpart />
    </div>
  );
};

export default Dashboard;
