"use client";
import CarCard from "../../components/CarCard";
import { TrashIconMini, PencilIconMini } from "../../lip/@heroicons";
import Image from "next/image";
import logo from "../../../../public/assets/img/logo.png";
import useAxios from "../../hooks/UseAxios";
import { useState, useEffect } from "react";
const Products = () => {


  const {responseData, error, isloading, fetchData} = useAxios('http://157.175.56.75:7425/api/cars/all','get',{
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkwMzE2Mjg1LCJleHAiOjE2OTA5MjEwODUsImF1ZCI6IioiLCJpc3MiOiJjYXJfc2VydmljZSJ9.acfjX0Zsh3T3LBaqDVfyKRqKBwK20Y2KWmKt5FLV8g4`,
  });

  useEffect(() => {
    fetchData();
  },[]);

  if (isloading) {
    return <div className="m-auto">Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

    const ToDeleteitem = (id) =>{
      return(
        fetch(`http://157.175.56.75:7425/api/cars/${id}/delete`, {
      method: "DELETE",
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjkwMzE2MzQxLCJleHAiOjE2OTA5MjExNDEsImF1ZCI6IioiLCJpc3MiOiJjYXJfc2VydmljZSJ9.mMIJC7o2rf17opJtJfWM0X6Sfxd-0CUyz68zDHMzV-A`},
    })
    .then(fetchData())
      )  
    }



  return (
    <div>
      
      <div className="flex justify-start flex-wrap ">
        {responseData.map((item) => {
          return (
            <CarCard className={"mb-5 "}>
              <div className="flex justify-between ">
                <div className="flex  flex-col">
                  <p>{item.name}</p>
                  <span className="text-slate-500">{`$${item.rentalPrice}/hour`}</span>
                </div>
                <div className="flex justify-end ">
                  <TrashIconMini className="h-6 w-6 text-red-500 cursor-pointer" onClick={()=>ToDeleteitem(item.id)}/>{" "}
                  <PencilIconMini className="h-6 w-6 text-slate-600 cursor-pointer"  onClick={()=>console.log(`edit${item.id}`)}/>
                </div>
              </div>
              <Image
                src={logo}
                alt="logo image"
                width="160"
                height="160"
                className="m-auto"
              />
            </CarCard>
          );
        })}
      </div>
    </div>  
  );
};

export default Products;
        {/* src="/_next/image?url=%2Fstatic%2F1690665875529_IMG_20190820_135345.png&w=384&q=75" */}


              {/* <Image src={item.picture} alt="car image" width="150" height="150" className="m-auto"/> */}

{/* <ul className="">
          {responseData.map((i) => (
            <li className="flex flex-row  border border-slate-600 rounded mb-2">
              <img src={i.image} width={60} height={60} />
              <div className="flex flex-col">
              {i.id}
              </div>  
            </li>
          ))}
        </ul>
    </div> */}
