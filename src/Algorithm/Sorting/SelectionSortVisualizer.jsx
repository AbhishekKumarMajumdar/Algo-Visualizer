import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const codeSnippets = {
  python: `def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]`,

  c: `void selectionSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int min_idx = i;
        for (int j = i+1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
        swap(&arr[min_idx], &arr[i]);
    }
}`,

  cpp: `void selectionSort(vector<int>& arr) {
    for (int i = 0; i < arr.size() - 1; i++) {
        int min_idx = i;
        for (int j = i + 1; j < arr.size(); j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
        swap(arr[min_idx], arr[i]);
    }
}`,

  java: `void selectionSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        int min_idx = i;
        for (int j = i + 1; j < arr.length; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}`,
};

const Arrow = ({ direction }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    style={{ transform: direction === "down" ? "rotate(90deg)" : "rotate(-90deg)" }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-4-4l4 4-4 4" />
  </svg>
);

const SelectionSortVisualizer = () => {
  const [array, setArray] = useState([5, 3, 8, 4, 2]);
  const [isSorting, setIsSorting] = useState(false);
  const [language, setLanguage] = useState("cpp");
  const [inputValue, setInputValue] = useState("5,3,8,4,2");
  const [currentIndices, setCurrentIndices] = useState({ i: null, j: null });
  const [sortedIndices, setSortedIndices] = useState(new Set());
  const [swapInfo, setSwapInfo] = useState(null);
  const [sortSteps, setSortSteps] = useState([]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const generateSortSteps = (arr) => {
    const steps = [];
    const a = [...arr];
    for (let i = 0; i < a.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < a.length; j++) {
        if (a[j] < a[minIdx]) {
          minIdx = j;
        }
      }
      [a[i], a[minIdx]] = [a[minIdx], a[i]];
      steps.push([...a]);
    }
    return steps;
  };

  const selectionSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    const sortedSet = new Set();

    for (let i = 0; i < arr.length; i++) {
      let minIdx = i;
      setCurrentIndices({ i, j: null });

      for (let j = i + 1; j < arr.length; j++) {
        setCurrentIndices({ i: minIdx, j });
        await delay(300);
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }

      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        setArray([...arr]);
        setSwapInfo({ from: i, to: minIdx });
        await delay(600);
        setSwapInfo(null);
      }

      sortedSet.add(i);
      setSortedIndices(new Set([...sortedSet]));
    }

    setSortedIndices(new Set([...Array(arr.length).keys()]));
    setCurrentIndices({ i: null, j: null });
    setIsSorting(false);
  };

  const generateArray = () => {
    if (isSorting) return;
    const newArr = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 20) + 1
    );
    setArray(newArr);
    setInputValue(newArr.join(","));
    setSortedIndices(new Set());
    setCurrentIndices({ i: null, j: null });
    setSortSteps(generateSortSteps(newArr));
  };

  const handleInputChange = (e) => {
    if (isSorting) return;
    const val = e.target.value;
    setInputValue(val);
    const parts = val.split(",").map((x) => parseInt(x.trim()));
    if (parts.length > 0 && parts.every((num) => !isNaN(num))) {
      setArray(parts);
      setSortedIndices(new Set());
      setCurrentIndices({ i: null, j: null });
      setSortSteps(generateSortSteps(parts));
    }
  };

  useEffect(() => {
    setSortSteps(generateSortSteps(array));
  }, []);

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-center select-none">
      <h2 className="text-4xl font-black mb-10 text-[#1f2943]">
        Selection Sort <span className="text-[#8b7de9] font-extrabold">Visualizer</span>
      </h2>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        disabled={isSorting}
        className="mb-6 px-4 py-2 border rounded w-full max-w-md mx-auto"
        placeholder="e.g. 5,3,8,4,2"
      />

      <div className="flex justify-center items-end gap-4 mb-6 min-h-28">
        {array.map((value, index) => {
          const isComparing = index === currentIndices.i || index === currentIndices.j;
          const isSortedPos = sortedIndices.has(index);

          return (
            <div key={index} className="relative flex flex-col items-center">
              <AnimatePresence>
                {swapInfo && (swapInfo.from === index || swapInfo.to === index) && (
                  <motion.div
                    key={`arrow-top-${index}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-1"
                  >
                    <Arrow direction="down" />
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                className="w-12 h-12 flex items-center justify-center rounded shadow text-white text-lg font-semibold"
                style={{
                  backgroundColor: isSortedPos
                    ? "#22c55e"
                    : isComparing
                    ? "#f87171"
                    : "#7c7ff7",
                }}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {value}
              </motion.div>

              <AnimatePresence>
                {swapInfo && (swapInfo.from === index || swapInfo.to === index) && (
                  <motion.div
                    key={`arrow-bottom-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-1"
                  >
                    <Arrow direction="up" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button
          onClick={selectionSort}
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

      <div className="text-left max-w-3xl mx-auto">
        <h3 className="font-semibold">Definition:</h3>
        <p>
          Selection Sort divides the input array into a sorted and unsorted region.
          It repeatedly selects the smallest (or largest) element from the unsorted region
          and moves it to the end of the sorted region.
        </p>

        <h3 className="font-semibold my-4">Time Complexity:</h3>
        <pre>
- Best Case: O(n²)<br/>
- Average Case: O(n²)<br/>
- Worst Case: O(n²)<br/>
        </pre>

        <div className="text-left max-w-3xl mx-auto text-[#1f2943]">
          <h3 className="text-xl font-semibold mb-2 my-4">Step-by-step sorting:</h3>
          <ol className="list-decimal list-inside">
            {sortSteps.map((step, idx) => (
              <li key={idx}>After pass {idx + 1}: [{step.join(", ")}]</li>
            ))}
          </ol>
        </div>

        <h3 className="font-semibold mt-4">Code ({language.toUpperCase()}):</h3>
        <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto">
          <code>{codeSnippets[language]}</code>
        </pre>

        <label className="block mt-4">
          <span className="font-semibold">Select Language:</span>
          <select
            className="ml-2 px-3 py-1 border rounded"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            disabled={isSorting}
          >
            <option value="python">Python</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SelectionSortVisualizer;
