import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAllDonnerQuery } from "@/redux/api/donnerApi";

export function SelectComponent() {
  const { data, isLoading } = useGetAllDonnerQuery({});
  const bloodGroups: string[] = [
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
  ];

  const handleValueChange = (value: string) => {
    console.log(value);
  };

  return (
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
  );
}
