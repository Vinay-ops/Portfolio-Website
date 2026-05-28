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
            <div className="relative flex h-[500px] items-center justify-center">
              {/* 3D-Style Mobile Mockup Container */}
              <div className="relative h-[480px] w-[240px] perspective-1000">
                <motion.div 
                  animate={{ 
                    rotateY: [-5, 5, -5],
                    rotateX: [2, -2, 2],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative h-full w-full preserve-3d"
                >
                  {/* Phone Body */}
                  <div className="absolute inset-0 rounded-[3rem] border-[10px] border-slate-900 bg-slate-900 shadow-[20px_40px_60px_rgba(0,0,0,0.4)] dark:border-slate-800 dark:bg-slate-800 dark:shadow-[20px_40px_60px_rgba(0,0,0,0.6)]">
                    {/* Screen Container */}
                    <div className="h-full w-full overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-950">
                      {/* Status Bar */}
                      <div className="flex h-8 w-full items-end justify-between px-6 pb-1">
                        <span className="text-[10px] font-bold text-slate-400">9:41</span>
                        <div className="flex gap-1">
                          <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                          <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                          <div className="h-2 w-4 rounded-full bg-slate-300 dark:bg-slate-700" />
                        </div>
                      </div>

                      {/* App Content: Pay Sahayak Mockup */}
                      <div className="flex h-full flex-col">
                        {/* Header */}
                        <div className="bg-accent-blue p-6 pb-8 text-slate-950">
                          <div className="mb-4 flex items-center justify-between">
                            <div className="h-8 w-8 rounded-lg bg-white/20" />
                            <div className="h-4 w-12 rounded-full bg-white/20" />
                          </div>
                          <p className="text-xs font-bold uppercase tracking-widest opacity-70">Welcome back</p>
                          <h4 className="mt-1 text-lg font-bold">Pay Sahayak</h4>
                        </div>

                        {/* Quick Stats */}
                        <div className="-mt-4 space-y-3 px-4">
                          <div className="rounded-2xl bg-white p-4 shadow-lg dark:bg-slate-900">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-xl bg-accent-blue/10 text-xl flex items-center justify-center">💰</div>
                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Total Savings</p>
                                <p className="text-sm font-bold text-slate-900 dark:text-slate-100">₹12,450.00</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-2xl bg-white p-4 shadow-md dark:bg-slate-900">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Streak</p>
                              <p className="mt-1 text-sm font-bold text-accent-blue">12 Days</p>
                            </div>
                            <div className="rounded-2xl bg-white p-4 shadow-md dark:bg-slate-900">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Goal</p>
                              <p className="mt-1 text-sm font-bold text-emerald-500">85%</p>
                            </div>
                          </div>
                        </div>

                        {/* Recent Transactions */}
                        <div className="mt-6 flex-1 px-4">
                          <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">Recent Activity</p>
                          <div className="space-y-3">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="flex items-center gap-3 rounded-xl border border-slate-50 p-3 dark:border-slate-900">
                                <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-900" />
                                <div className="flex-1">
                                  <div className="h-2 w-16 rounded-full bg-slate-200 dark:bg-slate-800" />
                                  <div className="mt-1.5 h-1.5 w-10 rounded-full bg-slate-100 dark:bg-slate-900" />
                                </div>
                                <div className="h-2 w-8 rounded-full bg-slate-100 dark:bg-slate-800" />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Navigation */}
                        <div className="flex justify-around border-t border-slate-100 bg-white py-4 pb-8 dark:border-slate-900 dark:bg-slate-950">
                          <div className="h-6 w-6 rounded-lg bg-accent-blue/20" />
                          <div className="h-6 w-6 rounded-lg bg-slate-100 dark:bg-slate-900" />
                          <div className="h-6 w-6 rounded-lg bg-slate-100 dark:bg-slate-900" />
                          <div className="h-6 w-6 rounded-lg bg-slate-100 dark:bg-slate-900" />
                        </div>
                      </div>
                    </div>

                    {/* Hardware Details */}
                    <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-900 dark:bg-slate-800" />
                    <div className="absolute -left-[10px] top-24 h-12 w-[3px] rounded-r-sm bg-slate-800 dark:bg-slate-700" />
                    <div className="absolute -right-[10px] top-32 h-20 w-[3px] rounded-l-sm bg-slate-800 dark:bg-slate-700" />
                  </div>
                </motion.div>

                {/* Background Glows for 3D effect */}
                <div className="absolute -inset-10 -z-10 rounded-full bg-accent-blue/20 blur-3xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
