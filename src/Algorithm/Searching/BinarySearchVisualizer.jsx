import React, { useState } from "react";
import { motion } from "framer-motion";

const BinarySearchVisualizer = () => {
  const [inputValue, setInputValue] = useState("10, 20, 30, 40, 50, 60, 70");
  const [array, setArray] = useState([10, 20, 30, 40, 50, 60, 70]);
  const [target, setTarget] = useState(40);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [searching, setSearching] = useState(false);
  const [foundIndex, setFoundIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleInputChange = (e) => {
    if (searching) return;
    const val = e.target.value;
    setInputValue(val);
    const parts = val.split(",").map((x) => parseInt(x.trim()));
    if (parts.length > 0 && parts.every((num) => !isNaN(num))) {
      const sorted = [...parts].sort((a, b) => a - b);
      setArray(sorted);
    }
  };

  const handleSearch = async () => {
    setSearching(true);
    setFoundIndex(null);
    setShowResult(false);

    const logs = [];
    let left = 0;
    let right = array.length - 1;
    let found = false;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      logs.push({ left, mid, right });
      if (array[mid] === target) {
        found = true;
        setFoundIndex(mid);
        break;
      } else if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    setSteps(logs);
    for (let i = 0; i < logs.length; i++) {
      setCurrentStep(i);
      await delay(1000);
    }

    setShowResult(true);
    setSearching(false);
  };

  const current = steps[currentStep] || {};

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-center select-none">
      <h2 className="text-4xl font-black mb-6 text-[#1f2943]">
        Binary Search <span className="text-[#8b7de9] font-extrabold">Visualizer</span>
      </h2>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        disabled={searching}
        className="mb-4 px-4 py-2 border rounded w-full max-w-md mx-auto"
        placeholder="Enter sorted array elements (e.g. 10, 20, 30)"
      />

      <div className="flex flex-col items-center gap-4 mb-8">
        <input
          type="number"
          value={target}
          onChange={(e) => setTarget(Number(e.target.value))}
          disabled={searching}
          className="px-4 py-2 border rounded w-full max-w-xs"
          placeholder="Target value"
        />
        <button
          onClick={handleSearch}
          disabled={searching}
          className="bg-gradient-to-br from-[#7c7ff7] to-[#5a5de0] text-white px-5 py-2 rounded hover:brightness-110 disabled:opacity-50"
        >
          Start Search
        </button>
      </div>

      <div className="relative flex justify-center gap-4 mb-6 flex-wrap">
        {array.map((value, index) => {
          let bg = "bg-gray-200";
          if (index === current.left || index === current.right) bg = "bg-yellow-300";
          if (index === current.mid) bg = "bg-green-400";
          return (
            <motion.div
              key={index}
              className={`relative w-12 h-12 rounded flex items-center justify-center border text-sm font-semibold ${bg}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {value}
              {index === current.left && (
                <div className="absolute -top-6 text-xs text-blue-600">min</div>
              )}
              {index === current.right && (
                <div className="absolute -top-6 text-xs text-red-600">max</div>
              )}
              {index === current.mid && (
                <div className="absolute -top-6 text-xs text-green-700">mid</div>
              )}
            </motion.div>
          );
        })}
      </div>

      {showResult && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
            {foundIndex !== null ? (
              <>
                <h4 className="text-xl font-bold text-green-600 mb-2">🎯 Key Found!</h4>
                <p className="text-sm text-gray-700">
                  Key <strong>{target}</strong> found at index <strong>{foundIndex}</strong>.
                </p>
              </>
            ) : (
              <>
                <h4 className="text-xl font-bold text-red-600 mb-2">❌ Key Not Found</h4>
                <p className="text-sm text-gray-700">
                  The key <strong>{target}</strong> does not exist in this array.
                </p>
              </>
            )}
            <button
              onClick={() => setShowResult(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="text-left max-w-2xl mx-auto text-[#1f2943] mt-10">
        <h3 className="text-xl font-semibold mb-2">Definition:</h3>
        <p className="mb-4">
          Binary Search is an efficient algorithm for finding an item from a sorted list. It works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle, the search continues in the lower half, or else in the upper half.
        </p>

        <h3 className="font-semibold mt-4">Time Complexity:</h3>
        <pre className="bg-gray-100 rounded p-4 text-sm">
- Best Case: O(1)<br/>
- Average Case: O(log n)<br/>
- Worst Case: O(log n)<br/>
        </pre>
      </div>
    </div>
  );
};

export default BinarySearchVisualizer;
