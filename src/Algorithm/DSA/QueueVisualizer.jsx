import React, { useState } from "react";

const MAX_SIZE = 6;

export default function QueueVisualizer() {
  const [queue, setQueue] = useState([]);
  const [input, setInput] = useState("");
  const [popup, setPopup] = useState({ show: false, title: "", message: "" });

  const showPopup = (title, message) => {
    setPopup({ show: true, title, message });
  };

  const enqueue = () => {
    if (queue.length >= MAX_SIZE) {
      showPopup("Error", "Queue is full!");
      return;
    }
    if (input === "") return;
    setQueue([...queue, input]);
    setInput("");
  };

  const dequeue = () => {
    if (queue.length === 0) {
      showPopup("Error", "Queue is empty!");
      return;
    }
    const newQueue = queue.slice(1);
    setQueue(newQueue);
  };

  const front = () => {
    if (queue.length === 0) {
      showPopup("Front", "Queue is empty!");
      return;
    }
    showPopup("Front", `Front: ${queue[0]}`);
  };

  const rear = () => {
    if (queue.length === 0) {
      showPopup("Rear", "Queue is empty!");
      return;
    }
    showPopup("Rear", `Rear: ${queue[queue.length - 1]}`);
  };

  const isEmpty = () => {
    showPopup("Check", queue.length === 0 ? "Queue is empty" : "Queue is not empty");
  };

  const isFull = () => {
    showPopup("Check", queue.length >= MAX_SIZE ? "Queue is full" : "Queue is not full");
  };

  return (
    <div className="p-6">
<h2 className="text-4xl text-center font-black mb-10 text-[#1f2943]">
        Queue <span className="text-[#8b7de9] font-extrabold">Visualizer</span>
      </h2>
      <div className="flex flex-col items-center mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border px-4 py-2 rounded w-72 mb-3"
          placeholder="Enter value"
        />
        <div className="flex flex-wrap justify-center gap-2">
          <button onClick={enqueue} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Enqueue
          </button>
          <button onClick={dequeue} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Dequeue
          </button>
          <button onClick={front} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Front
          </button>
          <button onClick={rear} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Rear
          </button>
          <button onClick={isEmpty} className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
            isEmpty
          </button>
          <button onClick={isFull} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            isFull
          </button>
        </div>
      </div>

      <div className="flex items-end justify-center my-6 space-x-2">
        {queue.map((item, index) => (
          <div key={index} className="relative">
            <div className="w-16 h-16  bg-blue-500 text-white flex items-center justify-center rounded shadow text-sm">
              {item}
            </div>
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs bg-gray-300 px-2 py-0.5 rounded text-gray-800">
              {index}
            </div>
          </div>
        ))}
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
    A <strong>Queue</strong> is a linear data structure that follows the <strong>FIFO</strong> (First In, First Out)
    principle. This means the element that is inserted first will be the first to be removed.
    Imagine a queue of people waiting in line — the person who gets in first gets served first.
  </p>

  <h3 className="font-semibold my-4">Operations:</h3>
  <pre>
- <strong>Enqueue:</strong> Add an element to the end of the queue.<br/>
- <strong>Dequeue:</strong> Remove an element from the front of the queue.<br/>
- <strong>Front:</strong> Get the front element without removing it.<br/>
- <strong>isEmpty:</strong> Check if the queue is empty.
  </pre>

  <h3 className="font-semibold my-4">Time Complexity:</h3>
  <pre>
- Enqueue: O(1)<br/>
- Dequeue: O(1)<br/>
- Front: O(1)<br/>
  </pre>

  <h3 className="font-semibold my-4">Use Cases:</h3>
  <pre>
- Task scheduling in OS (like CPU scheduling)<br/>
- Print queue in printers<br/>
- Handling requests in web servers<br/>
- BFS traversal in graphs<br/>
  </pre>
</div>

    </div>
  );
}