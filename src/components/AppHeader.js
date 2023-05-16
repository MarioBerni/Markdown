import React, { useEffect, useState } from 'react';

function AppHeader() {
  const [text, setText] = useState('');

  useEffect(() => {
    const fullText = 'Previsualizador';
    let currentText = '';

    const animateText = () => {
      let index = 0;
      const interval = setInterval(() => {
        currentText += fullText[index];
        setText(currentText);
        index++;

        if (index === fullText.length) {
          clearInterval(interval);
        }
      }, 400); // Tiempo entre cada letra (ajusta el valor según tu preferencia)
    };

    animateText();

    return () => {
      setText(fullText);
    };
  }, []);

  return (
    <header>
      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <h1 className="header-title">{text}</h1>
    </header>
  );
}

export default AppHeader;


