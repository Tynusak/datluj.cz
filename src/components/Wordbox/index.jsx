import React, { useState, useEffect } from 'react';
import './style.css';

const Wordbox = ({ word }) => {
  const [lettersLeft, setLettersLeft] = useState(word);

  const handleKeyUp = (e) => {
    if (e.key === lettersLeft.charAt(0)) {
      setLettersLeft(lettersLeft.slice(1));
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [lettersLeft]);

  return <div className="wordbox">{lettersLeft}</div>;
};

export default Wordbox;
