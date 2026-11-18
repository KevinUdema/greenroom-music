import { RecentSongs } from "@/components/dashboard/recentsongs";
import { Events } from "@/components/dashboard/events";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#202A22] backdrop-blur-sm">
      <section className="min-w-0 p-4 sm:p-6">
        <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Welcome to Greenroom Music
        </h1>
        <p className="mt-1 text-sm text-foreground/50">
          Here&apos;s what&apos;s happening with your music
        </p>
        <div className="events flex grid grid-cols-2 gap-2 py-5">
          <Events></Events>
        </div>
        <div className="recentsongs">
          <RecentSongs></RecentSongs>
        </div>
      </section>
    </main>
  );
}
