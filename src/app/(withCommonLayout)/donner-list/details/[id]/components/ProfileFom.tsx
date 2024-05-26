"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { userLogin } from "@/services/actions/userLogin";
import { toast } from "sonner";
import { getUserInfo, storeUserInfo } from "@/services/actions/auth.services";
import { useRouter } from "next/navigation";
import { useCreateDonnerRequestMutation, useGetSingleDonnerQuery } from "@/redux/api/donnerApi";
import { useGetMYProfileQuery } from "@/redux/api/myProfile";
import { TUserType } from "../page";

const formSchema = z.object({
  phoneNumber: z.string().length(11, {
    message: "Phone number must be 11 characters",
  }),
  hospitalName: z.string().min(6, {
    message: "Hospital name must be at least 6 characters",
  }),
  hospitalAddress: z.string().min(6, {
    message: "Hospital address must be at least 6 characters",
  }),
  reason: z.string().min(2, {
    message: "Reason must be valid",
  }),
  dateOfDonation: z.string().min(2, {
    message: "Date must be valid",
  }),
});

const ProfileForm = ({
  
  userInfo,
  currentDonnerId,
}: {
 
  userInfo: TUserType;
  currentDonnerId: string;
}) => {

  const { data, isLoading } = useGetSingleDonnerQuery(userInfo.id as string);
  // console.log(currentDonnerId, "+++++++++");
  const [createDonnerRequest] = useCreateDonnerRequestMutation();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      hospitalName: "",
      hospitalAddress: "",
      reason: "",
      dateOfDonation: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // console.log(values);
    const data = {
      phoneNumber: values.phoneNumber,
      hospitalName: values.hospitalName,
      hospitalAddress: values.hospitalAddress,
      reason: values.reason,
      dateOfDonation: values.dateOfDonation,
      donorId: currentDonnerId,
    };
    // console.log(data, "data...............");
    try {
      const result = await createDonnerRequest(data).unwrap();
      // console.log(result)
      if (result) {
        toast("Request sent successfully");
        
        router.push("/donner-list");
      }
      // console.log("Request succeeded:", result);
    } catch (error) {
      console.log("Request failed:", error);
      toast.error("Request failed");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full px-4 "
      >
        <div className="w-full space-y-4 p-4 border-0 shadow-sm">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter Phone Number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hospitalName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hospital Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Full Name of Hospital"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hospitalAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hospital Address</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Hospital Address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Reason for Donation"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateOfDonation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Donation</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Date of Donation"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Send Request
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProfileForm;
