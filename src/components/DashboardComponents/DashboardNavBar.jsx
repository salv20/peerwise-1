import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const DashboardNavBar = ({ openNav, setOpenNav }) => {
  const Location = useLocation();
  const currentPage = Location.pathname.replace("/", "");

  return (
    <nav className="font-roboto shadow-[#1100FF29] shadow-sm  bg-[#F7FCFD]">
      <div className="mx-auto container justify-between flex items-center px-[14px] xxl:pr-[80px] min-h-[80px] sm:min-h-[100px]">
        <h1 className="font-[700] text-[23px] capitalize">{currentPage}</h1>

        <div>
          <div className="font-[700] text-[23px] text-[#2C96A2] xxl:hidden">
            {!openNav ? (
              <button onClick={() => setOpenNav(!openNav)}>
                <FaBars />
              </button>
            ) : (
              <button onClick={() => setOpenNav(!openNav)}>
                <FaTimes />
              </button>
            )}
          </div>

          <div className="hidden xxl:flex gap-[16px] items-center">
            <img src="/notification.png" alt="" />
            <img src="/user.png" alt="" height={60} width={60} />
            <p className="grid items-center">
              <span className=" text-[19px] text-[#141414] font-[700]">
                Sim fubara
              </span>
              <span className="font-[300] text-[#848484] text-[16px] ">
                Learner
              </span>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavBar;
