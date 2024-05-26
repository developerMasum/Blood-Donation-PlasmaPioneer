import { DashboardLayout } from "@/components/Dashboard/DashboardLayout/DashboardLayout";




const DashboardLayoutNew = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
};

export default DashboardLayoutNew;
