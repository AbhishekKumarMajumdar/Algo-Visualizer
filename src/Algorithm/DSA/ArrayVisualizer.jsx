import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ArrayVisualizer() {
  const [array, setArray] = useState([10, 20, 30, 40, 50]);
  const [inputValue, setInputValue] = useState(0);
  const [index, setIndex] = useState(0);
  const [operation, setOperation] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [activeIndices, setActiveIndices] = useState([]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const animateInsert = async () => {
    if (animating) return;
    setAnimating(true);
    const newArray = [...array];
    const val = parseInt(inputValue);
    const idx = parseInt(index);

    if (isNaN(val) || idx < 0 || idx > newArray.length) {
      setAnimating(false);
      return;
    }

    for (let i = newArray.length; i > idx; i--) {
      newArray[i] = newArray[i - 1];
      setActiveIndices([i, i - 1]); // highlight shifting
      setArray([...newArray]);
      await delay(300);
    }

    newArray[idx] = val;
    setActiveIndices([idx]);
    setArray([...newArray]);
    await delay(300);
    setActiveIndices([]);
    setAnimating(false);
  };

  const animateDelete = async () => {
    if (animating) return;
    setAnimating(true);
    const idx = parseInt(index);
    const newArray = [...array];

    if (idx < 0 || idx >= newArray.length) {
      setAnimating(false);
      return;
    }

    for (let i = idx; i < newArray.length - 1; i++) {
      newArray[i] = newArray[i + 1];
      setActiveIndices([i, i + 1]); // highlight shifting
      setArray([...newArray]);
      await delay(300);
    }

    newArray.pop();
    setActiveIndices([]);
    setArray([...newArray]);
    setAnimating(false);
  };

  const animateUpdate = async () => {
    if (animating) return;
    setAnimating(true);
    const idx = parseInt(index);
    const val = parseInt(inputValue);
    const newArray = [...array];

    if (isNaN(val) || idx < 0 || idx >= newArray.length) {
      setAnimating(false);
      return;
    }

    setActiveIndices([idx]);
    newArray[idx] = val;
    setArray([...newArray]);
    await delay(300);
    setActiveIndices([]);
    setAnimating(false);
  };

  const handleOperation = () => {
    if (operation === "insert") animateInsert();
    else if (operation === "delete") animateDelete();
    else if (operation === "update") animateUpdate();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Array Visualizer</h1>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6">
        <input
          type="number"
          className="border px-4 py-2 rounded"
          placeholder="Enter Value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          type="number"
          className="border px-4 py-2 rounded"
          placeholder="Enter Index"
          value={index}
          onChange={(e) => setIndex(e.target.value)}
        />
        <select
          className="border px-4 py-2 rounded"
          onChange={(e) => setOperation(e.target.value)}
          value={operation || ""}
        >
          <option value="" disabled>
            Select Operation
          </option>
          <option value="insert">Insert</option>
          <option value="delete">Delete</option>
          <option value="update">Update</option>
        </select>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleOperation}
          disabled={animating}
        >
          Perform
        </button>
      </div>

      <div className="flex justify-center gap-4 overflow-auto py-4">
        <AnimatePresence>
          {array.map((val, i) => (
            <motion.div
              key={i + "-" + val}
              layout
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`w-16 h-16 ${
                activeIndices.includes(i) ? "bg-yellow-400" : "bg-green-500"
              } rounded flex items-center justify-center text-white text-xl font-bold shadow`}
            >
              {val}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
