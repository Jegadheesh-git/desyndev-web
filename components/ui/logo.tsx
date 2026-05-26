import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-3" aria-label="DesynDev home">
      <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_28px_rgb(34_211_238/.2)]">
        <span className="font-nacelle text-sm font-semibold text-cyan-200">D</span>
      </span>
      <span className="font-nacelle text-sm font-semibold tracking-wide text-white">
        DesynDev
      </span>
    </Link>
  );
}
