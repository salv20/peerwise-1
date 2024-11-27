import MySkills from "../components/Profilecomponent/MySkills";
import ProfileBio from "../components/Profilecomponent/ProfileBio";

const ProfilePage = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex justify-center flex-col lg:flex-row gap-[30px] lg:gap-[16px] mb-[30px]">
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
