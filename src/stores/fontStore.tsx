import { create } from "zustand";

type State = {
  font: string;
};

type Action = {
  setFont: (font: string) => void;
};

export const useFontStore = create<Action & State>((set) => ({
  font: "Sans-Serif",
  setFont: (font: string) => set({ font: font }),
}));
