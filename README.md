## Tenzies Game App

This code represents a React application for the game **Tenzies**, where players roll dice and try to get all dice to show the same value while being able to "hold" specific dice to lock their values between rolls.

---

### Key Features:

#### 1. **Dice State Management**
- Utilizes the `useState` hook to manage the state of the dice.
- Each die is represented as an object with:
  - `value`: The current number on the die.
  - `isHeld`: Boolean indicating if the die is "frozen."
  - `id`: A unique identifier generated using `nanoid`.

#### 2. **Dynamic Dice Generation**
- Generates an array of 10 random dice values when the game starts or resets.
- **Example**:
  ```javascript
  function generateAllNewDice() {
    const diceRoll = [];
    for (let index = 0; index < 10; index++) {
      const random = Math.floor(Math.random() * 6) + 1;
      diceRoll.push({ value: random, isHeld: false, id: nanoid() });
    }
    return diceRoll;
  }
### 3. Dynamic Rendering with Conditional Logic
- Dynamically renders dice components using the `map()` method, ensuring each die is created based on the current state.
- Displays a confetti animation (`react-confetti`) when the game is won.

#### Example:
```javascript
{gameWon && <Confetti />}
