// import SignInForm from "@/app/features/authentication/components/SignInForm";
import { Poppins } from "next/font/google";
import SignInForm from "../../features/authentication/components/SignInForm";
import AddCarForm from "../../features/car/components/AddCarForm"

const poppins = Poppins({subset:['latin'],weight:['400'], preload:false});

const AddCar = () => {

  return (
    <div className={` ${poppins.className}`}>
      <AddCarForm />
    </div>
    
  );
};

export default AddCar;