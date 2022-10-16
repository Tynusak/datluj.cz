import React, { useState, useEffect } from 'react';
import './style.css';

const Wordbox = ({ word, onFinnish }) => {
  const [lettersLeft, setLettersLeft] = useState(word);

  const handleKeyUp = (e) => {
    if (e.key === lettersLeft.charAt(0)) {
      if (lettersLeft.length === 1) {
        onFinnish();
      } else {
        setLettersLeft(lettersLeft.slice(1));
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [lettersLeft]);

  return <div className="wordbox">{lettersLeft}</div>;
};

export default Wordbox;
