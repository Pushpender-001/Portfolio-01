import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

// Change these to your own details
const contactItems = [
  {
    label: "Email me",
    value: "pushpendersinghrawat23@gmail.com",
    href: "mailto:pushpendersinghrawat23@gmail.com",
    icon: FaEnvelope,
    circle: "bg-blue-500/20 text-blue-400",
  },
  {
    label: "Call me",
    value: "+91 8826282528",
    href: "tel:+918826282528",
    icon: FaPhoneAlt,
    circle: "bg-purple-500/20 text-purple-400",
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/918826282528",
    icon: FaWhatsapp,
    circle: "bg-green-500/20 text-green-400",
  },
  {
    label: "Location",
    value: "Faridabad, India",
    icon: FaMapMarkerAlt,
    circle: "bg-pink-500/20 text-pink-400",
  },
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#222633] px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30";

/* ================= ANIMATION SETTINGS ================= */
// Page heading drops in on load
const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// The big card fades in, then its two sides appear one after another
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

// Each side staggers its own lines
const sideVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// Info side: comes in from the LEFT  (moves left -> right)
const fromLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Form side: comes in from the RIGHT (moves right -> left)
const fromRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Send button floating loop: slow up and down. Change to taste.
const FLOAT_DISTANCE = 7; // px
const FLOAT_DURATION = 3; // seconds per cycle

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send `form` to your backend or a service like EmailJS here
    console.log(form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    // reducedMotion="user": animations (including the float) switch off
    // for visitors who enabled "reduce motion" on their device
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center overflow-x-hidden bg-[radial-gradient(circle_at_top_left,#1b2d5c,#0d1222_55%)] px-4 py-10 sm:px-6 lg:p-10">
        <motion.h1
          variants={fadeDown}
          initial="hidden"
          animate="show"
          className="mb-8 text-center text-3xl text-white noto-serif-uniquifier sm:mb-10 sm:text-4xl lg:text-5xl"
        >
          Contact Information
        </motion.h1>

        {/*
          Below 1024px : info panel on top, form underneath (1 column)
          1024px and up: info panel and form side by side (2 columns)
        */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 sm:rounded-3xl lg:grid-cols-2"
        >
          {/* Left: contact info (text slides in from the LEFT) */}
          <motion.div
            variants={sideVariants}
            className="flex flex-col bg-gradient-to-br from-[#26345e] to-[#1f2433] p-6 sm:p-8 lg:p-14"
          >
            <motion.h2
              variants={fromLeft}
              className="text-xl font-bold text-blue-100 sm:text-2xl"
            >
              Contact Info
            </motion.h2>

            <div className="mt-8 flex flex-1 flex-col justify-between gap-6 sm:mt-10 sm:gap-8">
              {contactItems.map(
                ({ label, value, href, icon: Icon, circle }) => {
                  const content = (
                    <>
                      {/* Icon circle: pops and tilts on hover */}
                      <motion.span
                        whileHover={{ scale: 1.15, rotate: 8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg sm:h-14 sm:w-14 sm:text-xl ${circle}`}
                      >
                        <Icon />
                      </motion.span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-gray-400">
                          {label}
                        </span>
                        <span className="block break-words text-base font-semibold text-white sm:text-lg">
                          {value}
                        </span>
                      </span>
                    </>
                  );

                  return href ? (
                    <motion.a
                      key={label}
                      variants={fromLeft}
                      whileHover={{ x: 6 }}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex items-center gap-4 sm:gap-5"
                    >
                      {content}
                    </motion.a>
                  ) : (
                    <motion.div
                      key={label}
                      variants={fromLeft}
                      className="flex items-center gap-4 sm:gap-5"
                    >
                      {content}
                    </motion.div>
                  );
                }
              )}
            </div>

            <motion.p
              variants={fromLeft}
              className="mt-8 border-t border-white/10 pt-5 text-base italic text-gray-500 sm:mt-10 sm:pt-6 sm:text-lg"
            >
              "Available for freelance projects and full-time roles."
            </motion.p>
          </motion.div>

          {/* Right: form (fields slide in from the RIGHT) */}
          <motion.form
            variants={sideVariants}
            onSubmit={handleSubmit}
            className="flex flex-col justify-center gap-5 bg-[#171b27] p-6 sm:gap-6 sm:p-8 lg:p-14"
          >
            <motion.div variants={fromRight}>
              <label
                htmlFor="name"
                className="mb-2 block text-sm text-gray-300"
              >
                Your Name <sup className="text-red-600">*</sup>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={inputClass}
              />
            </motion.div>

            <motion.div variants={fromRight}>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-gray-300"
              >
                Email Address <sup className="text-red-600">*</sup>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={inputClass}
              />
            </motion.div>

            <motion.div variants={fromRight}>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-gray-300"
              >
                Message <sup className="text-red-600">*</sup>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                className={`${inputClass} resize-none`}
              />
            </motion.div>

            {/* Send button: slides in, then floats up and down forever */}
            <motion.div variants={fromRight}>
              <motion.div
                animate={{ y: [0, -FLOAT_DISTANCE, 0] }}
                transition={{
                  duration: FLOAT_DURATION,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3.5 font-bold text-white shadow-lg shadow-blue-600/30 transition-[filter] hover:brightness-110"
                >
                  <FaPaperPlane />
                  {/* Text swaps smoothly between the two messages */}
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={sent ? "sent" : "idle"}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {sent ? "Message sent!" : "Send Message"}
                    </motion.span>
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default Contact;
