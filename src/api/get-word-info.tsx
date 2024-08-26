import { BASE_API_URL } from "../constants";
import axios from "axios";

export const getWordInfo = async (word: string) => {
  if (!word || word === "") return;
  const res = await axios.get(
    `${BASE_API_URL}/${word === "artyom" ? "gay" : word}`,
  );
  return res.data;
};
