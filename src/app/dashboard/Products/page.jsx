"use client";
import CarCard from "../../components/CarCard";
import {TrashIconMini, PencilIconMini} from "../../lip/@heroicons";

import Image from "next/image";
import logo from "../../../../public/assets/img/logo.png";

// import Image from 'next/image';
 
import { useState, useEffect } from "react";
const Products = () => {
  const [data, setData] = useState([]);
  // let da = null ;
  useEffect(() => {
    fetch("http://157.175.56.75:7425/api/cars/all", {
      method: "GET",
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkwMzE2Mjg1LCJleHAiOjE2OTA5MjEwODUsImF1ZCI6IioiLCJpc3MiOiJjYXJfc2VydmljZSJ9.acfjX0Zsh3T3LBaqDVfyKRqKBwK20Y2KWmKt5FLV8g4`,
                "Content-Type": "application/json"},
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        console.log(response);
  
      })
      .catch((error) => {
        console.error(error);
      });
  
  },[]);
 
    return (
   
      <div>
        vv


    <div className="flex justify-start flex-wrap ">
      
      {data.map((item) =>
       {
        return(
          <CarCard className={"mb-5 "}>
            {/* <p>{item.id}</p> */}
            <div  className="flex justify-between ">
              <div className="flex  flex-col">
                <p>{item.name}</p>
                <span className="text-slate-500">{`$${item.rentalPrice}/hour`}</span>
              </div>
            <div className="flex justify-end "><TrashIconMini className="h-6 w-6 text-red-500"/> <PencilIconMini className="h-6 w-6 text-slate-600"/></div>
            </div>

            <Image src={logo} alt="logo image" width="160" height="160" className="m-auto"/>

            {/* <Image src={item.picture} alt="car image" width="150" height="150" className="m-auto"/> */}


          </CarCard>

        )
       }
       )}
     {/* src="/_next/image?url=%2Fstatic%2F1690665875529_IMG_20190820_135345.png&w=384&q=75" */}

      </div>
{/*  */}
 

      </div>
    )
  }
  
  export default Products;