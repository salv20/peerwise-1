import { useState } from "react";

const SkillLevelUI = () => {
  const [level, setLevel] = useState(40);
  const [selected, setSelected] = useState(Array(8).fill(false));

  const toggleSelection = (index) => {
    const updatedSelection = [...selected];
    updatedSelection[index] = !updatedSelection[index];
    setSelected(updatedSelection);
  };

  return (
    <div className="p-4 bg-white shadow rounded-[20px]">
      {/* Search Section */}
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 px-4 rounded-lg border border-[#CECECE] focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button className="absolute right-2 top-2 text-[#2C96A2]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.75-4.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Slider Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <label className="text-gray-700 font-medium">Wireframing</label>
          <input
            type="checkbox"
            className="w-5 h-5 text-[#2C96A2] rounded focus:ring-teal-400"
          />
        </div>
        <div className="mt-2">
          <label className="text-sm text-gray-500">Level</label>
          <input
            type="range"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full"
            min={0}
            max={100}
          />
        </div>
      </div>

      {/* Checkbox List */}
      <div>
        {Array.from({ length: 7 }, (_, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-2 last:mb-0"
          >
            <span className="text-gray-700">Wireframing</span>
            <input
              type="checkbox"
              className="w-5 h-5 text-[#2C96A2] rounded focus:ring-teal-400"
              checked={selected[index]}
              onChange={() => toggleSelection(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillLevelUI;
