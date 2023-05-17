import React from 'react';
import { marked } from 'marked';

// Configurar las opciones de marked
marked.setOptions({
  headerIds: false, // Desactivar la generación de identificadores en los encabezados
  breaks: true, // Permitir saltos de línea simples
});

function Preview({ markdown }) {
  const html = marked(markdown);

  return (
    <div className="preview-container">
      <h2 className="preview-title">Previsualización</h2>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}

export default Preview;




