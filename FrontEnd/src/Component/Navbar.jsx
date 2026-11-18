import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

/* ================= ANIMATION SETTINGS ================= */
// Slow, endless up-and-down float. Change these to taste.
const FLOAT_DISTANCE = 5; // how many px it moves
const FLOAT_DURATION = 3.5; // seconds for one full up-down cycle

// Desktop links appear one after another
const desktopList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
};
const desktopItem = {
  hidden: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// Mobile links slide in one after another
const mobileList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const mobileItem = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    // reducedMotion="user": animations (including the float) switch off
    // for visitors who enabled "reduce motion" on their device
    <MotionConfig reducedMotion="user">
      {/* Entrance: navbar drops down from above on page load */}
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 90, damping: 16 }}
        className="fixed top-0 left-0 z-50 w-full bg-gray-900 text-white shadow-lg"
      >
        {/* Top bar: the content inside floats slowly up and down.
            The dark bar itself stays attached to the top of the screen,
            so no gap ever shows above it. */}
        <motion.div
          animate={{ y: [0, -FLOAT_DISTANCE, 0] }}
          transition={{
            duration: FLOAT_DURATION,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-16 items-center justify-between px-4 sm:px-8 lg:px-16 xl:px-24"
        >
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              onClick={closeMenu}
              className="block text-2xl sm:text-3xl lg:text-4xl black-ops-one-regular"
            >
              Portfolio
            </Link>
          </motion.div>

          {/* Desktop menu (768px and up) */}
          <motion.div
            variants={desktopList}
            initial="hidden"
            animate="show"
            className="hidden items-center gap-6 text-base md:flex lg:gap-10 lg:text-lg black-ops-one-regular"
          >
            {links.map((item) => (
              <motion.div
                key={item.name}
                variants={desktopItem}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `relative block cursor-pointer transition-colors duration-300 hover:text-orange-400
                     ${
                       isActive
                         ? "text-orange-400"
                         : `after:content-[''] after:absolute after:left-0 after:-bottom-1
                            after:h-0.5 after:w-0 after:bg-orange-400
                            after:transition-all after:duration-500 hover:after:w-full`
                     }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {/* The orange underline slides between links
                          when you change page */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                          className="absolute left-0 -bottom-1 h-0.5 w-full bg-orange-400"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>

          {/* Hamburger button (below 768px) */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.85 }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="cursor-pointer p-2 text-2xl transition-colors hover:text-orange-400 md:hidden"
          >
            {/* Icon rotates while swapping between bars and X */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="block"
              >
                {open ? <FaTimes /> : <FaBars />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </motion.div>

        {/* Mobile menu: smoothly expands and collapses */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t border-white/10 bg-gray-900 md:hidden"
            >
              <motion.div
                variants={mobileList}
                initial="hidden"
                animate="show"
                className="flex flex-col px-4 py-2 text-lg sm:px-8 black-ops-one-regular"
              >
                {links.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={mobileItem}
                    className="border-b border-white/5 last:border-0"
                  >
                    <NavLink
                      to={item.path}
                      end={item.path === "/"}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `block py-3 transition-colors hover:text-orange-400 ${
                          isActive ? "text-orange-400" : "text-white"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </MotionConfig>
  );
};

export default Navbar;
