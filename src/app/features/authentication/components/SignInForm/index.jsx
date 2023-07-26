import React from 'react';
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Card from "../../../../components/Card";
import Image from 'next/image';
import logo from "../../../../../../public/assets/img/logo.png";



const SignInForm = () => {
  return (
      <div className="w-4/12 m-auto">
        <Card className={"flex justify-center  flex-wrap mt-20  m-auto"}>
          <div className='flex flex-col'>
          <Image src={logo} alt="logo image" width="160" height="160" className="m-auto"/>
            <h1 className="text-lg font-medium mb-5 ">Log In</h1>
            <Input 
              type="text"
              inputSize="small"
              className={"rounded mb-5 bg-slate-100"} 
              error = {false} 
              haveLabel = {true} 
              fullWidth = {true}
              label = "User Name"
              placeholder = "hannah.green@test.com"
            ></Input>
            <Input 
              type="password"
              inputSize="small"
              className={"rounded mb-5 bg-slate-100"} 
              error = {false} 
              fullWidth = {true}
              haveLabel = {true} 
              label = "password"
            ></Input>
            <Button
              className="bg-emerald-500 text-white"
              type = "button"
              buttonSize = "small"
              fullWidth = {true}
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