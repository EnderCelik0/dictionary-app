import { useQuery } from "@tanstack/react-query";
import { getWordInfo } from "../api/get-word-info";
import { useWordStore } from "../stores/wordStore";

export default function useMeaning() {
  const { searchedWord } = useWordStore();

  return useQuery({
    queryKey: ["meaning", searchedWord],
    queryFn: () => getWordInfo(searchedWord),
  });
}
