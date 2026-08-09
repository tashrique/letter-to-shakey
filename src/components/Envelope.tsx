"use client";

import { motion, AnimatePresence } from "framer-motion";
import { envelope } from "@/data/content";

export default function Envelope({
  open,
  onOpen,
}: {
  open: boolean;
  onOpen: () => void;
}) {
  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 bg-paper"
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
        >
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xs tracking-[0.3em] uppercase text-rose-soft font-serif mb-3"
            style={{ color: "var(--rose)" }}
          >
            {envelope.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="font-display italic text-3xl sm:text-4xl text-center text-balance mb-3"
            style={{ color: "var(--ink)" }}
          >
            {envelope.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="font-serif text-center max-w-sm text-ink-soft mb-10"
          >
            {envelope.subtitle}
          </motion.p>

          <motion.button
            type="button"
            onClick={onOpen}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="relative"
            aria-label={envelope.cta}
          >
            <div className="relative w-56 h-36 sm:w-64 sm:h-40">
              {/* envelope body */}
              <div
                className="absolute inset-0 rounded-sm shadow-lg"
                style={{
                  background:
                    "linear-gradient(180deg, var(--paper-deep), var(--paper))",
                  border: "1px solid var(--rose-soft)",
                }}
              />
              {/* envelope flap */}
              <div
                className="absolute inset-x-0 top-0 h-1/2 origin-top"
                style={{
                  background:
                    "linear-gradient(160deg, var(--paper) 0%, var(--paper-deep) 100%)",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  border: "1px solid var(--rose-soft)",
                  borderBottom: "none",
                }}
              />
              {/* seal */}
              <div
                className="animate-seal-pulse absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full"
                style={{ background: "var(--burgundy)" }}
              >
                <span className="font-script text-paper text-lg leading-none">
                  &hearts;
                </span>
              </div>
            </div>
            <p
              className="mt-5 text-sm tracking-[0.2em] uppercase font-serif"
              style={{ color: "var(--burgundy)" }}
            >
              {envelope.cta}
            </p>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
