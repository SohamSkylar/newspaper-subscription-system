import React from "react";
import Sidebar from "../components/Sidebar";
import { useFormik } from "formik";

const Comp2 = ({ open, setOpen }) => {

  const formik = useFormik({
    initialValues: {
      newspaperName: "",
      companyId: "",
      street: "",
      city: "",
      state: "",
      postalCode: ""
    },
    validate: false,
    validateOnBlur: false,
    validateOnChange: false,
    // onSubmit: async (values) => {
    //   let toastBox = toast.loading("Loading...");
    //   let loginPromise = loginUser(values);
    //   loginPromise.then(
    //     (resolve) => {
    //       toast.success("Logged in Successfully!", {
    //         id: toastBox,
    //       });
    //       localStorage.setItem("token", resolve);
    //         setOpen(false);
    //     },
    //     (msg) => {
    //       toast.error(`${msg}`, {
    //         id: toastBox,
    //       });
    //         setOpen(false);
    //     }
    //   );
    // },
  });

  return (
    <div className="flex">
      <Sidebar />
      <div>
        <div class="border-b border-gray-900/10 pb-12 p-14">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Newspaper Information
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Upload Newspaper details.
          </p>

          <form>
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label
                  for="newspaper-name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Newspaper name
                </label>
                <div class="mt-2">
                  <input
                    {...formik.getFieldProps("newspaperName")}
                    required
                    type="text"
                    name="newspaper-name"
                    id="newspaper-name"
                    autocomplete="given-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ri sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="companyId"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Company ID
                </label>
                <div class="mt-2">
                  <select
                    {...formik.getFieldProps("companyId")}
                    required
                    id="companyId"
                    name="companyId"
                    autocomplete="country-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>X-3454</option>
                    <option>Y-4545</option>
                    <option>Z-7895</option>
                  </select>
                </div>
              </div>

              <div class="col-span-full">
                <label
                  for="street-address"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div class="mt-2">
                  <input
                    {...formik.getFieldProps("street")}
                    required
                    type="text"
                    name="street-address"
                    id="street-address"
                    autocomplete="street-address"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2 sm:col-start-1">
                <label
                  for="city"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div class="mt-2">
                  <input
                    {...formik.getFieldProps("city")}
                    required
                    type="text"
                    name="city"
                    id="city"
                    autocomplete="address-level2"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="state"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div class="mt-2">
                  <input
                    {...formik.getFieldProps("state")}
                    required
                    type="text"
                    name="state"
                    id="state"
                    autocomplete="address-level1"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="postal-code"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div class="mt-2">
                  <input
                    {...formik.getFieldProps("postalCode")}
                    required
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autocomplete="postal-code"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Comp2;
