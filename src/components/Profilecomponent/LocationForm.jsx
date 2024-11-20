import { useState } from "react";
import editImg from "../../assets/profile/edit.png";

const LocationForm = () => {
  const [edit, setEdit] = useState(false);

  const countryOptions = ["Nigeria", "NIger", "canada", "Ghana"];
  const stateOptions = ["Rivers", "Lagos", "Enugu", "Abuja"];

  const [countryValue, setCountryValue] = useState("Nigeria");
  const [state, setState] = useState("Rivers");
  const [city, setCity] = useState("Port Harcourt");
  const [houseAddress, setHouseAddress] = useState(
    "#14 Government house, Old Gra."
  );

  return (
    <div className="shadow rounded-[16px] py-[16px] px-[24px] flex flex-col gap-[12px]">
      <div className="flex justify-between items-center">
        <h1 className="font-[700] text-[16px] text-[#FBA04B]">Location</h1>

        <button onClick={() => setEdit(!edit)}>
          <img src={editImg} height={24} width={51} alt="" />
        </button>
      </div>
      <img src="/line.png" className="h-[3px]" alt="" />

      <form className="grid sm:grid-cols-2 items-center gap-[16px] profile_form ">
        <div>
          {edit ? (
            <div className="">
              <label htmlFor="country">Country</label>

              <div className="relative">
                <select
                  onChange={(e) => {
                    const index = e.target.options.selectedIndex;
                    setCountryValue(e.target.options[index].value);
                  }}
                  className="border appearance-none border-gray-300 outline-none rounded-md px-3 py-2 w-full"
                >
                  <option value="">{countryValue}</option>
                  {countryOptions.map((option, index) => (
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
            <div className="flex flex-col gap-[4px]">
              <h1>Country</h1>
              <p>{countryValue}</p>
            </div>
          )}
        </div>

        <div>
          {edit ? (
            <div className="">
              <label htmlFor="state">State</label>

              <div className="relative">
                <select
                  onChange={(e) => {
                    const index = e.target.options.selectedIndex;
                    setState(e.target.options[index].value);
                  }}
                  className="border appearance-none border-gray-300 outline-none rounded-md px-3 py-2 w-full"
                >
                  <option value="">{state}</option>
                  {stateOptions.map((option, index) => (
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
            <div className="flex flex-col gap-[4px]">
              <h1>State</h1>
              <p>{state}</p>
            </div>
          )}
        </div>

        <div>
          {edit ? (
            <div className="mb-4">
              <label htmlFor="city">City</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                defaultValue={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-[4px]">
              <h1>City</h1>
              <p>{city}</p>
            </div>
          )}
        </div>

        <div>
          {edit ? (
            <div className="mb-4">
              <label htmlFor=">houseAddress">House Address</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                defaultValue={houseAddress}
                onChange={(e) => setHouseAddress(e.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-[4px]">
              <h1>House Address</h1>
              <p>{houseAddress}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default LocationForm;
