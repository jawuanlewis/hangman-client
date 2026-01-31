import api from "./apiClient";
import { tokenService } from "./tokenService";

export const gameService = {
  initGame: async (level) => {
    tokenService.clearToken();

    const response = await api.post("/games", { level });
    tokenService.setToken(response.token);

    return response.game;
  },

  getCurrGame: async () => {
    if (!tokenService.hasToken()) {
      return {};
    }

    const response = await api.get("/games");
    return response.game;
  },

  makeGuess: async (letter) => {
    const response = await api.patch("/games", { letter });
    return response.game;
  },

  endGame: async () => {
    if (tokenService.hasToken()) {
      try {
        await api.delete("/games");
      } catch (error) {
        // Ignore errors - game may already be expired or deleted
        console.warn("Failed to delete game on server:", error);
      }
    }

    tokenService.clearToken();
  },
};
