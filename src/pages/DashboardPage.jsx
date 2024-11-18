import DashboardCalenderSection from "../components/DashboardComponents/DashboardCalenderSection";
import DashboardSlider from "../components/DashboardComponents/DashboardSlider";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-[20px] ">
      <DashboardCalenderSection />
      <DashboardSlider />
    </div>
  );
};

export default DashboardPage;
