import SongEntry from "../songentry";

export function RecentSongs() {
  return (
    <section className="flex flex-col card rounded-lg border border-[#303A31] bg-[#303A31] p-5">
      <h1 className="text-1xl font-semibold text-foreground sm:text-2xl pb-3">
        Your Recent Songs
      </h1>
      <div className="flex examplesongs grid grid-cols-1 gap-4 ">
        <SongEntry
          title="Executioners"
          band="Stagebraeker"
          status="Completed"
        />
        <SongEntry title="Medusa" band="Stagebraeker" status="In Progress" />
        <SongEntry
          title="White Lies"
          band="Stagebraeker"
          status="Not Started"
        />
        <SongEntry
          title="The Northstar"
          band="Stagebraeker"
          status="Completed"
        />
      </div>
    </section>
  );
}
