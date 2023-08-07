import Card from "../../components/Card";
import Image from "next/image";
import car from "../../../../public/assets/img/car.png";
import data from "../../../../public/assets/img/data.png"
const DashboardHome = () => {
  return (
    <div className="flex flex-wrap flex-row justify-between w-full font-medium ">
      <div className="">
        <Card className={"mr-3"}>
        Overview
          <div className="flex flex-row justify-between mb-6 mt-3">
            <Card className={"bg-slate-50 "}>
              <h1 className="m-auto ">Customers</h1>
              <h1 className="m-auto text-slate-400">22</h1>
            </Card>
            <Card className={"bg-slate-50"}>
            <h1 className="m-auto">Income</h1>
              <h1 className="m-auto text-slate-400">$27,225000</h1>
            </Card>
          </div>
          <Image src={data} width={350} height={350} className="m-auto"/>
        </Card>
      </div>
      <div className="flex flex-col justify-between ">
        <div className="mb-3">
          <Card className={""}>
            Statistics
            <Card className={"bg-slate-50 mb-3 mt-3"}>
            <h1 className="m-auto">Number of Available Cars</h1>
              <h1 className="m-auto text-slate-400">15</h1>
            </Card>
            <Card className={"bg-slate-50"}>
            <h1 className="m-auto">Number of all Cars</h1>
              <h1 className="m-auto text-slate-400">50</h1>
            </Card>
          </Card>
        </div>
        <div>
          <Card>
            <h1> Best Seller</h1>
            <Image src={car} width={300} height={300} className="m-auto" />
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
