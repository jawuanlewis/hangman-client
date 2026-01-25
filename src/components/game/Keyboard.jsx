import { useState, useEffect } from "react";
import { getDisabledKeys, saveDisabledKey } from "@/utils/keyboardState";
import PropTypes from "prop-types";

const Keyboard = ({ onGuess }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [disabledKeys, setDisabledKeys] = useState(new Set());

  useEffect(() => {
    const keys = getDisabledKeys();
    setDisabledKeys(new Set(keys));
  }, []);

  const handleGuess = (letter) => {
    onGuess(letter);

    setDisabledKeys((prev) => {
      const newDisabled = new Set(prev).add(letter);
      saveDisabledKey(letter);
      return newDisabled;
    });
  };

  return (
    <div id="keyboard-container">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
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
  onGuess: PropTypes.func.isRequired,
};

export default Keyboard;
