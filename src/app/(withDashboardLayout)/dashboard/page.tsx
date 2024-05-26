import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <Image
            src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png"
            alt="Slack Logo"
            width={300} // Adjust the width as needed 
              height={300}
            className="mx-auto mb-6 w-16 h-16"
          />
          <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
          <p className="text-gray-600 mb-6">
            Blood Pioneer is a Blood Donation app for donors.
          </p>
          <Button className=" hover:bg-green-600 transition duration-300">
            Explore Slack
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Powered by @BloodPioneer
           
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
