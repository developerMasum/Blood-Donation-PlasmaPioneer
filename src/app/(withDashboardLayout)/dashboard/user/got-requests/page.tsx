"use client";

import { useGotRequestsQuery } from "@/redux/api/donnerApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UpdateDialog } from "./Components/UpdateDialog";
import { useState } from "react";

export interface RequestInfo {
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

export interface DonorInfo {
  id: string;
  name: string;
  email: string;
  password: string;
  bloodType: string;
  role: string;
  location: string;
  availability: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DonationData {
  donner: {
    requestInfo: RequestInfo[];
    donorInfo: DonorInfo;
  };
}

const DonationRequest = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGotRequestsQuery({}) as {
    data: DonationData | undefined;
    isLoading: boolean;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">Loading...</div>
    );
  }

  if (!data || !data.donner || data.donner.requestInfo.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        You don&apos;t have any Donation Requests
      </div>
    );
  }

  const requestInfo: RequestInfo[] = data.donner.requestInfo;
  const donorInfo: DonorInfo = data.donner.donorInfo;

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sender Name</TableHead>
            <TableHead>Hospital Name</TableHead>
            <TableHead>Hospital Address</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requestInfo.map((invoice: RequestInfo) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{donorInfo.name}</TableCell>
              <TableCell className="font-medium">
                {invoice.hospitalName}
              </TableCell>
              <TableCell className="font-medium">
                {invoice.hospitalAddress}
              </TableCell>
              <TableCell>{invoice.requestStatus}</TableCell>
              <TableCell>{invoice.reason}</TableCell>
              <TableCell>
                <UpdateDialog open={open} setOpen={setOpen} id={invoice.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DonationRequest;
