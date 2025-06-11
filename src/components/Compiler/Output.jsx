import React from "react";

export default function Output({ output, error }) {
  return (
    <div className="bg-gray-900 text-white p-4 mt-4 rounded h-40 overflow-auto">
      {error ? <pre>{error}</pre> : <pre>{output}</pre>}
    </div>
  );
}
