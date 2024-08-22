import FontSelector from "./components/font-selector";
import { IoBookOutline } from "react-icons/io5";
import Switch from "./components/switch";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <div>
        <IoBookOutline className="aspect-video h-9 w-16 text-gray-500 text-opacity-45" />
      </div>
      <div className="flex gap-3 text-black">
        <FontSelector />
        <div className="border border-l border-gray-50 border-opacity-10"></div>
        <Switch />
      </div>
    </nav>
  );
}
