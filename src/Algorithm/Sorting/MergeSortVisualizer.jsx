import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MergeSortVisualizer = () => {
  const [array, setArray] = useState([5, 3, 8, 4, 2]);
  const [isSorting, setIsSorting] = useState(false);
  const [currentIndices, setCurrentIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState(new Set());
  const [mergeSteps, setMergeSteps] = useState([]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const generateArray = () => {
    if (isSorting) return;
    const newArr = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 20) + 1
    );
    setArray(newArr);
    setSortedIndices(new Set());
    setCurrentIndices([]);
    setMergeSteps([]);
  };

  const mergeSort = async (arr) => {
    const steps = [];

    const sort = async (start, end) => {
      if (end - start <= 1) return;
      const mid = Math.floor((start + end) / 2);
      await sort(start, mid);
      await sort(mid, end);
      let merged = [];
      let i = start;
      let j = mid;

      while (i < mid && j < end) {
        setCurrentIndices([i, j]);
        await delay(400);
        if (arr[i] < arr[j]) {
          merged.push(arr[i++]);
        } else {
          merged.push(arr[j++]);
        }
      }
      while (i < mid) merged.push(arr[i++]);
      while (j < end) merged.push(arr[j++]);

      for (let k = start; k < end; k++) {
        arr[k] = merged[k - start];
      }

      steps.push([...arr]);
      setArray([...arr]);
      setMergeSteps([...steps]);
      await delay(600);
    };

    await sort(0, arr.length);
    setSortedIndices(new Set(arr.map((_, i) => i)));
    setCurrentIndices([]);
    setIsSorting(false);
  };

  const handleStart = async () => {
    setIsSorting(true);
    const arr = [...array];
    await mergeSort(arr);
  };

  useEffect(() => {
    setMergeSteps([]);
  }, [array]);

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-center select-none">
      <h2 className="text-4xl font-black mb-10 text-[#1f2943]">
        Merge Sort <span className="text-[#8b7de9] font-extrabold">Visualizer</span>
      </h2>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button
          onClick={handleStart}
          disabled={isSorting}
          className="bg-gradient-to-br from-[#7c7ff7] to-[#5a5de0] text-white px-5 py-2 rounded hover:brightness-110 disabled:opacity-50"
        >
          Start Sorting
        </button>
        <button
          onClick={generateArray}
          disabled={isSorting}
          className="bg-gray-300 text-black px-5 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Generate Random Array
        </button>
      </div>

      <div className="flex justify-center items-end gap-4 mb-6 min-h-28">
        {array.map((value, index) => {
          const isActive = currentIndices.includes(index);
          const isSorted = sortedIndices.has(index);

          return (
            <motion.div
              key={index}
              className="w-12 h-12 flex items-center justify-center rounded shadow text-white text-lg font-semibold"
              style={{
                backgroundColor: isSorted
                  ? "#22c55e"
                  : isActive
                  ? "#f87171"
                  : "#7c7ff7",
              }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {value}
            </motion.div>
          );
        })}
      </div>

      <div className="text-left max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold my-4">Step-by-step sorting:</h3>
        <ol className="list-decimal list-inside">
          {mergeSteps.map((step, idx) => (
            <li key={idx}>Step {idx + 1}: [{step.join(", ")}]</li>
          ))}
        </ol>

        <h3 className="font-semibold mt-6">Definition:</h3>
        <p>
          Merge Sort is a divide and conquer algorithm that splits the array into halves,
          recursively sorts each half, and then merges the sorted halves back together.
        </p>

        <h3 className="font-semibold my-4">Time Complexity:</h3>
        <pre>
- Best Case: O(n log n)
- Average Case: O(n log n)
- Worst Case: O(n log n)
        </pre>
      </div>
    </div>
  );
};

export default MergeSortVisualizer;
