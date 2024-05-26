import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import assets from "@/assets";

const Banner = () => {
  return (
    <div className=" relative flex flex-col lg:flex-row items-center justify-around bg-[#dedede] text-slate-800 px-8 py-12 lg:h-screen">
      <div className="z-10 max-w-lg text-center lg:text-left lg:w-1/2 lg:pr-8">
        <p className="text-5xl lg:text-9xl font-bold text-red-700">#</p>
        <h1 className="text-4xl lg:text-7xl font-bold text-red-700 uppercase">
          Be A Hero
        </h1>
        <p className="text-lg lg:text-3xl mb-4 text-slate-800 mt-3 uppercase font-bold">
          You don&apos;t have to be a Doctor
        </p>

        <p className="text-lg lg:text-3xl mb-4 text-red-700 uppercase font-bold">
          To Save a life
        </p>
        <div className="flex gap-4">
          <p className="text-3xl lg:text-6xl font-bold text-red-700"> + </p>
          <p className="text-3xl lg:text-6xl font-bold text-red-700">-</p>
        </div>
        <p>
          Donating blood is one of the most selfless acts of kindness. It costs
          nothing, takes only a few moments, and can give someone a second
          chance at life. Your small act can save lives and transform communities.
        </p>
        <Button className="mt-4">
          Get Started
        </Button>
      </div>
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
        <Image
          src={assets.images.banner}
          alt="Blood Hero"
          height={500}
          width={800}
          className="w-full h-full object-cover"
        />
        <div className="text-center mt-4 lg:hidden">
          <p>Social media</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
