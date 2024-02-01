import React from "react";
import { Link } from "react-router-dom";


const SingleSlide = ({ image, index }) => {
  return (
    <>
      <Link
        to={image.link}
        target="_blank"
        className="relative rounded-lg overflow-hidden flex items-center justify-center group"
      >
        <div className="flex items-center justify-center relative overflow-hidden group">
          <img src={image.img} alt="" width={500} height={300} />
          <div className="absolute inset-0 bg-gradient-to-l from-[#000] via-[#32074d] to-[#ae143f] opacity-0 group-hover:opacity-80 transition-all duration-300"></div>
          <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-20 group-hover:xl:-translate-y-20 transition-all duration-300">
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
    </>
  );
};

export default SingleSlide;
