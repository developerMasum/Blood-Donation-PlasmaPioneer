import React from "react";
import assets from "@/assets";
import Image from "next/image";
import SignUpForm from "@/components/shared/Auth/Regiter";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center   py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center">
          <h2 className=" text-3xl font-extrabold text-gray-600">
            Register Now
          </h2>
        </div>
        <div className="pb-4 px-6 shadow rounded-lg sm:px-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-3/4">
              <SignUpForm />
            </div>
            <div className="hidden md:block md:w-3/4">
              <Image
                src={assets.images.logInImg}
                width={600}
                height={700}
                alt="Login Illustration"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
