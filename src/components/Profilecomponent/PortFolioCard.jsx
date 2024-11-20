import { useState } from "react";
import editImg from "../../assets/profile/edit.png";
import { FaPlus } from "react-icons/fa";

const PortfolioCard = () => {
  const [edit, setEdit] = useState(false);
  const [stack, setStack] = useState("product designer");
  const [experiencelevel, setExperiencelevel] = useState("expert");
  const stackOptions = ["product designer", "frontend", " backend"];
  const experiencelevelOptions = ["Expert", "intermidiate", " entry"];
  const websiteLinks = [
    "https//motion.com/hlkdygy7830yhgdyugygupo[pwdbncjncjkehup",
    "www.fubarasim.com",
  ];

  const [showTextArea, setShowTextArea] = useState(false);

  return (
    <div className="shadow rounded-[16px] py-[20px] px-[24px] flex flex-col gap-[20px]">
      <div className="flex justify-between items-center">
        <h1 className="font-[700] text-[16px] text-[#FBA04B]">Portfolio</h1>

        <button onClick={() => setEdit(!edit)}>
          <img src={editImg} height={24} width={51} alt="" />
        </button>
      </div>
      <img src="/line.png" className="h-[3px]" alt="" />

      <form className="grid sm:grid-cols-2 items-center gap-[16px] profile_form ">
        {edit ? (
          <div className="">
            <label htmlFor="stack">Stack</label>

            <div className="relative">
              <select
                onChange={(e) => {
                  const index = e.target.options.selectedIndex;
                  setStack(e.target.options[index].value);
                }}
                className="border appearance-none border-gray-300 outline-none rounded-md px-3 py-2 w-full"
              >
                <option value="">{stack}</option>
                {stackOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-[30px] w-[30px] text-[#2C96A2]"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-[4px] capitalize">
            <h1>Stack</h1>
            <p>{stack}</p>
          </div>
        )}

        {edit ? (
          <div className="">
            <label htmlFor="level">Level</label>

            <div className="relative">
              <select
                onChange={(e) => {
                  const index = e.target.options.selectedIndex;
                  setExperiencelevel(e.target.options[index].value);
                }}
                className="border appearance-none border-gray-300 outline-none rounded-md px-3 py-2 w-full"
              >
                <option value="">{experiencelevel}</option>
                {experiencelevelOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-[30px]  w-[30px] text-[#2C96A2]"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-[4px] capitalize">
            <h1>Level</h1>
            <p>{experiencelevel}</p>
          </div>
        )}

        <div className="flex flex-col gap-[4px]">
          <h1>Webinars</h1>
          <p>2</p>
        </div>

        <div className="flex flex-col gap-[4px]">
          <h1>Courses Shared</h1>
          <p>5</p>
        </div>
      </form>

      <div className="grid gap-[16px] ">
        {edit && (
          <div className="flex justify-between items-center">
            <h1 className="font-[700] text-[14px] text-[#FBA04B]">My Links</h1>

            <button onClick={() => setShowTextArea(!showTextArea)}>
              <FaPlus className="text-lg text-[#2C96A2] " />
            </button>
          </div>
        )}

        {showTextArea ? (
          <div className="">
            <input
              type="text"
              className="h-[40px] py-[12px] px-[8px] w-[90%] border-[1px] border-[#CECECE]"
            />

            {websiteLinks.map((link, index) => (
              <div className="mb-4 flex flex-col gap-[8px]" key={index}>
                <label htmlFor=">houseAddress">Website link {index + 1}</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  defaultValue={link}
                  className="h-[40px] py-[12px] px-[8px] w-[90%] border-[1px] border-[#CECECE]"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-[26px]">
            {websiteLinks.map((link, index) => (
              <div className="flex flex-col gap-[4px] " key={index}>
                <h3>Website link {index + 1}</h3>
                <a href={link} className="font-[700] hover:text-[#FBA04B]">
                  {link}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
