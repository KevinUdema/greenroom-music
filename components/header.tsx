import Link from "next/link";

export function Header() {
  return (
    <header className="fixed sm:top-0 sm:bottom-auto bottom-0 w-full flex justify-center py-6 bg-background/80 backdrop-blur-sm z-50">
      <div className="container flex justify-center sm:justify-end lg:px-20">
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="#skills"
            className="text-foreground/70 hover:text-foreground transition-colors text-sm sm:text-base"
            title="My experience"
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className="text-foreground/70 hover:text-foreground transition-colors text-sm sm:text-base"
            title="My experience"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-foreground/70 hover:text-foreground transition-colors text-sm sm:text-base"
            title="View my projects"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-foreground/70 hover:text-foreground transition-colors text-sm sm:text-base"
            title="contact me!"
          >
            Contact
          </Link>
          <Link
            href="#hero"
            className="text-foreground/70 hover:text-foreground transition-colors text-sm sm:text-base"
            title="Back to top"
          >
            ↑ Top
          </Link>
        </nav>
      </div>
    </header>
  );
}
