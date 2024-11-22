import ChatInterface from "../components/communitycomponent/ChartInterface";

const CommunityPage = () => {
  return (
    <div className="flex container mx-auto flex-col gap-[20px]">
      <div className="">
        <ChatInterface />
      </div>
      {/* <DashboardSlider /> */}
    </div>
  );
};

export default CommunityPage;
