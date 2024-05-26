import { Overview } from "@/components/Dashboard/Admin/Overview";
import { Recent } from "@/components/Dashboard/Admin/Recent";
import Tabs from "@/components/Dashboard/Admin/Tabs";

const AdminPage = () => {
  return (
    <div>
      <Tabs />
      <div className="flex justify-between gap-12 items-center mt-12 mb-12">
    
        <Recent />
        <Overview />
      </div>
    </div>
  );
};

export default AdminPage;
