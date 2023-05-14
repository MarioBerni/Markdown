import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import './styles.css';

function App() {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="app-container">
      <header>
        <AppHeader />
      </header>
      <div className="App">
          <Editor handleInputChange={handleInputChange} />
          <Preview markdown={input} />
      </div>
        <footer>
          <AppFooter />
        </footer>
    </div>
  );
}

export default App;












