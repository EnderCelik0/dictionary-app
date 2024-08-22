import { FaPlay, FaPause } from "react-icons/fa";
import { useState } from "react";
export default function SearchedWord({ word }: { word: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold">{word}</h1>
        <p className="text-xl  text-primary">/"kiːbɔːd/</p>
      </div>
      <div
        className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-secondary p-6"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? (
          <FaPause className="text-primary" />
        ) : (
          <FaPlay className="text-primary" />
        )}
      </div>
    </div>
  );
}
