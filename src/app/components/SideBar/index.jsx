"use client";

import React from "react";
import {
  HomeIconMini,
  ArchiveBoxIconMini,
  ArrowRightOnRectangleIconMini,
} from "../../lip/@heroicons";
import Link from "next/link";

const SideBar = () => {
  return (
    <>
    {/* flex justify-between items-center bg-white  shadow-md  top-0 fixed w-full z-50 */}
      <nav className="p-5 pt-8  bg-white w-2/12  bt-1 flex flex-col justify-between  fixed left-0 z-40">
        <div className="">
          <h1 className="flex mb-7 bg-slate-100 p-2 rounded">
            {" "}
            <HomeIconMini className="h-6 w-6 text-black-500 mr-3 " />
            <Link href="/dashboard/DashboardHome"> Home </Link>
          </h1>
          <h1 className="flex bg-slate-100 p-2 rounded mb-80">
            {" "}
            <ArchiveBoxIconMini className="h-6 w-6 text-black-500 mr-3" />{" "}
            <Link href="/dashboard/Products"> Products </Link>
          </h1>
        </div>
        <div>
          <h1 className="flex bg-slate-100 p-2 rounded cursor-pointer" onClick={()=>{localStorage.removeItem("Token")}}>
            {" "}
            <ArrowRightOnRectangleIconMini className="h-6 w-6 text-black-500 mr-3 " />
            log out
          </h1>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
