import React from "react";

const Order = ({ totalcount, setPayment }) => {
  return (
    <div className="container p-2 ">
      <div>
        <div className="container p-2 rounded-md">
          <div className="flex justify-between items-center border-2 p-5">
            <p className="text-black text-xl font-bold">Order Amount</p>

            <span className=" text-neutral text-xl font-bold">
              ${totalcount.total}
            </span>
          </div>
        </div>

        <div className=" grid grid-cols-12 items-start gap-2">
          <div className="col-span-3 h-screen border-r-2">
            <ul className="flex flex-col gap-2 p-2">
              <li className=" flex items-center gap-2 text-xl border-b-2 p-3 ">
                <i class="fa-solid fa-money-bill-wave"></i> cash
              </li>
              <li className=" flex items-center gap-2 text-xl border-b-2 p-3 ">
                <i class="fa-solid fa-credit-card"></i> card
              </li>
              <li className=" flex items-center gap-2 text-xl border-b-2 p-3 ">
                <i class="fa-solid fa-user"></i> ON Account
              </li>
              <li className=" flex items-center gap-2 text-xl border-b-2 p-3 ">
                <i class="fa-solid fa-credit-card"></i> UPI
              </li>
            </ul>
          </div>
          <div className="col-span-9">
            <form>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Enter Amount"
                  className="border-2 p-2 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="border-2 p-2 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Enter Number"
                  className="border-2 p-2 rounded-md"
                />
                <div className="flex justify-between items-center gap-2 mb-0">
                  <button className="bg-primary text-white p-2 rounded-md">
                    complete Payment
                  </button>
                  <button
                    className="bg-red-500 text-white p-2 rounded-md"
                    onClick={() => setPayment(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
