import PropTypes from "prop-types";

const CurrentProgress = ({ progress }) => {
  return (
    <div className="head-text">
      <label id="current-progress">{progress}</label>
    </div>
  );
};

CurrentProgress.propTypes = {
  progress: PropTypes.string.isRequired,
};

export default CurrentProgress;
