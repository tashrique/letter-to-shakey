"use client";

import { motion } from "framer-motion";
import { signature } from "@/data/content";

export default function Signature() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9 }}
      className="relative z-10 mx-auto w-full max-w-2xl px-6 pb-24 pt-6 text-center"
    >
      <p className="font-serif text-ink-soft mb-2">{signature.line1}</p>
      <p
        className="font-script text-5xl mb-2"
        style={{ color: "var(--burgundy)" }}
      >
        {signature.name}
      </p>
      <p className="font-serif text-sm tracking-widest uppercase text-ink-soft mb-10">
        {signature.date}
      </p>
      <p className="font-serif italic text-ink-soft max-w-md mx-auto text-balance">
        {signature.ps}
      </p>
    </motion.footer>
  );
}
