import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { useFontStore } from "../stores/fontStore";
import { useThemeStore } from "../stores/themeStore";

export default function FontSelector() {
  const [checked, setChecked] = useState(false);
  const { font, setFont } = useFontStore();
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <div
      className="relative flex cursor-pointer items-center gap-2 font-semibold"
      onClick={() => setChecked(!checked)}
    >
      {font}
      <span
        className={`transition-all duration-200 ${checked ? "rotate-180" : ""}`}
      >
        <FaChevronDown className="text-primary" />
      </span>
      <div className="flex">
        {checked && (
          <div
            className={`absolute -bottom-32 -right-3 z-10 flex flex-col gap-2 overflow-hidden rounded-lg ${darkMode ? "bg-gray-900" : "bg-gray-300"} text-black`}
          >
            <div
              className={`relative rounded-lg py-1 pl-2 pr-5 transition-colors duration-200 hover:bg-gray-400 ${font === "Sans-Serif" ? "after:absolute after:right-1 after:top-1 after:content-['✓']" : ""}`}
              onClick={() => setFont("Sans-Serif")}
            >
              Sans-Serif
            </div>
            <div
              className={`relative rounded-lg py-1 pl-2 pr-5 transition-colors duration-200 hover:bg-gray-400 ${font === "Serif" ? "after:absolute after:right-1 after:top-1 after:content-['✓']" : ""}`}
              onClick={() => setFont("Serif")}
            >
              Serif
            </div>
            <div
              className={`relative rounded-t-lg py-1 pl-2 pr-5 transition-colors duration-200 hover:bg-gray-400 ${font === "Monospace" ? "after:top- after:absolute after:right-1 after:content-['✓']" : ""}`}
              onClick={() => setFont("Monospace")}
            >
              Monospace
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
