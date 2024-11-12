import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa6";

const DashboardSideBar = () => {
  const [activeButton, setActiveButton] = useState("Dashboard");
  const [dropDown, setDropDown] = useState(true);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttons = [
    { name: "Dashboard", icon: "/element.png" },
    { name: "Profile", icon: "/profile.png" },
    { name: "Community", icon: "/comunity.png" },
    {
      name: "Resource Library",
      icon: "/library.png",
      dropOptions: [
        { name: "Resources", icon: "/resource.png" },
        { name: "Saved Courses", icon: "/save.png" },
      ],
    },
    { name: "Webinars", icon: "/webinar.png" },
    { name: "Chat", icon: "/chat.png" },
    { name: "Settings", icon: "/settings.png" },
  ];

  return (
    <article className="dashboard_sideBar hidden lg:block">
      <div className="grid gap-[120px] justify-around">
        <div className="grid gap-[32px] ">
          <img
            src="/PeerwizeLogo.png"
            alt="Logo"
            width="176.08"
            height="48.2"
          />

          <div className="grid gap-[16px] text-white">
            {buttons.map((button, index) => (
              <div className="grid" key={index}>
                {button.dropOptions ? (
                  <div>
                    <div
                      className="flex items-center"
                      onClick={() => setDropDown(!dropDown)}
                    >
                      <button className="btn_dashboard">
                        <img src="/library.png" alt="" />
                        Resource Library
                      </button>
                      <button className="text-[25px] text-white">
                        {dropDown ? <FaCaretDown /> : <FaCaretUp />}
                      </button>
                    </div>

                    {dropDown &&
                      button.dropOptions.map((button) => (
                        <div className="grid px-[24px]" key={button.name}>
                          <button
                            className={`btn_dashboard  ${
                              activeButton === button.name
                                ? "btn_dashboard_active"
                                : ""
                            }`}
                            onClick={() => handleButtonClick(button.name)}
                          >
                            <img src={button.icon} alt={button.name} />
                            <span>{button.name}</span>
                          </button>
                        </div>
                      ))}
                  </div>
                ) : (
                  <button
                    key={button.name}
                    className={`btn_dashboard ${
                      activeButton === button.name ? "btn_dashboard_active" : ""
                    }`}
                    onClick={() => handleButtonClick(button.name)}
                  >
                    <img src={button.icon} alt={button.name} />
                    <span>{button.name}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-[60px] relative left-6">
          <div className="w-[292px] grid gap-4 justify-items-center rounded-[8px] p-[16px] bg-white">
            <img src="/star.png" alt="" height={60} width={60} />
            <p className="text-center">
              Become a professional.
              <br />
              Upgrade to start sharing courses and webinars
            </p>
            <button className="text-white bg-[#2C96A2] rounded-[4px] w-[260px] h-[36px]">
              Upgrade
            </button>
          </div>

          <button className="text-[#141414] bg-[#EBF8FA] rounded-[4px] w-[292px] h-[46px] flex items-center justify-center">
            <img
              src="/logout.png"
              alt=""
              className="mr-2"
              height={24}
              width={24}
            />
            Logout
          </button>
        </div>
      </div>
    </article>
  );
};

export default DashboardSideBar;
