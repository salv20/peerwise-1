import user from "../../assets/profile/user.png";

import LocationForm from "./LocationForm";
import PersonalInfo from "./PersonalInfo";
import PortfolioCard from "./PortFolioCard";

const ProfileBio = () => {
  return (
    <section className="sm:min-w-[620px] overflow-x-hidden text-[#141414] font-roboto flex flex-col gap-[16px] ">
      <div className="flex flex-col gap-[12px] p-[16px] shadow rounded-[16px]">
        {/*  */}
        <div className="md:flex items-center gap-[24px] ">
          <img src={user} height={180} width={180} alt="" />
          <div className="flex flex-col gap-[8px]">
            <h1 className="font-[700] text-[23px]">Sim Fubara</h1>
            <p className="font-[400] text-[16px]">Simfubara@yahoo.com</p>
          </div>
        </div>
        <p className=" text-[16px] text-[#FBA04B] font-[700]">
          Bio&nbsp;
          <span className="text-[#141414] text-[13px] font-[300] ">
            (25/120)
          </span>
        </p>

        <div className="sm:w-[80%] sm:h-[99px] border-[#848484] border-[1px] p-[16px] rounded-[8px]">
          I am a Product designer
        </div>
      </div>

      <PersonalInfo />
      <LocationForm />
      <PortfolioCard />
    </section>
  );
};

export default ProfileBio;
