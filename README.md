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
#### 3. Dynamic Rendering with Conditional Logic
- Dynamically renders dice components using the `map()` method, ensuring each die is created based on the current state.
- Displays a confetti animation (`react-confetti`) when the game is won.

#### Example:
```javascript
{gameWon && <Confetti />}

#### 4. Interactive Dice with Prop Passing
- The `Die` components are highly interactive and receive essential props, such as `value`, `isHeld`, and `hold`, to handle their functionality dynamically.
- Each die can independently display its value, track its state (held or not), and trigger actions like toggling the hold state.

#### Example:
```javascript
<Die
  key={die.id}
  id={die.id}
  value={die.value}
  isHeld={die.isHeld}
  hold={hold}
/>
#### 5. Game Logic
- Implements logic to roll dice:
  - If the game is won, resets all dice to new random values using `generateAllNewDice()`.
  - If the game is ongoing, updates only non-held dice with new random values, preserving the state of held dice.

#### Example:
```javascript
function rollDice() {
  gameWon
    ? setDice(generateAllNewDice())
    : setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.floor(Math.random() * 6) + 1 }
        )
      );
}
#### 6. Game Win Detection
- Implements logic to determine if the game is won by checking two conditions:
  1. All dice share the same value.
  2. All dice are held.

#### Example:
```javascript
const gameWon =
  dice.every((die) => die.value === dice[0].value) &&
  dice.every((die) => die.isHeld);
#### 7. Side Effects with `useEffect`
- Utilizes the `useEffect` hook to trigger side effects in response to changes in the `gameWon` state.
- Automatically focuses the "New Game" button when the game is won, enhancing user experience.

#### Example:
```javascript
React.useEffect(() => {
  if (gameWon) {
    buttonRef.current.focus();
  }
}, [gameWon]);
#### 8. Referencing DOM Elements with `useRef`
- Employs the `useRef` hook to create a reference to the "New Game" button, enabling direct manipulation of the DOM element.
- Facilitates smooth and intuitive interactions, such as focusing on the button when the game is won.

#### Example:
```javascript
const buttonRef = React.useRef(null);

// In JSX
<button
  ref={buttonRef}
  className="roll-dice"
  onClick={rollDice}
>
  {gameWon ? 'New Game' : 'Roll'}
</button>
