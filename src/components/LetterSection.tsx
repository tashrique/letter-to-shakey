"use client";

import { motion } from "framer-motion";
import type { ReplySection } from "@/data/content";

export default function LetterSection({
  section,
}: {
  section: ReplySection;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 mx-auto w-full max-w-2xl px-6 py-14 sm:py-20 text-left"
    >
      <span
        className="font-script text-3xl block mb-2"
        style={{ color: "var(--rose)" }}
      >
        {section.eyebrow}
      </span>
      <h2 className="font-display italic text-2xl sm:text-3xl mb-6 text-balance">
        {section.title}
      </h2>
      <div className="space-y-4">
        {section.body.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="font-serif text-lg leading-relaxed text-ink-soft"
          >
            {p}
          </motion.p>
        ))}
      </div>
      {section.aside && (
        <p
          className="mt-6 font-script text-xl"
          style={{ color: "var(--rose)" }}
        >
          {section.aside}
        </p>
      )}
    </motion.section>
  );
}
