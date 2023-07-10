import React from 'react';

const ComputerChoice = ({ computerChoice }) => {
  return (
    <div>
      {console.log('FINALLL', computerChoice)}
      <h2 className="text-2xl font-medium my-3">Computer's Choice: {computerChoice.name}</h2>

      {computerChoice && (
        <button className="bg-blue-700 mx-8 p-4 rounded-full">
          {computerChoice && <img className="w-10" src={computerChoice.image} alt={computerChoice.name} />}
        </button>
      )}
    </div>
  );
};

export default ComputerChoice;
