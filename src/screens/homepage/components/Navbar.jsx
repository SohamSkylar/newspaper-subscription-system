// import React, { useEffect, useState } from "react";
// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { toast } from "react-hot-toast";
// import { activeUser } from "../../../helpers/CustomerApi";

// const navigation = [
//   { name: "Dashboard", href: "/", current: true },
//   { name: "Team", href: "/", current: false },
//   { name: "Projects", href: "/", current: false },
//   { name: "Calendar", href: "/", current: false },
// ];
// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// const Navbar = () => {
//   const [AuthTypeVal, setAuthTypeVal] = useState(false);
//   const [isAdmin, setIsAdminVal] = useState(false);
//   const [renderVal, setRenderVal] = useState(false);

//   const activeUserFunc = () => {
//     const activeUserPromise = activeUser();
//     activeUserPromise
//       .then((data) => {
//         // console.log(data)
//         if (data.type === "admin") {
//           setAuthTypeVal(true);
//           setIsAdminVal(true);
//         } else if (data.type === "customer") {
//           setAuthTypeVal(true);
//         }
//       })
//       .then(() => {
//         setRenderVal(true);
//       })
//       .catch((err) => {
//         setRenderVal(true);
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     activeUserFunc();
//     toast.remove();
//   }, []);

//   return (
//     <>
//       <Disclosure as="nav" className="bg-gray-800">
//         {({ open }) => (
//           <>
//             <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//               <div className="relative flex h-20 items-center justify-between">
//                 <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                   {/* Mobile menu button*/}
//                   <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                     <span className="sr-only">Open main menu</span>
//                     {open ? (
//                       <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                     ) : (
//                       <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                     )}
//                   </Disclosure.Button>
//                 </div>
//                 <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                   <div className="flex flex-shrink-0 items-center">
//                     <img
//                       className="block h-8 w-auto lg:hidden"
//                       src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                       alt="Your Company"
//                     />
//                     <img
//                       className="hidden h-8 w-auto lg:block"
//                       src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                       alt="Your Company"
//                     />
//                   </div>
//                   <div className="hidden sm:ml-6 sm:block">
//                     <div className="flex space-x-4">
//                       {navigation.map((item) => (
//                         <a
//                           key={item.name}
//                           href={item.href}
//                           className={classNames(
//                             item.current
//                               ? "bg-gray-900 text-white"
//                               : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                             "rounded-md px-3 py-2 text-sm font-medium"
//                           )}
//                           aria-current={item.current ? "page" : undefined}
//                         >
//                           {item.name}
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                   <button
//                     type="button"
//                     className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                   >
//                     <span className="sr-only">View notifications</span>
//                     <BellIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>

//                   {/* Profile dropdown */}
//                   <Menu as="div" className="relative ml-3">
//                     <div>
//                       <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                         <span className="sr-only">Open user menu</span>
//                         <img
//                           className="h-8 w-8 rounded-full"
//                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                           alt=""
//                         />
//                       </Menu.Button>
//                     </div>
//                     <Transition
//                       as={Fragment}
//                       enter="transition ease-out duration-100"
//                       enterFrom="transform opacity-0 scale-95"
//                       enterTo="transform opacity-100 scale-100"
//                       leave="transition ease-in duration-75"
//                       leaveFrom="transform opacity-100 scale-100"
//                       leaveTo="transform opacity-0 scale-95"
//                     >
//                       <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                         <Menu.Item>
//                           {({ active }) => (
//                             <a
//                               href="#"
//                               className={classNames(
//                                 active ? "bg-gray-100" : "",
//                                 "block px-4 py-2 text-sm text-gray-700"
//                               )}
//                             >
//                               Your Profile
//                             </a>
//                           )}
//                         </Menu.Item>
//                         <Menu.Item>
//                           {({ active }) => (
//                             <a
//                               href="#"
//                               className={classNames(
//                                 active ? "bg-gray-100" : "",
//                                 "block px-4 py-2 text-sm text-gray-700"
//                               )}
//                             >
//                               Settings
//                             </a>
//                           )}
//                         </Menu.Item>
//                         {renderVal ? <Menu.Item>
//                           {({ active }) => (
//                             <a
//                               href="#"
//                               className={classNames(
//                                 active ? "bg-gray-100" : "",
//                                 "block px-4 py-2 text-sm text-gray-700"
//                               )}
//                             >
//                               Sign In
//                             </a>
//                           )}
//                         </Menu.Item> : <Menu.Item>
//                           {({ active }) => (
//                             <a
//                               href="#"
//                               className={classNames(
//                                 active ? "bg-gray-100" : "",
//                                 "block px-4 py-2 text-sm text-gray-700"
//                               )}
//                             >
//                               Sign Out
//                             </a>
//                           )}
//                         </Menu.Item>}
//                       </Menu.Items>
//                     </Transition>
//                   </Menu>
//                 </div>
//               </div>
//             </div>

