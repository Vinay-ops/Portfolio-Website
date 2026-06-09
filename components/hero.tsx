"use client";

import { motion } from "framer-motion";
import FloatingShapes from "@/components/floating-shapes";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b-4 border-neo-black bg-neo-white neo-grid-bg dark:border-neo-white dark:bg-neo-dark-bg"
    >
      <FloatingShapes />
      
      <div className="mx-auto flex max-w-6xl flex-col px-4 pb-32 pt-32 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex-1"
          >
            <div className="mb-8 inline-flex items-center gap-3 border-4 border-neo-black bg-neo-green px-4 py-2 shadow-neo-sm dark:border-neo-white dark:shadow-neo-dark-sm">
              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neo-black opacity-75 dark:bg-neo-white"></span>
                <span className="relative inline-flex h-4 w-4 rounded-full bg-neo-black dark:bg-neo-white"></span>
              </span>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-neo-black dark:text-neo-black">
                Open to internships & collaborations
              </p>
            </div>
            
            <h1 className="text-6xl font-black tracking-tight text-neo-black sm:text-7xl lg:text-8xl dark:text-neo-white">
              Vinay<br />
              Bhogal
            </h1>
            
            <p className="mt-6 text-2xl font-bold text-neo-black sm:text-3xl dark:text-neo-white">
              Android & Full Stack Developer
            </p>
            
            <div className="mt-8 inline-block border-4 border-neo-black bg-neo-blue px-6 py-4 shadow-neo-md dark:border-neo-white dark:shadow-neo-dark-md">
              <p className="text-base font-bold text-neo-black">
                "Code. Build. Scale. — Crafting high-performance mobile experiences and robust digital systems."
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a
                href="#projects"
                className="neo-btn inline-flex items-center justify-center border-4 border-neo-black bg-neo-yellow px-10 py-5 text-sm font-black uppercase tracking-[0.3em] text-neo-black shadow-neo-md dark:border-neo-white dark:shadow-neo-dark-md"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="neo-btn inline-flex items-center justify-center border-4 border-neo-black bg-neo-white px-10 py-5 text-sm font-black uppercase tracking-[0.3em] text-neo-black shadow-neo-md dark:border-neo-white dark:bg-neo-dark-card dark:text-neo-white dark:shadow-neo-dark-md"
              >
                Let's Connect
              </a>
            </div>

            <div className="mt-14 flex items-center gap-8">
              <a 
                href="https://github.com/Vinay-ops" 
                target="_blank"
                className="group"
              >
                <span className="text-xs font-black uppercase tracking-[0.3em] text-neo-black group-hover:text-neo-pink transition-colors dark:text-neo-white dark:group-hover:text-neo-blue">
                  GitHub
                </span>
              </a>
              <a 
                href="https://linkedin.com/in/vinay-bhogal-78a623319" 
                target="_blank"
                className="group"
              >
                <span className="text-xs font-black uppercase tracking-[0.3em] text-neo-black group-hover:text-neo-blue transition-colors dark:text-neo-white dark:group-hover:text-neo-green">
                  LinkedIn
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 hidden flex-1 lg:block"
          >
            <div className="relative flex h-[550px] items-center justify-center">
              <div className="relative">
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative"
                >
                  <div className="h-[520px] w-[280px] border-8 border-neo-black bg-neo-black shadow-neo-lg dark:border-neo-white dark:shadow-neo-dark-lg">
                    <div className="h-full w-full overflow-hidden bg-neo-white p-3 dark:bg-neo-dark-bg">
                      <div className="h-full w-full border-4 border-neo-black bg-neo-white flex flex-col dark:border-neo-white dark:bg-neo-dark-card">
                        <div className="flex items-center justify-between px-4 py-2 border-b-4 border-neo-black bg-neo-yellow dark:border-neo-white">
                          <span className="text-xs font-black text-neo-black">9:41</span>
                          <div className="flex gap-1">
                            <div className="h-3 w-3 border-2 border-neo-black bg-neo-blue dark:border-neo-white"></div>
                            <div className="h-3 w-3 border-2 border-neo-black bg-neo-green dark:border-neo-white"></div>
                            <div className="h-3 w-5 border-2 border-neo-black bg-neo-pink dark:border-neo-white"></div>
                          </div>
                        </div>

                        <div className="flex flex-col flex-1 p-4 gap-4">
                          <div className="border-4 border-neo-black bg-neo-blue p-4 dark:border-neo-white">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neo-black">Welcome back</p>
                            <h4 className="mt-2 text-xl font-black text-neo-black">Pay Sahayak</h4>
                          </div>

                          <div className="space-y-3">
                            <div className="border-4 border-neo-black bg-neo-white p-4 shadow-neo-sm dark:border-neo-white dark:bg-neo-dark-card dark:shadow-neo-dark-sm">
                              <div className="flex items-center gap-3">
                                <div className="h-12 w-12 border-4 border-neo-black bg-neo-yellow text-2xl flex items-center justify-center dark:border-neo-white">💰</div>
                                <div>
                                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neo-black dark:text-neo-white">Total Savings</p>
                                  <p className="text-lg font-black text-neo-black dark:text-neo-white">₹12,450.00</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3">
                              <div className="border-4 border-neo-black bg-neo-white p-4 shadow-neo-sm dark:border-neo-white dark:bg-neo-dark-card dark:shadow-neo-dark-sm">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neo-black dark:text-neo-white">Streak</p>
                                <p className="mt-2 text-lg font-black text-neo-pink">12 Days</p>
                              </div>
                              <div className="border-4 border-neo-black bg-neo-white p-4 shadow-neo-sm dark:border-neo-white dark:bg-neo-dark-card dark:shadow-neo-dark-sm">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neo-black dark:text-neo-white">Goal</p>
                                <p className="mt-2 text-lg font-black text-neo-green">85%</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex-1">
                            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-neo-black dark:text-neo-white">Recent Activity</p>
                            <div className="space-y-2">
                              {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center gap-3 border-3 border-neo-black bg-neo-white p-3 dark:border-neo-white dark:bg-neo-dark-card">
                                  <div className="h-10 w-10 border-3 border-neo-black bg-neo-blue dark:border-neo-white"></div>
                                  <div className="flex-1">
                                    <div className="h-3 w-20 border-2 border-neo-black bg-neo-yellow dark:border-neo-white"></div>
                                    <div className="mt-2 h-2 w-12 border-2 border-neo-black bg-neo-green dark:border-neo-white"></div>
                                  </div>
                                  <div className="h-3 w-12 border-2 border-neo-black bg-neo-pink dark:border-neo-white"></div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex justify-around border-t-4 border-neo-black bg-neo-white pt-3 dark:border-neo-white dark:bg-neo-dark-card">
                            <div className="h-8 w-8 border-3 border-neo-black bg-neo-yellow dark:border-neo-white"></div>
                            <div className="h-8 w-8 border-3 border-neo-black bg-neo-blue dark:border-neo-white"></div>
                            <div className="h-8 w-8 border-3 border-neo-black bg-neo-green dark:border-neo-white"></div>
                            <div className="h-8 w-8 border-3 border-neo-black bg-neo-pink dark:border-neo-white"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="absolute -top-8 -left-8 h-16 w-16 border-4 border-neo-black bg-neo-yellow floating-shape dark:border-neo-white"></div>
                <div className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full border-4 border-neo-black bg-neo-blue floating-shape-delay-1 dark:border-neo-white"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
