import { useState } from "react";
import { BiShow, BiSolidHide } from "react-icons/bi";
import { Link } from "react-router-dom";

const Countries = ["country", "nigeria", "south africa", "ghana", "usa"];
const Cities = ["city", "port harcourt", "cape town", "accra", "new york"];

const Signup = () => {
  const [show, setShow] = useState(false);

  return (
    <section>
      <div className="container mx-auto lg:w-[100%] lg:p-0 lg:m-0 lg:max-w-full">
        <div className="font-roboto lg:flex  gap-[28px] justify-between ">
          {/* IMAGE DIV */}

          <div className="relative hidden lg:block bg-frame_img bg-cover bg-no-repeat bg-center h-[100vh] w-[604px]">
            <div className="bg-[#088395CC] absolute w-full h-full">
              <div className="flex flex-col min-h-screen justify-center items-center">
                <img
                  src="/Peerwize Logo.png"
                  alt="logo"
                  height="127.08px"
                  width="127.09px"
                />

                <p className="text-[#FBA04B] font-[700] text-[16px">
                  connecting skills, creating futures...
                </p>
              </div>
            </div>
          </div>

          {/* FORM DIV */}

          <div className="form-scroll">
            <div className=" grid gap-4 lg:gap-8">
              <h1 className="text-[28px] font-[700]">
                Sign up on <span className="text-[#37BBCA]">Peerwize</span>
              </h1>

              <div className="text-[16px] flex items-center gap-[8px] font-[400] justify-center">
                <span className="signup_span" />
                <p>
                  Already have an account?{" "}
                  <Link to="/" className="text-[#37BBCA]">
                    {" "}
                    {/* PATH TO LOGIN PAGE */}
                    Login
                  </Link>
                </p>
                <span className="signup_span" />
              </div>
            </div>

            <form action="" className="py-4 pt-8 flex flex-col gap-y-6">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="auth_input"
              />

              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
                className="auth_input"
              />

              <input
                type="text"
                id="LastName"
                name="LastName"
                placeholder="Last name"
                className="auth_input"
              />

              <select
                name="country"
                id="country"
                className="auth_input text-[#848484] capitalize"
              >
                {Countries.map((country, index) => (
                  <option value={country} key={index}>
                    {country}
                  </option>
                ))}
              </select>

              <select
                name="city"
                id="city"
                className="auth_input text-[#848484] capitalize"
              >
                {Cities.map((city, index) => (
                  <option value={city} key={index}>
                    {city}
                  </option>
                ))}
              </select>

              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone number"
                className="auth_input"
              />

              <div className="relative">
                <input
                  type={!show ? "password" : "text"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="auth_input"
                />

                <div className="absolute top-[10px] text-[#848484] cursor-pointer right-3 text-3xl">
                  <BiShow
                    className={show ? "hidden" : "block"}
                    onClick={() => setShow(true)}
                  />
                  <BiSolidHide
                    className={!show ? "hidden" : "block"}
                    onClick={() => setShow(false)}
                  />
                </div>

                <p className="text-[13px] text-left text-[#848484] ">
                  Minimum of 8 characters including a number
                </p>
              </div>

              <div className="relative">
                <input
                  type={!show ? "password" : "text"}
                  id="ConfirmPassword"
                  name="ConfirmPassword"
                  placeholder="Confirm password"
                  className="auth_input"
                />

                <div className="absolute top-[10px] text-[#848484] cursor-pointer right-3 text-3xl">
                  <BiShow
                    className={show ? "hidden" : "block"}
                    onClick={() => setShow(true)}
                  />
                  <BiSolidHide
                    className={!show ? "hidden" : "block"}
                    onClick={() => setShow(false)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#37BBCA] text-[16px] text-[#FFFFFF] px-[12px] py-[11px] h-[46px] rounded-[4px]"
              >
                Sign up
              </button>
            </form>

            <p className="font-roboto font-400 text-[13px]">
              By continuing, you agree to our{" "}
              <Link to="/" className="text-[#37BBCA]">
                Terms of service
              </Link>{" "}
              and{" "}
              <Link to="/" className="text-[#37BBCA]">
                Privacy policy
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
