"use client";
import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { TDonner, bloodGroups } from "@/types/donner";
import { useGetAllDonnerQuery } from "@/redux/api/donnerApi";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useDebounced } from "@/redux/hooks";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectComponent } from "@/components/Forms/Select";
import { ComboboxPopover } from "@/components/Forms/Avilablity";
const formSchema = z.object({
  query: z.string(),
});
const DonnerListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bloodType, setBloodType] = useState("");
  const onSubmit = (data: FieldValues) => {
    setSearchTerm(data?.query);
  };

  const query: Record<string, any> = {};
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  // select 
  const handleValueChange = (blood: string) => {
   setBloodType(blood)
  };
  
  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  if (bloodType) {
    query["bloodType"] = bloodType;
  }
  if (debouncedTerm) {
    query["searchTerm"] = searchTerm;
    if (bloodType) {
      query["bloodType"] = bloodType; 
    }
  }

  const { data, isLoading } = useGetAllDonnerQuery({ ...query });
  const donners: TDonner[] | undefined = data?.donner as TDonner[] | undefined;
  // console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });

  return (
    <div className="pt-8">
      <div className="flex justify-center">
        <form onChange={handleSubmit(onSubmit)} className="flex items-center">
          <Input
            type="text"
            placeholder="Search"
            {...register("query")}
            className="mr-2 w-72 md:lg:w-96"
          />

          {errors.query && (
            <span className="text-red-500">
              Please enter a valid search query
            </span>
          )}
        </form>
        <div>
          <Select onValueChange={handleValueChange}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select Blood Group" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {isLoading ? (
                  <SelectItem value="loading">Loading...</SelectItem>
                ) : (
                  bloodGroups.map((bloodType, index) => (
                    <SelectItem key={index} value={bloodType}>
                      {bloodType}
                    </SelectItem>
                  ))
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* ----------------------------------- */}
          {/* <SelectComponent /> */}
        </div>
        {/* <div>
          <ComboboxPopover />
        </div> */}
      </div>

      {isLoading && <div>Loading...</div>}

      {donners && donners.length === 0 && (
        <div className="text-center mt-4">
          No items found by the {searchTerm}.
        </div>
      )}

      <div className="grid grid-cols-1 md:lg:grid-cols-5 gap-5 mt-12">
        {donners &&
          donners.map((donner: TDonner) => (
            <div key={donner.id} className="flex justify-center items-center">
              <Link href={`/donner-list/details/${donner.id}`}>
                <Card className="bg-red-700 w-[250px] rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
                  <CardContent className="flex aspect-square items-center justify-center gap-10 p-6">
                    <div className="flex flex-col items-center p-4">
                      <div className="relative w-48 h-48">
                        <Image
                          src={
                            donner?.UserProfile?.profilePhoto ||
                            "https://thumbs.dreamstime.com/b/blood-drop-talking-cartoon-illustration-53668689.jpg"
                          }
                          alt={donner.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-full transition-transform transform hover:scale-110"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <p className="text-lg font-semibold text-gray-300">
                          {donner.name}
                        </p>
                        <p className="text-sm text-gray-300">
                          Blood Group:
                          <span className="font-bold text-red-200">
                            {donner.bloodType}
                          </span>
                        </p>

                        <p className="text-sm font-bold text-gray-300">
                          {donner.availability === true
                            ? "Ready for Donation"
                            : "Not Available"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DonnerListPage;
