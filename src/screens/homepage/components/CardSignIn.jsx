import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ImUserPlus } from "react-icons/im";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { loginUser } from "../../../helpers/CustomerApi";
import SignUp from "../../../globalComponents/SignUp";
import { useState } from "react";

const CardSignIn = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);
  const [signUpModal, setSignUpModal] = useState(false);

  const handleSignUpModal = () => {
    setOpen(false);
    setSignUpModal(true);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: false,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let toastBox = toast.loading("Loading...");
      let loginPromise = loginUser(values);
      loginPromise.then(
        (resolve) => {
          toast.success("Logged in Successfully!", {
            id: toastBox,
          });
          localStorage.setItem("token", resolve);
          setOpen(false);
          window.location.reload();
        },
        (msg) => {
          toast.error(`${msg}`, {
            id: toastBox,
          });
          setOpen(false);
        }
      );
    },
  });

  return (
    <>
      {/* <Toaster position="top-center" reverseOrder={false}></Toaster> */}
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
                            as="h1"
                            className="text-5xl font-semibold leading-6 text-gray-900"
                          >
                            Sign in
                          </Dialog.Title>
                        </div>
                      </div>
                      <div className="mt-8">
                        <input
                          type="email"
                          {...formik.getFieldProps("email")}
                          autoComplete="email"
                          placeholder="email"
                          className="block w-5/6 px-3 py-1.5 mt-3 text-center mx-auto text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          required
                        />
                        <input
                          type="password"
                          autoComplete="current-password"
                          {...formik.getFieldProps("password")}
                          placeholder="password"
                          className="block w-5/6 px-3 py-1.5 mt-3 text-center mx-auto text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          required
                        />
                        <div className="w-full mt-3 mx-auto text-end text-base font-medium text-gray-600">
                          Not Registered?
                          <button type="button" onClick={handleSignUpModal} className="hover:cursor-pointer mr-10 text-base font-medium text-rose-400 hover:bg-zinc-100 ml-1 border-none">
                            Register now
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-rose-500 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto border-white"
                      >
                        Sign in
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
      <SignUp open={signUpModal} setOpen={(bool) => setSignUpModal(bool)} cardSignIn={true} />
    </>
  );
};

export default CardSignIn;
