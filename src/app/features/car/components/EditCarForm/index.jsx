"use client" ;
import Button from "../../../../components/Button";
import Inputcom from "../../../../components/Inputcom";
import Card from "../../../../components/Card";
import logo from "../../../../../../public/assets/img/logo.png";
import Image from 'next/image';
import {useForm} from "react-hook-form";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'

const EditCarForm = (dataa) => {

  const searchParams = useSearchParams();
  const [result, setResult] = useState("");

  const [Car, setCar] = useState({ 
    theName : searchParams.get('NAME'),
    brand : searchParams.get('CAR_BRAND'),
    rentalPrice : searchParams.get('CAR_PRICE'),
    description: searchParams.get('CAR_DESCRIPTION'),
  }
  );
  const onSubmit = async (data) => {
    setResult("Sending....");
    const formData = new FormData();

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    for (const key in data) {
      if (key === "picture") {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    }

    const res = await fetch(`http://157.175.56.75:7425/api/cars/${id}/update`, {
      method: "PUT",
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjkwOTIyMDg4LCJleHAiOjE2OTE1MjY4ODgsImF1ZCI6IioiLCJpc3MiOiJjYXJfc2VydmljZSJ9.CXRtFRli7wVC4wWgEW9ckVedporkaAraf_KYmgmgLQI`,
                 },
      body: formData
    }).then((res) => res.json());

    if (res) {
      console.log("Success", res);
    }
     else {
      console.log("Error", res);
      setResult("errrrrrrrr");
    }
  };
    return (
      <div className="flex flex-row ">
      <form onSubmit={onSubmit}>

        <div className="">
        <Card className={"flex flex-wrap "}>
          <div className='flex flex-col'>
          <Image src={logo} alt="logo image" width="150" height="150" className="m-auto"/>
            <h1 className="text-lg font-medium mb-5">Edit new Car</h1>
            <Inputcom 
                type="text"
                InputcoSize="small"
                className={"rounded mb-3"} 
                error = {false} 
                fullWidth = {true}
                haveLabel = {true} 
                label = "Car Name"
                name = "name"
                value= {Car.theName} 
                onchange={(e) => setCar({ ...Car, theName: e.target.value })}          
              ></Inputcom>
               < Inputcom
                type="text"
                inputSize="small"
                className={"rounded mb-3"} 
                error = {false} 
                fullWidth = {true}
                haveLabel = {true} 
                label = "Car Brand"
                name = "brand"
                value= {Car.brand} 
                onchange={(e) => setCar({ ...Car, brand: e.target.value })}          
              ></Inputcom >
              <Inputcom 
                type="text"
                inputSize="small"
                className={"rounded mb-3"} 
                error = {false} 
                fullWidth = {true}
                haveLabel = {true} 
                label = "Car price/hour "
                placeholder = "price/hour"
                name = "rentalPrice"
                value={Car.rentalPrice}
                onchange={(e) => setCar({ ...Car, rentalPrice: e.target.value })}          

              ></Inputcom >
              
              <label className="mb-1">Car Description </label>
              <textarea className="rounded mb-2 border-solid border " value={Car.description} 
                onchange={(e) => setCar({ ...Car, description: e.target.value })}          

              ></textarea>  
              <Inputcom
                type="file"
                className={"rounded "} 
                error = {false} 
                haveLabel = {true} 
                label = "Add a car"  
                name = "picture"
                // onchange={(e) => setCar({ ...Car, brand: e.target.value })}          
                // value={searchParams.get('CAR_PICture')}
                />        
              <Button
                className="bg-emerald-500 text-white mb-2 mt-3"
                type = "submit"
                buttonSize = "small"
                fullWidth = {true}
                loading = {false}
              >
                Add the car
              </Button>
            
          </div>
        </Card>
    </div>
        </form>
      </div>
      
      
    );
}
export default EditCarForm;