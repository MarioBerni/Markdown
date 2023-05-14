import React from 'react';
import ReactMarkdown from 'react-markdown';

function Preview({ markdown }) {
  return (
    <div className="preview-container">
      <h2>Previewer</h2>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default Preview;





