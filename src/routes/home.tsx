import SearchInput from "../components/search-input";
import Meaning from "../components/meaning";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <SearchInput />
      <Meaning />
    </div>
  );
}
