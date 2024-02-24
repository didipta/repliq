import React from "react";

const Cartitems = ({ cartitems, updateCart }) => {
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
    </div>
  );
};

export default Cartitems;
