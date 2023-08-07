import Card from "../../components/Card";
import Image from "next/image";
import car from "../../../../public/assets/img/car.png";
const DashboardHome = () => {
  return (
    <div className="flex flex-wrap flex-row justify-between w-full">
      <div className="">
        <Card className={"mr-3"}>
          Overview
          <div className="flex flex-row justify-between">
            <Card className={"bg-slate-200"}>Customers {"22"}</Card>
            <Card className={"bg-slate-200"}>
              Income
              {"70"}
            </Card>
          </div>
        </Card>
      </div>
      <div className="flex flex-col justify-between ">
        <div className="mb-3">
          <Card className={""}>
            Statistics
            <Card className={"bg-slate-200 mb-3"}>
              Number of Available Cars
              {"22"}
            </Card>
            <Card className={"bg-slate-200"}>
              Number of all Cars
              {"70"}
            </Card>
          </Card>
        </div>
        <div>
          <Card>
            <h1> Best Seller</h1>
            <Image src={car} width={200} height={200} className="m-auto" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

{
  /* <div> Dashboard
<hr></hr> 
<Button
className= {"bg-teal-600"}
fullWidth = {true}
buttonSize="small"
> sign in </Button>
</div> */
}
