"use client";
import { useGetAllDonnerQuery } from "@/redux/api/donnerApi";

const DonnerData = () => {
  const { data } = useGetAllDonnerQuery({});
  const donners = data?.donner;
  console.log(donners)
  return donners;
};

export default DonnerData;
