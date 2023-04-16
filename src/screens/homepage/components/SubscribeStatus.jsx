import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ImUserPlus } from "react-icons/im";
import { useFormik } from "formik";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";
import SubStatus from "./SubStatus";

const SubscribeStatus = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);

  useEffect(() => {
  }, []);

  const formik = useFormik({
    initialValues: {
      sub_id: "",
      paper_id: "",
    },
    validate: false,
    validateOnBlur: false,
    validateOnChange: false,
    // onSubmit: async (values) => {
    //   values.paper_id = paperID;
    //   let toastBox = toast.loading("Loading...");
    //   let loginPromise = addCustomerSub(values);
    //   loginPromise.then(
    //     (resolve) => {
    //       toast.success("Successfully Purchased!", {
    //         id: toastBox,
    //       });
    //       setOpen(false);
    //     },
    //     (msg) => {
    //       toast.error(`${msg}`, {
    //         id: toastBox,
    //       });
    //       setOpen(false);
    //     }
    //   );
    // },
  });

  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="sm:flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <ImUserPlus
                            className="h-6 w-6 text-black"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-1 sm:text-left">
                          <Dialog.Title
                            as="h2"
                            className="text-4xl font-semibold leading-6 text-gray-900"
                          >
                            Select Subscription Type
                          </Dialog.Title>
                        </div>
                      </div>
                      <div className="mt-8">
                        {/* <label
                          htmlFor="sub_id"
                          className="block w-5/6 px-3 py-1.5 mt-3 text-left mx-auto text-base font-normal text-gray-700"
                        >
                          Monthly/Daily:
                        </label> */}
                        <SubStatus/>
                        <SubStatus/>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 sm:ml-3 sm:w-auto border-white"
                      >
                        Purchase
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto border-white"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default SubscribeStatus;
