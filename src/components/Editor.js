import React from 'react';

function Editor({ handleInputChange }) {
  return (
    <div className="editor-container">
      <h2>Editor</h2>
      <textarea id="editor" onChange={handleInputChange} />
    </div>
  );
}

export default Editor;

