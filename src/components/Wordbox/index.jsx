import React, { useState, useEffect } from 'react';
import './style.css';

const Wordbox = ({ word, onFinnish, active, onMistake }) => {
  const [lettersLeft, setLettersLeft] = useState(word);
  const [mistake, setMistake] = useState(false);

  const handleKeyUp = (e) => {
    if (e.key === lettersLeft.charAt(0)) {
      if (lettersLeft.length === 1) {
        onFinnish();
      } else {
        setLettersLeft(lettersLeft.slice(1));
      }
      setMistake(false);
    } else {
      setMistake(true);
      onMistake();
    }
  };

  useEffect(() => {
    if (active) {
      document.addEventListener('keyup', handleKeyUp);
      return () => document.removeEventListener('keyup', handleKeyUp);
    }
  }, [lettersLeft, active, onMistake]);

  return (
    <div className={mistake ? 'wordbox wordbox--mistake' : 'wordbox'}>
      {lettersLeft}
    </div>
  );
};

export default Wordbox;
