import Editor from "@monaco-editor/react";
import React from "react";

export default function CodeEditor({ code, onChange }) {
  return (
    <div className="h-[400px]">
      <Editor
        height="100%"
        language="cpp" // default
        value={code}
        onChange={onChange}
        theme="vs-dark"
        options={{
          fontSize: 16,
          minimap: { enabled: false },
        }}
      />
    </div>
  );
}
