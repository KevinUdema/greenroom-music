import Image from "next/image";

type SongStatus = "In Progress" | "Completed" | "Not Started";

const statusBackgrounds: Record<SongStatus, string> = {
  "In Progress": "bg-blue-700",
  Completed: "bg-emerald-700",
  "Not Started": "bg-slate-600",
};

interface SongEntryProps {
  title: string;
  band: string;
  status: SongStatus;
}

export default function SongEntry({ title, band, status }: SongEntryProps) {
  return (
    <div className="grid grid-cols-2 items-center gap-4 border-b border-[#E9EDE3] px-1 py-2 text-[#E9EDE3]">
      <div className="flex gap-1">
        <Image
          src="/Icarus.jpg"
          alt={`${band} logo`}
          width={48}
          height={48}
          className="size-12 rounded-sm border border-[#E9EDE3]/30 object-cover"
        />
        <div className="px-2">
          <h3>{title}</h3>
          <p className="text-sm opacity-70">{band}</p>
        </div>
      </div>
      <p
        className={`w-fit whitespace-nowrap rounded-full px-3 py-1 text-sm font-medium text-[#E9EDE3] ${statusBackgrounds[status]}`}
      >
        {status}
      </p>
    </div>
  );
}
