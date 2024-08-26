import { IoSearchSharp } from "react-icons/io5";
import { useWordStore } from "../stores/wordStore";
import { useThemeStore } from "../stores/themeStore";

export default function SearchInput() {
  const { setSearchedWord } = useWordStore();
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <div className="relative flex items-center gap-2">
      <input
        type="text"
        placeholder="keyboard"
        onChange={(e) => setSearchedWord(e.target.value)}
        className={`placeholder:text-gray-black relative w-full rounded-2xl border-black p-4 caret-primary outline-none ${darkMode ? "bg-gray-950" : "bg-gray-50"}`}
      />
      <IoSearchSharp className="absolute right-4 h-6 w-6 text-primary text-opacity-60" />
    </div>
  );
}
