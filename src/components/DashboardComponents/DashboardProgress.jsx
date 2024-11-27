const mySkills = [
  { title: "Wireframing", src: "/percent.png" },
  { title: "User Interface design", src: "/percent.png" },
  { title: "Colour psychology", src: "/percent.png" },
];

const DashboardProgress = () => {
  return (
    <div className="flex justify-center flex-col justify-self-center sm:flex-row lg:flex-col gap-[8px]">
      <article className="panel gap-[8px]">
        <div className="progress flex">
          <div className="flex items-start gap-[12px]">
            <img
              src="/track.png"
              alt=""
              height={22}
              width={11}
              className="mt-[2px]"
            />
            <div className="grid gap-[8px]">
              <h1 className="font-[700] text-[13px]">Track</h1>
              <p className="text-[16px] font-[400]">Product Design</p>
            </div>
          </div>

          <div>
            <h1 className="text-[13px] font-[400]">Learner</h1>
            <img src="/percent.png" alt="" height={40} width={40} />
          </div>
        </div>

        <div className="progress grid">
          <div className="flex justify-between">
            <div className="flex gap-[12px]">
              <img src="/teacher.png" alt="" />
              <h1 className="text-[13px] font-[700]">Active Learning</h1>
            </div>

            <button>
              <img src="/maximize.png" alt="" />
            </button>
          </div>

          <div className="flex items-center">
            <p className="text-[#2C96A2] grid text-[11px] font-[700] gap-[4px]">
              Course
              <span className="text-[#141414] font-[400] text-[16px]">
                Conducting Interview for better research enviro...
              </span>
            </p>
            <img src="/percent.png" alt="" height={40} width={40} />
          </div>
        </div>
      </article>

      <article className="panel gap-[16px]">
        <div className="p-[16px] flex items-center">
          <img src="/add.png" alt="" height={24} width={24} />
          <span className="text-[13px] font-[700] text-[#FBA04B] ">
            My Skills
          </span>
        </div>

        <img src="/line.png" alt="" />

        <div className="flex flex-col ">
          {mySkills.map((skill) => (
            <div
              className="flex justify-between items-center "
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
      </article>
    </div>
  );
};

export default DashboardProgress;
