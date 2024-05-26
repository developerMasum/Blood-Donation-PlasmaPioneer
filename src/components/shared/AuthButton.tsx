
import { logoutUser } from "@/services/actions/logoutUser";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const AuthButton = () => {
 
  const router = useRouter();
  const handleLogOut = () => {
    logoutUser(router);
  };
  return (
    <>
      <Button className="w-full" variant={"secondary"} onClick={handleLogOut} >
        LogOut
      </Button>
    </>
  );
};

export default AuthButton;
