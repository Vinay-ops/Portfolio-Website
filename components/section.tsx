"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  children: ReactNode;
};

export default function Section(props: SectionProps) {
  return (
    <section id={props.id} className="border-b border-slate-800/60">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
      >
        {props.children}
      </motion.div>
    </section>
  );
}

