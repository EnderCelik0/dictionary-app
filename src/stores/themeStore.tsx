import { create } from "zustand";

type State = {
  darkMode: boolean;
};

type Actions = {
  setDarkMode: () => void;
};

export const useThemeStore = create<State & Actions>((set) => ({
  darkMode: false,
  setDarkMode: () =>
    set((state) => {
      if (!state.darkMode) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }

      return { darkMode: !state.darkMode };
    }),
}));
