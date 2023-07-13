"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import hiComponent from "./hi";
import Dashboard from "./dashboard";
// import Dashboard from "./dashboard/page";

export default function Home() {
  let items = ["gaza", "rafah", "khanyounis", "magazy"];
  // const handleClick = (event) => console.log(event);
  // let selectedIndex = 0;
  let [selectedIndex, setSelectedIndex] = useState();
  let handleSelectItem = (item) => {
    console.log(item);
  };
  // items = [];
  // const message =  items.length === 0 ? "no items" : null ;

  // if (items)
  //   return (items.map((item) => (
  //     <li key={item}>{item}</li>
  //   )));

  return (
    <>
      <hiComponent />
      <Link href="/pages/sign-in">sign in </Link>
      {/* <Dashboard /> */}
      {/* <Dashboard/> */}
      <h1>heading 1</h1>
      <div className="text-green-900"> hi graduate project </div>
      {/* {items.length === 0 && "no items"} */}
      {items.map((item, index) => (
        <li
          key={item}
          className={selectedIndex === index ? "bg-slate-500" : null}
          onClick={() => {
            setSelectedIndex(index);
            handleSelectItem(item);
          }}
        >
          {item}
        </li>
      ))}
    </>
  );
}
