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
