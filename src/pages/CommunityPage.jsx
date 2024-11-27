import ChatInterface from "../components/communitycomponent/ChartInterface";
import Stack from "../components/communitycomponent/Stack";

const CommunityPage = () => {
  return (
    <div className="flex container font-[roboto] mx-auto flex-col lg:flex-row gap-[20px]">
      <div className="">
        <ChatInterface />
      </div>

      <div>
        <Stack />
      </div>
    </div>
  );
};

export default CommunityPage;