//             <Disclosure.Panel className="sm:hidden">
//               <div className="space-y-1 px-2 pb-3 pt-2">
//                 {navigation.map((item) => (
//                   <Disclosure.Button
//                     key={item.name}
//                     as="a"
//                     href={item.href}
//                     className={classNames(
//                       item.current
//                         ? "bg-gray-900 text-white"
//                         : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                       "block rounded-md px-3 py-2 text-base font-medium"
//                     )}
//                     aria-current={item.current ? "page" : undefined}
//                   >
//                     {item.name}
//                   </Disclosure.Button>
//                 ))}
//               </div>
//             </Disclosure.Panel>
//           </>
//         )}
//       </Disclosure>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-scroll";

import { GiHamburgerMenu, GiIvoryTusks } from "react-icons/gi";
import SignUp from "../../../globalComponents/SignUp";
import SignIn from "../../../globalComponents/SignIn";
import { activeUser } from "../../../helpers/CustomerApi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [AuthTypeVal, setAuthTypeVal] = useState(false);
  const [isAdmin, setIsAdminVal] = useState(false);
  const [renderVal, setRenderVal] = useState(false);

  const handleClose = () => setNav(!nav);
  const handleSignUpModal = () => {
    setSignUpModal(true);
  };
  const handleSignInModal = () => {
    setSignInModal(true);
  };

  const handledeleteToken = () => {
    localStorage.removeItem("token");
    setRenderVal(false);
  };

  const activeUserPromise = activeUser();
  activeUserPromise
    .then((data) => {
      // console.log(data)
      if (data.type === "admin") {
        setAuthTypeVal(true);
        setIsAdminVal(true);
      } else if (data.type === "customer") {
        setAuthTypeVal(true);
      }
    })
    .then(() => {
      setRenderVal(true);
    })
    .catch((err) => {
      setRenderVal(false);
      // console.log(err);
    });

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">NEWSPAY</h1>
          <ul className="hidden md:flex">
            <li>
              <Link
                to="homePage"
                smooth={true}
                duration={500}
                className="hover: cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="cardSection"
                smooth={true}
                offset={-200}
                duration={500}
                className="hover: cursor-pointer"
              >
                Papers
              </Link>
            </li>
            <li>
              <Link
                to="support"
                smooth={true}
                offset={-50}
                duration={500}
                className="hover: cursor-pointer"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                to="platforms"
                smooth={true}
                offset={-100}
                duration={500}
                className="hover: cursor-pointer"
              >
                Platforms
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                smooth={true}
                offset={-50}
                duration={500}
                className="hover: cursor-pointer"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        {renderVal ? (
          <div className="hidden md:flex pr-4">
            <button
              className="px-8 py-3 bg-slate-900 text-white"
              onClick={handledeleteToken}
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="hidden md:flex pr-4">
            <button
              className="border-none bg-transparent text-black mr-4"
              onClick={handleSignInModal}
            >
              Sign In
            </button>
            <button className="px-8 py-3" onClick={handleSignUpModal}>
              Sign Up
            </button>
          </div>
        )}
        {
          <div className="md:hidden mr-4" onClick={handleClick}>
            {!nav ? (
              <GiHamburgerMenu className="w-5" />
            ) : (
              <GiIvoryTusks className="w-5" />
            )}
          </div>
        }
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Platforms
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>

        {renderVal ? (
          <div className="flex flex-col my-4">
            <button
              className="px-8 py-3  bg-slate-900 text-white"
              onClick={handledeleteToken}
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="flex flex-col my-4">
            <button
              className="bg-transparent text-indigo-600 px-8 py-3 mb-4"
              onClick={handleSignInModal}
            >
              Sign In
            </button>
            <button className="px-8 py-3" onClick={handleSignUpModal}>
              Sign Up
            </button>
          </div>
        )}
      </ul>
      <SignUp open={signUpModal} setOpen={(bool) => setSignUpModal(bool)} />
      <SignIn open={signInModal} setOpen={(bool) => setSignInModal(bool)} />
    </div>
  );
};

export default Navbar;
