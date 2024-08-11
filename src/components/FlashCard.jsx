"use client";
import { useState } from 'react';

const FlashCard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="w-64 h-40 perspective-1000 cursor-pointer"
      onClick={handleClick}
    >
      <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateX(180deg)]' : ''}`}>
        <div className="absolute w-full h-full backface-hidden bg-blue-500 border border-gray-300 rounded-lg shadow-md flex items-center justify-center p-4">
          <p className="text-center">{question}</p>
        </div>
        <div className="absolute w-full h-full backface-hidden bg-green-500 border border-blue-300 rounded-lg shadow-md flex items-center justify-center p-4 [transform:rotateX(180deg)]">
          <p className="text-center">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;