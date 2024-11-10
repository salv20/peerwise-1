import DashboardBar from "../components/DashboardBar";
import DashboardBody from "../components/DashboardBody";

const DashboardPage = () => {
  return (
    <section>
      <div className="lg:flex">
        <DashboardBar />
        <DashboardBody />
      </div>
    </section>
  );
};

export default DashboardPage;
