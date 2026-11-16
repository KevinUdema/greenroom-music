import { Header } from "@/components/header";
import { NavSide } from "@/components/navside";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <NavSide />
      </div>
    </main>
  );
}
