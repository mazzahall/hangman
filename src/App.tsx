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

  // PANGGIL setCurrentWord DI SINI:
  const resetGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord((randomWord || "REACT").toUpperCase());
    setSelectedLetters([]);
  };

  return (
    <section className="flex flex-col items-center gap-2">
      <div className="text-xl font-bold h-8 flex items-center gap-4">
        {isWin && <span className="text-green-600">You win!</span>}
        {isLoss && <span className="text-red-600">Nice try!</span>}
        
        {/* Tampilkan tombol saat permainan selesai */}
        {isGameOver && (
          <button
            onClick={resetGame}
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition"
          >
            Play Again
          </button>
        )}
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