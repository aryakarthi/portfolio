import { Link } from "react-router-dom";
import { SingleSlide } from "../components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projectData } from "../utils/data";

const ProjectSlider = ({ windowWidth }) => {
  const projectSlides = [];
  for (let i = 0; i < projectData.length; i += 4) {
    const groupSlide = projectData.slice(i, i + 4);
    projectSlides.push({ projects: groupSlide });
  }

  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="h-[280px] sm:h-[480px]"
    >
      {windowWidth >= 768 ? (
        <>
          {projectSlides.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                  {slide.projects.map((image, index) => {
                    return <SingleSlide image={image} index={index} />;
                  })}
                </div>
              </SwiperSlide>
            );
          })}
        </>
      ) : (
        <>
          {projectData.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <SingleSlide image={image} index={index} />
              </SwiperSlide>
            );
          })}
        </>
      )}
    </Swiper>
  );
};

export default ProjectSlider;
