"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetAllDonnerQuery,
  useMyRequestsQuery,
} from "@/redux/api/donnerApi";
import { Button } from "@/components/ui/button";
import { useDeleteUserMutation } from "@/redux/api/userApi";
import { toast } from "sonner";

interface TUserProfile {
  id: string;
  userId: string;
  bio: string;
  age: number;
  contactNumber: string;
  profilePhoto: string | null;
  lastDonationDate: string | null;
  createdAt: string;
  updatedAt: string;
}

interface TUser {
  id: string;
  name: string;
  email: string;
  bloodType: string;
  location: string;
  availability: boolean;
  createdAt: string;
  updatedAt: string;
  UserProfile: TUserProfile;
}

const UserManagement = () => {
  const { data, isLoading } = useGetAllDonnerQuery({});
  const [deleteUser] = useDeleteUserMutation({});
//   console.log(data?.donner);
  if (isLoading) {
    return <p>Loading.....</p>;
  }

  const users: TUser[] = data?.donner as TUser[];

  if (!data || !data.donner || users.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        You don&apos;t have any Donation Requests
      </div>
    );
  }

  const handleDelete = async(id: string) => {    
  try {
    const res = await deleteUser(id);
    if (res.data) {
        toast.success("User deleted successfully");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    toast.error(
      "An error occurred while deleting the user. Please try again later."
    );
  }
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Blood group</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user: TUser) => (
            <TableRow key={user?.id}>
              <TableCell className="font-medium">{user?.name}</TableCell>
              <TableCell className="font-medium">{user?.email}</TableCell>
              <TableCell className="font-medium">
                {user?.bloodType}
              </TableCell>
              <TableCell>{user?.location}</TableCell>
              <TableCell><Button onClick={() => handleDelete(user?.id)} variant={"outline"}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserManagement;
