import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Bulb, Circles } from "../../components";

import { motion } from "framer-motion";

import { fadeIn } from "../../scripts/variants";

import resumePDF from "/RESUME_Ariya_Perumal_M.pdf?url";

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
import { Tooltip } from "../../components";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend",
        icons: [
          { icon: <FaHtml5 />, iconTitle: "HTML" },
          { icon: <FaCss3 />, iconTitle: "CSS" },
          { icon: <FaBootstrap />, iconTitle: "Bootstrap" },
          { icon: <FaSass />, iconTitle: "Sass" },
          { icon: <SiMui />, iconTitle: "MUI" },
          { icon: <SiTailwindcss />, iconTitle: "Tailwind" },
          { icon: <FaJs />, iconTitle: "Javascript" },
          { icon: <FaReact />, iconTitle: "React" },
        ],
      },
      {
        title: "Backend (Basics)",
        icons: [
          { icon: <FaPhp />, iconTitle: "PHP" },
          { icon: <FaNodeJs />, iconTitle: "NodeJS" },
          { icon: <SiExpress />, iconTitle: "ExpressJS" },
        ],
      },
      {
        title: "Database (Basics)",
        icons: [
          { icon: <SiMysql />, iconTitle: "MySQL" },
          { icon: <SiMongodb />, iconTitle: "MongoDB" },
        ],
      },
      {
        title: "Tools",
        icons: [
          { icon: <FaGitAlt />, iconTitle: "Git" },
          { icon: <FaGithub />, iconTitle: "GitHub" },
          { icon: <FaNpm />, iconTitle: "NPM" },
          { icon: <TbBrandVscode />, iconTitle: "VSCode" },
        ],
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
        <div className="flex flex-1 flex-col justify-center">
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
            className="hidden md:block max-w-[500px] mx-auto xl:mx-0 mb-6 px-2 xl:px-0"
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
              to={resumePDF}
              target="_blank"
              // download
              className="text-white w-[120px] bg-gradient-to-r inline-flex items-center gap-2 from-red-500 via-red-550 to-red-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-5 py-3"
            >
              <span>Resume</span> <MdOutlineFileDownload />
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-1 flex-col w-full xl:max-w-[48%]"
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
                  <div className="xl:flex-1 font-light mb-2 md:mb-0">
                    {v.title}
                  </div>
                  <div className="hidden md:flex">-</div>
                  {v.stage && <div className="xl:flex-1">{v.stage}</div>}
                  {v.icons && (
                    <div className="flex gap-x-4">
                      {v.icons?.map((iconItem, iconIndex) => {
                        return (
                          <div
                            key={iconIndex}
                            className="text-2xl text-white relative group hover:text-accent cursor-pointer"
                          >
                            <Tooltip iconTitle={iconItem.iconTitle} />
                            {iconItem.icon}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <Bulb />
    </div>
  );
};

export default About;
