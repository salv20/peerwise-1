import DashboardSideBar from "../components/DashboardComponents/DashboardSideBar";
import DashboardBody from "../components/DashboardComponents/DashboardBody";

const DashboardPage = () => {
  return (
    <section>
      <div className="lg:flex">
        <DashboardSideBar />
        <DashboardBody />
      </div>
    </section>
  );
};

export default DashboardPage;
