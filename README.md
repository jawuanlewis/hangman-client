# Hangman Client

## 📚 Table of Contents

- [Project Overview](#-project-overview)
- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#%EF%B8%8F-installation)
- [Usage](#%EF%B8%8F-usage)
- [Next Steps](#-next-steps)
- [Credits](#-credits)

## 🧠 Project Overview

Frontend client for my own personal, web-based version of the game **_Hangman_**. This React application provides the user interface for gameplay, communicating with a separate [backend API](https://github.com/jawuanlewis/hangman-api) to manage game state. Players must correctly guess the letters of a given mystery word within 6 attempts. There are 8 available themes of words/phrases for players to guess:

1. Movies
2. Video Games
3. Sports
4. Idioms
5. TV Shows
6. Food
7. Animals
8. Cities

## 🚀 Live Demo

- Play the game here: [Hangman](https://hangman.jawuanlewis.dev)
- Initial designs available here: [Figma Designs](https://www.figma.com/design/tOop8Aqlh0zycbjdERI0Ut/Hangman?node-id=0-1&t=uR8s9pxzcX4Zwzt0-1)

**Gameplay example:** Guess the letters of the mystery sport below (6 attempts).

![alt text](src/assets/images/gameplay-sample.png)

## 💻 Tech Stack

- **UI Framework:** React 19 (Vite)
- **Routing:** React Router 7
- **HTTP Client:** Axios
- **Styling:** CSS
- **Linting/Formatting:** ESLint, Prettier
- **Deployment:** Vercel

## 📁 Project Structure

```text
hangman-client/
├── src/
│   ├── assets/            # Images, fonts, and icons
│   ├── components/
│   │   ├── game/            # Game components (Hangman, Keyboard, etc.)
│   │   ├── global/          # Shared components (Header, NavBar, Footer)
│   │   └── home/            # Home page components (Levels)
│   ├── layouts/           # Page layout components
│   ├── pages/             # Page components (Home, Game, Disabled)
│   ├── services/          # API client and game service
│   ├── styles/            # CSS stylesheets
│   ├── App.jsx            # React Router setup
│   └── main.jsx           # Application entry point
│
├── index.html
├── package.json
├── vercel.json            # Vercel deployment config
└── vite.config.js         # Vite configuration
```

## ⚙️ Installation

**NOTE:** This is a frontend-only project. In order to run it locally with full functionality, you would need a running instance of the [Hangman API](https://github.com/jawuanlewis/hangman-api). This is meant to be my own personal project, but I will still give setup instructions below.

### Clone the repository

```bash
git clone https://github.com/jawuanlewis/hangman-client.git
```

### Install dependencies

```bash
cd hangman-client
pnpm install
```

### Set up environment variables

Create a `.env` file in the root directory that contains the following variable:

- **VITE_API_URL:** URL of the Hangman API (e.g., `http://localhost:3000/api/v1`)

### Run the development server

```bash
pnpm dev
```

## ▶️ Usage

Once the application is running, you can:

1. Navigate to `http://localhost:5173` in your browser.
2. Start by choosing a level to play.
3. A mystery word will be displayed, along with a keyboard of letters to guess.
4. Guess letters until you either fully reveal the word or lose all 6 attempts.
5. You can either play the same theme/level again or return to the main menu to choose a new one!

## 🔮 Next Steps

### Future Features

- Add a main game page, with no particular theme and an increasing level of difficulty with each word.
- Generate small hints each time the user guesses incorrectly (potentially using OpenAI API).
- Add a multiplayer page.
- Add a "How to Play" page.

## 🙏 Credits

- **Social Media Icons:** [Icons8](https://icons8.com)
- **Level Images:** generated with [ImageFX](https://labs.google/fx/tools/image-fx)
