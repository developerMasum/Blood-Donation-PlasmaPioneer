import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

export function SearchButton() {
  return (
    <div className="mt-12 flex justify-center items-center w-full">
      <Link href="/donner-list">
        <Input
          type="text"
          placeholder="Search for donors..."
          className=" w-full"
        />
      </Link> 
    </div>
  );
}
