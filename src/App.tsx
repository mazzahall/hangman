import { useState } from "react";
import HangmanDraw from "./components/HangmanDraw";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import words from "../wordList.json";

function App() {
  const [currentWord, setCurrentWord] = useState(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return (randomWord || "REACT").toUpperCase();
  });

  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  const incorrectLetters = selectedLetters.filter(
    (letter) => !currentWord.includes(letter)
  );

  const isLoss = incorrectLetters.length >= 6;
  const isWin = currentWord
    .split("")
    .every((letter) => selectedLetters.includes(letter));

  const isGameOver = isLoss || isWin;

  const addLetter = (letter: string) => {
    const uppercaseLetter = letter.toUpperCase();
    if (isGameOver || selectedLetters.includes(uppercaseLetter)) return;

    setSelectedLetters((prev) => [...prev, uppercaseLetter]);
  };

  return (
    <section className="flex flex-col items-center gap-2">
      <div className="text-xl font-bold h-8">
        {isWin && "You win, refresh and try again!"}
        {isLoss && "Nice try, refresh and try again!"}
      </div>

      <HangmanDraw attempt={incorrectLetters.length} />

      <HangmanWord
        word={currentWord}
        selectedLetters={selectedLetters}
        reveal={isLoss}
        isWin={isWin}
      />

      <Keyboard
        onKeyboardClick={addLetter}
        inactiveLetters={incorrectLetters}
        activeLetters={selectedLetters.filter((letter) =>
          currentWord.includes(letter)
        )}
        disabled={isGameOver}
      />
    </section>
  );
}

export default App;