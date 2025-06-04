import React, { useState } from "react";
import { motion } from "framer-motion";

const LinearSearchVisualizer = () => {
  const [inputValue, setInputValue] = useState("25, 10, 40, 60, 30");
  const [array, setArray] = useState([25, 10, 40, 60, 30]);
  const [target, setTarget] = useState(30);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [foundIndex, setFoundIndex] = useState(null);
  const [searching, setSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    const parts = val.split(",").map((x) => parseInt(x.trim()));
    if (parts.length > 0 && parts.every((num) => !isNaN(num))) {
      setArray(parts);
    }
  };

  const handleSearch = async () => {
    setSearching(true);
    setFoundIndex(null);
    setCurrentIndex(null);
    setShowResult(false);

    for (let i = 0; i < array.length; i++) {
      setCurrentIndex(i);
      await delay(700);
      if (array[i] === target) {
        setFoundIndex(i);
        break;
      }
    }

    await delay(500);
    setShowResult(true);
    setSearching(false);
  };

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-center select-none">
      <h2 className="text-4xl font-black mb-6 text-[#1f2943]">
        Linear Search <span className="text-[#8b7de9] font-extrabold">Visualizer</span>
      </h2>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        disabled={searching}
        className="mb-4 px-4 py-2 border rounded w-full max-w-md mx-auto"
        placeholder="Enter array elements (e.g. 25, 10, 40)"
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

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {array.map((value, index) => {
          let bg = "bg-gray-200";
          if (index === currentIndex) bg = foundIndex === index ? "bg-green-400" : "bg-yellow-300";
          return (
            <motion.div
              key={index}
              className={`relative w-12 h-12 rounded flex items-center justify-center border text-sm font-semibold ${bg}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {value}
              {index === currentIndex && (
                <div className="absolute -top-6 text-xs text-blue-700">checking</div>
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
          Linear Search is a simple searching technique that checks every element in the array until the target is found or the end is reached. It doesn't require the array to be sorted.
        </p>

        <h3 className="font-semibold mt-4">Time Complexity:</h3>
        <pre className="bg-gray-100 rounded p-4 text-sm">
- Best Case: O(1)<br/>
- Average Case: O(n)<br/>
- Worst Case: O(n)<br/>
        </pre>
      </div>
    </div>
  );
};

export default LinearSearchVisualizer;
