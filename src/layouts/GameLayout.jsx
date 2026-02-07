import { useState } from "react";
import { gameService } from "@/services/gameService";
import PropTypes from "prop-types";
import Messages from "@/components/game/Messages";
import CurrentProgress from "@/components/game/CurrentProgress";
import Keyboard from "@/components/game/Keyboard";
import GameOver from "@/components/game/GameOver";

const GameLayout = ({ gameState, setGameState }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGuess = async (letter) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const gameData = await gameService.makeGuess(letter);
      setGameState(gameData);
    } catch (error) {
      console.error("Error making guess:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReplay = async (level) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const gameData = await gameService.initGame(level);
      setGameState(gameData);
    } catch (error) {
      console.error("Error restarting game:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="right-section">
      <Messages attempts={gameState.attempts} gameOver={gameState.gameOver} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <CurrentProgress progress={gameState.currentProgress} />
      <br></br>
      <br></br>
      <br></br>

      {gameState.gameOver ? (
        <GameOver
          level={gameState.level}
          replay={handleReplay}
          disabled={isSubmitting}
        />
      ) : (
        <Keyboard
          guessedLetters={gameState.guessedLetters || []}
          onGuess={handleGuess}
        />
      )}
    </section>
  );
};

GameLayout.propTypes = {
  gameState: PropTypes.shape({
    level: PropTypes.string,
    attempts: PropTypes.number,
    currentProgress: PropTypes.string,
    gameOver: PropTypes.bool,
    guessedLetters: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setGameState: PropTypes.func.isRequired,
};

export default GameLayout;
