import Image from "next/image";
import React from "react";
import assets from "@/assets";
import { Search } from "lucide-react";
import Link from "next/link";

const SaveLife = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      <div>
        <p className="text-start text-4xl  text-red-700 font-bold mb-8 uppercase">
          #We save lives
        </p>
        <p>
          Since our founding as a charity in 2008, Global Blood Fund has
          delivered millions of dollars in grants, equipment, training and other
          forms of support to <br /> over 50 countries in Africa, Asia, Eastern
          Europe, the Middle East, Latin America and the Caribbean.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        <div className="bg-white rounded-lg shadow-md p-4 w-full md:lg:w-full md:lg:w-52 flex flex-col items-center text-center">
          <Image
            src={assets.images.donate}
            alt="engage"
            height={60}
            width={60}
          />
          <p className="text-xl font-bold mt-4 text-red-700 uppercase">
            we donate
          </p>
          <p>expertise, money, and equipment to poor nations.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 w-full md:lg:w-52 flex flex-col items-center text-center">
          <Image
            src={assets.images.resources}
            alt="engage"
            height={60}
            width={60}
          />
          <p className="text-xl text-red-700 font-bold mt-4 uppercase">
            we encourage
          </p>
          <p>expertise, money, and equipment to poor nations.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 w-full md:lg:w-52 flex flex-col items-center text-center">
          <Image
            src={assets.images.inform}
            alt="engage"
            height={60}
            width={60}
          />
          <p className="text-xl text-red-700 font-bold mt-4 uppercase">
            we promote
          </p>
          <p>voluntary, non­-remunerated blood donation.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 w-full md:lg:w-52 flex flex-col items-center text-center">
          <Image
            src={assets.images.inform}
            alt="engage"
            height={60}
            width={60}
          />
          <p className="text-xl font-bold mt-4 uppercase text-red-700">
            we inform
          </p>
          <p>about the global inequalities for accessing safe blood.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 w-full md:lg:w-52 flex flex-col items-center text-center">
          <Image
            src={assets.images.engage}
            alt="engage"
            height={60}
            width={60}
          />
          <p className="text-xl font-bold mt-4 text-red-700 uppercase">
            we engage
          </p>
          <p>millions of blood donors in global aid efforts.</p>
        </div>
      </div>
      <Link
        href={"/donner-list"}
        className="flex justify-center gap-3 items-center mt-8"
      >
        <p className="text-2xl font-bold text-slate-300 hover:text-red-600 cursor-pointer ">
          Search Donner
        </p>

        <Search size={30} color="red" />
      </Link>
    </div>
  );
};

export default SaveLife;
