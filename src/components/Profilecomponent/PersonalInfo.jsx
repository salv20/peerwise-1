import { useState } from "react";
import editImg from "../../assets/profile/edit.png";
import { format } from "date-fns";

// Reusable InputField Component
const InputField = ({ label, id, type, value, onChange, editable }) => (
  <div className="flex flex-col gap-2">
    {editable ? (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border border-[#CECECE] rounded-md px-3 py-2 w-full outline-none"
        />
      </>
    ) : (
      <>
        <h2>{label}</h2>
        <p>
          {type === "date" ? format(new Date(value), "MMM dd, yyyy") : value}
        </p>
      </>
    )}
  </div>
);

const PersonalInfo = () => {
  const [edit, setEdit] = useState(false);

  const [firstName, setFirstName] = useState("Sim");
  const [lastName, setLastName] = useState("Fubara");
  const [emailAddress, setEmailAddress] = useState("simfubara@yahoo.com");
  const [phoneNumber, setPhoneNumber] = useState("+234 803 875 5560");
  const [dateOfBirth, setDateOfBirth] = useState("2000-01-01");

  return (
    <div className="shadow rounded-lg py-4 px-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg text-[#FBA04B]">
          Personal Information
        </h1>
        <button
          onClick={() => setEdit((prev) => !prev)}
          aria-label="Edit Personal Information"
        >
          <img src={editImg} height={24} width={51} alt="" />
        </button>
      </div>
      <hr className="border-[#CECECE]" />

      {/* Form */}
      <form className="grid sm:grid-cols-2 gap-4 profile_form">
        {/* First Name */}
        <InputField
          label="First Name"
          id="firstName"
          type="text"
          value={firstName}
          onChange={setFirstName}
          editable={edit}
        />

        {/* Last Name */}
        <InputField
          label="Last Name"
          id="lastName"
          type="text"
          value={lastName}
          onChange={setLastName}
          editable={edit}
        />

        {/* Email Address */}
        <InputField
          label="Email Address"
          id="email"
          type="email"
          value={emailAddress}
          onChange={setEmailAddress}
          editable={edit}
        />

        {/* Phone Number */}
        <InputField
          label="Phone Number"
          id="phone"
          type="tel"
          value={phoneNumber}
          onChange={setPhoneNumber}
          editable={edit}
        />

        {/* Date of Birth */}
        <InputField
          label="Date of Birth"
          id="dateOfBirth"
          type="date"
          value={dateOfBirth}
          onChange={(value) => setDateOfBirth(value)}
          editable={edit}
        />
      </form>
    </div>
  );
};

export default PersonalInfo;
