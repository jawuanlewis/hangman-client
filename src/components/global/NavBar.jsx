import { Link } from "react-router-dom";
import { gameService } from "@/services/gameService";

const NavBar = () => {
  const handleReset = async () => {
    try {
      await gameService.endGame();
    } catch (error) {
      console.error("Error ending game:", error);
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" onClick={handleReset}>
            Home
          </Link>
        </li>
        <li>
          <a
            href="https://www.jawuanlewis.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
