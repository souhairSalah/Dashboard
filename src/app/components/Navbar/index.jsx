import React from "react";
import Image from "next/image";
import logo from "../../../../public/assets/img/logo.png";
import AdminImage from "../../../../public/assets/img/admin.jpg";

const Navbar = () => {
  return (
    <>
    {/* bg-white flex justify-between shadow-md */}
      <nav className="      flex justify-between items-center mb-10  bg-white   top-0 fixed w-full z-50">
        {/* <div className="flex flex-col"> */}
          <Image
            src={logo}
            alt="logo image"
            width="160"
            height="160"
            className=""
          />
          {/* <h1>Admin</h1> */}
        {/* </div> */}

        <Image
          src={AdminImage}
          alt="Admin Image"
          className=" rounded-full h-12 w-12 mt-auto mb-auto mr-6"
        />
      </nav>
    </>
  );
};

export default Navbar;
