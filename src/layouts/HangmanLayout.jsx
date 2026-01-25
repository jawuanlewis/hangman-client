import PropTypes from "prop-types";
import Hangman from "@/components/game/Hangman";

const HangmanLayout = ({ gameState }) => {
  return (
    <section className="left-section">
      <Hangman attempts={gameState.attempts} />
    </section>
  );
};

HangmanLayout.propTypes = {
  gameState: PropTypes.shape({
    level: PropTypes.string,
    attempts: PropTypes.number,
    currentProgress: PropTypes.string,
    gameOver: PropTypes.bool,
  }).isRequired,
};

export default HangmanLayout;
