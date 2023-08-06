"use client";
import CarCard from "../../components/CarCard";
import { TrashIconMini, PencilIconMini } from "../../lip/@heroicons";
import logo from "../../../../public/assets/img/logo.png";
import useAxios from "../../hooks/UseAxios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Modal from "../../components/Modal";
import ClipLoader from "react-spinners/ClipLoader";


import Link from "next/link";
import Delete from "../../components/Delete";
const Products = () => {
  // const navigate = useNavigate();

  const router = useRouter();
  const { responseData, error, isloading, fetchData } = useAxios(
    "http://157.175.56.75:7425/api/cars/all",
    "get",
    {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkwOTIyODEzLCJleHAiOjE2OTE1Mjc2MTMsImF1ZCI6IioiLCJpc3MiOiJjYXJfc2VydmljZSJ9.dppSYtaesocVQs1Mkvz0J4VcfmKa59Wu1QT8980HhQE`,
    }
  );

  useEffect(() => {
    fetchData();
  }, []);

  // if (isloading) {
  //   return <div className=""><ClipLoader color="#10b981" size={100} /></div>;
  // }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const ToDeleteitem = (id) => {
    return fetch(`http://157.175.56.75:7425/api/cars/${id}/delete`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjkwOTI1MTE5LCJleHAiOjE2OTE1Mjk5MTksImF1ZCI6IioiLCJpc3MiOiJjYXJfc2VydmljZSJ9.4ruJap35s1NSLi0LaDcV480xixLdm21bbpiGjdgE7jI`,
      },
    }).then(fetchData());
  };
  return (
    <div>
     { (isloading) ? <ClipLoader color="#10b981" size={130} />
      :<div className="flex justify-start flex-wrap  ">
        {responseData.map((item) => {
          console.log(item.picture);
          return (
            <CarCard className="mb-5 h-64 w-80">
              <div className="flex justify-between  ">
                <div className="flex  flex-col">
                  <p>{item.name}</p>
                  <span className="text-slate-500">{`$${item.rentalPrice}/hour`}</span>
                </div>
                <div className="flex justify-end ">

                <TrashIconMini
                    className="h-6 w-6 text-red-500 cursor-pointer"
                    onClick={() => ToDeleteitem(item.id)}
                  /> 
                  {/* <Modal
                    header="Are you sure to delete?"
                    children={<></>}
                    title={
                      <TrashIconMini
                        className="h-6 w-6 text-red-500 cursor-pointer"
                        onClick={() => ToDeleteitem(item.id)}
                      />
                    }
                    classNamee=""
                    firstButton="yes"
                  /> */}
                  {/*  */}
                  <Link
                    href={{
                      pathname: "pages/edit-car",
                      query: {
                        ID: item.id,
                        NAME: item.name,
                        CAR_BRAND: item.brand,
                        CAR_PRICE: item.rentalPrice,
                        CAR_DESCRIPTION: item.description,
                        CAR_PICTURE: item.picture,
                      },
                    }}
                  >
                    <PencilIconMini className="h-6 w-6 text-slate-600 cursor-pointer" />
                  </Link>
                </div>
              </div>
              <Image
                src={`http://157.175.56.75:7425${item.picture}`}
                alt="car image"
                width={160}
                height={160}
                className="m-auto"
              />
              {/* <img src={`"${item.picture}"`} alt="car image" /> */}
            </CarCard>
          );
        })}
      </div>}
    </div>
  );
};

{

}

{
  /* <PencilIconMini className="h-6 w-6 text-slate-600 cursor-pointer" 
                   onClick={()=>{
                    // router.push('pages/edit-car');

                    // { navigate('pages/edit-car',{state:{ID:item.id}})}


                   }}
                   /> */
}

// router.push({
//   pathname: 'pages/edit-car',
//   query: {
//     myData: item.rentalPrice
//    }
// });
export default Products;
{
  /* src="/_next/image?url=%2Fstatic%2F1690665875529_IMG_20190820_135345.png&w=384&q=75" */
}

{
  /* <Image src={item.picture} alt="car image" width="150" height="150" className="m-auto"/> */
}

{
  /* <ul className="">
          {responseData.map((i) => (
            <li className="flex flex-row  border border-slate-600 rounded mb-2">
              <img src={i.image} width={60} height={60} />
              <div className="flex flex-col">
              {i.id}
              </div>  
            </li>
          ))}
        </ul>
    </div> */
}
