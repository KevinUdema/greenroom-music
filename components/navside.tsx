import Link from "next/link";
export function NavSide() {
  return (
    <div className="flex bg-[#17231D]/80 backdrop-blur-sm">
      <nav
        aria-label="Main navigation"
        className="flex w-full flex-col items-start gap-1 px-3 py-4"
      >
        <Link
          href="#home"
          className="w-full rounded-lg px-3 py-2.5 text-base font-medium tracking-wide text-foreground/75 transition-colors hover:bg-white/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        >
          test
        </Link>
        <Link
          href="#home"
          className="w-full rounded-lg px-3 py-2.5 text-base font-medium tracking-wide text-foreground/75 transition-colors hover:bg-white/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        >
          test
        </Link>
        <Link
          href="#home"
          className="w-full rounded-lg px-3 py-2.5 text-base font-medium tracking-wide text-foreground/75 transition-colors hover:bg-white/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        >
          test
        </Link>
        <Link
          href="#home"
          className="w-full rounded-lg px-3 py-2.5 text-base font-medium tracking-wide text-foreground/75 transition-colors hover:bg-white/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        >
          test
        </Link>
        <Link
          href="#home"
          className="w-full rounded-lg px-3 py-2.5 text-base font-medium tracking-wide text-foreground/75 transition-colors hover:bg-white/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        >
          test
        </Link>
      </nav>
    </div>
  );
}
