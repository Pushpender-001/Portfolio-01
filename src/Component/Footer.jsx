import React from "react";
import { Link } from "react-router-dom";
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

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#233056] to-[#040506] px-3 py-6 sm:px-6 sm:py-8 caveat-uniquifier text-blue-50">
      {/* Card */}
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/20 bg-white/5 p-6 sm:rounded-[2.5rem] sm:p-10 lg:p-12 xl:rounded-[3.5rem] xl:p-14">
        {/*
          Mobile (<640px) : 1 column, everything stacked
          sm  (640px+)    : 2 columns
          lg  (1024px+)   : 3 columns
          xl  (1280px+)   : 4 columns in one row
        */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.8fr_1fr_1.1fr_1fr] xl:gap-12">
          {/* Brand + button */}
          <div className="self-center sm:col-span-2 lg:col-span-3 xl:col-span-1">
            <p className="max-w-xl text-lg leading-8 sm:text-xl sm:leading-9 xl:max-w-md">
              Building intuitive digital experiences with modern technology.
              Turning ideas into scalable, seamless, and meaningful web
              solutions.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-400 px-6 py-3 text-base font-bold uppercase text-gray-900 transition noto-serif-uniquifier hover:-translate-y-1 hover:bg-orange-500 hover:text-white sm:mt-8 sm:w-auto sm:py-4 sm:text-lg"
            >
              Start a project
              <IoMailOutline className="text-xl" />
            </Link>
          </div>

          {/* Sitemap */}
          <div>
            <p className="mb-2 text-sm uppercase text-white/80 noto-serif-uniquifier">
              Sitemap
            </p>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {sitemap.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="text-xl font-bold uppercase transition hover:text-orange-400 sm:text-2xl"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-2 text-sm uppercase text-white/80 noto-serif-uniquifier">
              Connect
            </p>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {connect.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl font-bold uppercase transition hover:text-orange-400 sm:text-2xl"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="mb-2 text-sm uppercase text-white/80 noto-serif-uniquifier">
              Status
            </p>
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
                Full-stack developer. Thoughtful design, clean code, powerful
                digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 px-2 text-center text-xs text-blue-100/60 noto-serif-uniquifier sm:text-sm">
        © 2026 Pushpender Singh Rawat. All rights reserved ॐ.
      </p>
    </footer>
  );
};

export default Footer;
