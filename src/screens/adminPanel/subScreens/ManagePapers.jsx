import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useFormik } from "formik";
import { showAllPartners } from "../../../helpers/PartnerApi";
import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { addNewspaper } from "../../../helpers/NewspaperApi";

const ManagePapers = () => {
  const [companyNames, setCompanyNames] = useState([]);

  const getPartnerDataFunc = () => {
    const getPartnerPromise = showAllPartners();
    getPartnerPromise
      .then((data) => {
        setCompanyNames(data);
      })
      .catch((err) => console.log(err.message));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      company_id: "",
      img: "",
      city: "",
      state: ""
    },
    validate: false,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let toastBox = toast.loading("Loading...");
      let registerPromise = addNewspaper(values);
      registerPromise.then(
        () => {
          toast.success("Added Successfully!", {
            id: toastBox,
          });
        },
        (msg) => {
          toast.error(`${msg}`, {
            id: toastBox,
          });
        }
      ).catch((err) => {
        toast.error(`${err}`, {
          id: toastBox,
        });
      })
    },
  });

  useEffect(() => {
    getPartnerDataFunc();
  }, []);

  return (
    <div className="flex">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Sidebar />
      <div>
        <div className="border-b border-gray-900/10 pb-12 p-14">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Newspaper Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Upload Newspaper details.
          </p>

          <form onSubmit={formik.handleSubmit}>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="newspaper-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Newspaper name
                </label>
                <div className="mt-2">
                  <input
                    {...formik.getFieldProps("name")}
                    required
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>    
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="company_id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Company ID
                </label>
                <div className="mt-2">
                  <select
                    {...formik.getFieldProps("company_id")}
                    required
                    id="company_id"
                    name="company_id"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="">Select :</option>
                    {companyNames.map((data) => {
                      return (
                        <option key={data.company_id} value={data.company_id}>
                          {data.company_id}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="newspaper-image"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Newspaper Image Link
                </label>
                <div className="mt-2">
                  <input
                    {...formik.getFieldProps("img")}
                    required
                    type="text"
                    name="img"
                    id="img"
                    autoComplete="img"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>    
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    {...formik.getFieldProps("city")}
                    required
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="city"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    {...formik.getFieldProps("state")}
                    required
                    type="text"
                    name="state"
                    id="state"
                    autoComplete="state"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <button type="submit" className="mt-2 p-2 px-4">
                  ADD
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManagePapers;
