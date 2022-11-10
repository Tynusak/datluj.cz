import React, { useState } from 'react';
import Wordbox from '../Wordbox';
import wordList from '../../word-list';
import './style.css';

const generateWord = (size) => {
  const sizeIndex =
    size === undefined ? Math.floor(Math.random() * wordList.length) : size - 3;

  if (sizeIndex < 0 || sizeIndex >= wordList.length) {
    return null;
  }

  const words = wordList[sizeIndex];
  const wordIndex = Math.floor(Math.random() * words.length);
  return words[wordIndex];
};

const Stage = () => {
  const [words, setWords] = useState(['jahoda', 'kompot', 'polévka']);
  const [mistake, setMistake] = useState(0);

  const handleFinnish = () => {
    setWords([...words.slice(1), generateWord()]);
  };

  const handleMistake = () => {
    setMistake(mistake + 1);
  };

  return (
    <div className="stage">
      <div className="stage__mistakes">Chyb: {mistake}</div>
      <div className="stage__words">
        {words.map((word) => (
          <Wordbox
            word={word}
            key={word}
            onFinnish={handleFinnish}
            active={words.indexOf(word) === 0}
            onMistake={handleMistake}
          />
        ))}
      </div>
    </div>
  );
};

export default Stage;
