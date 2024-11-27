import { useState } from "react";
import editImg from "../../assets/profile/edit.png";
import { FaPlus } from "react-icons/fa";

const SelectDropdown = ({ label, value, options, onChange }) => (
  <div className="flex flex-col gap-2">
    <label className="font-medium">{label}</label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-[#CECECE] rounded-md px-3 py-2 w-full appearance-none outline-none"
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-5 w-5 text-[#2C96A2]"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
);

const PortfolioCard = () => {
  const [edit, setEdit] = useState(false);
  const [stack, setStack] = useState("product designer");
  const [experienceLevel, setExperienceLevel] = useState("expert");
  const [showTextArea, setShowTextArea] = useState(false);
  const [links, setLinks] = useState([
    "https://motion.com/hlkdygy7830yhgdyugygupo[pwdbncjncjkehup",
    "https://www.fubarasim.com",
  ]);

  const stackOptions = ["product designer", "frontend", "backend"];
  const experienceLevelOptions = ["expert", "intermediate", "entry"];

  const handleLinkChange = (index, value) => {
    const updatedLinks = [...links];
    updatedLinks[index] = value;
    setLinks(updatedLinks);
  };

  const addNewLink = () => setLinks([...links, ""]);

  return (
    <div className="shadow rounded-lg p-6 flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg text-[#FBA04B]">Portfolio</h1>
        <button
          aria-label="Edit Portfolio"
          onClick={() => setEdit((prev) => !prev)}
        >
          <img src={editImg} height={24} width={51} alt="" />
        </button>
      </div>
      <hr className="border-t-2 border-gray-200" />

      {/* Form */}
      <form className="grid sm:grid-cols-2 gap-4 profile_form">
        {edit ? (
          <SelectDropdown
            label="Stack"
            value={stack}
            options={stackOptions}
            onChange={setStack}
          />
        ) : (
          <div className="flex flex-col">
            <h2 className="font-medium">Stack</h2>
            <p className="capitalize">{stack}</p>
          </div>
        )}

        {edit ? (
          <SelectDropdown
            label="Experience Level"
            value={experienceLevel}
            options={experienceLevelOptions}
            onChange={setExperienceLevel}
          />
        ) : (
          <div className="flex flex-col">
            <h2 className="font-medium">Experience Level</h2>
            <p className="capitalize">{experienceLevel}</p>
          </div>
        )}

        <div className="flex flex-col">
          <h2 className="font-medium">Webinars</h2>
          <p>2</p>
        </div>

        <div className="flex flex-col">
          <h2 className="font-medium">Courses Shared</h2>
          <p>5</p>
        </div>
      </form>

      {/* Links Section */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-md text-[#FBA04B]">My Links</h2>
          {edit && (
            <button
              aria-label="Add New Link"
              onClick={() => setShowTextArea((prev) => !prev)}
            >
              <FaPlus className="text-lg text-[#2C96A2]" />
            </button>
          )}
        </div>

        {showTextArea && edit ? (
          <>
            {links.map((link, index) => (
              <div key={index} className="flex flex-col gap-2">
                <label htmlFor={`link-${index}`}>
                  Website Link {index + 1}
                </label>
                <input
                  id={`link-${index}`}
                  type="text"
                  value={link}
                  onChange={(e) => handleLinkChange(index, e.target.value)}
                  className="border border-[#CECECE] rounded-md px-3 py-2 w-full"
                />
              </div>
            ))}
            <button
              type="button"
              className="mt-4 py-2 px-4 bg-[#2C96A2] text-white rounded-md"
              onClick={addNewLink}
            >
              Add New Link
            </button>
          </>
        ) : (
          links.map((link, index) => (
            <div key={index} className="flex flex-col">
              <h3>Website Link {index + 1}</h3>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-600 hover:underline"
              >
                {link}
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
