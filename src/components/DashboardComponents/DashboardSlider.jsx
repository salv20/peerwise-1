import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import {
  Pagination,
  Autoplay,
  Navigation,
  EffectFade,
  Keyboard,
  Mousewheel,
} from "swiper/modules";
import SwiperCore from "swiper/core";
import { FaPlus } from "react-icons/fa";

const slidesComponents = [
  {
    src: "book.png",
    category: "Course",
    title: "Conducting Interview for better research enviro...",
    ratingNumber: 4,
    ratingValueText: "4.3 (2)",
  },
  {
    src: "tutor.png",
    category: "Course",
    title: "Conducting Interview for better research enviro...",
    ratingNumber: 4,
    ratingValueText: "4.3 (2)",
  },
  {
    src: "student.png",
    category: "Course",
    title: "Conducting Interview for better research enviro...",
    ratingNumber: 4,
    ratingValueText: "4.3 (2)",
  },
  {
    src: "book.png",
    category: "Course",
    title: "Conducting Interview for better research enviro...",
    ratingNumber: 4,
    ratingValueText: "4.3 (2)",
  },
];

const DashboardSlider = () => {
  SwiperCore.use([Keyboard, Mousewheel]);

  return (
    <div className="w-[95%] text-[#141414] p-[12px] mx-auto font-roboto bg-[#F7FCFD]">
      <div className="flex p-[8px] items-center justify-between">
        <h1 className="h-[16px] font-[700] flex items-center gap-[8px]">
          <span className="text-[#646a6a] text-[14px]">
            <FaPlus />
          </span>
          My Feed
        </h1>
        <img src="/maximize.png" alt="" />
      </div>

      <Swiper
        breakpoints={{
          900: {
            slidesPerView: 3.2,
            spaceBetween: 10,
          },
          560: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          300: {
            slidesPerView: 1.2,
            spaceBetween: 5,
          },
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={true}
        direction="horizontal"
        mousewheel={true}
        navigation={true}
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
      >
        {slidesComponents.map((slide, index) => (
          <SwiperSlide key={index} className="py-[10px] mb-[30px] ">
            <div className="grid gap-[8px]">
              <img src={slide.src} alt="" className="w-full" />

              <div className="grid gap-[8px] px-[16px]">
                <h1 className="text-[11px] font-[700]"> {slide.category}</h1>
                <p className="text-[16px] font-[400]"> {slide.title}</p>

                <div className="flex items-center justify-between">
                  <p className="flex">
                    {Array(Math.round(slide.ratingNumber))
                      .fill(0)
                      .map((_, index) => (
                        <img src="/ratingstar.png" alt="" key={index} />
                      ))}
                  </p>

                  {slide.ratingValueText}
                </div>
                <button className="text-center w-full bg-[#37BBCA] h-[36px] rounded-[4px] text-[#FFFFFF] text-[13px]">
                  View Course
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DashboardSlider;
