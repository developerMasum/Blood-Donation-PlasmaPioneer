import React from "react";
import assets from "@/assets";
import Image from "next/image";
import SignInForm from "@/components/Forms/Auth/SignInForm";


const LoginPage = () => {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 border bg-white p-8 rounded-lg shadow-md">
        <div className="flex-shrink-0">
          <Image
            src={assets.images.logInImg}
            width={400}
            height={400}
            alt="Login Illustration"
          />
        </div>
        <div className="w-full max-w-md">
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
