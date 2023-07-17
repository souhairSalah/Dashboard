import React from 'react';
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Card from "../../../../components/Card";



const SignInForm = () => {
  return (
      <div>
        <Card className={"flex justify-center  flex-wrap "}>
          <div className='flex flex-col'>
            <h1 className="text-lg font-medium mb-5">Log In</h1>
            <Input 
              type="text"
              inputSize="small"
              className={"rounded-lg"} 
              error = {false} 
              haveLabel = {true} 
              label = "User Name"
              placeholder = "test@gmail.com"
            ></Input>
            <Input 
              type="password"
              inputSize="small"
              className={"rounded-lg"} 
              error = {false} 
              haveLabel = {true} 
              label = "password"
            ></Input>
            <Button
              className="bg-emerald-500"
              type = "button"
              buttonSize = "small"
              fullWidth = {false}
              loading = {false}
            >
              log in
            </Button>
          </div>
          

        </Card>
    </div>

    
  )
}

export default SignInForm