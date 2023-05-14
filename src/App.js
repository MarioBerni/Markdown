import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import './styles.css';

function App() {
  const [markdown, setMarkdown] = useState(`# Encabezado H1

## Subencabezado H2

[Enlace](https://www.example.com)

\`Código en línea\`

\`\`\`
Bloque de código
\`\`\`

- Elemento de lista 1
- Elemento de lista 2
- Elemento de lista 3

> Cita en bloque

![Texto alternativo de la imagen](https://www.example.com/imagen.jpg)

**Texto en negrita**`);

  const handleMarkdownChange = (newMarkdown) => {
    setMarkdown(newMarkdown);
  };

  return (
    <div className="app-container">
      <header>
        <AppHeader />
      </header>
      <div className="App">
        <Editor markdown={markdown} onChange={handleMarkdownChange} />
        <Preview markdown={markdown} />
      </div>
      <footer>
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;

