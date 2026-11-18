export function RecentSongs() {
  return (
    <section className="flex flex-col card rounded-lg border border-[#303A31] bg-[#303A31] p-5">
      <h1 className="text-1xl font-semibold text-foreground sm:text-2xl pb-3">
        Your Recent Songs
      </h1>
      <div className="flexexamplesongs grid grid-cols-2 gap-4 ">
        <div>
          <p className="font-bold"> Excecutioners</p>
        </div>
        <div>
          <p>progress:</p>
        </div>
        <div>
          <p className="font-bold"> Medusa</p>
        </div>
        <div>
          <p>progress:</p>
        </div>
        <div>
          <p className="font-bold"> The Northstar</p>
        </div>
        <div>
          <p>progress:</p>
        </div>
      </div>
    </section>
  );
}
