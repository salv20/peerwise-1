const DashboardNavBar = () => {
  return (
    <nav className="flex font-roboto justify-between shadow-[#1100FF29] shadow-sm items-center h-[116px] py-[16px] pl-[14px] pr-[80px] bg-[#F7FCFD] ">
      <h1 className="font-[700] text-[23px]  ">Dashboard</h1>

      <div className="flex gap-[16px] items-center">
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
    </nav>
  );
};

export default DashboardNavBar;
