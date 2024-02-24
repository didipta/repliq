export const addttocart = (product, setcartitems, cartitems) => {
  const check = cartitems.find(
    (item) => item.product_id === product.product_id
  );
  if (check) {
    setcartitems(
      cartitems.map((item) =>
        item.product_id === product.product_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setcartitems([...cartitems, { ...product, quantity: 1 }]);
  }
};

export const removefromcart = (product, setcartitems, cartitems) => {
  const check = cartitems.find(
    (item) => item.product_id === product.product_id
  );
  if (check.quantity === 1) {
    setcartitems(
      cartitems.filter((item) => item.product_id !== product.product_id)
    );
  } else {
    setcartitems(
      cartitems.map((item) =>
        item.product_id === product.product_id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }
};

export const deletefromcart = (product, setcartitems, cartitems) => {
  setcartitems(
    cartitems.filter((item) => item.product_id !== product.product_id)
  );
};

export const totalamount = (cartitems) => {
  return {
    subtotal: cartitems.reduce(
      (acc, item) => acc + item.quantity * item.product_price,
      0
    ),
    tax: (
      cartitems.reduce(
        (acc, item) => acc + item.quantity * item.product_price,
        0
      ) * 0.005
    ).toFixed(2),
    shipping: 5.0,
    discount: (
      cartitems.reduce(
        (acc, item) => acc + item.quantity * item.product_price,
        0
      ) * 0.1
    ).toFixed(2),
    total: (
      cartitems.reduce(
        (acc, item) => acc + item.quantity * item.product_price,
        0
      ) +
      (cartitems.reduce(
        (acc, item) => acc + item.quantity * item.product_price,
        0
      ) *
        0.005 +
        5.0 -
        cartitems.reduce(
          (acc, item) => acc + item.quantity * item.product_price,
          0
        ) *
          0.1)
    ).toFixed(2),
  };
};
