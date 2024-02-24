import React from "react";

const Cartitems = ({ cartitems }) => {
  return (
    <div className=" container p-2">
      <table className="table w-full border-2">
        <tbody>
          {cartitems.map((item) => (
            <tr key={item.id}>
              <td className=" text-neutral font-semibold text-base">{item.product_name}</td>
              <td>
                <div className="flex justify-between items-center">
                  <button className=" bg-secondary px-2 py-1 rounded-full">
                    <i className="fa-solid fa-minus text-lg text-red-800"></i>
                  </button>
                  <span>{item.quantity}</span>
                  <button className=" bg-secondary px-2 py-1 rounded-full">
                    <i className="fa-solid fa-plus text-lg text-green-800"></i>
                  </button>
                </div>
              </td>
              <td>{item.product_price}</td>
              <td>{item.quantity * item.product_price}</td>
              <td>
                <button>
                  <i className="fa-solid fa-trash text-lg text-red-800"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cartitems;
