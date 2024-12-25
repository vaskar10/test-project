import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import SideBarItem from "./SideBarItem";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import DashBoard from "../DashBoard/DashBoard";

const SideBar = () => {
  const [closeBar, setBar] = useState(false);
  const toggleSidebar = () => setBar(!closeBar);
  return (
    <>
      <div
        className={`${
          closeBar
            ? "hidden"
            : "md:flex h-full w-64 flex-col fixed top-[76px] inset-y-0 z-50 p-3 bg-white"
        } transition-all duration-300`}
      >
        <div className="">
          <h1 className="flex items-center gap-2 text-lg font-medium">
            CRM <ChevronDown className="w-4 h-4" />
          </h1>

          <div className="relative mt-8">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="absolute top-3 right-3">
            <div className="bg-gray-800" onClick={toggleSidebar}>
              <ChevronLeft className="w-6 h-6 text-white cursor-pointer" />
            </div>
          </div>
        </div>

        <SideBarItem />
      </div>

      <div
        className={`${
          closeBar
            ? "flex bg-none md:bg-white w-8 md:w-16 h-full fixed top-[76px] inset-y-0 z-50 p-3"
            : "hidden"
        } transition-all duration-300`}
      >
        <div className="relative top-3">
          <div className="bg-gray-800  cursor-pointer" onClick={toggleSidebar}>
            <ChevronRight className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      <main className={`${closeBar ? "pl-12 md:pl-16" : "md:pl-64"}  h-full`}>
        <Routes>
          <Route path="/" element={<DashBoard/>} />
        </Routes>
      </main>
    </>
  );
};

export default SideBar;
