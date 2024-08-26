import useMeaning from "../query/useMeaning";
import SearchedWord from "./searched-word";

export default function Meaning() {
  const { data, isPending, error } = useMeaning();

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const wordMeaning = data[0];
  console.log(wordMeaning);

  return (
    <div className="flex flex-col gap-6">
      <SearchedWord />

      {wordMeaning.meanings.map((meaning, index) => (
        <div key={index}>
          <div className="flex items-center gap-6">
            <p className="text-xl font-bold">{meaning.partOfSpeech}</p>
            <hr className="w-full border-gray-200" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-gray-400">Meaning</div>
            {meaning.definitions.map((definition, defIndex) => (
              <ul
                key={defIndex}
                className="flex list-disc flex-col gap-4 pl-10"
              >
                <li>{definition.definition}</li>
              </ul>
            ))}
            <div className="mt-10 flex items-center gap-4">
              <p className="text-gray-400">Synonyms</p>
              <p className="font-bold text-primary">
                {meaning.synonyms && meaning.synonyms.length > 0
                  ? meaning.synonyms.join(", ")
                  : "None"}
              </p>
            </div>
          </div>
        </div>
      ))}

      <hr className="w-full border-black/10" />
      <div className="flex gap-4">
        <p className="text-gray-400">Source</p>
        <a
          href={wordMeaning.sourceUrls[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm underline"
        >
          {wordMeaning.sourceUrls[0]}
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="gray"
              d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
              opacity=".5"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
