"use client";

import { useState } from "react";

const Products = () => {
  const [data, setData] = useState();
  fetch("https://car-service-aif1.onrender.com/api/cars/all", {
    method: "GET",
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkwMzE2Mjg1LCJleHAiOjE2OTA5MjEwODUsImF1ZCI6IioiLCJpc3MiOiJjYXJfc2VydmljZSJ9.acfjX0Zsh3T3LBaqDVfyKRqKBwK20Y2KWmKt5FLV8g4`,
              "Content-Type": "application/json"},
  })
    .then((response) => response.json())
    .then((response) => {
      // setData(response[0]);
      console.log(response);

    })
    .catch((error) => {
      console.error(error);
    });

    return (
      <div>
       m 
      </div>
    )
  }
  
  export default Products;