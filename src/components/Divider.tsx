export default function Divider() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-2xl px-6" aria-hidden>
      <div
        className="h-px w-full opacity-60"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--rose-soft), transparent)",
        }}
      />
      <div className="flex justify-center -mt-2.5">
        <span
          className="font-script text-2xl px-3 bg-paper"
          style={{ color: "var(--rose)" }}
        >
          &#10084;
        </span>
      </div>
    </div>
  );
}
