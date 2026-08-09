"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Petals from "@/components/Petals";
import Envelope from "@/components/Envelope";
import LetterSection from "@/components/LetterSection";
import AnswerReveal from "@/components/AnswerReveal";
import Signature from "@/components/Signature";
import Divider from "@/components/Divider";
import PasswordGate from "@/components/PasswordGate";
import { sections } from "@/data/content";

export default function Home() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.3,
  });

  return (
    <PasswordGate>
      <main className="relative min-h-screen">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 origin-left z-40"
          style={{ scaleX: progress, background: "var(--rose)" }}
        />

        <Petals />
        <Envelope open={open} onOpen={() => setOpen(true)} />

        {open && (
          <div className="relative">
            {sections.map((section, i) => (
              <div key={section.id}>
                {i > 0 && <Divider />}
                <LetterSection section={section} />
                {section.id === "the-answer" && <AnswerReveal />}
              </div>
            ))}
            <Signature />
          </div>
        )}
      </main>
    </PasswordGate>
  );
}
