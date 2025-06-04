import React, { useState } from "react";

const MAX_SIZE = 5;

export default function StackVisualizer() {
  const [stack, setStack] = useState([]);
  const [input, setInput] = useState("");
  const [popup, setPopup] = useState({ show: false, title: "", message: "" });

  const showPopup = (title, message) => {
    setPopup({ show: true, title, message });
  };

  const push = () => {
    if (stack.length >= MAX_SIZE) {
      showPopup("Error", "Stack is full!");
      return;
    }
    if (input === "") return;
    setStack([...stack, input]);
    setInput("");
  };

  const pop = () => {
    if (stack.length === 0) {
      showPopup("Error", "Stack is empty!");
      return;
    }
    const newStack = stack.slice(0, -1);
    setStack(newStack);
  };

  const top = () => {
    if (stack.length === 0) {
      showPopup("Top", "Stack is empty!");
      return;
    }
    showPopup("Top", `Top: ${stack[stack.length - 1]}`);
  };

  const isEmpty = () => {
    showPopup("Check", stack.length === 0 ? "Stack is empty" : "Stack is not empty");
  };

  const isFull = () => {
    showPopup("Check", stack.length >= MAX_SIZE ? "Stack is full" : "Stack is not full");
  };

  return (
    <div className="p-6">
     <h2 className="text-4xl text-center font-black mb-10 text-[#1f2943]">
        Stack <span className="text-[#8b7de9] font-extrabold">Visualizer</span>
      </h2>
      <div className="flex flex-col items-center mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border px-3 py-2 rounded w-96 mb-3"
          placeholder="Enter value"
        />
        <div className="flex flex-row flex-wrap justify-center gap-2">
          <button onClick={push} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Push
          </button>
          <button onClick={pop} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Pop
          </button>
          <button onClick={top} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Top
          </button>
          <button onClick={isEmpty} className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
            isEmpty
          </button>
          <button onClick={isFull} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            isFull
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div
          className="w-52 border border-gray-400 rounded-md bg-white relative overflow-hidden"
          style={{ minHeight: `${Math.max(stack.length * 48, 248)}px` }}
        >
          {stack.map((item, index) => (
            <div
              key={index}
              className="absolute left-0 right-0 mx-auto w-full h-14 border-t border-b border-gray-500 bg-blue-500 text-white text-center flex items-center justify-center"
              style={{ bottom: `${index * 48}px` }}
            >
              {item}
              <div className="absolute left-1 text-xs text-white bg-black px-1 rounded-full">
                {index}
              </div>
            </div>
          ))}
        </div>
      </div>

      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
            <h4 className="text-xl font-bold mb-2">{popup.title}</h4>
            <p className="text-sm text-gray-700">{popup.message}</p>
            <button
              onClick={() => setPopup({ show: false, title: "", message: "" })}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="text-left max-w-3xl mx-auto">
  <h3 className="font-semibold">Definition:</h3>
  <p>
    A <strong>Stack</strong> is a linear data structure that follows the <strong>LIFO</strong> (Last In, First Out)
    principle. This means the element that is inserted last will be the first to be removed.
    Think of it like a stack of plates — you can only take the top one off.
  </p>

  <h3 className="font-semibold my-4">Operations:</h3>
  <pre>
- <strong>Push:</strong> Add an element to the top of the stack.<br/>
- <strong>Pop:</strong> Remove the top element from the stack.<br/>
- <strong>Peek/Top:</strong> View the top element without removing it.<br/>
- <strong>isEmpty:</strong> Check whether the stack is empty.
  </pre>

  <h3 className="font-semibold my-4">Time Complexity:</h3>
  <pre>
- Push: O(1)<br/>
- Pop: O(1)<br/>
- Peek: O(1)<br/>
  </pre>

  <h3 className="font-semibold my-4">Use Cases:</h3>
  <pre>
- Undo functionality in text editors<br/>
- Balancing symbols (like brackets)<br/>
- Call stack in recursion<br/>
- Backtracking algorithms<br/>
  </pre>
</div>

    </div>
  );
}