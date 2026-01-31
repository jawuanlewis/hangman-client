import PropTypes from "prop-types";

const Keyboard = ({ guessedLetters, onGuess }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const disabledKeys = new Set(guessedLetters.map((l) => l.toUpperCase()));

  return (
    <div id="keyboard-container">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={disabledKeys.has(letter)}
          data-letter={letter}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

Keyboard.propTypes = {
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGuess: PropTypes.func.isRequired,
};

export default Keyboard;
