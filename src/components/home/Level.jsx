import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Level = ({ image, title }) => {
  return (
    <div className="level-container">
      <Link to={`/game?level=${title}`}>
        <img
          src={image}
          className="level-frame item-hover"
          id={title}
          alt={title}
        />
      </Link>
      <label>{title}</label>
    </div>
  );
};

Level.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Level;
