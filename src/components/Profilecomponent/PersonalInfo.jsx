import { useState } from "react";
import editImg from "../../assets/profile/edit.png";
import { format } from "date-fns";

const PersonalInfo = () => {
  const [edit, setEdit] = useState(false);

  const [firstName, setFirstName] = useState("Sim");
  const [lastName, setlastName] = useState("Fubara");
  const [EmailAddress, setEmailAddress] = useState("simfubara@yahoo.com");
  const [PhoneNumber, setPhoneNumber] = useState("+234 803 875 5560");
  const [DateofBirth, setDateofBirth] = useState(new Date());

  return (
    <div className="shadow rounded-[16px] py-[16px] px-[24px] flex flex-col gap-[12px]">
      <div className="flex justify-between items-center">
        <h1 className="font-[700] text-[16px] text-[#FBA04B]">
          Personal Information
        </h1>

        <button onClick={() => setEdit(!edit)}>
          <img src={editImg} height={24} width={51} alt="" />
        </button>
      </div>
      <img src="/line.png" className="h-[3px]" alt="" />

      <form className="grid sm:grid-cols-2 items-center gap-[16px] profile_form ">
        <div>
          {edit ? (
            <div className="mb-4">
              <label htmlFor="firstName">First Name:</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                defaultValue={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-[4px]">
              <h1>First Name:</h1>
              <p>{firstName}</p>
            </div>
          )}
        </div>

        <div>
          {edit ? (
            <div className="mb-4">
              <label htmlFor="lastName">Last Name:</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                defaultValue={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-[4px]">
              <h1>Last Name:</h1>
              <p>{lastName}</p>
            </div>
          )}
        </div>

        <div>
          {edit ? (
            <div className="mb-4">
              <label htmlFor="email">Email Address:</label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={EmailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-[4px]">
              <h1>Email Address:</h1>
              <p>{EmailAddress}</p>
            </div>
          )}
        </div>

        <div>
          {edit ? (
            <div className="mb-4">
              <label htmlFor="phone">Phone Number:</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                defaultValue={PhoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-[4px]">
              <h1>Phone Number:</h1>
              <p>{PhoneNumber}</p>
            </div>
          )}
        </div>

        <div>
          {edit ? (
            <div className="mb-4 border-[#CECECE] border-[1px] rounded-[4px] px-[12px] py-[8px]">
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                defaultValue={DateofBirth}
                onChange={(e) => setDateofBirth(e.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-[4px]">
              <h1>Date of Birth</h1>
              <p>{format(new Date(DateofBirth), "MMM, dd, yyyy")}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
