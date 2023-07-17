import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Card from "../../../../components/Card";
import logo from "../../../../../../public/assets/img/logo.png";
import Image from 'next/image';

const AddCarForm = () => {
    return (

        <div>
        <Card className={"flex justify-center  flex-wrap "}>
          <div className='flex flex-col'>
          <Image src={logo} alt="logo image" width="150" height="150"/>
            <h1 className="text-lg font-medium mb-5">Add new Car</h1>
            <Input 
              type="text"
              inputSize="small"
              className={"rounded-lg"} 
              error = {false} 
              haveLabel = {true} 
              label = "Car Name"
            ></Input>
            <Input 
              type="text"
              inputSize="small"
              className={"rounded-lg"} 
              error = {false} 
              haveLabel = {true} 
              label = "Car Number"
            ></Input>
            <Input 
              type="text"
              inputSize="small"
              className={"rounded-lg"} 
              error = {false} 
              haveLabel = {true} 
              label = "Car price/hour "
              placeholder = "price/hour"
            ></Input>
            <label>Car Description </label>
            <textarea></textarea>
            
            <Button
              className="bg-emerald-500"
              type = "button"
              buttonSize = "small"
              fullWidth = {false}
              loading = {false}
            >
              Add the car
            </Button>
          </div>
        </Card>
    </div>
      
    );
}
export default AddCarForm;
