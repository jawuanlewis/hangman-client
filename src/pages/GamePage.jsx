import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { gameService } from "@/services/gameService";
import HangmanLayout from "@/layouts/HangmanLayout";
import GameLayout from "@/layouts/GameLayout";
import "@/styles/gamepage.css";

const GamePage = () => {
  const [searchParams] = useSearchParams();
  const [gameState, setGameState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const initializeGame = useCallback(
    async (signal) => {
      setLoading(true);
      setError(null);

      try {
        const currentGame = await gameService.getCurrGame();

        if (signal?.aborted) return;

        if (Object.keys(currentGame).length === 0) {
          const level = searchParams.get("level") || "Movies";
          const gameData = await gameService.initGame(level);

          if (signal?.aborted) return;

          setGameState(gameData);
        } else {
          setGameState(currentGame);
        }
      } catch (err) {
        if (signal?.aborted) return;

        console.error("Failed to initialize game:", err);
        setError("Failed to load game. Please try again.");
      } finally {
        if (!signal?.aborted) {
          setLoading(false);
        }
      }
    },
    [searchParams],
  );

  useEffect(() => {
    const abortController = new AbortController();
    initializeGame(abortController.signal);

    return () => {
      abortController.abort();
    };
  }, [initializeGame]);

  const handleRetry = () => {
    initializeGame();
  };

  if (loading) {
    return (
      <div className="game-layout">
        <div className="loading-spinner">Loading game...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="game-layout">
        <div className="error-container">
          <p className="error-message">{error}</p>
          <button onClick={handleRetry} className="retry-button">
            Try Again
          </button>
        </div>
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
