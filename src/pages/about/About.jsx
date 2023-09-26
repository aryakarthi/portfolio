import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Bulb, Circles } from "../../components";

import { motion } from "framer-motion";

import { fadeIn } from "../../scripts/variants";

import resume from "/AriyaPerumal_M_CV.pdf?url";

import { MdOutlineFileDownload } from "react-icons/md";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNpm,
  FaBootstrap,
  FaSass,
  FaPhp,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiMui,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaBootstrap />,
          <FaSass />,
          <SiMui />,
          <SiTailwindcss />,
          <FaJs />,
          <FaReact />,
        ],
      },
      {
        title: "Backend (Basics)",
        icons: [<FaPhp />, <FaNodeJs />, <SiExpress />],
      },
      {
        title: "Database (Basics)",
        icons: [<SiMysql />, <SiMongodb />],
      },
      {
        title: "Tools",
        icons: [<FaGitAlt />, <FaGithub />, <FaNpm />, <TbBrandVscode />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "ReactJS Developer Intern - Fabevy Technologies, Chennai.",
        stage: "Oct 2022 to June 2023",
      },
      {
        title: "Cloud App Developer - Yaali Bizappln Solutions, Chennai.",
        stage: "Oct 2019 to May 2021",
      },
      {
        title: "Cloud App Developer - UX Business Solutions, Chennai.",
        stage: "Dec 2018 to Oct 2019",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title:
          "BE CSE - S.Veerasamy Chettiar College of Engineering, Puliangudi.",
        stage: "2012 to 2016",
      },
      {
        title: "HSC - S.M.S.S Govt Boys Higher Secondary School, Sengottai.",
        stage: "2011 to 2012",
      },
      {
        title: "SSLC - S.M.S.S Govt Boys Higher Secondary School, Sengottai.",
        stage: "2009 to 2010",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            className="h3"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            // exit="hidden"
          >
            Designing Your <span className="text-accent">Digital Dreams</span>{" "}
            in Pixel Perfect.
          </motion.h2>
          <motion.p
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 px-2 xl:px-0"
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
          >
            An enthusiastic front-end developer having a keen eye on design
            technologies, creating great user-friendly and responsive web
            designs.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
          >
            <Link
              to={resume}
              target="_blank"
              // download
              className="text-white w-[120px] bg-gradient-to-r inline-flex items-center gap-2 from-red-500 via-red-550 to-red-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-5 py-3"
            >
              <span>Resume</span> <MdOutlineFileDownload />
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col w-full xl:max-w-[48%]"
          // h-[480px]
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((v, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    index === i &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(i)}
                >
                  {v.title}
                </div>
              );
            })}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((v, i) => {
              return (
                <div
                  key={i}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/80"
                >
                  <div className="font-light mb-2 md:mb-0">{v.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{v.stage}</div>
                  <div className="flex gap-x-4">
                    {v.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <Bulb/>
    </div>
  );
};

export default About;
