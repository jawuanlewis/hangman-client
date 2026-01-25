import { Link } from "react-router-dom";
import { gameService } from "@/services/gameService";
import PropTypes from "prop-types";

const GameOver = ({ level, replay }) => {
  const handleReplay = (e) => {
    e.preventDefault();
    replay(level);
  };

  const handleReset = async () => {
    try {
      await gameService.endGame();
    } catch (error) {
      console.error("Error ending game:", error);
    }
  };

  return (
    <div id="game-end-container">
      <Link
        to={`/game?level=${level}`}
        className="item-hover"
        style={{ backgroundColor: "#7AC860" }}
        onClick={handleReplay}
      >
        Play Again
      </Link>
      <Link
        to="/"
        className="item-hover"
        style={{ backgroundColor: "#E74747" }}
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
};

export default GameOver;
