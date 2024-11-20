import { useState } from "react";
import SkillLevelUI from "./SkillLevelUI";

const MySkills = () => {
  const skills = [
    { name: "Wireframing", level: 70, selected: false },
    { name: "User Interface Design", level: 80, selected: false },
    { name: "Color Psychology", level: 60, selected: false },
    { name: "Additional Skill", level: 50, selected: false },
  ];

  const [addSkill, setAddSKill] = useState(false);

  return (
    <section>
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
            {skills.slice(0, 3).map((skill, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-4"
              >
                <span>{skill.name}</span>
                <div className="relative w-12 h-12">
                  <svg className="w-full h-full">
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="4"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      fill="none"
                      stroke="#F97316"
                      strokeWidth="4"
                      strokeDasharray={`${2 * Math.PI * 20}`}
                      strokeDashoffset={`${
                        2 * Math.PI * 20 -
                        (skill.level / 100) * 2 * Math.PI * 20
                      }`}
                    />
                  </svg>
                  <span className="absolute inset-0 flex justify-center items-center text-xs text-orange-500 font-bold">
                    {skill.level}%
                  </span>
                </div>
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
          <button
            className="h-full w-full  py-[11px]"
            onClick={() => setAddSKill(true)}
          >
            Add Skill
          </button>
        </div>
      </div>

      {addSkill && (
        <div className="relative bottom-[70px] rounded-[200px]  shadow">
          <SkillLevelUI />
        </div>
      )}
    </section>
  );
};

export default MySkills;
