import React, { useState } from "react";
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
    <div className="flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center overflow-x-hidden bg-[radial-gradient(circle_at_top_left,#1b2d5c,#0d1222_55%)] px-4 py-10 sm:px-6 lg:p-10">
      <h1 className="mb-8 text-center text-3xl text-white noto-serif-uniquifier sm:mb-10 sm:text-4xl lg:text-5xl">
        Contact Information
      </h1>

      {/*
        Below 1024px : info panel on top, form underneath (1 column)
        1024px and up: info panel and form side by side (2 columns)
      */}
      <div className="grid w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 sm:rounded-3xl lg:grid-cols-2">
        {/* Left: contact info */}
        <div className="flex flex-col bg-gradient-to-br from-[#26345e] to-[#1f2433] p-6 sm:p-8 lg:p-14">
          <h2 className="text-xl font-bold text-blue-100 sm:text-2xl">
            Contact Info
          </h2>

          <div className="mt-8 flex flex-1 flex-col justify-between gap-6 sm:mt-10 sm:gap-8">
            {contactItems.map(({ label, value, href, icon: Icon, circle }) => {
              const content = (
                <>
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg sm:h-14 sm:w-14 sm:text-xl ${circle}`}
                  >
                    <Icon />
                  </span>
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
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 transition hover:translate-x-1 sm:gap-5"
                >
                  {content}
                </a>
              ) : (
                <div key={label} className="flex items-center gap-4 sm:gap-5">
                  {content}
                </div>
              );
            })}
          </div>

          <p className="mt-8 border-t border-white/10 pt-5 text-base italic text-gray-500 sm:mt-10 sm:pt-6 sm:text-lg">
            "Available for freelance projects and full-time roles."
          </p>
        </div>

        {/* Right: form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-5 bg-[#171b27] p-6 sm:gap-6 sm:p-8 lg:p-14"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-gray-300">
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
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
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
          </div>

          <div>
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
          </div>

          <button
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3.5 font-bold text-white shadow-lg shadow-blue-600/30 transition hover:brightness-110 active:scale-[0.99]"
          >
            <FaPaperPlane />
            {sent ? "Message sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
