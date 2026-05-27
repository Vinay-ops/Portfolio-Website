"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid items-center gap-10 px-8 py-20 md:grid-cols-2 md:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700">
          Android &bull; Full Stack
        </p>
        <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
          Vinay <span className="text-blue-700">Bhogal</span>
        </h1>
        <p className="mt-4 text-lg font-medium text-slate-700">
          Android App Developer and Full Stack Developer
        </p>
        <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
          I build fast, scalable digital systems that feel effortless to use.
          Thoughtful product thinking, performance-focused architecture, and
          polished execution from pixel to production.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-md bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="rounded-md bg-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-300"
          >
            Learn More
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-center"
      >
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src="/image/VinayProfilePic.jpg"
            alt="Vinay Bhogal"
            className="h-[360px] w-full max-w-md object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
