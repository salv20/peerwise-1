import DashboardNavBar from "./DashboardComponents/DashboardNavBar";
import DashboardSideBar from "./DashboardComponents/DashboardSideBar";

import { Outlet } from "react-router-dom";
import { useState } from "react";

const DesignSkeleton = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <section>
      <div className="lg:flex ">
        <DashboardSideBar openNav={openNav} setOpenNav={setOpenNav} />

        <div
          className={`${
            openNav && "h-screen overflow-hidden "
          }  w-full flex flex-col gap-[20px] xxl:overflow-scroll`}
        >
          <DashboardNavBar openNav={openNav} setOpenNav={setOpenNav} />
          <div
            className={`${openNav ? "blur-[1px] " : "blur-0"} xxl:blur-0`}
            onClick={() => setOpenNav(false)}
          >
            <Outlet openNav={openNav} setOpenNav={setOpenNav} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSkeleton;
