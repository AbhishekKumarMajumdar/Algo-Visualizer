import React, { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import CodeEditor from "./Editor";
import Output from "./Output";
import axios from "axios";

export default function Compiler() {
  const [code, setCode] = useState(`#include <stdio.h>\nint main() {\n  printf(\"Hello, World!\");\n  return 0;\n}`);
  const [languageId, setLanguageId] = useState(50); // C
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [input, setInput] = useState("8 4 3 2 4\n4 2");

  const handleRun = async () => {
    setIsRunning(true);
    setOutput("");
    setError("");

    try {
      const { data } = await axios.post(
        "https://judge0-ce.p.rapidapi.com/submissions",
        {
          source_code: code,
          language_id: parseInt(languageId),
          stdin: input,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-key": "839eec4621mshfbe1582ba0f47b4p1d433cjsnffb7c13ab100",
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com"
          },
          params: { base64_encoded: "false", wait: "true" },
        }
      );

      if (data.stderr) setError(data.stderr);
      else if (data.compile_output) setError(data.compile_output);
      else setOutput(data.stdout);
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Description Panel */}
      <div className="w-1/2 p-4 overflow-y-auto border-r bg-gray-50">
        <h2 className="text-xl font-bold mb-2">3447. Assign Elements to Groups with Constraints</h2>
        <p className="mb-2">
          You are given an integer array <code>groups</code>, and an array <code>elements</code>.
          Your task is to assign one element to each group based on the following rules:
        </p>
        <ul className="list-disc ml-6 mb-2">
          <li>An element at index j can be assigned to a group i if <code>groups[i]</code> is divisible by <code>elements[j]</code>.</li>
          <li>If there are multiple elements, choose the one with the smallest index.</li>
          <li>If no match, assign -1 to that group.</li>
        </ul>
        <h3 className="font-semibold mt-4">Example:</h3>
        <pre className="bg-gray-200 p-2 rounded text-sm mt-2">
{`Input:
groups = [8,4,3,2,4]
elements = [4,2]

Expected Output:
[0,0,-1,1,0]`}
        </pre>
        <h3 className="font-semibold mt-4">Testcase Input:</h3>
        <textarea
          className="w-full p-2 mt-2 border rounded bg-white text-sm"
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {/* Code Editor & Output */}
      <div className="w-1/2 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <LanguageSelector selected={languageId} onChange={setLanguageId} />
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {isRunning ? "Running..." : "Run"}
          </button>
        </div>
        <div className="flex-1 overflow-auto">
          <CodeEditor code={code} onChange={setCode} />
        </div>
        <div className="h-40 border-t bg-gray-100 overflow-auto p-2">
          <Output output={output} error={error} />
        </div>
      </div>
    </div>
  );
}
