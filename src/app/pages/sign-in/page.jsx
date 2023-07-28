// import SignInForm from "@/app/features/authentication/components/SignInForm";
import { Poppins } from "next/font/google";
import SignInForm from "../../features/authentication/components/SignInForm";

const poppins = Poppins({subset:['latin'],weight:['400'], preload:false});

const SignIn = () => {

  return (
    <div className={` ${poppins.className}`}>
      <SignInForm />
    </div>
    
  );
};

// SignIn.mainLayoutProps = {
//   title: "Talents Valley Sign In",
//   pageDescription: "Sign in page description",
//   withoutNavbar: true,
//   withoutFooter: false,
// };

export default SignIn;
