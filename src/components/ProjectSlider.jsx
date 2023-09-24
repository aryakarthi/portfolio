import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const projectSlides = {
  slides: [
    {
      images: [
        {
          title: "HooBank",
          path: "/thumb1.jpg",
          link: "https://aryakarthi.github.io/hoobank/",
        },
        {
          title: "Presento",
          path: "/thumb2.jpg",
          link: "https://aryakarthi.github.io/hoobank/",
        },
        {
          title: "Restaurantly",
          path: "/thumb3.jpg",
          link: "https://aryakarthi.github.io/hoobank/",
        },
        {
          title: "Flexor",
          path: "/thumb4.jpg",
          link: "https://aryakarthi.github.io/hoobank/",
        },
      ],
    },
    {
      images: [
        {
          title: "Todos",
          path: "/thumb4.jpg",
          link: "https://aryakarthi.github.io/hoobank/",
        },
        {
          title: "Adventours",
          path: "/thumb1.jpg",
          link: "https://aryakarthi.github.io/hoobank/",
        },
        {
          title: "AK Mobiles",
          path: "/thumb2.jpg",
          link: "https://aryakarthi.github.io/hoobank/",
        },
        {
          title: "Shopkart",
          path: "/thumb3.jpg",
          link: "https://aryakarthi.github.io/hoobank/",
        },
      ],
    },
  ],
};

const ProjectSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {projectSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <Link key={index} to={image.link} target="_blank" className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <img src={image.path} alt="" width={500} height={300} />
                      <div className="absolute inset-0 bg-gradient-to-l from-[#000] via-[#32074d] to-[#ae143f] opacity-0 group-hover:opacity-80 transition-all duration-300"></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-4 text-[12px] tracking-[0.2em]">
                          <div className="delay-100 lg:text-xl font-semibold">
                            {image.title}
                          </div>
                          {/* <div className="hidden md:block translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            Code
                          </div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            Live
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProjectSlider;
