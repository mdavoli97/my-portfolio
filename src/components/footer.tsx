import {
  CirclePlay,
  Repeat2,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";

export default function Footer() {
  return (
    <header className="grid grid-cols-3 items-center px-4 min-h-18 drag-handle">
      <div>Frontend</div>

      <div className="flex gap-5 items-center justify-center">
        <Shuffle className="size-4 text-white" />
        <SkipBack className="size-6 text-white" />
        <CirclePlay className="size-9 text-white" />
        <SkipForward className="size-6 text-white" />
        <Repeat2 className="size-6 text-white" />
      </div>

      <div className="flex gap-10 items-center justify-end"></div>
    </header>
  );
}
