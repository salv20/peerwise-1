import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
const localizer = momentLocalizer(moment);

const DashboardCalenderSection = () => {
  const events = [
    {
      start: new Date(2023, 4, 12),
      title: "Event 1",
      end: new Date(2023, 4, 12),
    },
    {
      start: new Date(2023, 4, 20),
      end: new Date(2023, 4, 20),
      title: "Event 2",
    },
    // Add more events as needed
  ];

  return (
    <section className="lg:flex gap-[16px] ">
      <div className="grid gap-y-[70px] p-[30px] calander w-fit mx-auto rounded-[16px] sm:pr-[100px]">
        <div className="flex justify-between items-center w-[572px]">
          <h1 className="text-[24px] font-[900] ">May 2023</h1>

          <button className="flex gap-[16px] ">
            <GoChevronLeft className="text-[25px] text-[#AFAFAF]" />
            <GoChevronRight className="text-[25px] text-[#000000]" />
          </button>
        </div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 316, width: 572 }}
          toolbar={false}
        />
      </div>
      <div className="">
        paneln Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Aspernatur animi magni dolor laboriosam deleniti, saepe velit itaque!
        Corporis doloribus excepturi tempore saepe quod quas, corrupti
        voluptatibus inventore dolore voluptates eos.
      </div>
    </section>
  );
};

export default DashboardCalenderSection;
