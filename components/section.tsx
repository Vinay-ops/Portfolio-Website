"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function Section(props: SectionProps) {
  return (
    <section
      id={props.id}
      className={`border-t border-slate-200 ${props.className ?? ""}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="px-8 py-16 md:px-12"
      >
        {props.children}
      </motion.div>
    </section>
  );
}
