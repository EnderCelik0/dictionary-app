import { IoSearchSharp } from "react-icons/io5";

export default function SearchInput() {
  return (
    <div className="relative flex items-center gap-2">
      <input
        type="text"
        placeholder="keyboard"
        className="relative w-full rounded-2xl border-black bg-gray-100 p-4 caret-primary outline-none placeholder:font-bold placeholder:text-gray-950 focus:text-primary"
      />
      <IoSearchSharp className="absolute right-4 h-6 w-6 text-primary text-opacity-60" />
    </div>
  );
}
