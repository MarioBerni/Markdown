import React from 'react';

function Editor({ markdown, onChange }) {
  const handleEditorChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="editor-container">
      <h2>Editor</h2>
      <textarea id="editor" value={markdown} onChange={handleEditorChange} />
    </div>
  );
}

export default Editor;



