import React, { useState } from 'react';

// Import images for rock, paper, and scissors
import rockImage from '../assets/rock.svg';
import paperImage from '../assets/paper.svg';
import scissorsImage from '../assets/scissors.svg';
import UserChoice from './UserChoice';
import ComputerChoice from './ComputerChoice';

const RockPaperScissorsGame = () => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const choices = [
    { name: 'rock', image: rockImage },
    { name: 'paper', image: paperImage },
    { name: 'scissors', image: scissorsImage },
  ];

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    setComputerChoice(randomChoice);
  };

  console.log('computerChoice', computerChoice);

  const determineWinner = (userChoice) => {
    if (userChoice == computerChoice.name) {
      return setResult("It's a tie!");
    } else if (
      (userChoice == 'rock' && computerChoice.name == 'scissors') ||
      (userChoice == 'paper' && computerChoice.name == 'scissors') ||
      (userChoice == 'scissors' && computerChoice.name == 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('Computer wins!');
    }
  };

  const reset = () => {
    setUserChoice('');
    setComputerChoice('');
    setResult('');
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold my-5">Rock Paper Scissors</h1>

      <UserChoice
        userChoice={userChoice}
        setUserChoice={setUserChoice}
        choices={choices}
        generateComputerChoice={generateComputerChoice}
        determineWinner={determineWinner}
      />

      <ComputerChoice setComputerChoice={setComputerChoice} computerChoice={computerChoice} />

      <div>
        <h2 className="text-4xl font-bold my-5 text-green-500">Result: {result}</h2>
      </div>

      <div>
        {result && (
          <button className="bg-violet-900 text-white p-3 rounded-lg" onClick={reset}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default RockPaperScissorsGame;
