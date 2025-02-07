import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [targetNumber, setTargetNumber] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('Try to guess the number between 1 and 100!');

  // Generate random number when game starts
  useEffect(() => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = () => {
    const guess = parseInt(userGuess);
    
    if (isNaN(guess)) {
      setMessage('Please enter a valid number!');
    } else if (guess === targetNumber) {
      setMessage('🎉 Congratulations! You got it right! Play again?');
      setTargetNumber(Math.floor(Math.random() * 100) + 1);
    } else if (guess > targetNumber) {
      setMessage('Too high! Try a lower number.');
    } else {
      setMessage('Too low! Try a higher number.');
    }
    
    setUserGuess('');
  };

  return (
    <div className="App">
      <h1>Number Guessing Game</h1>
      <p>{message}</p>
      <input 
        type="number" 
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Submit Guess</button>
    </div>
  );
}

export default App;