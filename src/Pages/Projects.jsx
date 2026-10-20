import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

// import rps from "../assets/rps.png";  // import your project images like this

// Edit or add your projects here, each object becomes one card
const projects = [
  {
    id: 1,
    title: "Rock, Paper, Scissors",
    description:
      "A sleek, fully interactive browser game built for a seamless user experience.",
    tags: ["HTML", "CSS", "JS"],
    image: null, // replace with: rps
    live: "https://your-live-demo-link.com",
    code: "https://github.com/Pushpender-001/your-repo",
  },
  {
    id: 2,
    title: "AI Interview Report",
    description:
      "Upload a resume and job description to get AI-generated questions, skill gaps and a prep plan.",
    tags: ["React", "Node", "MongoDB"],
    image: null,
    live: "https://your-live-demo-link.com",
    code: "https://github.com/Pushpender-001/your-repo",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio with animated sections and a working contact form.",
    tags: ["React", "Tailwind"],
    image: null,
    live: "https://your-live-demo-link.com",
    code: "https://github.com/Pushpender-001/your-repo",
  },
];

/* ---------- Shimmer placeholder (shown while loading) ---------- */
const ProjectCardSkeleton = () => (
  <div className="flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/5 sm:rounded-3xl">
    <div className="shimmer h-44 w-full sm:h-52 lg:h-56" />
    <div className="flex flex-col gap-4 p-5 sm:p-6">
      <div className="shimmer h-6 w-3/4 rounded-md" />
      <div className="flex flex-col gap-2">
        <div className="shimmer h-4 w-full rounded-md" />
        <div className="shimmer h-4 w-5/6 rounded-md" />
        <div className="shimmer h-4 w-2/3 rounded-md" />
      </div>
      <div className="flex gap-2">
        <div className="shimmer h-7 w-14 rounded-full" />
        <div className="shimmer h-7 w-14 rounded-full" />
        <div className="shimmer h-7 w-14 rounded-full" />
      </div>
      <div className="mt-2 flex gap-3">
        <div className="shimmer h-11 flex-1 rounded-xl sm:h-12" />
        <div className="shimmer h-11 flex-1 rounded-xl sm:h-12" />
      </div>
    </div>
  </div>
);

/* ---------- Real project card ---------- */
const ProjectCard = ({ project }) => {
  // If there is an image, show a shimmer on it until it finishes loading
  const [imgLoaded, setImgLoaded] = useState(!project.image);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-orange-400/50 sm:rounded-3xl">
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden border-b border-white/10 bg-[#1c202d] sm:h-52 lg:h-56">
        {project.image ? (
          <>
            {!imgLoaded && <div className="shimmer absolute inset-0" />}
            <img
              src={project.image}
              alt={project.title}
              onLoad={() => setImgLoaded(true)}
              className={`h-full w-full object-cover transition-opacity duration-500 ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </>
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-600/40 to-purple-600/40 px-4 text-center text-xl font-bold sm:text-2xl">
            {project.title}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="break-words text-xl font-bold text-white sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:text-base">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gray-200 sm:px-4 sm:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-3 pt-5 sm:pt-6">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center rounded-xl bg-orange-400 py-2.5 text-sm font-bold text-gray-900 transition hover:bg-orange-500 sm:py-3 sm:text-base"
          >
            Live Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 py-2.5 text-sm font-bold text-white transition hover:border-orange-400 hover:text-orange-400 sm:py-3 sm:text-base"
          >
            <FaGithub className="text-lg sm:text-xl" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

/* ---------- Page ---------- */
const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading time. If your projects come from an API, call it here
    // and run setLoading(false) after the data arrives.
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#2d3f76] to-[#1c202d] px-4 py-10 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      {/* Shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.05) 25%,
            rgba(255, 255, 255, 0.18) 50%,
            rgba(255, 255, 255, 0.05) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.6s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .shimmer { animation: none; }
        }
      `}</style>

      <h1 className="mb-3 text-center text-3xl font-bold noto-serif-uniquifier sm:mb-5 sm:text-4xl lg:text-5xl">
        Projects
      </h1>
      <h2 className="mx-auto mb-8 max-w-3xl text-center text-lg caveat-uniquifier sm:mb-10 sm:text-xl lg:text-2xl">
        Crafting Digital Experiences, Building Full-Stack Applications
      </h2>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {loading
          ? projects.map((p) => <ProjectCardSkeleton key={p.id} />)
          : projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  );
};

export default Projects;
