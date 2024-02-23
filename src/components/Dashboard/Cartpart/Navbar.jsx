import React from "react";

const Navbar = () => {
  const items = [
    {
      id: 1,
      name: "Note",
      icon: "fa-solid fa-clipboard-list",
    },
    {
      id: 2,
      name: "Shipping",
      icon: "fa-solid fa-truck",
    },
    {
      id: 3,
      name: "Hold Orders",
      icon: "fa-solid fa-hand-paper",
    },
    {
      id: 4,
      name: "New item",
      icon: "fa-solid fa-plus",
    },
  ];
  return (
    <div className=" container flex justify-between items-center p-2">
      <label className="px-2 cursor-pointer" htmlFor="menuBar">
        <i class="fa-solid fa-bars text-xl px-2"></i>
      </label>

      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between gap-3 rounded-md items-center bg-secondary px-5 py-2"
        >
          <i className={`text-xl ${item.icon} text-primary`}></i>
          <span className="text-primary font-semibold text-lg md:block hidden">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
