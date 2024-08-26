import { create } from "zustand";

type State = {
  searchedWord: string;
};

type Actions = {
  setSearchedWord: (searchedWord: string) => void;
};

export const useWordStore = create<State & Actions>((set) => ({
  searchedWord: "keyboard",
  setSearchedWord: (searchedWord) => set({ searchedWord }),
}));
