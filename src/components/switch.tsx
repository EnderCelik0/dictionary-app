import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useThemeStore } from "../stores/themeStore";

export default function Switch() {
  const darkMode = useThemeStore((state) => state.darkMode);
  const setDarkMode = useThemeStore((state) => state.setDarkMode);

  return (
    <>
      <div className="flex items-center gap-2 overflow-hidden">
        <div
          className={`relative inline-flex h-6 w-11 cursor-pointer items-center justify-start rounded-full bg-gray-500 transition-colors duration-200 ${darkMode ? "bg-primary/50" : ""}`}
          onClick={() => setDarkMode()}
        >
          <div
            className={`absolute left-[1px] h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ${darkMode ? "translate-x-5 bg-black" : ""}`}
          ></div>
        </div>
        <div
          className="relative h-5 w-5 cursor-pointer"
          onClick={() => setDarkMode()}
        >
          <IoSunnyOutline
            className={`absolute left-0 h-5 w-5 transform text-yellow-600 transition-transform duration-200 ${darkMode ? "z-10 translate-y-[2rem]" : ""} `}
          />
          <FaRegMoon
            className={`absolute left-0 h-5 w-5 transform text-gray-600 transition-transform duration-200 ${darkMode ? "z-10 translate-y-0" : "translate-y-[2rem]"}`}
          />
        </div>
      </div>
    </>
  );
}
