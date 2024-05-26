import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUpdateStatusMutation } from "@/redux/api/donnerApi";
import React from "react";
import { toast } from "sonner";

const UpdateForm: React.FC<{ id: string, setOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ id,setOpen }) => {
  const Actions = ["PENDING", "APPROVED", "REJECTED"];
  const [updateStatus, { isLoading }] = useUpdateStatusMutation();

  const handleValueChange = async (value: string) => {
    try {
      const response = await updateStatus({
        id,
        body: { requestStatus: value },
      }).unwrap();
    //   console.log("Status updated", response);
    toast.success("Status updated successfully");
    setOpen(false)
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  return (
    <div>
      <Select onValueChange={handleValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {isLoading ? (
              <SelectItem value="loading">Loading...</SelectItem>
            ) : (
              Actions.map((action, index) => (
                <SelectItem key={index} value={action}>
                  {action}
                </SelectItem>
              ))
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default UpdateForm;
