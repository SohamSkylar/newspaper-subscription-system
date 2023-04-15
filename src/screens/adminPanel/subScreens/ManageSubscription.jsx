import React from "react";
import Sidebar from "../components/Sidebar";
import { useFormik } from "formik";
import {
  addPaperSub,
  addSubType,
  showAllSubType,
} from "../../../helpers/SubscriptionApi";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";
import { showAllPapers } from "../../../helpers/NewspaperApi";
import { activeUser } from "../../../helpers/CustomerApi";

const ManageSubscription = () => {
  const [isAdmin, setIsAdminVal] = useState(false);

  const activeUserFunc = () => {
    const activeUserPromise = activeUser();
    activeUserPromise
      .then((data) => {
        // console.log(data)
        if (data.type === "admin") {
          setIsAdminVal(true);
        } else {
          setIsAdminVal(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const subTypeFormik = useFormik({
    initialValues: {
      sub_name: "",
      duration: "",
    },
    validate: false,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let toastBox = toast.loading("Loading...");
      let registerPromise = addSubType(values);
      registerPromise
        .then(
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
        )
        .catch((err) => {
          toast.error(`${err}`, {
            id: toastBox,
          });
        });
    },
  });

  const [subType, setType] = useState([]);
  const [paperID, setPaperID] = useState([]);

  const getSubIDFunc = () => {
    const getSubIDPromise = showAllSubType();
    getSubIDPromise
      .then((data) => {
        setType(data);
      })
      .catch((err) => console.log(err.message));
  };

  const getPaperIDFunc = () => {
    const getPaperPromise = showAllPapers();
    getPaperPromise
      .then((data) => {
        setPaperID(data);
      })
      .catch((err) => console.log(err.message));
  };

  const paperSubFormik = useFormik({
    initialValues: {
      sub_id: "",
      paper_id: "",
      price: "",
    },
    validate: false,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let toastBox = toast.loading("Loading...");
      let registerPromise = addPaperSub(values);
      registerPromise
        .then(
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
        )
        .catch((err) => {
          toast.error(`${err}`, {
            id: toastBox,
          });
        });
    },
  });

  useEffect(() => {
    getSubIDFunc();
    getPaperIDFunc();
    activeUserFunc();
  }, []);

  return (
    <div className="flex">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Sidebar />

      {isAdmin ? (
        <div>
          <div class="border-b border-gray-900/10 pb-12 p-14">
            <h2 class="text-base font-semibold leading-7 text-gray-900">
              Subscription Type
            </h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              We'll always let you know about important changes, but you pick
              what else you want to hear about.
            </p>
            <form onSubmit={subTypeFormik.handleSubmit}>
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
                        {...subTypeFormik.getFieldProps("sub_name")}
                        required
                        type="text"
                        name="sub_name"
                        id="sub_name"
                        autoComplete="sub_name"
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
                        {...subTypeFormik.getFieldProps("duration")}
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
              We'll always let you know about important changes, but you pick
              what else you want to hear about.
            </p>

            <form onSubmit={paperSubFormik.handleSubmit}>
              <div class="mt-10 space-x-10 flex">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="sub_id"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Subscription ID
                  </label>
                  <div className="mt-2">
                    <select
                      {...paperSubFormik.getFieldProps("sub_id")}
                      required
                      id="sub_id"
                      name="sub_id"
                      autoComplete="sub_id"
                      className="p-4 block w-32 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="">Select :</option>
                      {subType.map((data) => {
                        return (
                          <option key={data.sub_name} value={data.sub_id}>
                            {data.sub_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="paper_id"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Paper ID
                  </label>
                  <div className="mt-2">
                    <select
                      {...paperSubFormik.getFieldProps("paper_id")}
                      required
                      id="paper_id"
                      name="paper_id"
                      autoComplete="paper_id"
                      className="block w-32 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="">Select :</option>
                      {paperID.map((data) => {
                        return (
                          <option key={data.name} value={data.paper_id}>
                            {data.name}
                          </option>
                        );
                      })}
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
                      {...paperSubFormik.getFieldProps("price")}
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
      ) : (
        <h1 className="container m-auto items-center text-center text-2xl">
          ACCESS DENIED!!!
        </h1>
      )}
    </div>
  );
};

export default ManageSubscription;
