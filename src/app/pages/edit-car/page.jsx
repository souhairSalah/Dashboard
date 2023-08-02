"use client";
import { Poppins } from "next/font/google";
import EditCarForm from "../../features/car/components/EditCarForm";


const poppins = Poppins({subset:['latin'],weight:['400'], preload:false});







const EditCar = () => {
  return (
    <div className={` ${poppins.className}`}>
      <EditCarForm />
    </div>
    
  );
};

export default EditCar;


//   const router = useRouter();
// const { param } = router.query;
// const [dataa, setDataa] = React.useState({})


//  const location = useLocation();
//   const id = Location.state.ID;
  

//   useEffect(() => {
//     console.log(id) ; 
// },[]);

// dataa={param}


// useEffect(() => {
//   if (myData) setDataa(JSON.parse(myData));
// }, [router.query]);