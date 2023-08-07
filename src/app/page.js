"use client";
import Link from "next/link";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "../app/components/Button";
import Image from "next/image";
import { useState } from "react";
import hiComponent from "./hi";
import Dashboard from "./dashboard/page";
import Card from "./components/Card";
import Delete from "./components/Delete";

// import Dashboard from "./dashboard/page";



export default function Home() {
  return (
    <div className="text-center w-4/12 m-auto text-500">
      <Card className={"flex justify-center flex-col flex-wrap mt-40  m-auto"}>
        <h1 className="mb-5">
          {" "}
          wellcome to my graduate project to start click on start !{" "}
        </h1>
        <Button
          className="bg-emerald-500 text-white w-1/5 m-auto"
          type="submit"
          buttonSize="medium"
          fullWidth={false}
          loading={false}
        >
          <Link href="/pages/sign-in"> start </Link>
        </Button>
      </Card>

      {/* <Delete/> */}
    </div>
  );
}

{
  /* <h1 className=""><Link href="/pages/sign-in"> start </Link> </h1>  */
}
