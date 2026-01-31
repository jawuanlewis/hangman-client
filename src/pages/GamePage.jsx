import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { gameService } from "@/services/gameService";
import HangmanLayout from "@/layouts/HangmanLayout";
import GameLayout from "@/layouts/GameLayout";
import "@/styles/gamepage.css";

const GamePage = () => {
  const [searchParams] = useSearchParams();
  const [gameState, setGameState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeGame = async () => {
      try {
        const currentGame = await gameService.getCurrGame();
        if (Object.keys(currentGame).length === 0) {
          const level = searchParams.get("level") || "Movies";
          const gameData = await gameService.initGame(level);
          setGameState(gameData);
        } else {
          setGameState(currentGame);
        }
        setLoading(false);
      } catch (err) {
        console.error("Failed to initialize game:", err);
        setLoading(false);
      }
    };

    initializeGame();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="game-layout">
        <div className="loading-spinner">Loading game...</div>
      </div>
    );
  }

  return (
    <main className="game-layout">
      <HangmanLayout gameState={gameState} />
      <GameLayout gameState={gameState} setGameState={setGameState} />
    </main>
  );
};

export default GamePage;
