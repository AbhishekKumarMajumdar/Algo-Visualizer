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
    <div className="flex h-screen bg-[#1e1e1e] text-white">
      {/* Sidebar */}
      <div className="w-16 bg-[#2d2d2d] flex flex-col items-center py-4 space-y-4">
        <div className="w-8 h-8 bg-gray-600 rounded" title="File"></div>
        <div className="w-8 h-8 bg-gray-600 rounded" title="C++"></div>
        <div className="w-8 h-8 bg-gray-600 rounded" title="Java"></div>
        <div className="w-8 h-8 bg-gray-600 rounded" title="Python"></div>
        <div className="w-8 h-8 bg-gray-600 rounded" title="JS"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="flex items-center justify-between bg-[#2d2d2d] px-4 py-2 text-sm border-b border-gray-700">
          <span className="text-gray-300">main.cpp</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700"
            >
              {isRunning ? "Running..." : "Run"}
            </button>
            <button
              onClick={() => {
                setOutput("");
                setError("");
              }}
              className="border px-3 py-1 text-sm rounded hover:bg-gray-600"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Editor and Output Split */}
        <div className="flex flex-1">
          {/* Problem + Editor */}
          <div className="w-1/2 border-r border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-lg font-semibold mb-2">Problem Statement</h2>
              <p className="text-sm text-gray-300">
                Write a program that reads an array of integers and prints them in reverse order.
              </p>
              <div className="mt-2 text-xs text-gray-400">
                Input: 8 4 3 2 4\n4 2 <br />
                Output: 2 4 2 3 4 8
              </div>
            </div>
            <CodeEditor code={code} onChange={setCode} />
          </div>

          {/* Output Section */}
          <div className="w-1/2 flex flex-col">
            <div className="flex items-center justify-between bg-[#2d2d2d] px-4 py-2 text-sm border-b border-gray-700">
              <span>Output</span>
              <span className="text-xs text-gray-400">Custom Input</span>
            </div>
            <div className="p-2 flex-1 overflow-auto">
              <Output output={output} error={error} />
            </div>
            <div className="border-t border-gray-700 p-2">
              <textarea
                className="w-full p-2 bg-[#2d2d2d] text-white text-sm border border-gray-600 rounded"
                rows={4}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
