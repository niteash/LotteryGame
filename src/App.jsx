import { useState } from "react";
import "./App.css";

function App() {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0")
  );

  let getNewTicket = () => {
    let newNumber = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0");

    setRandomNumber(newNumber);
  };

  let winningNumber = (number) => {
    return number
      .split('')
      .map(Number)
      .reduce((a, b) => a + b, 0);
  };
  let sum = winningNumber(randomNumber);
  let isWinner = sum === 15;

  return (
    <>
      <div>
        <h1>Lottery Game</h1>
        <h3>
          Lottery Ticket Number <br />
        </h3>
        <h1> {randomNumber} </h1>
        <br />
        <hr /> <button onClick={getNewTicket}>Get New Ticket!</button>
        <br />
        <hr />
        <p>Digit Sum = {sum}</p>
        <h2>{isWinner ? '🎉 Congratulation! You are the Winner! 🎉' : 'Try Again!'}</h2>
      </div>
    </>
  );
}

export default App;
