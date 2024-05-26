"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGetSingleDonnerQuery } from "@/redux/api/donnerApi";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RequestDialog } from "./components/RequestDialog";
import { getUserInfo } from "@/services/actions/auth.services";

export type TParams = {
  params: {
    id: string;
  };
};
export type TUserType = {
  email: string;
  role: string;
  id: string;
  iat: number;
  exp: number;
};
const DonnerDetailsPage = ({ params }: TParams) => {
    const userInfo: TUserType = getUserInfo();
    // console.log(userInfo)
  const { data, isLoading } = useGetSingleDonnerQuery(params.id);
  const [open, setOpen] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const currentDonnerId:string = data?.id;
  // const handleReq = () => {
  //   // console.log("hello");
  // };

  return (
    <div className="w-full min-h-screen px-4 py-4 lg:px-8 lg:py-8">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Link href="/donner-list">Donner List</Link> <ChevronsRight />
        <p>Details</p> <ChevronsRight />
        <p className="text-red-700 font-bold">{data?.name}</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20 mt-8 lg:mt-20">
        <div className="flex flex-col items-center lg:items-start">
          <Card className="w-full max-w-xs lg:w-[230px]">
            <Image
              src={
                data?.UserProfile?.profilePhoto ||
                "https://thumbs.dreamstime.com/b/blood-drop-talking-cartoon-illustration-53668689.jpg"
              }
              alt="donner"
              width={400}
              height={400}
              className="object-cover"
            />
          </Card>
          <div className="px-2 py-2 text-xl font-semibold bg-slate-100 w-full max-w-sm lg:w-56 rounded-md shadow-lg mt-4">
            <p className="text-red-700">{data?.UserProfile?.bio}</p>
          </div>

          <div className="mt-8">
            <RequestDialog
              currentDonnerId={currentDonnerId}
              userInfo={userInfo}
              open={open}
              setOpen={setOpen}
            />
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <p className="px-3 py-3 text-xl font-semibold text-green-600  text-center">
            Personal Information
          </p>
          <Separator className="my-3" />
          <div className="w-full max-w-md space-y-4">
            <div className="flex flex-row gap-12">
              <div>
                <p className="text-slate-500">Donner Name:</p>
                <div className="px-2 py-2 text-xl font-semibold bg-slate-100 rounded-md shadow-lg">
                  <p className="text-red-700">{data?.name}</p>
                </div>
              </div>
              <div>
                <p className="text-slate-500">Blood Group:</p>
                <div className="px-2 py-2 text-xl font-semibold bg-slate-100 rounded-md shadow-lg">
                  <p className="text-red-700">{data?.bloodType}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-slate-500">Available For Donate:</p>
              <div className="px-2 py-2 text-xl font-semibold bg-slate-100 rounded-md shadow-lg">
                <p className="text-red-700">
                  {data?.availability ? "Available" : "Not Available"}
                </p>
              </div>
            </div>
            <div>
              <p className="text-slate-500">Donner Email:</p>
              <div className="px-2 py-2 text-xl font-semibold bg-slate-100 rounded-md shadow-lg">
                <p className="text-red-700">{data?.email}</p>
              </div>
            </div>
            <div className="flex flex-row gap-12">
              <div>
                <p className="text-slate-500">Donner Age:</p>
                <div className="px-2 py-2 text-xl font-semibold bg-slate-100 rounded-md shadow-lg">
                  <p className="text-red-700">{data?.UserProfile?.age}</p>
                </div>
              </div>
              <div>
                <p className="text-slate-500">Location:</p>
                <div className="px-2 py-2 text-xl font-semibold bg-slate-100 rounded-md shadow-lg">
                  <p className="text-red-700">{data?.location}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-slate-500">Last Donation Date:</p>
              <div className="px-2 py-2 text-xl font-semibold bg-slate-100 rounded-md shadow-lg">
                <p className="text-red-700">
                  {data?.UserProfile?.lastDonationDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonnerDetailsPage;
