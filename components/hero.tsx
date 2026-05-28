"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-200 bg-slate-50 dark:border-slate-800/60 dark:bg-[#0f0f14]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-accent-blue/10 blur-3xl dark:bg-accent-blue/20" />
        <div className="absolute bottom-[-6rem] right-[-4rem] h-80 w-80 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/10" />
      </div>
      
      <div className="mx-auto flex max-w-6xl flex-col px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex-1"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 px-3 py-1 dark:bg-accent-blue/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-blue"></span>
              </span>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-blue">
                Open to internships & collaborations
              </p>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-6xl lg:text-7xl">
              Vinay <span className="text-accent-blue">Bhogal</span>
            </h1>
            <p className="mt-6 text-xl font-medium text-slate-700 dark:text-slate-200 sm:text-2xl">
              Android & Full Stack Developer
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-500 dark:text-slate-400">
              "Code. Build. Scale. — Crafting high-performance mobile experiences and robust digital systems."
            </p>
            
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-accent-blue px-8 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-slate-950 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-sky-400 dark:shadow-glow"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent-blue/70 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-100 dark:hover:text-white"
              >
                Let's Connect
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <a href="https://github.com/Vinay-ops" target="_blank" className="text-slate-400 transition-colors hover:text-accent-blue dark:text-slate-500">
                <span className="text-xs font-bold uppercase tracking-widest">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/vinay-bhogal-78a623319" target="_blank" className="text-slate-400 transition-colors hover:text-accent-blue dark:text-slate-500">
                <span className="text-xs font-bold uppercase tracking-widest">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 hidden flex-1 lg:block"
          >
            <div className="relative h-[500px] w-full">
              {/* Code Terminal */}
              <div className="absolute left-0 top-0 z-10 w-[85%] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-500 hover:z-30 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-4 py-2 dark:border-slate-800 dark:bg-slate-900/50">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">vinay_profile.kt</span>
                </div>
                <div className="p-6 font-mono text-xs leading-relaxed">
                  <div className="flex gap-4">
                    <span className="w-4 select-none text-slate-300 dark:text-slate-700">1</span>
                    <p><span className="text-purple-500">class</span> <span className="text-blue-500">VinayBhogal</span> {"{"}</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-4 select-none text-slate-300 dark:text-slate-700">2</span>
                    <p className="ml-4"><span className="text-purple-500">val</span> role = <span className="text-emerald-500">"Android & Full Stack"</span></p>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-4 select-none text-slate-300 dark:text-slate-700">3</span>
                    <p className="ml-4"><span className="text-purple-500">val</span> year = <span className="text-emerald-500">"IT Student @ SAKEC"</span></p>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-4 select-none text-slate-300 dark:text-slate-700">4</span>
                    <p className="ml-4"><span className="text-purple-500">val</span> skills = <span className="text-blue-500">listOf</span>(</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-4 select-none text-slate-300 dark:text-slate-700">5</span>
                    <p className="ml-8"><span className="text-emerald-500">"Kotlin"</span>, <span className="text-emerald-500">"Compose"</span></p>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-4 select-none text-slate-300 dark:text-slate-700">6</span>
                    <p className="ml-4">)</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-4 select-none text-slate-300 dark:text-slate-700">7</span>
                    <p>{"}"}</p>
                  </div>
                </div>
                <div className="border-t border-slate-100 bg-slate-50 px-4 py-1.5 dark:border-slate-800 dark:bg-slate-900/50">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">● Kotlin 1.9.0 | UTF-8</span>
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="absolute -bottom-4 -right-4 z-20 h-[420px] w-[210px] transform rounded-[3rem] border-[8px] border-slate-900 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:z-30 dark:border-slate-800 dark:bg-slate-800 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* Speaker/Notch */}
                <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-900 dark:bg-slate-800" />
                
                {/* Screen Content */}
                <div className="h-full w-full overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-950">
                  <div className="flex h-full flex-col">
                    <div className="bg-accent-blue/10 p-4 pt-8 dark:bg-accent-blue/20">
                      <div className="h-2 w-12 rounded-full bg-accent-blue/40" />
                      <div className="mt-4 h-6 w-24 rounded-lg bg-accent-blue/20" />
                    </div>
                    <div className="flex-1 space-y-4 p-4">
                      <div className="h-32 rounded-2xl bg-slate-100 dark:bg-slate-900" />
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-20 rounded-xl bg-slate-100 dark:bg-slate-900" />
                        <div className="h-20 rounded-xl bg-slate-100 dark:bg-slate-900" />
                      </div>
                      <div className="h-4 w-full rounded-full bg-slate-50 dark:bg-slate-900" />
                      <div className="h-4 w-[80%] rounded-full bg-slate-50 dark:bg-slate-900" />
                    </div>
                    {/* Bottom Nav Mock */}
                    <div className="flex justify-around border-t border-slate-100 py-3 dark:border-slate-900">
                      <div className="h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-800" />
                      <div className="h-5 w-5 rounded-full bg-accent-blue/40" />
                      <div className="h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-800" />
                    </div>
                  </div>
                </div>

                {/* Side Buttons */}
                <div className="absolute -left-[10px] top-24 h-12 w-[3px] rounded-r-sm bg-slate-800 dark:bg-slate-700" />
                <div className="absolute -right-[10px] top-32 h-20 w-[3px] rounded-l-sm bg-slate-800 dark:bg-slate-700" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
