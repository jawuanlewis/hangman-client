import PropTypes from "prop-types";

const Messages = ({ attempts, gameOver }) => {
  const statusMsg = (attempts, gameOver) => {
    if (attempts <= 0) {
      return "Sorry! You have run out of guesses. The word is:";
    } else if (attempts > 0 && gameOver) {
      return "Congratulations! You have correctly guessed the word.";
    } else {
      return `You have ${attempts} attempt(s) remaining.`;
    }
  };

  const extraMsg = (gameOver) => {
    if (gameOver) {
      return "";
    } else {
      return "Guess a letter below:";
    }
  };

  return (
    <div className="head-text">
      <label id="status-message">{statusMsg(attempts, gameOver)}</label>
      <br></br>
      <br></br>
      <label id="extra-message">{extraMsg(gameOver)}</label>
    </div>
  );
};

Messages.propTypes = {
  attempts: PropTypes.number.isRequired,
  gameOver: PropTypes.bool.isRequired,
};

export default Messages;
