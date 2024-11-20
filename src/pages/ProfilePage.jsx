import MySkills from "../components/Profilecomponent/MySkills";
import ProfileBio from "../components/Profilecomponent/ProfileBio";

const ProfilePage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[16px] mb-[46px]">
        <div className="shadow">
          <ProfileBio />
        </div>
        <div>
          <MySkills />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
