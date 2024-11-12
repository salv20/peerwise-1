import DashboardCalenderSection from "./DashboardCalenderSection";
import DashboardNavBar from "./DashboardNavBar";

const DashboardBody = () => {
  return (
    <div className="grid gap-10 w-full">
      <DashboardNavBar />
      <DashboardCalenderSection />
    </div>
  );
};

export default DashboardBody;
