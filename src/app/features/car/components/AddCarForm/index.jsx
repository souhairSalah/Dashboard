"use client";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Card from "../../../../components/Card";
import logo from "../../../../../../public/assets/img/logo.png";
import Image from 'next/image';
import {useForm} from "react-hook-form";
import { useState } from "react";

const AddCarForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const addname=()=>{
  }

  const onSubmit = async (data) => {
    // console.log(data);

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

    const res = await fetch("http://157.175.56.75:7425/api/cars/create", {
      method: "POST",
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjkwOTI1MTE5LCJleHAiOjE2OTE1Mjk5MTksImF1ZCI6IioiLCJpc3MiOiJjYXJfc2VydmljZSJ9.4ruJap35s1NSLi0LaDcV480xixLdm21bbpiGjdgE7jI`,
                 },
      body: formData
    }).then((res) => res.json());

    if (res) {
      console.log("Success", res);
      // setResult(res.name);
    }
     else {
      console.log("Error", res);
      setResult("errrrrrrrr");
    }
  };



    return (
      <div className="flex flex-row ">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="">
        {/* w-5/12 */}
        <Card className={"flex flex-wrap "}>
          <div className='flex flex-col'>
          <Image src={logo} alt="logo image" width="150" height="150" className="m-auto"/>
            <h1 className="text-lg font-medium mb-5">Add new Car</h1>
              <Input 
                type="text"
                inputSize="small"
                className={"rounded mb-3"} 
                error = {false} 
                fullWidth = {true}
                haveLabel = {true} 
                label = "Car Name"
                name = "name"
                register={register}
              
              ></Input>
               <Input 
                type="text"
                inputSize="small"
                className={"rounded mb-3"} 
                error = {false} 
                fullWidth = {true}
                haveLabel = {true} 
                label = "Car Brand"
                name = "brand"
                register={register}
              ></Input>
              <Input 
                type="text"
                inputSize="small"
                className={"rounded mb-3"} 
                error = {false} 
                fullWidth = {true}
                haveLabel = {true} 
                label = "Car price/hour "
                placeholder = "price/hour"
                name = "rentalPrice"
                register={register}
              ></Input>
              {/* <Input 
                type="text"
                inputSize="small"
                className={"rounded mb-3"} 
                error = {false} 
                fullWidth = {true}
                haveLabel = {false} 
                name = "spename"
                register={register}
                onchange={(e) =>
                  setSpename(e.target.value )
                }
              ></Input>
              <Input 
                type="text"
                inputSize="small"
                className={"rounded mb-3"} 
                error = {false} 
                fullWidth = {true}
                haveLabel = {false} 
                name = "spevalue"
                register={register}
                onchange={(e) =>
                  setSpevalue(e.target.value )
                }
              ></Input> */}


                {/* <input
                  className="rounded mb-2 border-solid border "
                  type="text"
                  name="spename"
                  onChange={(e) =>
                    setSpename(e.target.value )
                  }
                ></input>
                <input
                  className="rounded mb-2 border-solid border "
                  type="text"
                  name="spevalue"
                  onChange={(e) =>
                    setSpevalue(e.target.value )
                  }
                ></input> */}

              <label className="mb-1">Car Description </label>
              <textarea className="rounded mb-2 border-solid border " 
              {...register("description")}></textarea>  
              <Input
                type="file"
                className={"rounded "} 
                error = {false} 
                haveLabel = {true} 
                label = "Add a car"  
                name = "picture"
                register={register}
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
        {/* <div className="m-auto">
          <Card>
            
          </Card>
        </div> */}
        </form>
      </div>
      
      
    );
}
export default AddCarForm;

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   } = useForm({
  //    mode :"all"
  //   });

  //   const onSubmit = (data) => {
  //     const picture = data.picture[0];
  //     const formData = new FormData();

  //     formData.append("picture",picture);
  //     formData.append("name", data.name);
  //     formData.append("brand", data.brand);
  //     formData.append("rentalPrice", data.rentalPrice);
  //     formData.append("description", data.description);

  //     // console.log(Object.fromEntries(formData))


  //     fetch("https://car-service-aif1.onrender.com/api/cars/create", {
  //     method: "POST",
  //     headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjkwMzE2MzQxLCJleHAiOjE2OTA5MjExNDEsImF1ZCI6IioiLCJpc3MiOiJjYXJfc2VydmljZSJ9.mMIJC7o2rf17opJtJfWM0X6Sfxd-0CUyz68zDHMzV-A`,
  //               "Content-Type": "application/json"},
  //     body: JSON.stringify(Object.fromEntries(formData)),
  // })
  //   .then((response) => response.json())
  //   .then((response) => {
  //     console.log(response);
  //     // if (response.statusCode >= 400){
  //     //   setMessage(response.message)
  //     // }
  //     // else if(response.statusCode < 400){ 
  //     //   {router.push("/dashboard")}
  //     // }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });


  //   }


{/* <Input 
                type="text"
                inputSize="small"
                className={"rounded mb-3"} 
                error = {false} 
                fullWidth = {true}
                haveLabel = {true} 
                label = "Car specifications"
                name = "specifications"
                register={register}
              ></Input> */}
