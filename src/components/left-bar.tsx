import { ArrowRight, Library, Plus } from "lucide-react";

export default function LeftBar() {
  return (
    <div className="flex h-full p-5 bg-zinc-900 rounded-md">
      <div className="flex justify-between w-full gap-8 items-center h-fit">
        <div className="flex gap-4 items-center h-fit group cursor-pointer">
          <Library className="size-7 text-white/70 group-hover:text-white shrink-0" />
          <p className="text-nowrap text-white/70 group-hover:text-white">
            Your library
          </p>
        </div>
        <div className="flex gap-5">
          <Plus className="size-5 text-white/70 hover:text-white cursor-pointer" />
          <ArrowRight className="size-5 text-white/70 hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
