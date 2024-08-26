import { FaPlay, FaPause } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import useMeaning from "../query/useMeaning";

export default function SearchedWord() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { data, error } = useMeaning();

  useEffect(() => {
    if (data && data[0]?.phonetics) {
      const audioUrl = data[0].phonetics.find((p) => p.audio)?.audio;
      if (audioUrl) {
        audioRef.current = new Audio(audioUrl);
      }
    }
  }, [data]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        audioRef.current.onended = () => setIsPlaying(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const wordMeaning = data[0];

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold">{wordMeaning.word}</h1>
        <p className="text-xl text-primary">
          {wordMeaning.phonetic && wordMeaning.phonetic.length > 0
            ? wordMeaning.phonetic
            : "No phonetic(s)"}
        </p>
      </div>
      <button
        disabled={!audioRef.current}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-secondary p-6 disabled:cursor-not-allowed disabled:opacity-60"
        onClick={toggleAudio}
      >
        {isPlaying ? (
          <FaPause className="text-primary" />
        ) : (
          <FaPlay className="text-primary" />
        )}
      </button>
    </div>
  );
}
