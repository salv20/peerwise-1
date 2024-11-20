const mySkills = [
  { title: "Wireframing", src: "/percent.png" },
  { title: "User Interface design", src: "/percent.png" },
  { title: "Colour psychology", src: "/percent.png" },
];

const MySkills = () => {
  return (
    <div className="h-[520px] min-w-[300px] rounded-[16px] shadow pt-[18px] px-[12px] pb-[24px] gap-[16px] flex flex-col justify-between">
      <div className="flex flex-col gap-[16px]">
        <div className="gap-[16px] flex items-center px-[16px]">
          <img src="/ranking.png" alt="" height={24} width={24} />
          <span className="text-[13px] font-[700] text-[#FBA04B] ">
            My Skills
          </span>
        </div>

        <img src="/line.png" alt="" />

        <div className="flex flex-col gap-[8px]">
          {mySkills.map((skill) => (
            <div
              className="flex justify-between items-center"
              key={skill.title}
            >
              <h1 className="text-[16px] text-[#141414] font-[400] ">
                {skill.title}
              </h1>
              <img src={skill.src} alt={skill.src} height={40} width={40} />
            </div>
          ))}
        </div>

        <div className="flex justify-end pb-[4px]">
          <button className="text-[#141414] w-fit text-[13px] px-[16px]">
            See more
          </button>
        </div>
      </div>

      <div className="mt-auto w-[90%] mx-auto text-white bg-[#37BBCA] h-[46px] rounded-[4px] text-center ">
        <button className="h-full w-full  py-[11px] ">Add Skill</button>
      </div>
    </div>
  );
};

export default MySkills;
