import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,

  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getUserInfo, isLoggedIn } from "@/services/actions/auth.services";
import { logoutUser } from "@/services/actions/logoutUser";
import { CircleUser } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const AuthDropdown = () => {
 const userInfo = getUserInfo();
//  console.log(userInfo
    const loggedIn = isLoggedIn()


 const router = useRouter();
 const handleLogOut = () => {
   logoutUser(router);
 };
  return (
    <div className="">
      {loggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser color="red"  className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>
              <Link href="dashboard">Dashboard</Link>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
            {userInfo?.id ? (
              <Button onClick={handleLogOut} color="error">
                LogOut
              </Button>
            ) : (
              <Link href="login">Login</Link>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="login"><Button >Login</Button></Link>
      )}
    </div>
  );
};

export default AuthDropdown;
