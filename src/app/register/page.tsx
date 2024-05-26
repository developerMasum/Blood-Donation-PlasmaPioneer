import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-8 ">Welcome to Be A Hero...</h1>
        <div className="space-x-4">
          <Link href="/register-user">
            <Button type="button" variant="outline"> Register as User </Button>
          </Link>
          <Link href="/register-donner">
            <Button> Register as Donor</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
