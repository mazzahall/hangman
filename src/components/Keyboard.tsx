import clsx from "clsx";

const KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface KeyboardProps {
  onKeyboardClick: (letter: string) => void;
  inactiveLetters: string[];
  activeLetters: string[];
  disabled?: boolean;
}

function Keyboard({
  onKeyboardClick,
  inactiveLetters,
  activeLetters,
  disabled = false,
}: KeyboardProps) {
  return (
    <section className="flex flex-wrap w-140 gap-2">
      {KEYS.map((letter, index) => {
        const isInactive = inactiveLetters.includes(letter);
        const isActive = activeLetters.includes(letter);
        const isButtonDisabled = disabled || isInactive || isActive;

        return (
          <button
            key={index}
            disabled={isButtonDisabled}
            onClick={() => onKeyboardClick(letter)}
            className={clsx(
              "border-2 font-semibold p-5 select-none",
              isInactive && "bg-gray-300 cursor-not-allowed",
              isActive && "bg-blue-300 cursor-not-allowed",
              disabled && !isInactive && !isActive && "opacity-50 cursor-not-allowed",
              !isButtonDisabled && "cursor-pointer hover:bg-sky-100"
            )}
          >
            {letter}
          </button>
        );
      })}
    </section>
  );
}

export default Keyboard;