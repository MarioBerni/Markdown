import React from 'react';

function Editor({ markdown, onChange }) {
  const handleEditorChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="editor-container">
      <h2 className="preview-title">Editor</h2>
      <textarea id="editor" value={markdown} onChange={handleEditorChange} />
    </div>
  );
}

export default Editor;



