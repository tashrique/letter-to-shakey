"use client";

import { useEffect, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Petals from "@/components/Petals";
import { sha256Hex } from "@/lib/hash";
import { passwordHash } from "@/data/auth";
import { lockScreen } from "@/data/content";

const STORAGE_KEY = "letter-unlocked";
const MAX_ATTEMPTS = 5;
const COOLDOWN_MS = 30_000;

type Status = "checking" | "locked" | "unlocked";

export default function PasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [status, setStatus] = useState<Status>("checking");
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [cooldownUntil, setCooldownUntil] = useState<number | null>(null);
  const [now, setNow] = useState(0);

  useEffect(() => {
    // sessionStorage only exists client-side, so the unlock check has to
    // happen after mount — this also keeps server/client render in sync
    // (both start at "checking"), which a static export needs to avoid a
    // hydration mismatch.
    const unlocked = sessionStorage.getItem(STORAGE_KEY) === "1";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStatus(unlocked ? "unlocked" : "locked");
  }, []);

  useEffect(() => {
    if (!cooldownUntil) return;
    const id = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(id);
  }, [cooldownUntil]);

  const cooling = cooldownUntil !== null && cooldownUntil > now;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (cooling) return;

    const hash = await sha256Hex(value);
    if (hash === passwordHash) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setStatus("unlocked");
      return;
    }

    setError(true);
    setValue("");
    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);
    if (nextAttempts >= MAX_ATTEMPTS) {
      setCooldownUntil(Date.now() + COOLDOWN_MS);
      setAttempts(0);
      setNow(Date.now());
    }
  }

  if (status === "checking") {
    return <div className="min-h-screen bg-paper" />;
  }

  if (status === "unlocked") {
    return <>{children}</>;
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <Petals count={12} />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-sm flex flex-col items-center text-center"
      >
        <p
          className="text-xs tracking-[0.3em] uppercase font-serif mb-3"
          style={{ color: "var(--rose)" }}
        >
          {lockScreen.eyebrow}
        </p>
        <h1 className="font-display italic text-3xl mb-2 text-balance">
          {lockScreen.title}
        </h1>
        <p className="font-serif text-ink-soft mb-8">{lockScreen.subtitle}</p>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center gap-4"
        >
          <motion.input
            animate={error ? { x: [0, -8, 8, -6, 6, 0] } : {}}
            transition={{ duration: 0.4 }}
            type="password"
            value={value}
            disabled={cooling}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            placeholder={lockScreen.placeholder}
            autoFocus
            className="w-full text-center font-serif text-lg rounded-full px-6 py-3 outline-none disabled:opacity-50"
            style={{
              background: "var(--paper-deep)",
              border: "1px solid var(--rose-soft)",
              color: "var(--ink)",
            }}
          />
          <button
            type="submit"
            disabled={cooling || value.length === 0}
            className="rounded-full px-8 py-3 font-serif text-base shadow-md disabled:opacity-50"
            style={{ background: "var(--burgundy)", color: "var(--paper)" }}
          >
            {lockScreen.button}
          </button>
        </form>

        <AnimatePresence>
          {(error || cooling) && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-5 font-serif text-sm"
              style={{ color: "var(--burgundy)" }}
            >
              {cooling ? lockScreen.cooldown : lockScreen.error}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
