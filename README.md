Tenzies Game
A fun and interactive dice game built with React! The goal is to roll the dice until all the dice show the same number. You can "hold" specific dice to prevent them from rolling, adding a layer of strategy to the gameplay.

Features
Dynamic Dice Rolls: Roll up to 10 dice with randomized values.
Hold Dice: Freeze the dice you want to keep by clicking on them.
Winning Condition: Confetti celebration when all dice match and are held.
Responsive Button: Automatically focuses the "New Game" button when you win.
React Hooks: Uses useState, useEffect, and useRef for state and DOM management.
Unique Dice IDs: Dice are generated with unique IDs using the nanoid library.
Installation
Clone the repository:
bash
Copy
Edit
git clone https://github.com/your-username/tenzies-game.git
Navigate to the project directory:
bash
Copy
Edit
cd tenzies-game
Install dependencies:
bash
Copy
Edit
npm install
Start the development server:
bash
Copy
Edit
npm start
Usage
Open the app in your browser at http://localhost:3000.
Click the "Roll" button to roll the dice.
Click on individual dice to hold their values.
Keep rolling until all dice have the same value and are held.
Enjoy the confetti celebration when you win!
Components
App
The main component that manages the game logic, state, and layout.

Die
A reusable component representing each die. It displays the value and handles the hold functionality.

Dependencies
React: Framework for building the user interface.
nanoid: Generates unique IDs for each die.
react-confetti: Adds a confetti effect to celebrate when the game is won.
Styling
The game is styled using a simple and responsive CSS layout. Dice are displayed in a grid format, and the UI is intuitive and easy to use.

Future Improvements
Add a timer to track how quickly the game is won.
Include a leaderboard to record high scores.
Add themes to customize the dice and background styles.
