// import SignInForm from "@/app/features/authentication/components/SignInForm";

import SignInForm from "../../features/authentication/components/SignInForm";
import AddCarForm from "../../features/authentication/components/AddCarForm";

const SignIn = () => {
  return (
    <div className="bg-slate-200">
      <SignInForm />
      <AddCarForm />
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
