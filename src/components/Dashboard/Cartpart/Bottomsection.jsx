import React from "react";

const Bottomsection = ({ cartitems, totalcount, setPayment }) => {
  return (
    <div>
      <div className=" bg-secondary container p-2 rounded-md">
        <div className=" flex justify-between items-center">
          <p className=" text-primary text-lg font-bold">
            Product Count (
            {cartitems.reduce((acc, item) => acc + item.quantity, 0)})
          </p>
          <p className=" w-96 flex justify-between items-center">
            <span className=" text-primary text-lg font-bold">
              Total Amount
            </span>
            <span className=" text-primary text-lg font-bold">
              ${totalcount.total}
            </span>
          </p>
        </div>
      </div>
      <div className=" container p-2 flex justify-between items-center gap-4 my-5">
        <button className=" w-full  text-red-500 bg-red-200 text-lg font-bold p-2 rounded-md">
          <i className="fa-solid fa-trash text-red-500"></i> Cancel
        </button>

        <button className=" w-full bg-secondary p-2 text-primary font-bold rounded-md">
          <i className="fa-solid fa-hand"></i> Hold
        </button>
        <button className=" w-full bg-secondary text-primary p-2 font-bold rounded-md">
          <i class="fa-solid fa-sack-dollar"></i> Discount
        </button>
        <button
          className=" w-full bg-secondary text-primary p-2 font-bold rounded-md"
          onClick={() => setPayment(true)}
        >
          <i class="fa-solid fa-hand-holding-dollar"></i> Pay Now
        </button>
      </div>
    </div>
  );
};

export default Bottomsection;
