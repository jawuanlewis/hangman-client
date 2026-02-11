import axios from "axios";
import { tokenService } from "./tokenService";
import { ApiError } from "./validation";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT
api.interceptors.request.use(
  (config) => {
    const token = tokenService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Error handling
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (!error.response) {
      console.error("Network Error:", error.message);
      return Promise.reject(
        new ApiError(
          "Unable to connect to server. Please check your connection.",
          {
            type: "network",
            originalError: error,
          },
        ),
      );
    }

    const { status, statusText, data } = error.response;

    console.error("API Error:", { status, statusText, data });

    if (status === 401) {
      tokenService.clearToken();
    }

    if (status === 429) {
      globalThis.location.href = "/disabled";
    }

    if (status >= 400 && status < 500) {
      const message = data?.error || `Request failed: ${statusText}`;
      return Promise.reject(
        new ApiError(message, {
          type: "client",
          status,
          originalError: error,
        }),
      );
    }

    if (status >= 500) {
      return Promise.reject(
        new ApiError("Server error. Please try again later.", {
          type: "server",
          status,
          originalError: error,
        }),
      );
    }

    return Promise.reject(error);
  },
);

export default api;
