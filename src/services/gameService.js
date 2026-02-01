import api from "./apiClient";
import { tokenService } from "./tokenService";
import { validateGameResponse } from "./validation";

export const gameService = {
  initGame: async (level) => {
    tokenService.clearToken();

    const response = validateGameResponse(await api.post("/games", { level }), {
      requireToken: true,
    });
    tokenService.setToken(response.token);

    return response.game;
  },

  getCurrGame: async () => {
    if (!tokenService.hasToken()) {
      return {};
    }

    try {
      const response = validateGameResponse(await api.get("/games"));
      return response.game;
    } catch (error) {
      // Token was invalid/expired or game not found - treat as no active game
      console.warn("Failed to get current game:", error);
      tokenService.clearToken();
      return {};
    }
  },

  makeGuess: async (letter) => {
    const response = validateGameResponse(
      await api.patch("/games", { letter }),
    );
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
