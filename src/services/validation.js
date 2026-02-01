export class ApiValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ApiValidationError";
    this.field = field;
  }
}

export class ApiError extends Error {
  constructor(message, { type, status, originalError } = {}) {
    super(message);
    this.name = "ApiError";
    this.type = type;
    this.status = status;
    this.originalError = originalError;
  }

  get isNetworkError() {
    return this.type === "network";
  }

  get isClientError() {
    return this.type === "client";
  }

  get isServerError() {
    return this.type === "server";
  }
}

export const validateGameResponse = (
  response,
  { requireToken = false } = {},
) => {
  if (!response) {
    throw new ApiValidationError(
      "Invalid API response: no response data",
      "response",
    );
  }

  if (!response.game) {
    throw new ApiValidationError(
      "Invalid API response: missing game data",
      "game",
    );
  }

  if (requireToken && !response.token) {
    throw new ApiValidationError(
      "Invalid API response: missing token",
      "token",
    );
  }

  return response;
};
