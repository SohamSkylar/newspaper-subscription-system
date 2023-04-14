import React from "react";
import Sidebar from "../components/Sidebar";
import { useFormik } from "formik";

const Comp3 = () => {
  const formik = useFormik({
    initialValues: {
      subscriptionName: "",
      duration: "",
      subscriptionId: "",
      paperId: "",
      price: ""
    },
    validate: false,
    validateOnBlur: false,
    validateOnChange: false,
    // onSubmit: async (values) => {
    //   let toastBox = toast.loading("Loading...");
    //   let registerPromise = addNewspaper(values);
    //   registerPromise.then(
    //     () => {
    //       toast.success("Added Successfully!", {
    //         id: toastBox,
    //       });
    //     },
    //     (msg) => {
    //       toast.error(`${msg}`, {
    //         id: toastBox,
    //       });
    //     }
    //   ).catch((err) => {
    //     toast.error(`${err}`, {
    //       id: toastBox,
    //     });
    //   })
    // },
  });
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <div class="border-b border-gray-900/10 pb-12 p-14">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Subscription Type
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div class="mt-10 space-y-10">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="subscriptionName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Subscription name
                  </label>
                  <div className="mt-2">
                    <input
                      {...formik.getFieldProps("subscriptionName")}
                      required
                      type="text"
                      name="subscriptionName"
                      id="subscriptionName"
                      autoComplete="name"
                      className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="duration"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Duration
                  </label>
                  <div className="mt-2">
                    <input
                      {...formik.getFieldProps("duration")}
                      required
                      type="number"
                      name="duration"
                      id="duration"
                      autoComplete="duration"
                      className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="mt-8 p-2 px-4">
              ADD
            </button>
          </form>
        </div>
        <div class="border-b border-gray-900/10 pb-12 p-14">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Subscription
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>

          <form onSubmit={formik.handleSubmit}>
            <div class="mt-10 space-x-10 flex">
              <div className="sm:col-span-3">
                <label
                  htmlFor="subscriptionId"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Subscription ID
                </label>
                <div className="mt-2">
                  <select
                    {...formik.getFieldProps("subscriptionId")}
                    required
                    id="subscriptionId"
                    name="subscriptionId"
                    autoComplete="country-name"
                    className="p-4 block w-32 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {/* <option value="">Select :</option>
                    {companyNames.map((data) => {
                      return (
                        <option key={data.company_id} value={data.company_id}>
                          {data.company_id}
                        </option>
                      );
                    })} */}
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="paperId"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Paper ID
                </label>
                <div className="mt-2">
                  <select
                    {...formik.getFieldProps("paperId")}
                    required
                    id="paperId"
                    name="paperId"
                    autoComplete="country-name"
                    className="block w-32 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {/* <option value="">Select :</option>
                    {companyNames.map((data) => {
                      return (
                        <option key={data.company_id} value={data.company_id}>
                          {data.company_id}
                        </option>
                      );
                    })} */}
                  </select>
                </div>
              </div>

            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Price
                </label>
                <div className="mt-2">
                  <input
                    {...formik.getFieldProps("price")}
                    required
                    type="number"
                    name="price"
                    id="price"
                    autoComplete="price"
                    className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="mt-8 p-2 px-4">
              ADD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comp3;
