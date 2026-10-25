import React from "react";
import { Link } from "react-router-dom";
import { motion, MotionConfig } from "framer-motion";
import { IoMailOutline } from "react-icons/io5";

// Edit these to your own links
const sitemap = [
  { name: "Projects", to: "/projects" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const connect = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pushpender-singh-rawat-298614344",
  },
  { name: "GitHub", href: "https://github.com/Pushpender-001" },
  { name: "Instagram", href: "https://instagram.com/pushpender_singh_rawat__" },
];

/* ================= ANIMATION SETTINGS ================= */
// Card fades in, then its columns appear one after another
const cardVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

// Each column staggers its own lines of text
const columnVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

// Text comes in from the LEFT  (moves left -> right)
const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Text comes in from the RIGHT (moves right -> left)
const fromRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Floating loop (slow up and down). The two items use different
// distance / speed / delay so they don't move in sync.
const floatButton = {
  animate: { y: [0, -8, 0] },
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};
const floatStatus = {
  animate: { y: [0, -6, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
};

// Play once when ~15% of the footer card is visible
const inView = { once: true, amount: 0.15 };

const Footer = () => {
  return (
    // reducedMotion="user": animations switch off for visitors who
    // enabled "reduce motion" on their device
    <MotionConfig reducedMotion="user">
      {/* overflow-hidden stops a horizontal scrollbar while text slides in */}
      <footer className="w-full overflow-hidden bg-gradient-to-br from-[#233056] to-[#040506] px-3 py-6 sm:px-6 sm:py-8 caveat-uniquifier text-blue-50">
        {/* Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-7xl rounded-3xl border border-white/20 bg-white/5 p-6 sm:rounded-[2.5rem] sm:p-10 lg:p-12 xl:rounded-[3.5rem] xl:p-14"
        >
          {/*
            Mobile (<640px) : 1 column, everything stacked
            sm  (640px+)    : 2 columns
            lg  (1024px+)   : 3 columns
            xl  (1280px+)   : 4 columns in one row
          */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.8fr_1fr_1.1fr_1fr] xl:gap-12">
            {/* Brand + button  ->  slides in from the LEFT */}
            <motion.div
              variants={columnVariants}
              className="self-center sm:col-span-2 lg:col-span-3 xl:col-span-1"
            >
              <motion.p
                variants={fromLeft}
                className="max-w-xl text-lg leading-8 sm:text-xl sm:leading-9 xl:max-w-md"
              >
                Building intuitive digital experiences with modern technology.
                Turning ideas into scalable, seamless, and meaningful web
                solutions.
              </motion.p>

              <motion.div variants={fromLeft} className="mt-6 sm:mt-8">
                {/* Floating "Start a project" button */}
                <motion.div
                  animate={floatButton.animate}
                  transition={floatButton.transition}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="sm:inline-block"
                >
                  <Link
                    to="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-400 px-6 py-3 text-base font-bold uppercase text-gray-900 transition-colors noto-serif-uniquifier hover:bg-orange-500 hover:text-white sm:w-auto sm:py-4 sm:text-lg"
                  >
                    Start a project
                    <IoMailOutline className="text-xl" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Sitemap  ->  slides in from the LEFT */}
            <motion.div variants={columnVariants}>
              <motion.p
                variants={fromLeft}
                className="mb-2 text-sm uppercase text-white/80 noto-serif-uniquifier"
              >
                Sitemap
              </motion.p>
              <ul className="flex flex-col gap-2 sm:gap-3">
                {sitemap.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={fromLeft}
                    whileHover={{ x: 8 }}
                  >
                    <Link
                      to={item.to}
                      className="text-xl font-bold uppercase transition-colors hover:text-orange-400 sm:text-2xl"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Connect  ->  slides in from the RIGHT */}
            <motion.div variants={columnVariants}>
              <motion.p
                variants={fromRight}
                className="mb-2 text-sm uppercase text-white/80 noto-serif-uniquifier"
              >
                Connect
              </motion.p>
              <ul className="flex flex-col gap-2 sm:gap-3">
                {connect.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={fromRight}
                    whileHover={{ x: 8 }}
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xl font-bold uppercase transition-colors hover:text-orange-400 sm:text-2xl"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Status  ->  slides in from the RIGHT */}
            <motion.div
              variants={columnVariants}
              className="sm:col-span-2 lg:col-span-1"
            >
              <motion.p
                variants={fromRight}
                className="mb-2 text-sm uppercase text-white/80 noto-serif-uniquifier"
              >
                Status
              </motion.p>

              <motion.div variants={fromRight}>
                {/* Floating status card */}
                <motion.div
                  animate={floatStatus.animate}
                  transition={floatStatus.transition}
                >
                  <div className="rounded-3xl border border-white/10 p-4 sm:max-w-md sm:p-5 lg:max-w-none">
                    <div className="flex items-start gap-4">
                      {/* Slow blinking green dot */}
                      <span className="relative mt-2 flex h-3.5 w-3.5 shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 [animation-duration:2.5s]"></span>
                        <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-green-500"></span>
                      </span>
                      <div className="min-w-0">
                        <p className="font-bold uppercase leading-snug">
                          Available for hire
                        </p>
                        <p className="mt-1 text-xs uppercase">
                          Faridabad, India — 2026
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-xs font-medium uppercase leading-relaxed sm:mt-5 sm:text-sm">
                      Full-stack developer. Thoughtful design, clean code,
                      powerful digital experiences.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-6 px-2 text-center text-xs text-blue-100/60 noto-serif-uniquifier sm:text-sm"
        >
          © 2026 Pushpender Singh Rawat. All rights reserved ॐ.
        </motion.p>
      </footer>
    </MotionConfig>
  );
};

export default Footer;
