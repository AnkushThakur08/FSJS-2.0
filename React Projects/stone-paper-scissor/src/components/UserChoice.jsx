import React from 'react';

const UserChoice = ({ setUserChoice, userChoice, choices, generateComputerChoice, determineWinner }) => {
  const handleUserChoice = (choice) => {
    console.log('choice', choice);
    setUserChoice(choice);
    generateComputerChoice();
    setTimeout(() => {
      determineWinner(choice);
    }, 0);
  };

  return (
    <div>
      <h2 className="text-2xl font-medium my-3">User's Choice: {userChoice}</h2>
      {choices.map((choice) => (
        <button className="bg-blue-700 mx-8 p-4 rounded-full" key={choice.name} onClick={() => handleUserChoice(choice.name)}>
          <img className="w-10" style={{ color: '#ffffff', fill: '#fff' }} src={choice.image} alt={choice.name} />
        </button>
      ))}
    </div>
  );
};

export default UserChoice;
