import {
  CircleCheck,
  CirclePause,
  CirclePlay,
  ListMusic,
  Maximize2,
  MicVocal,
  Repeat2,
  Shuffle,
  SkipBack,
  SkipForward,
  Speaker,
  Volume2,
} from "lucide-react";
import { Slider } from "./ui/slider";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const SONG_DURATION_IN_SECONDS = 100;

  const startPlayback = useCallback(() => {
    setIsPlaying(true);
    if (intervalId) clearInterval(intervalId);

    const id = setInterval(() => {
      setProgress((prev) => {
        if (prev >= SONG_DURATION_IN_SECONDS) {
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    setIntervalId(id);
  }, [intervalId]);

  const handlePlay = () => {
    if (progress >= SONG_DURATION_IN_SECONDS) {
      setProgress(0);
    }
    startPlayback();
  };

  const handlePause = () => {
    setIsPlaying(false);
    if (intervalId) clearInterval(intervalId);
  };

  useEffect(() => {
    if (progress === 0 && isPlaying) {
      startPlayback();
    }
  }, [isPlaying, progress]);

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <footer className="grid grid-cols-3 items-center px-1 min-h-18">
      <div className="flex gap-3 items-center">
        <Image
          className="size-14 rounded-sm"
          src="/mauro-davoli.jpeg"
          alt="Mauro Davoli"
          width={200}
          height={200}
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-sm font-bold text-nowrap">Mauro Davoli</h1>
          <p className="text-gray-400 text-sm">Frontend Engineer</p>
        </div>
        <CircleCheck className="size-4 text-green-500" />
      </div>

      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex gap-5 items-center justify-center">
          <Shuffle className="size-4 text-white" />
          <SkipBack className="size-5 text-white" />
          {isPlaying ? (
            <CirclePause
              onClick={handlePause}
              className="size-8 text-white cursor-pointer"
            />
          ) : (
            <CirclePlay
              onClick={handlePlay}
              className="size-8 text-white cursor-pointer"
            />
          )}
          <SkipForward className="size-5 text-white" />
          <Repeat2 className="size-5 text-white" />
        </div>
        <div className="flex gap-2 w-full items-center">
          <div className="text-xs">{formatTime(progress)}</div>
          <Slider
            max={100}
            step={1}
            inverted
            value={[100 - (progress / SONG_DURATION_IN_SECONDS) * 100]}
            onValueChange={(newValue) =>
              setProgress(
                ((100 - newValue[0]) / 100) * SONG_DURATION_IN_SECONDS
              )
            }
          />
          <div className="text-xs">{formatTime(SONG_DURATION_IN_SECONDS)}</div>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-end">
        <MicVocal className="size-5 text-gray-400" />
        <ListMusic className="size-5 text-gray-400" />
        <Speaker className="size-5 text-gray-400" />
        <div className="flex gap-2">
          <Volume2 className="size-5 text-gray-400" />
          <Slider max={100} step={1} className="w-28" />
        </div>
        <Maximize2 className="size-4 text-gray-400" />
      </div>
    </footer>
  );
}
