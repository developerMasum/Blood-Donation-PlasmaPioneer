import * as React from "react";

// import { useMediaQuery, } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import UpdateForm from "./UpdateForm";




export const UpdateDialog = ({
  open,
  setOpen,
  id,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
 
  id: string;
}) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Update</Button>
      </DrawerTrigger>
      <DrawerContent className="flex justify-center items-center ">
        <div className="bg-white p-6 rounded-lg w-5/12 mx-auto">
          <DrawerHeader className="text-center"></DrawerHeader>
          <UpdateForm setOpen={setOpen} id={id} />
          <DrawerFooter className="pt-2 flex justify-end">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
