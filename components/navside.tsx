import Image from "next/image";
import Link from "next/link";

export function NavSide() {
  return (
    <div className="h-full bg-[#17231D]/80 backdrop-blur-sm">
      <nav
        aria-label="Main navigation"
        className="flex h-full w-full flex-col items-start gap-1 px-3 py-4"
      >
        <Link
          href="#home"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium tracking-wide text-foreground/75 transition-colors hover:bg-white/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        >
          <Image
            src="/icons/dashboard.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
          />
          Dashboard
        </Link>
        <Link
          href="#home"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium tracking-wide text-foreground/75 transition-colors hover:bg-white/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        >
          <Image
            src="/icons/songs.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
          />
          Songs
        </Link>
        <Link
          href="#home"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium tracking-wide text-foreground/75 transition-colors hover:bg-white/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        >
          <Image
            src="/icons/calendar.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
          />
          Calendar
        </Link>
        <Link
          href="#home"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium tracking-wide text-foreground/75 transition-colors hover:bg-white/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        >
          <Image
            src="/icons/setlists.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
          />
          Setlists
        </Link>
        <Link
          href="#home"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium tracking-wide text-foreground/75 transition-colors hover:bg-white/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        >
          <Image
            src="/icons/ideas.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
          />
          Ideas
        </Link>
        <Link
          href="#settings"
          className="mt-auto flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium tracking-wide text-foreground/75 transition-colors hover:bg-white/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        >
          <Image
            src="/icons/settings.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
          />
          Settings
        </Link>
      </nav>
    </div>
  );
}
