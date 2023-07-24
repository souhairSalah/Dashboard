
import React from "react";
import {HomeIconMini, ArchiveBoxIconMini} from "../../lip/@heroicons";



const SideBar = () => {
  return (
    <>
      <nav>
        <h1> <HomeIconMini className="h-6 w-6 text-black-500"/> Home</h1>
        <h1> <ArchiveBoxIconMini className="h-6 w-6 text-black-500"/>Products</h1>
      </nav>
    </>
  );
};

export default SideBar;
