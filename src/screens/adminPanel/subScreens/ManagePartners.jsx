import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useFormik } from "formik";
import { Toaster, toast } from "react-hot-toast";
import { registerPartner } from "../../../helpers/PartnerApi";

const ManagePartners = () => {
  // const [file1, setFile1] = useState("");
  // const [img1Ready, setImg1Ready] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      company_id: "",
      img1: "",
      img2: "",
    },
    validate: false,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let toastBox = toast.loading("Loading...");
      let registerPromise = registerPartner(values);
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

  // const onUploadImg1 = async (e) => {
  //   const base64 = await convertToBase64(e.target.files[0]);
  //   setFile1(base64);
  //   formik.values.img1 = `${base64}`;
  //   setImg1Ready(true);
  // };

  return (
    <div className="flex">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Sidebar />
      <div>
        <div className="border-b border-gray-900/10 pb-12 p-14">
          <h2 className="text-2xl mt-2 font-semibold leading-7 text-gray-900">
            Partner Onboarding
          </h2>
          <p className="mt-8 text-sm leading-6 text-gray-600">
            Enter the details in the given fields.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
              <div className="sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Company Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      required
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Enter Company Name"
                      {...formik.getFieldProps("name")}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="company_id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Company ID
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      required
                      name="company_id"
                      id="company_id"
                      autoComplete="company_id"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Enter Company ID"
                      {...formik.getFieldProps("company_id")}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    {...formik.getFieldProps("email")}
                    id="email"
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="img1"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter Image Link 1
                </label>
                <div className="mt-2">
                  <input
                    {...formik.getFieldProps("img1")}
                    id="img1"
                    required
                    name="img1"
                    type="text"
                    autoComplete="img1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="img2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter Image Link 2 (optional)
                </label>
                <div className="mt-2">
                  <input
                    {...formik.getFieldProps("img2")}
                    id="img2"
                    name="img2"
                    type="text"
                    autoComplete="img2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
              <button type="submit" className="mt-2 p-2 px-4">
                ADD
              </button>
              </div>
              
              {/* <div className="col-span-full">
                <label
                  for="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Upload photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  {!img1Ready ? (
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          for="img1"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="img1"
                            name="img1"
                            type="file"
                            className="sr-only"
                            // {...formik.getFieldProps("img1")}
                            onChange={onUploadImg1}
                            required
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  ) : (
                    <div className="block mx-auto text-center">
                      <img
                        src={file1}
                        alt="Profile Pic"
                        className="w-fit h-52"
                      />
                      <button
                        type="button"
                        className="mt-2 p-2 px-4"
                        onClick={() => {formik.values.img1 = ""; console.log(formik.values.img1); setImg1Ready(false)}}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-span-full">
              <label
                for="cover-photo2"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Upload photo (Optional)
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      for="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        {...formik.getFieldProps("img2")}
                        id="file-upload2"
                        name="file-upload2"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
              <div>
                <button>SUBMIT</button>
              </div>
            </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManagePartners;
