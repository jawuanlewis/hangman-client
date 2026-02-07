import { Link } from "react-router-dom";
import { gameService } from "@/services/gameService";
import PropTypes from "prop-types";

const GameOver = ({ level, replay, disabled = false }) => {
  const handleReplay = (e) => {
    e.preventDefault();
    if (disabled) return;
    replay(level);
  };

  const handleReset = async (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    try {
      await gameService.endGame();
    } catch (error) {
      console.error("Error ending game:", error);
    }
  };

  const disabledStyle = disabled ? { pointerEvents: "none", opacity: 0.6 } : {};

  return (
    <div id="game-end-container">
      <Link
        to={`/game?level=${level}`}
        className="item-hover"
        style={{ backgroundColor: "#7AC860", ...disabledStyle }}
        onClick={handleReplay}
      >
        Play Again
      </Link>
      <Link
        to="/"
        className="item-hover"
        style={{ backgroundColor: "#E74747", ...disabledStyle }}
        onClick={handleReset}
      >
        Main Menu
      </Link>
    </div>
  );
};

GameOver.propTypes = {
  level: PropTypes.string.isRequired,
  replay: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default GameOver;
