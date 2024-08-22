export type Word = {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio?: string;
  }[];
  origin: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example: string;
      synonyms: string[];
      antonyms: string[];
    }[];
  }[];
};

export type Font = {
  name: "sans-serif" | "serif" | "monospace";
};

export type Theme = {
  theme: "light" | "dark";
};
