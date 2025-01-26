import Die from './Die';
import React from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

export default function App() {
  const [dice, setDice] = React.useState(() => generateAllNewDice());

  const buttonRef = React.useRef(null);

  const gameWon =
    dice.every((die) => die.value === dice[0].value) &&
    dice.every((die) => die.isHeld);

  React.useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  function generateAllNewDice() {
    const diceRoll = [];
    for (let index = 0; index < 10; index++) {
      const random = Math.floor(Math.random() * 6) + 1;
      diceRoll.push({ value: random, isHeld: false, id: nanoid() });
    }

    return diceRoll;
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      id={die.id}
      value={die.value}
      isHeld={die.isHeld}
      hold={hold}
    />
  ));

  function rollDice() {
    gameWon
      ? setDice(generateAllNewDice())
      : setDice((oldDice) => {
          return oldDice.map((die) => {
            if (die.isHeld) {
              return die;
            }
            return {
              ...die,
              value: Math.floor(Math.random() * 6) + 1,
            };
          });
        });
  }

  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  return (
    <main>
      {gameWon && <Confetti />}
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className='grid'>{diceElements}</div>
      <button
        ref={buttonRef}
        className='roll-dice'
        onClick={rollDice}>
        {gameWon ? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}
