import React from "react";
import { motion, MotionConfig } from "framer-motion";
import myPic from "../assets/myPic.jpg";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaReact,
  FaDatabase,
  FaUserGraduate,
  FaUniversity,
  FaSchool,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    board: "Maharshi Dayanand University",
    institute: "Aggarwal College",
    years: "2022 - 2025",
    description:
      "Graduated with a focus on Website Development, Database Management etc.",
  },
  {
    degree: "Senior Secondary (12th Grade)",
    board: "CBSE Board",
    institute: "Rawal Public School",
    years: "2021 - 2022",
    description:
      "Completed with a focus on Commerce (Accountancy, Business Studies, Mathematics).",
  },
];

const stats = [
  { value: "10+", label: "Technologies" },
  { value: "5+", label: "Projects" },
  { value: "2026", label: "Active To Work" },
];

/* ================= ANIMATION SETTINGS ================= */
// Parent: staggers its children one after another
const container = (stagger = 0.12, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

// Fade + slide down (page heading)
const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Fade + slide up
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Comes in from the LEFT  (moves left -> right)
const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Comes in from the RIGHT (moves right -> left)
const fromRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Stat cards: small spring pop
const popIn = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 160, damping: 14 },
  },
};

// Photo: springs in with a slight rotation
const photoIn = {
  hidden: { opacity: 0, scale: 0.7, rotate: -6 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 90, damping: 14 },
  },
};

// Photo floating loop: slow up and down. Change to taste.
const FLOAT_DISTANCE = 12; // px
const FLOAT_DURATION = 4; // seconds per cycle

// Play once when ~20% of the element is visible
const inView = { once: true, amount: 0.2 };

const About = () => {
  const navigate = useNavigate();

  return (
    // reducedMotion="user": animations (including the float) switch off
    // for visitors who enabled "reduce motion" on their device
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#2d3f76] to-[#1c202d] pb-10 text-white sm:pb-14">
        {/* Heading */}
        <motion.h1
          variants={fadeDown}
          initial="hidden"
          animate="show"
          className="px-4 py-8 text-center text-3xl font-bold noto-serif-uniquifier sm:py-10 sm:text-4xl lg:text-5xl"
        >
          About Me
        </motion.h1>

        {/* ================= INTRO ================= */}
        <section className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-8 lg:flex-row lg:items-start lg:gap-16 lg:px-16">
          {/* Left side: text slides in from the LEFT */}
          <motion.div
            variants={container(0.15, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="flex flex-col gap-6 text-base sm:gap-8 sm:text-lg lg:w-1/2"
          >
            <motion.p variants={fromLeft}>
              I'm the developer who turns ideas into web experiences people
              enjoy using. My mission is to build applications that look great,
              load fast, respond on every device and work for everyone.
            </motion.p>
            <motion.p variants={fromLeft}>
              I've always enjoyed making things and figuring out how they work.
              These days, most of that curiosity goes into code: building
              projects, trying new technologies, and learning along the way.
            </motion.p>

            {/* Stat cards: pop in one by one */}
            <motion.div
              variants={container(0.12)}
              className="grid grid-cols-3 gap-3 sm:gap-6"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={popIn}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex min-h-20 cursor-pointer flex-col items-center justify-center rounded-xl border border-gray-500 bg-gradient-to-br from-[#2d3f76] to-[#1c202d] p-2 text-center transition-colors hover:border-blue-400 hover:shadow-2xl caveat-uniquifier sm:min-h-24 sm:p-3"
                >
                  <p className="text-xl sm:text-3xl">{s.value}</p>
                  <p className="text-xs leading-tight sm:text-xl">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side: photo + info card */}
          <motion.div
            variants={container(0.2, 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center lg:w-1/2 lg:flex-col lg:items-center xl:flex-row xl:items-start"
          >
            {/* Photo: springs in, then floats up and down forever */}
            <motion.div variants={photoIn} className="shrink-0">
              <motion.div
                animate={{ y: [0, -FLOAT_DISTANCE, 0] }}
                transition={{
                  duration: FLOAT_DURATION,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={myPic}
                  alt="Pushpender Singh Rawat"
                  className="h-64 w-56 rounded-2xl object-cover shadow-xl sm:h-72 sm:w-64"
                />
              </motion.div>
            </motion.div>

            {/* Info card: slides in from the RIGHT */}
            <motion.div
              variants={fromRight}
              className="flex w-full max-w-xs flex-col gap-3 rounded-lg border-2 bg-gradient-to-br from-[#2d3f76] to-[#1c202d] p-4 text-base text-blue-500 shadow-2xl transition-colors hover:border-blue-600 sm:w-64 sm:text-lg"
            >
              <div className="flex items-center gap-2">
                <span
                  onClick={() => navigate("/contact")}
                  className="cursor-pointer text-green-400"
                >
                  Available_For_Hire
                </span>
                <span className="relative mt-0.5 flex h-3 w-3 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 [animation-duration:2.5s]"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>
              </div>

              <div>
                <p className="flex gap-1 text-sm text-gray-400 caveat-uniquifier">
                  <FaReact className="size-5" />
                  ROLE
                </p>
                <p>Full-Stack Developer</p>
              </div>

              <div>
                <p className="flex gap-1 text-sm text-gray-400 caveat-uniquifier">
                  <FaLocationDot className="mt-0.5 size-4" />
                  LOCATION
                </p>
                <p>Faridabad, India</p>
              </div>

              <div>
                <p className="flex gap-1 text-sm text-gray-400 caveat-uniquifier">
                  <FaDatabase className="mt-0.5 size-4" />
                  SKILLS
                </p>
                <p>
                  Frontend Development, Backend Development, Database
                  Management.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ================= EDUCATION ================= */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-6 mt-12 px-4 text-center text-3xl font-bold noto-serif-uniquifier sm:mb-8 sm:mt-14 sm:text-4xl lg:text-5xl"
        >
          EDUCATION
        </motion.h2>

        <motion.section
          variants={container(0.25)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto grid max-w-6xl gap-5 px-4 sm:gap-6 sm:px-8 md:grid-cols-2"
        >
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              // 1st card from the left, 2nd from the right, and so on
              variants={index % 2 === 0 ? fromLeft : fromRight}
              whileHover={{ y: -6 }}
              className="flex gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#2d3f76] to-[#1c202d] p-5 transition-colors duration-300 hover:border-blue-400 sm:gap-5 sm:p-6"
            >
              {/* Icon: spins once on hover */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg text-blue-400 sm:h-14 sm:w-14 sm:text-xl"
              >
                <FaUserGraduate />
              </motion.div>

              {/* Details */}
              <div className="min-w-0">
                <h3 className="break-words text-lg font-bold text-white sm:text-xl">
                  {item.degree}
                </h3>

                <p className="mt-1 flex items-start gap-2 font-semibold text-blue-400">
                  <FaUniversity className="mt-1 shrink-0" />
                  {item.board}
                </p>

                <p className="mt-2 flex items-start gap-2 font-semibold text-gray-200">
                  <FaSchool className="mt-1 shrink-0 text-gray-300" />
                  {item.institute}
                </p>

                <p className="mt-2 text-sm text-gray-500">{item.years}</p>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </MotionConfig>
  );
};

export default About;
