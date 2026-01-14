import { ProjectsBtn, Avatar } from "../../components";

import { motion } from "framer-motion";

import { fadeIn } from "../../scripts/variants";

const Home = () => {
  return (
    <div className="h-full">
      <div className="w-full h-[40%] lg:h-full bg-slate-70">
        <div className="text-center flex flex-col justify-center pt-36 xl:pt-40 lg:text-left h-full container mx-auto">
          <motion.h3
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            // exit="hidden"
            className="h3 leading-normal"
          >
            <span>Hi.!</span>
            <br />
            <span>I&apos;m </span>
            <span className="text-accent">Ariya Perumal</span>
            <br />
            <span className="font-newsreader italic font-light">
              React JS Developer.
            </span>
          </motion.h3>
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            // exit="hidden"
            className="max-w-sm lg:max-w-xl mx-auto lg:mx-0 mb-10 lg:mb-10 text-white"
          >
            Transforming Ideas Into{" "}
            <span className="text-accent font-semibold"> Digital Reality.</span>
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            // exit="hidden"
            className="hidden lg:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-[60%] lg:h-full absolute right-0 bottom-0">
        {/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div> */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          // exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-sm max-h-full lg:max-w-xl absolute bottom-20 -right-4 sm:bottom-20 sm:right-24 md:bottom-20 md:right-36 lg:-bottom-16 lg:right-6 xl:-bottom-4 xl:right-36"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

// const Home = () => {
//   return (
//     <div className=" h-full">
//       <div className="w-full h-full">
//         <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
//           <motion.h3
//             variants={fadeIn("down", 0.2)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="h3 leading-normal"
//           >
//             <span>Hi.!</span>
//             <br />
//             <span>I'm </span>
//             <span className="text-accent">Ariya Perumal .M</span>
//             <br />
//             <span className="font-newsreader italic font-light">
//               React JS Developer.
//             </span>
//           </motion.h3>
//           <motion.p
//             variants={fadeIn("down", 0.4)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-10 text-white"
//           >
//             Transforming Ideas Into{" "}
//             <span className="text-accent font-semibold"> Digital Reality.</span>
//           </motion.p>
//           <motion.div
//             variants={fadeIn("down", 0.6)}
//             initial="hidden"
//             animate="show"
//             className="flex justify-center xl:hidden relative z-10"
//           >
//             <ProjectsBtn />
//           </motion.div>
//           <motion.div
//             variants={fadeIn("down", 0.6)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="hidden xl:flex"
//           >
//             <ProjectsBtn />
//           </motion.div>
//         </div>
//       </div>
//       <div className="w-[1200px] h-full absolute right-0 bottom-0">
//         <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
//         <motion.div
//           variants={fadeIn("up", 0.5)}
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//           transition={{ duration: 1, ease: "easeInOut" }}
//           className="w-full h-full hidden xl:block max-w-[640px] max-h-full absolute -bottom-32 lg:bottom-0 lg:right-[10%]"
//         >
//           <Avatar />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

export default Home;
