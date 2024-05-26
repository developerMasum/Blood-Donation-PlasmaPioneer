"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useGetAllDonnerQuery } from "@/redux/api/donnerApi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TDonner } from "@/types/donner";
import Autoplay from "embla-carousel-autoplay";
const TopDonner = () => {
  const { data, isLoading, isError } = useGetAllDonnerQuery({});
    const donners: TDonner[] = Array.isArray(data?.donner) ? data.donner : [];

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data</p>;

  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full max-w-screen-md"
      >
        <CarouselContent className="-ml-1">
          {donners.length > 0 ? (
            donners.slice(0, 5).map((donner: TDonner) => (
              <CarouselItem
                key={donner.id}
                className="pl-1 md:basis-1/2 lg:basis-1/3 md:pl-12 "
              >
                <div className="p-1">
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
                </div>
              </CarouselItem>
            ))
          ) : (
            <p>No donors found</p>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default TopDonner;
