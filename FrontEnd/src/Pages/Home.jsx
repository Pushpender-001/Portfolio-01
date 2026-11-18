import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { IoMailOutline } from "react-icons/io5";
import { FaGithub, FaInstagram, FaCode, FaLocationDot } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpeg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/React.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import exprss from "../assets/express.png";
import mong from "../assets/mong.png";
import post from "../assets/post.webp";

// Add or remove skills here, each object becomes one tile
const skills = [
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "JAVASCRIPT", img: js },
  { name: "REACT JS", img: react, tight: true },
  { name: "TAILWIND CSS", img: tailwind },
  { name: "NODE JS", img: node },
  { name: "EXPRESS JS", img: exprss },
  { name: "MONGODB", img: mong },
  { name: "POSTMAN", img: post },
];

/* ================= ANIMATION VARIANTS ================= */
// Parent: staggers its children one after another
const container = (stagger = 0.12, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

// Fade + slide up
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Slide in from the left
const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Profile photo: scales + rotates in with a spring
const imageIn = {
  hidden: { opacity: 0, scale: 0.6, rotate: -8 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 90, damping: 14, delay: 0.2 },
  },
};

// Small pop (button, cards)
const popIn = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 160, damping: 14 },
  },
};

// Skill tiles
const tileIn = {
  hidden: { opacity: 0, scale: 0.5, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 150, damping: 13 },
  },
};

// Run the animation once, when ~25% of the element is visible
const inView = { once: true, amount: 0.25 };

// NOTE: hover:-translate-y / transition were removed from these classes
// because Tailwind transforms clash with Framer Motion. Hover is now handled
// by whileHover on each element.
const cardClass =
  "flex min-h-[7.5rem] cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 bg-gradient-to-br from-[#2d3f76] to-[#1c202d] p-4 text-center font-bold noto-serif-uniquifier hover:shadow-2xl hover:shadow-black transition-shadow";

const circleBtn =
  "flex cursor-pointer items-center justify-center rounded-full border-2 p-2 hover:border-blue-300 hover:text-gray-300 transition-colors";

// Divider line draws itself from the center when scrolled into view
const Divider = () => (
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    className="mx-auto w-[85%] border-b border-blue-300"
  />
);

