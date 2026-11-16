import Link from "next/link";
export function NavSide() {
  return (
    <div className="flex overflow-y-auto bg-background/80 backdrop-blur-sm">
      <nav className="flex flex-col items-left px-4 py-2">
        <Link
          href="#home"
          className="text-foreground/70 hover:text-foreground transition-colors text-sm sm:text-base"
        >
          test
        </Link>
        <Link
          href="#home"
          className="text-foreground/70 hover:text-foreground transition-colors text-sm sm:text-base"
        >
          test
        </Link>
        <Link
          href="#home"
          className="text-foreground/70 hover:text-foreground transition-colors text-sm sm:text-base"
        >
          test
        </Link>
        <Link
          href="#home"
          className="text-foreground/70 hover:text-foreground transition-colors text-sm sm:text-base"
        >
          test
        </Link>
        <Link
          href="#home"
          className="text-foreground/70 hover:text-foreground transition-colors text-sm sm:text-base"
        >
          test
        </Link>
      </nav>
    </div>
  );
}
