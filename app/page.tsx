import { Header } from "@/components/header";
import { NavSide } from "@/components/navside";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="grid flex-1 grid-cols-1 md:grid-cols-[16rem_minmax(0,1fr)]">
        <NavSide />
        <section className="min-w-0 p-4 sm:p-6">
          {/* Page content goes here */}
        </section>
      </div>
    </main>
  );
}
