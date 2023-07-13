import React from 'react';
import Button from "../../../../components/Button";


const SignInForm = () => {
  return (
    <div>
      
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