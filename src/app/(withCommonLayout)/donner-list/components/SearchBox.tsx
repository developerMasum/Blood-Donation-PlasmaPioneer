import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  query: z.string(),
});

const SearchBox = () => {
    const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });

  const onSubmit = (data:any) => {
    console.log(data);
   
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
      <Input
        type="text"
        placeholder="Search"
        {...register("query")}
        className="mr-2"
      />
      <Button type="submit">Search</Button>
      {errors.query && (
        <span className="text-red-500">Please enter a valid search query</span>
      )}
    </form>
  );
};

export default SearchBox;
