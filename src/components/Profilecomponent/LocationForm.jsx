import { useState } from "react";
import editImg from "../../assets/profile/edit.png";

const SelectDropdown = ({ label, value, options, onChange }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={label.toLowerCase()} className="font-medium">
      {label}
    </label>
    <div className="relative">
      <select
        id={label.toLowerCase()}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 w-full appearance-none outline-none"
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

const LocationForm = () => {
  const [edit, setEdit] = useState(false);

  const countryOptions = ["Nigeria", "Niger", "Canada", "Ghana"];
  const stateOptions = ["Rivers", "Lagos", "Enugu", "Abuja"];

  const [country, setCountry] = useState("Nigeria");
  const [state, setState] = useState("Rivers");
  const [city, setCity] = useState("Port Harcourt");
  const [houseAddress, setHouseAddress] = useState(
    "#14 Government house, Old GRA."
  );

  return (
    <div className="shadow rounded-lg py-4 px-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg text-[#FBA04B]">Location</h1>
        <button
          onClick={() => setEdit((prev) => !prev)}
          aria-label="Edit Location"
        >
          <img src={editImg} height={24} width={51} alt="" />
        </button>
      </div>
      <hr className="border-gray-300" />

      {/* Form */}
      <form className="grid sm:grid-cols-2 gap-4 profile_form">
        {/* Country */}
        {edit ? (
          <SelectDropdown
            label="Country"
            value={country}
            options={countryOptions}
            onChange={setCountry}
          />
        ) : (
          <div className="flex flex-col gap-2">
            <h2 className="font-medium">Country</h2>
            <p>{country}</p>
          </div>
        )}

        {/* State */}
        {edit ? (
          <SelectDropdown
            label="State"
            value={state}
            options={stateOptions}
            onChange={setState}
          />
        ) : (
          <div className="flex flex-col gap-2">
            <h2 className="font-medium">State</h2>
            <p>{state}</p>
          </div>
        )}

        {/* City */}
        {edit ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="city" className="font-medium">
              City
            </label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <h2 className="font-medium">City</h2>
            <p>{city}</p>
          </div>
        )}

        {/* House Address */}
        {edit ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="house-address" className="font-medium">
              House Address
            </label>
            <input
              id="house-address"
              type="text"
              value={houseAddress}
              onChange={(e) => setHouseAddress(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <h2 className="font-medium">House Address</h2>
            <p>{houseAddress}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default LocationForm;
