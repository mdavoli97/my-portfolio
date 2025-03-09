import {
  Bell,
  Ellipsis,
  House,
  Minus,
  Search,
  Square,
  Users,
  X,
} from "lucide-react";
import { Input } from "./ui/input";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[6%] grid grid-cols-3 items-center px-4">
      <div>
        <Ellipsis className="size-7 text-white" />
      </div>

      <div className="flex gap-2">
        <Link
          href="/"
          className="flex gap-2 items-center justify-center rounded-full bg-gray-800 p-2 px-3 group cursor-pointer hover:scale-105 transition-all duration-100"
        >
          <House className="size-6 text-white/70 group-hover:text-white cursor-pointer" />
        </Link>
        <div className="flex gap-2 justify-center items-center rounded-3xl bg-gray-800 p-2 px-3 w-full">
          <Search className="size-7 text-white/70 hover:text-white cursor-pointer" />
          <Input
            placeholder="What do you want to play?"
            className="border-none bg-transparent text-white/70 placeholder:text-white placeholder:text-base h-[34px]"
          />
        </div>
      </div>

      <div className="flex gap-10 items-center justify-end">
        <div className="flex gap-5 items-center">
          <Bell className="size-5 text-white/70 hover:text-white cursor-pointer" />
          <Users className="size-5 text-white/70 hover:text-white cursor-pointer" />
        </div>

        <div className="flex gap-5 items-center">
          <Minus className="size-5 text-white/70 hover:text-white cursor-pointer" />
          <Square className="size-4 text-white/70 hover:text-white cursor-pointer" />
          <X className="size-5 text-white/70 hover:text-white cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
