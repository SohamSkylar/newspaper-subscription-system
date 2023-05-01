import React from "react";
import Sidebar from "./components/Sidebar";
import { Toaster } from "react-hot-toast";

const AdminPanel = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}></Toaster> 
      <div className="flex">
        <Sidebar />
        <div className="p-14">
        <p className="text-8xl p-14 border-8 border-black/40 h-fit rounded-lg">Welcome to Admin Panel</p>
        </div>
        
      </div>
    </div>
  );
};

export default AdminPanel;
