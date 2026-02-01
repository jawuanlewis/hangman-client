export class ApiValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ApiValidationError";
    this.field = field;
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