const Home = () => {
  const navigate = useNavigate();

  return (
    // reducedMotion="user" turns off animations for people who
    // enabled "reduce motion" in their device settings
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#2d3f76] to-[#1c202d] text-white">
        {/* ================= HERO ================= */}
        <motion.section
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 pb-12 pt-10 sm:px-8 lg:flex-row lg:justify-between lg:px-16 lg:pb-14 lg:pt-20"
        >
          {/* Left side */}
          <motion.div
            variants={container(0.14, 0.1)}
            className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left"
          >
            <motion.p variants={fadeUp} className="text-lg">
              Hello, I'm
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-1 text-3xl font-normal sm:text-5xl xl:text-6xl"
            >
              Pushpender Singh Rawat
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-2 flex flex-wrap items-baseline justify-center gap-x-3 lg:justify-start"
            >
              <p className="text-lg sm:text-xl">I'm</p>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                className="text-2xl text-orange-400 sm:text-4xl"
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-base noto-serif-uniquifier sm:text-lg"
            >
              Full Stack MERN Developer with a passion for building beautiful,
              functional, and scalable web applications. I turn complex logic
              into smooth digital experiences.
            </motion.p>

            <motion.div
              variants={container(0.1)}
              className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <motion.a
                variants={popIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:pushpendersinghrawat23@gmail.com"
                className="flex items-center gap-2 rounded-xl border-2 border-gray-200 px-3 py-1.5 text-xs transition-colors hover:border-blue-300 hover:text-gray-300 sm:text-sm"
              >
                <IoMailOutline className="size-6 shrink-0" />
                pushpendersinghrawat23@gmail.com
              </motion.a>
              <motion.a
                variants={popIn}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Pushpender-001"
                className={circleBtn}
              >
                <FaGithub className="size-5" />
              </motion.a>
              <motion.a
                variants={popIn}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://instagram.com/pushpender_singh_rawat__"
                className={circleBtn}
              >
                <FaInstagram className="size-5" />
              </motion.a>
              <motion.a
                variants={popIn}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="tel:+918826282528"
                className={circleBtn}
              >
                <CiMobile3 className="size-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side */}
          <div className="relative flex w-full flex-col items-center lg:w-1/2">
            <div className="relative">
              {/* Entrance: spring in. Inner wrapper: slow floating loop */}
              <motion.div variants={imageIn}>
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    className="h-56 w-56 rounded-full border-4 border-orange-400 object-cover sm:h-72 sm:w-72 xl:h-96 xl:w-96"
                    src={bg}
                    alt="Pushpender Singh Rawat"
                  />
                </motion.div>
              </motion.div>

              {/* Plain div keeps the Tailwind positioning/translate,
                  the motion.button inside handles the animation */}
              <div className="mt-4 flex justify-center lg:absolute lg:bottom-2 lg:right-0 lg:mt-0 lg:translate-x-1/2">
                <motion.button
                  variants={popIn}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/contact")}
                  className="cursor-pointer whitespace-nowrap rounded border-2 border-orange-300 bg-[#1f2845] px-3 py-1 text-base text-orange-300 transition-colors hover:text-orange-400 noto-serif-uniquifier sm:text-lg"
                >
                  Let's connect →
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

        <Divider />

        {/* ================= ABOUT ================= */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-10 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-16 lg:py-14"
        >
          <motion.div
            variants={slideLeft}
            className="text-center lg:w-1/2 lg:text-left"
          >
            <h2 className="text-3xl font-bold black-ops-one-regular sm:text-4xl lg:text-5xl">
              About Me
            </h2>
            <p className="mt-3 text-base noto-serif-uniquifier sm:text-lg">
              I'm the developer who turns ideas into Websites people enjoy using
              it. I build applications that look great, load fast, responsive,
              and work for everyone.
            </p>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/about")}
              className="mt-4 cursor-pointer bg-orange-400 p-2 px-4 text-lg font-bold transition-colors hover:bg-amber-500 noto-serif-uniquifier"
            >
              For More →
            </motion.button>
          </motion.div>

          <motion.div
            variants={container(0.18, 0.2)}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:w-1/2 lg:gap-6"
          >
            <motion.div
              variants={popIn}
              whileHover={{ y: -6 }}
              className={cardClass}
            >
              <FaCode className="size-9 text-orange-400" />
              <p>Full Stack Developer</p>
            </motion.div>

            <motion.div
              variants={popIn}
              whileHover={{ y: -6 }}
              className={cardClass}
            >
              <FaLocationDot className="size-8 text-orange-400" />
              <p>Faridabad, India</p>
            </motion.div>

            <motion.div
              variants={popIn}
              whileHover={{ y: -6 }}
              className={cardClass}
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75 [animation-duration:2.5s]"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-orange-500"></span>
              </span>
              <p>Available to Hire</p>
            </motion.div>
          </motion.div>
        </motion.section>

        <Divider />

        {/* ================= SKILLS ================= */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-7xl px-4 py-10 sm:px-8 lg:px-16 lg:py-14"
        >
          <motion.h2
            variants={fadeUp}
            className="text-center text-3xl font-bold black-ops-one-regular sm:text-4xl lg:text-left lg:text-5xl"
          >
            Skills
          </motion.h2>

          <motion.div
            variants={container(0.08, 0.15)}
            className="mx-auto mt-8 grid max-w-2xl grid-cols-3 justify-items-center gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-8 xl:max-w-none xl:grid-cols-9"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={tileIn}
                whileHover={{ y: -8, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex cursor-pointer flex-col items-center gap-2 text-center"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className={`h-20 w-20 rounded-2xl border-2 bg-gradient-to-br from-[#2d3f76] to-[#1c202d] object-contain transition-shadow hover:shadow-2xl sm:h-24 sm:w-24 ${
                    skill.tight ? "p-2" : "p-4"
                  }`}
                />
                <p className="text-xs font-bold noto-serif-uniquifier sm:text-base">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <Divider />
      </div>
    </MotionConfig>
  );
};

export default Home;
