import AccordionQues from "@/components/Home/AccordionQues";
import Ads from "@/components/Home/Ads";
import Banner from "@/components/Home/Banner";

import DonorList from "@/components/Home/DonnerList";
import Networks from "@/components/Home/Networks";
import SaveLife from "@/components/Home/SaveLife";
import { SearchButton } from "@/components/Home/Searchutton";
import Testimonial from "@/components/Home/Tastimonial";
import TopDonner from "@/components/Home/TopDonner";
import { Button } from "@/components/ui/button";
import { Divide } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <SaveLife />
      </div>

      <Ads />
      <SearchButton />
      <div className="flex flex-col md:lg:flex-row justify-center   md:lg:gap-12 items-center content-center w-full mt-16">
        <TopDonner />
        <DonorList />
      </div>
      <Networks />
      <AccordionQues />
      <Testimonial />
    </div>
  );
};

export default Home;
