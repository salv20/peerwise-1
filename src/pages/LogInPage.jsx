import { useState } from "react";
import { BiShow, BiSolidHide } from "react-icons/bi";
import { Link } from "react-router-dom";

const LogInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section>
      <div className="container mx-auto lg:w-[100%] lg:p-0 lg:m-0 lg:max-w-full">
        <div className="font-roboto lg:flex items-center gap-[28px] justify-between ">
          {/* IMAGE DIV */}

          <div className="relative hidden lg:block bg-frame_img bg-cover bg-no-repeat bg-center h-[100vh] w-[604px]">
            <div className="bg-[#088395CC] absolute w-full h-full">
              <div className="flex flex-col min-h-screen justify-center items-center">
                <img
                  src="/Logo.png"
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
            <div className="">
              <div className=" grid gap-4 lg:gap-8">
                <h1 className="text-[28px] font-[700]">
                  Login to&nbsp;
                  <span className="text-[#37BBCA]">Peerwize</span>
                </h1>

                <div className="text-[16px] flex items-center gap-[8px] font-[400] justify-center">
                  <span className="signup_span" />
                  <p>
                    Don’t have an account?&nbsp;
                    <Link to="signup" className="text-[#37BBCA]">
                      Sign up
                    </Link>
                  </p>
                  <span className="signup_span" />
                </div>
              </div>

              <form className="py-4 pt-8 flex flex-col gap-y-6">
                <input
                  type="text"
                  id="email-no"
                  name="email-number"
                  placeholder="Email/Phone number"
                  className="auth_input"
                />

                <div>
                  <div className="auth_input flex items-center justify-between">
                    <input
                      type={!showPassword ? "password" : "text"}
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="outline-none w-full h-full"
                    />
                    <button
                      type="button"
                      aria-label="showPassword"
                      className="text-[#848484] text-3xl"
                    >
                      {showPassword ? (
                        <BiShow
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      ) : (
                        <BiSolidHide
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      )}
                    </button>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-[#37BBCA] text-[13px] mt-[2px] flex w-fit"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="bg-[#37BBCA] text-[16px] text-[#FFFFFF] px-[12px] py-[11px] h-[46px] rounded-[4px]"
                >
                  Login
                </button>
              </form>

              <p className="font-roboto font-400 text-[13px]">
                By continuing, you agree to our&nbsp;
                <Link to="/" className="text-[#37BBCA]">
                  Terms of service
                </Link>
                &nbsp; and&nbsp;
                <Link to="/" className="text-[#37BBCA]">
                  Privacy policy
                </Link>
                &nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogInPage;
