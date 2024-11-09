import DashboardBar from "../components/DashboardBar";

const DashboardPage = () => {
  return (
    <section>
      <div className="lg:flex container mx-auto lg:w-[100%] lg:p-0 lg:m-0 lg:max-w-full">
        <DashboardBar />
        <article>hello all</article>
      </div>
    </section>
  );
};

export default DashboardPage;
