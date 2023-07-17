import React from 'react';
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";


const SignInForm = () => {
  return (
    <div>
      <Input 
        type="text"
        inputSize="large"
        className={"rounded-lg"} 
        error = {true} 
        haveLabel = {true} 
        label = "first name"
      >
      </Input>
      <Input 
        type="password"
        inputSize="large"
        error = {false} 
        label = "last name" // won't display
      >
      </Input>
      
        <Button
         className="bg-emerald-500"
         type = "button"
         buttonSize = "small"
         fullWidth = {false}
         loading = {false}
         >
          sign in 
         </Button>  
    </div>
  )
}

export default SignInForm