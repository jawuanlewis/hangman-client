const KEYBOARD_STATE = "keyboard_disabled_keys";

// Retrieve all disabled keyboard letters
export const getDisabledKeys = () => {
  try {
    const saved = sessionStorage.getItem(KEYBOARD_STATE);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Error loading keyboard state:", error);
    return [];
  }
};

// Save a disabled key if the user guesses it
export const saveDisabledKey = (letter) => {
  try {
    const currentDisabled = getDisabledKeys();
    if (!currentDisabled.includes(letter)) {
      const newDisabled = [...currentDisabled, letter];
      sessionStorage.setItem(KEYBOARD_STATE, JSON.stringify(newDisabled));
    }
  } catch (error) {
    console.error("Error saving keyboard state:", error);
  }
};

// For starting a new round
export const resetKeyboardState = () => {
  try {
    sessionStorage.removeItem(KEYBOARD_STATE);
  } catch (error) {
    console.error("Error resetting keyboard state:", error);
  }
};
