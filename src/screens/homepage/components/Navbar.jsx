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
        setRenderVal(true);
      } else if (data.type === "customer") {
        setRenderVal(true);
      }
    })
    .catch((err) => {
      setRenderVal(false);
      // console.log(err);
    });

    const styleBeige = {backgroundColor: "#DEF2F1"}
    const styleGrey = {color: "#17252A"}


  return (
    <div className="w-screen h-[80px] z-10 fixed drop-shadow-lg" style={{...styleBeige, ...styleGrey}}>
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl font-face-bwb">PAPERPORTAL</h1>
          <ul className="hidden md:flex font-face-bwr">
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
                to="contactUs"
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
            <li>
              <Link
                to="platforms"
                smooth={true}
                offset={-100}
                duration={500}
                className="hover: cursor-pointer"
              >
                Status
              </Link>
            </li>
          </ul>
        </div>
        {renderVal ? (
          <div className="hidden md:flex pr-4">
            <button
              className="px-8 py-3 bg-slate-900 text-white font-face-bwr"
              onClick={handledeleteToken}
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="hidden md:flex pr-4">
            <button
              className="border-none bg-transparent text-black mr-4 font-face-bwr"
              onClick={handleSignInModal}
            >
              Sign In
            </button>
            <button className="px-8 py-3 font-face-bwr" onClick={handleSignUpModal}>
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

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 font-face-bwr"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="homePage" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="cardSection"
            smooth={true}
            offset={-200}
            duration={500}
          >
            Papers
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="contactUs"
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
              className="px-8 py-3  bg-slate-900 text-white font-face-bwr"
              onClick={handledeleteToken}
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="flex flex-col my-4">
            <button
              className="bg-transparent text-black px-8 py-3 mb-4 font-face-bwr"
              onClick={handleSignInModal}
            >
              Sign In
            </button>
            <button className="px-8 py-3 font-face-bwr" onClick={handleSignUpModal}>
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
