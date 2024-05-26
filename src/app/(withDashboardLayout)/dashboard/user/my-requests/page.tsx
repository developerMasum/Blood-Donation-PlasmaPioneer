"use client"

import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMyRequestsQuery } from '@/redux/api/donnerApi';
interface TRequest {
  id: string;
  donorId: string;
  requesterId: string;
  phoneNumber: string;
  dateOfDonation: string;
  hospitalName: string;
  hospitalAddress: string;
  reason: string;
  requestStatus: string;
  createdAt: string;
  updatedAt: string;
}

const MyRequests = () => {
    const {data,isLoading} = useMyRequestsQuery({})
console.log(data?.donner)
    if (isLoading) {
        <p>loaading.....</p>
    }
    // console.log(data?.donner)
   const invoices:TRequest[]  = data?.donner as TRequest[]

     if (!data || !data.donner || invoices.length === 0) {
       return (
         <div className="flex justify-center items-center h-full">
           You don&apos;t have any Donation Requests
         </div>
       );
     }
   
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Hospital Name</TableHead>
              <TableHead>Reason</TableHead>
              {/* <TableHead className="text-right">Amount</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices?.map((invoice: TRequest) => (
              <TableRow key={invoice?.id}>
                <TableCell className="font-medium">
                  {invoice?.dateOfDonation}
                </TableCell>
                <TableCell className="font-medium">
                  {invoice?.requestStatus}
                </TableCell>
                <TableCell className="font-medium">
                  {invoice?.hospitalName}
                </TableCell>
                {/* <TableCell>{invoice.hospitalAddress}</TableCell> */}
            
                <TableCell>{invoice?.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
};

export default MyRequests;