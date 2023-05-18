import React, { useEffect, useState } from 'react';

function AppFooter() {
  const [text, setText] = useState('');
  const fullText = 'Desarrollado por Mario Berni';
  const typingSpeed = 120; // Tiempo entre cada letra
  const pauseBeforeRestart = 1000; // Tiempo antes de reiniciar

  useEffect(() => {
    let index = 0;
    let currentText = '';
    let interval;

    const animateText = () => {
      interval = setInterval(() => {
        currentText += fullText[index];
        setText(currentText);
        index++;

        if (index === fullText.length) {
          clearInterval(interval);
          setTimeout(startAnimation, pauseBeforeRestart); // Pausa antes de reiniciar
        }
      }, typingSpeed);
    };

    const startAnimation = () => {
      setText('');
      index = 0;
      currentText = '';
      animateText();
    };

    startAnimation();

    return () => {
      clearInterval(interval);
    };
  }, [fullText, typingSpeed, pauseBeforeRestart]);

  return (
    <footer>
      <p>
        <span style={{ visibility: 'hidden' }}>{fullText}</span>
        {text}
      </p>
    </footer>
  );  
}

export default AppFooter;





