import clsx from "clsx";

interface HangmanWordProps {
  word: string;
  selectedLetters: string[];
  reveal?: boolean;
  isWin?: boolean;
}

function HangmanWord({
  word,
  selectedLetters,
  reveal = false,
  isWin = false,
}: HangmanWordProps) {
  return (
    <section>
      {word.split("").map((letter, index) => {
        const isGuessed = selectedLetters.includes(letter);

        return (
          <span
            key={index}
            className="inline-block w-12 h-14 border-b-4 border-black mx-2 text-center text-4xl font-bold"
          >
            <span
              className={clsx(
                isGuessed || reveal ? "visible" : "invisible",
                isWin && "text-green-500",
                !isWin && isGuessed && "text-red-500",
                !isWin && !isGuessed && reveal && "text-black"
              )}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </section>
  );
}

export default HangmanWord;