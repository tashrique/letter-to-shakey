"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { answerReveal } from "@/data/content";

export default function AnswerReveal() {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    if (revealed) return;
    setRevealed(true);

    const colors = ["#c97b84", "#b8862f", "#7a2233", "#f3e6d8"];
    const duration = 1600;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.7 },
        colors,
        scalar: 0.9,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.7 },
        colors,
        scalar: 0.9,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();

    confetti({
      particleCount: 60,
      spread: 100,
      origin: { y: 0.6 },
      colors,
      scalar: 1.1,
    });
  };

  return (
    <div className="relative z-10 mx-auto w-full max-w-2xl px-6 py-8 sm:py-10 flex flex-col items-center text-center">
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.button
            key="prompt"
            type="button"
            onClick={handleReveal}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full px-8 py-4 font-serif text-lg shadow-md"
            style={{
              background: "var(--burgundy)",
              color: "var(--paper)",
            }}
          >
            {answerReveal.prompt}
          </motion.button>
        ) : (
          <motion.div
            key="answer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <motion.h3
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display italic text-3xl sm:text-4xl mb-6 text-balance"
              style={{ color: "var(--burgundy)" }}
            >
              {answerReveal.reveal}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-serif text-lg leading-relaxed text-ink-soft max-w-xl"
            >
              {answerReveal.follow}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
