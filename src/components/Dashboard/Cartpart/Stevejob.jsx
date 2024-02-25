import React from "react";

const Stevejob = () => {
  return (
    <>
      <button
        className=" container bg-secondary p-3 flex justify-between items-center rounded-md"
        onClick={() => document.getElementById("steve_job").showModal()}
      >
        <div className=" flex items-center gap-2">
          <i className="fa-solid fa-user  text-primary text-xl px-2"></i>
          <span className="text-primary font-semibold text-lg">Steve Jobs</span>
        </div>
        <i className="fa-solid fa-solid fa-plus text-primary text-xl px-2"></i>
      </button>

      <dialog id="steve_job" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col gap-4 p-4">
            <h2 className="text-xl font-bold text-black text-center">
              Add New Customer
            </h2>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-lg font-semibold text-neutral"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="input input-secondary input-bordered"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-lg font-semibold text-neutral"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input input-secondary input-bordered"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-lg font-semibold text-neutral"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="input input-secondary input-bordered"
                placeholder="phone"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="address"
                className="text-lg font-semibold text-neutral"
              >
                Currency
              </label>
              <input
                type="text"
                id="address"
                className="input input-secondary input-bordered"
                placeholder="Currency"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="address"
                className="text-lg font-semibold text-neutral"
              >
                TAX No
              </label>
              <input
                type="text"
                id="address"
                className="input input-secondary input-bordered"
                placeholder="TAX No"
              />
            </div>

            <div className="flex items-center gap-3 text-primary font-bold">
              <i className="fa-solid fa-plus fa-save text-xl text-primary"></i>
              Add more details
            </div>

            <button className="btn btn-primary">Add Customer</button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Stevejob;
