import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10  backdrop-blur-sm bg-[#24352B]">
      <div className="grid h-16 w-full grid-cols-3 items-center gap-3 px-3 sm:gap-4 sm:px-5 lg:px-8">
        <Link href="/" aria-label="Home" className="w-fit shrink-0">
          <Image
            src="/next.svg"
            alt="Next.js"
            width={90}
            height={18}
            className="invert"
            priority
          />
        </Link>

        <label className="flex h-10 w-full min-w-0 max-w-xl items-center justify-self-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-foreground/50 focus-within:border-white/30">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 shrink-0"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="m16 16 4 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="search"
            aria-label="Search"
            placeholder="Search"
            className="min-w-0 flex-1 bg-transparent text-foreground outline-none placeholder:text-foreground/50"
          />
        </label>

        <button
          type="button"
          className="flex w-fit shrink-0 items-center justify-self-end gap-2 rounded-full p-1 pr-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-cyan-600 text-xs font-semibold text-slate-950"
          >
            Kev
          </span>
          {/* This should be profile name - hardcoded to my name for now */}
          <span className="hidden sm:inline">Kevin</span>
        </button>
      </div>
    </header>
  );
}
