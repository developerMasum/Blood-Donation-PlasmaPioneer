"use client";
import { useGotRequestsQuery, useMyRequestsQuery } from "@/redux/api/donnerApi";
import Link from "next/link";


const UserCards = () => {
  // const { data: myRequestsData, isLoading: isMyRequestsLoading } =
  //   useMyRequestsQuery({});
  const totalRequests: number = 10

  // const { data: gotRequestsData, isLoading: isGotRequestsLoading } =
  //   useGotRequestsQuery({});
  const totalGotReq: number = 12

  // if (isMyRequestsLoading || isGotRequestsLoading) {
  //   return <div>Loading...</div>;
  // }

  return ( 
    <div className="flex flex-col lg:flex-row justify-center gap-5 items-center w-full mb-12">
      <div className="w-full lg:w-3/12 lg:mx-3 mb-6 lg:mb-0">
        <div
          style={{
            backgroundColor: "#FBAB7E",
            backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
          }}
          className=" dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-600  uppercase">
                My Blood Requests
              </p>
              <p className="text-3xl mt-2 text-stone-800">{totalRequests}</p>
            </div>
            <button
              type="button"
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4"
              style={{ backgroundColor: "rgb(3, 201, 215)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"></path>
              </svg>
            </button>
          </div>
          <div className="mt-3 text-sm">
            <Link href={"/dashboard/user/got-requests"}>
              {" "}
              <button
                type="button"
                className="text-white p-3 w-1/2 hover:drop-shadow-xl uppercase "
                style={{
                  backgroundColor: "rgb(3, 201, 215)",
                  borderRadius: "10px",
                }}
              >
                see Details
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:w-9/12 gap-5">
        <div
          style={{
            backgroundImage:
              "radial-gradient(circle farthest-corner at 92.3% 71.5%, rgba(83,138,214,1) 0%, rgba(134,231,214,1) 90%)",
          }}
          className=" h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-full p-4 pt-9 rounded-2xl"
        >
          <button
            type="button"
            className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
            style={{
              color: "rgb(255, 244, 229)",
              backgroundColor: "rgb(254, 201, 15)",
            }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"></path>
            </svg>
          </button>
          <p className="mt-3">
            <span className=" font-semibold text-3xl mt-2 text-stone-800">
              {totalGotReq}
            </span>
            <span className="text-sm ps-2 text-green-600">items</span>
          </p>
          <p className="font-semibold text-gray-600 mt-1 uppercase">
            Received Request
          </p>
        </div>

        <div
          style={{
            backgroundImage:
              "linear-gradient(135deg, #FF9D6C 10%, #BB4E75 100%)",
          }}
          className=" h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-full p-4 pt-9 rounded-2xl"
        >
          <button
            type="button"
            className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
            style={{
              color: "rgb(0, 194, 146)",
              backgroundColor: "rgb(235, 250, 242)",
            }}
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              ></path>
            </svg>
          </button>
          <p className="mt-3">
            <span className="text-3xl mt-2 text-stone-800 font-semibold">
              {/* {dashboardData?.data?.totalProductsCancelled} */}5
            </span>
          </p>
          <p className="font-semibold text-gray-600 mt-1 uppercase">
            Total Cancelled Request
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#85FFBD",
            backgroundImage:
              "linear-gradient(45deg, #85FFBD 40%, #FFFB7D 100%)",
          }}
          className=" h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-full p-4 pt-9 rounded-2xl"
        >
          <button
            type="button"
            className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
            style={{
              color: "rgb(228, 106, 118)",
              backgroundColor: "rgb(255, 244, 229)",
            }}
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" y1="20" x2="12" y2="10"></line>
              <line x1="18" y1="20" x2="18" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="16"></line>
            </svg>
          </button>
          <p className="mt-3">
            <span className="text-3xl font-semibold  mt-2 text-stone-800">
              {/* {dashboardData?.data?.totalRewardsPoints} */}
              50
            </span>
            <span className="text-sm text-green-600 ml-2">+10</span>
          </p>
          <p className="font-semibold text-gray-600 mt-1"> REWARD POINTS</p>
        </div>
      </div>
    </div>
  );
};

export default UserCards;
