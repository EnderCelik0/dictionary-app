import SearchInput from "../components/search-input";
import SearchedWord from "../components/searched-word";
import Meaning from "../components/meaning";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <SearchInput />
      <SearchedWord word="keyboard" />
      <Meaning />
    </div>
  );
}
