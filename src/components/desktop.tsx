import { MoveDown } from "lucide-react";
import Taskbar from "./taskbar";
import { cn } from "@/lib/utils";

export default function Desktop({
  children,
  isAppOpen,
  setIsAppOpen,
}: {
  children: React.ReactNode;
  isAppOpen: boolean;
  setIsAppOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="bg-gray-700 max-w-7xl max-h-[800px] w-full mx-auto h-full rounded-md flex flex-col relative">
      <div
        className="h-full bg-[url(/wallpaper.webp)] bg-cover"
        id="desktop-area"
      >
        {children}
      </div>
      <MoveDown
        className={cn(
          "m-auto flex text-white absolute bottom-14 left-[19.75rem] size-6 animate-bounce",
          {
            hidden: isAppOpen,
          }
        )}
      />
      <Taskbar setIsAppOpen={setIsAppOpen} isAppOpen={isAppOpen} />
    </div>
  );
}
