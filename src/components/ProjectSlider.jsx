import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projectSlides = {
  slides: [
    {
      projects: [
        {
          title: "HooBank",
          img: "/HooBank.jpg",
          link: "https://aryakarthi.github.io/hoobank/",
        },
        {
          title: "Nike",
          img: "/Nike.jpg",
          link: "https://aryakarthi.github.io/nike_clone/",
        },

        {
          title: "Restaurantly",
          img: "/Restaurantly.jpg",
          link: "https://aryakarthi.github.io/restaurantly/",
        },
        {
          title: "Adventours",
          img: "/Adventours.jpg",
          link: "https://aryakarthi.github.io/adventours/",
        },
      ],
    },
    {
      projects: [
        {
          title: "Presento",
          img: "/Presento.jpg",
          link: "https://aryakarthi.github.io/presento/",
        },
        {
          title: "Flexor",
          img: "/Flexor.jpg",
          link: "https://aryakarthi.github.io/flexor/",
        },
        {
          title: "Todos",
          img: "/Todos.jpg",
          link: "https://aryakarthi.github.io/todoApp/",
        },
        // {
        //   title: "",
        //   img: "",
        //   link: "",
        // },
      ],
    },
  ],
};

const ProjectSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="h-[280px] sm:h-[480px]"
    >
      {projectSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.projects.map((image, index) => {
                return (
                  <Link
                    key={index}
                    to={image.link}
                    target="_blank"
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <img src={image.img} alt="" width={500} height={300} />
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
