import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { activeUser } from "../../../helpers/CustomerApi";
import AdminSignIn from "../../../globalComponents/AdminSignIn";

const Sidebar = () => {
  const [menuItem, setMenuItem] = useState([]);
  const [signInModal, setSignInModal] = useState(false);

  const [open, setOpen] = useState(true);
  const [isAdmin, setIsAdminVal] = useState(false);

  const handleSignInModal = () => {
    setSignInModal(true);
  };

  const handledeleteToken = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    const adminMenu = [
      {
        name: "dashboard",
        link: "/adminpanel/partner",
        icon: MdOutlineDashboard,
      },
      { name: "user", link: "/adminpanel/paper", icon: AiOutlineUser },
      {
        name: "messages",
        link: "/adminpanel/subscription",
        icon: FiMessageSquare,
      },
      { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
      { name: "File Manager", link: "/", icon: FiFolder },
      { name: "Cart", link: "/", icon: FiShoppingCart },
      { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
      { name: "Setting", link: "/", icon: RiSettings4Line }
    ];

    const nonAdminMenu = [{ name: "Sign in", icon: RiSettings4Line }];

    const activeUserFunc = () => {
      const activeUserPromise = activeUser();
      activeUserPromise
        .then((data) => {
          // console.log(data)
          if (data.type === "admin") {
            setIsAdminVal(true);
            setMenuItem(adminMenu);
          } else {
            setMenuItem(nonAdminMenu);
          }
        })
        .catch((err) => {
          setMenuItem(nonAdminMenu);
        });
    };
    activeUserFunc();
    function handleResize() {
      if (window.innerWidth > 900) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="flex gap-6">
        <div
          className={`bg-[#0e0e0e] min-h-screen ${
            open ? "w-72" : "w-16"
          } duration-500 text-gray-100 px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {isAdmin
              ? menuItem?.map((menu, i) => (
                  <Link
                    to={menu?.link}
                    key={i}
                    className={` ${
                      menu?.margin && "mt-5"
                    } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                  >
                    <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                    <h2
                      style={{
                        transitionDelay: `${i + 3}00ms`,
                      }}
                      className={`whitespace-pre duration-500 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      {menu?.name}
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                    >
                      {menu?.name}
                    </h2>
                  </Link>
                ))
              : menuItem?.map((menu, i) => (
                  <Link
                    onClick={handleSignInModal}
                    key={i}
                    className={` ${
                      menu?.margin && "mt-5"
                    } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                  >
                    <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                    <h2
                      style={{
                        transitionDelay: `${i + 3}00ms`,
                      }}
                      className={`whitespace-pre duration-500 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      {menu?.name}
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                    >
                      {menu?.name}
                    </h2>
                  </Link>
                ))}
            {isAdmin ? (
              <Link
                onClick={handledeleteToken}
                className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
              >
                <div>
                  {React.createElement(RiSettings4Line, { size: "20" })}
                </div>
                <h2
                  style={{
                    transitionDelay: `${9 + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Sign out
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Sign out
                </h2>
              </Link>
            ) : null}
          </div>
        </div>
        <div className="m-3 text-xl text-gray-900 font-semibold"></div>
      </section>
      <AdminSignIn
        open={signInModal}
        setOpen={(bool) => setSignInModal(bool)}
      />
    </>
  );
};

export default Sidebar;
