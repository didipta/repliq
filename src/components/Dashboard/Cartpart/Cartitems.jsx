import { totalamount } from "@/Service/Cart";
import React from "react";

const Cartitems = ({ cartitems, updateCart }) => {
  const totalcount = totalamount(cartitems);
  return (
    <div className=" container p-2">
      <table className="table w-full border-2">
        <tbody>
          {cartitems.map((item) => (
            <tr key={item.id}>
              <td className=" text-neutral font-semibold md:text-base text-sm">
                {item.product_name}
              </td>

              <td className=" text-neutral font-semibold text-base">
                {"$"}
                {item.product_price}
              </td>
              <td>
                <div className="flex justify-between gap-1 items-center">
                  <button
                    className=" bg-secondary w-8 h-8 rounded-full"
                    onClick={() => updateCart("remove", item)}
                  >
                    <i className="fa-solid fa-minus text-base text-red-800"></i>
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className=" bg-secondary w-8 h-8 rounded-full"
                    onClick={() => updateCart("add", item)}
                  >
                    <i className="fa-solid fa-plus text-base text-green-800"></i>
                  </button>
                </div>
              </td>
              <td className=" text-neutral font-semibold text-base">
                {"$"}
                {item.quantity * item.product_price}
              </td>
              <td>
                <button onClick={() => updateCart("delete", item)}>
                  <i className="fa-solid fa-trash md:text-lg text-base text-red-800"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {cartitems.length > 0 ? (
        <div className=" w-96  float-end mt-10">
          {Object.keys(totalcount).map((key) => {
            return (
              key !== "total" && (
                <div
                  key={key}
                  className="flex justify-between items-center p-2 border-b-2"
                >
                  <h2 className=" text-neutral font-semibold text-lg">{key}</h2>
                  <h2 className=" font-bold text-lg">
                    {"$"}
                    {totalcount[key]}
                  </h2>
                </div>
              )
            );
          })}
        </div>
      ) : (
        <p className="text-neutral font-semibold text-lg text-center">
          Your cart is empty
        </p>
      )}
    </div>
  );
};

export default Cartitems;
