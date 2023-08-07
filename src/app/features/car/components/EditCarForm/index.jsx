"use client";
import Button from "../../../../components/Button";
import Inputcom from "../../../../components/Inputcom";
import Card from "../../../../components/Card";
import logo from "../../../../../../public/assets/img/logo.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const EditCarForm = () => {
  const searchParams = useSearchParams();
  const searchParas = {
    id: searchParams.get("ID"),
    theName: searchParams.get("NAME"),
    brand: searchParams.get("CAR_BRAND"),
    rentalPrice: searchParams.get("CAR_PRICE"),
    description: searchParams.get("CAR_DESCRIPTION"),
    picture: searchParams.get("CAR_PICTURE"),
    discount: searchParams.get("CAR_DISCOUNT"),
  };
  const [result, setResult] = useState("");
  const [file, setFile] = useState();
  const [specifications, setSpecifications] = useState({});
  const [preview, setpreview] = useState(
    `http://157.175.56.75:7425${searchParas?.picture}`
  );
  const [Car, setCar] = useState(searchParas);
  function handlechange(event) {
    setFile(event.target.files[0]);
  }

  useEffect(() => {
    if (file) {
      const fileObj = URL.createObjectURL(file);
      setpreview(fileObj);

      return () => URL.revokeObjectURL(fileObj);
    }
  }, [file]);

  const formdata = new FormData();
  formdata.append("name", Car.theName);
  formdata.append("brand", Car.brand);
  formdata.append("rentalPrice", Car.rentalPrice);
  formdata.append("discount", Car.discount);
  formdata.append("description", Car.description);
  formdata.append("picture", file);
  // formdata.append('picture',Car.picture);

  // const onSubmit = (Car) => {
  //   return fetch(`http://157.175.56.75:7425/api/cars/${Car.id}/update`, {
  //     method: "PUT",
  //     headers: {
  //       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjkwOTI1MTE5LCJleHAiOjE2OTE1Mjk5MTksImF1ZCI6IioiLCJpc3MiOiJjYXJfc2VydmljZSJ9.4ruJap35s1NSLi0LaDcV480xixLdm21bbpiGjdgE7jI`,
  //     },
  //     body: formdata,
  //   }).then((res) => res.json());
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    setResult("Sending....");
    const res = await fetch(
      `http://157.175.56.75:7425/api/cars/${Car.id}/update`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjkwOTI1MTE5LCJleHAiOjE2OTE1Mjk5MTksImF1ZCI6IioiLCJpc3MiOiJjYXJfc2VydmljZSJ9.4ruJap35s1NSLi0LaDcV480xixLdm21bbpiGjdgE7jI`,
        },
        body: formdata,
      }
    ).then((res) => res.json());

    if (res) {
      console.log("Success", res);
    } else {
      console.log("Error", res);
      setResult("errrrrrrrr");
    }
  };
  return (
    <div className="">
      <form onSubmit={onSubmit} className="flex flex-wrap flex-row justify-between ">
        <div className="w-2/5">
          <Card className={"flex flex-wrap "}>
            <div className="flex flex-col">
              <Image
                src={logo}
                alt="logo image"
                width="150"
                height="150"
                className="m-auto"
              />
              <h1 className="text-lg font-semibold mb-5">Edit Car</h1>
              <Inputcom
                type="text"
                InputcoSize="small"
                className={"rounded mb-3"}
                error={false}
                fullWidth={true}
                haveLabel={true}
                label="Car Name"
                name="name"
                value={Car.theName}
                onchange={(e) => setCar({ ...Car, theName: e.target.value })}
              ></Inputcom>
              <Inputcom
                type="text"
                inputSize="small"
                className={"rounded mb-3"}
                error={false}
                fullWidth={true}
                haveLabel={true}
                label="Car Brand"
                name="brand"
                value={Car.brand}
                onchange={(e) => setCar({ ...Car, brand: e.target.value })}
              ></Inputcom>
              <Inputcom
                type="text"
                inputSize="small"
                className={"rounded mb-3"}
                error={false}
                fullWidth={true}
                haveLabel={true}
                label="Car price/hour "
                placeholder="price/hour"
                name="rentalPrice"
                value={Car.rentalPrice}
                onchange={(e) =>
                  setCar({ ...Car, rentalPrice: e.target.value })
                }
              ></Inputcom>
              <Inputcom
                type="text"
                inputSize="small"
                className={"rounded mb-3"}
                error={false}
                fullWidth={true}
                haveLabel={true}
                label="discount"
                name="discount"
                value={Car.discount}
                onchange={(e) =>
                  setCar({ ...Car, discount: e.target.value })
                }
              ></Inputcom>
              <label className="mb-1"> Car Description </label>
              <textarea
                className="rounded mb-2 border-solid border "
                onChange={(e) =>
                  setCar({ ...Car, description: e.target.value })
                }
                value={Car.description}
                name="description"
              />

              <Button
                className="bg-emerald-500 text-white mb-2 mt-3"
                type="submit"
                buttonSize="small"
                fullWidth={true}
                loading={false}
              >
                Add the car
              </Button>
            </div>
          </Card>
        </div>
        <div className="m-auto ">
          <Card className="">
          <Image src={preview} width={150} height={150} className="m-auto"/>
            <Inputcom
              type="file"
              className={"rounded m-auto "}
              error={false}
              haveLabel={true}
              label="Choose a new car photo"
              name="picture"
              onchange={handlechange}
              // value={file}
              // onchange={(e) => setCar({ ...Car, brand: e.target.value })}
            />
          </Card>
        </div>
      </form>
    </div>
  );
};
export default EditCarForm;

{
  /* <label className="mb-1">Car specifications</label>
              <div className="flex">
                <input
                  className="rounded mb-2 border-solid border "
                  type="text"
                  name="spe name"
                  onChange={(e) =>
                    setCar({ ...specifications, description: e.target.value })
                  }
                ></input>
                <input
                  className="rounded mb-2 border-solid border "
                  type="text"
                  name="spe value"
                  onChange={(e) =>
                    setCar({ ...Car, description: e.target.value })
                  }
                ></input>
              </div> */
}

// const updateimage = (event) => {
//   setCar(prev => {
//     return {...prev , picture: event.target.files[0]}
//   });
// }

{
  /* <Inputcom
                type="text"
                inputSize="small"
                className={"rounded mb-3"} 
                error = {false} 
                fullWidth = {true}
                haveLabel = {true} 
                label = "Car specifications"
                name = "specifications"
              ></Inputcom> */
}

{
  /* {Car.description}
              </textarea> */
}

{
  /* <textarea
                name="description"
                value={Car.description}
                onhange={handleMessageChange}
/> */
}

{
  /* <Inputcom
                type="text"
                inputSize="small"
                className={"rounded mb-3"}
                error={false}
                fullWidth={true}
                haveLabel={true}
                label="Car Description "
                name="Car Description"
                value={Car.description}
                onchange={(e) =>
                  setCar({ ...Car, description: e.target.value })
                }
              ></Inputcom> */
}

// const formData = new FormData();

// formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

// for (const key in Car) {
//   if (key === "picture") {
//     formData.append(key, Car[key][0]);
//   } else {
//     formData.append(key, Car[key]);
//   }
// }

// formdata.append('rentalPrice', Car.rentalPrice);

// function handlechange(event){
//   setFile(event.target.files[0])
// }

// const onSubmit = async (data) => {
//   setResult("Sending....");
//   const formData = new FormData();

//   formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

//   for (const key in data) {
//     if (key === "picture") {
//       formData.append(key, data[key][0]);
//     } else {
//       formData.append(key, data[key]);
//     }
//   }

//   const res = await fetch(`http://157.175.56.75:7425/api/cars/${id}/update`, {
//     method: "PUT",
//     headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjkwOTIyMDg4LCJleHAiOjE2OTE1MjY4ODgsImF1ZCI6IioiLCJpc3MiOiJjYXJfc2VydmljZSJ9.CXRtFRli7wVC4wWgEW9ckVedporkaAraf_KYmgmgLQI`,
//                },
//     body: formData
//   }).then((res) => res.json());

//   if (res) {
//     console.log("Success", res);
//   }
//    else {
//     console.log("Error", res);
//     setResult("errrrrrrrr");
//   }
// };
