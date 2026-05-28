"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-200 bg-slate-50 dark:border-slate-800/60 dark:bg-gradient-to-b dark:from-slate-900/60 dark:via-background dark:to-background"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-accent-blue/10 blur-3xl dark:bg-accent-blue/30" />
        <div className="absolute bottom-[-6rem] right-[-4rem] h-80 w-80 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/20" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-2xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent-blue">
            Android • Full Stack
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl lg:text-6xl">
            Vinay Bhogal
          </h1>
          <p className="mt-4 text-lg font-medium text-slate-700 dark:text-slate-200 sm:text-xl">
            Android App Developer and Full Stack Developer
          </p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">
            I build fast, scalable digital systems that feel effortless to use.
            Thoughtful product thinking, performance-focused architecture, and
            polished execution from pixel to production.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-accent-blue px-7 py-3 text-sm font-semibold tracking-wide text-slate-950 shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-sky-400 dark:shadow-glow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold tracking-wide text-slate-700 shadow-sm transition-colors hover:border-accent-blue/70 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-100 dark:hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mt-12 flex flex-1 items-center justify-center lg:mt-0"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent-blue to-sky-500 opacity-30 blur-xl dark:opacity-75" />
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-lg dark:border-slate-800/80 dark:bg-slate-950/60 dark:shadow-[0_0_0_1px_rgba(15,23,42,0.9)]">
              <img
                src="/profile.jpeg"
                alt="Vinay Bhogal"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
