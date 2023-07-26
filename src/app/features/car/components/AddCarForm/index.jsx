import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Card from "../../../../components/Card";
import logo from "../../../../../../public/assets/img/logo.png";
import Image from 'next/image';

const AddCarForm = () => {
    return (
      <div className="flex flex-row">
        <div className="w-5/12">
        <Card className={"flex flex-wrap "}>
          <div className='flex flex-col'>
          <Image src={logo} alt="logo image" width="150" height="150" className="m-auto"/>
            <h1 className="text-lg font-medium mb-5">Add new Car</h1>
            <Input 
              type="text"
              inputSize="small"
              className={"rounded mb-5"} 
              error = {false} 
              fullWidth = {true}
              haveLabel = {true} 
              label = "Car Name"
            ></Input>
            <Input 
              type="text"
              inputSize="small"
              className={"rounded mb-5"} 
              error = {false} 
              fullWidth = {true}
              haveLabel = {true} 
              label = "Car Number"
            ></Input>
            <Input 
              type="text"
              inputSize="small"
              className={"rounded mb-5"} 
              error = {false} 
              fullWidth = {true}
              haveLabel = {true} 
              label = "Car price/hour "
              placeholder = "price/hour"
            ></Input>
            <label className="mb-1">Car Description </label>
            <textarea className="rounded mb-5 border-solid border"></textarea>
            
            <Button
              className="bg-emerald-500 text-white"
              type = "button"
              buttonSize = "small"
              fullWidth = {true}
              loading = {false}
            >
              Add the car
            </Button>
          </div>
        </Card>
    </div>
        <div className="m-auto">
          <Card>
            <Input
            type="file"
            className={"rounded "} 
            error = {false} 
            haveLabel = {true} 
            label = "Add a car"          
            />
          </Card>
        </div>
      </div>
      
      
    );
}
export default AddCarForm;
