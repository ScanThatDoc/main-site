import React, { useState, useEffect, useRef } from "react";

const TextAnimation = ({ data, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(80); // Fixed consistent speed
  
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, isDeleting, currentIndex]);

  const tick = () => {
    let i = currentIndex % data.length;
    let fullText = data[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(80); // Same speed as typing
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(400); // Moderate pause at end
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCurrentIndex(prevIndex => prevIndex + 1);
      setDelta(80); // Same speed for next word
    }
  };

  return (
    <span className={`cd-headline ${className || ''}`}>
      <span className="cd-words-wrapper">
        <b className="is-visible theme-gradient">{text}</b>
      </span>
      <style jsx>{`
        .cd-words-wrapper {
          display: inline-block;
          position: relative;
          text-align: left;
        }
        .cd-words-wrapper b {
          display: inline-block;
          position: relative;
          white-space: nowrap;
        }
        .cd-words-wrapper b.is-visible {
          position: relative;
        }
      `}</style>
    </span>
  );
};

export default TextAnimation;