import {
  Calendar,
  FolderClosed,
  Globe,
  Grid2X2,
  Headphones,
  Search,
} from "lucide-react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export default function Taskbar({
  setIsAppOpen,
  isAppOpen,
}: {
  setIsAppOpen: (value: boolean) => void;
  isAppOpen: boolean;
}) {
  return (
    <div className="h-13 bg-gray-800 p-2 px-3 flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <Grid2X2 className="size-7 text-blue-700" />
        <div className="flex gap-2 justify-center items-center rounded-3xl bg-gray-600 p-2 px-3 h-9">
          <Search className="size-7 text-white/70 hover:text-white cursor-pointer" />
          <Input
            placeholder="Search"
            className="border-none bg-transparent text-white/70 placeholder:text-white placeholder:text-base h-full"
          />
        </div>
        <div className="flex gap-1">
          <div className="rounded-md bg-gray-600 p-1.5">
            <Headphones
              onClick={() => setIsAppOpen(!isAppOpen)}
              className={cn(
                "size-7 text-white border-b-2 border-gray-400 pb-1 cursor-pointer",
                {
                  "border-blue-400": isAppOpen,
                }
              )}
            />
          </div>
          <div className="rounded-md p-1.5">
            <Globe className="size-7 text-white border-b-2 border-gray-400 pb-1" />
          </div>
          <div className="rounded-md p-1.5">
            <FolderClosed className="size-7 text-white border-b-2 border-gray-400 pb-1" />
          </div>
          <div className="rounded-md p-1.5">
            <Calendar className="size-7 text-white border-b-2 border-gray-400 pb-1" />
          </div>
        </div>
      </div>
      <div className="space-y-0.5">
        <p className="text-center text-white/70 text-xs">12:32 AM</p>
        <p className="text-center text-white/70 text-xs">3/9/2025</p>
      </div>
    </div>
  );
}
