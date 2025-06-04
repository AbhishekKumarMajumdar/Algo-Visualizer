import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const codeSnippets = {
  python: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]`,

  c: `void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}`,

  cpp: `void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}`,

  java: `void bubbleSort(int arr[]) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}`,
};

const definition = `Bubble Sort is a simple sorting algorithm that works by repeatedly swapping adjacent elements if they are in the wrong order. It is named because smaller elements "bubble" to the top of the list with each iteration.`;

const timeComplexity = `
- Best Case: O(n) (when array is already sorted)
- Average Case: O(n^2)
- Worst Case: O(n^2)
`;

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14m-4-4l4 4-4 4"
    />
  </svg>
);

const BubbleSortVisualizer = () => {
  const [array, setArray] = useState([5, 3, 8, 4, 2]);
  const [isSorting, setIsSorting] = useState(false);
  const [language, setLanguage] = useState("python");
  const [inputValue, setInputValue] = useState("5,3,8,4,2");

  const [currentIndices, setCurrentIndices] = useState({ i: null, j: null });
  const [sortedIndices, setSortedIndices] = useState(new Set());
  const [swapInfo, setSwapInfo] = useState(null);
  const [sortSteps, setSortSteps] = useState([]); // Array of arrays for steps

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  // Function to generate sorting steps for showing in definition section
  const generateSortSteps = (arr) => {
    let steps = [];
    let tempArr = [...arr];
    const n = tempArr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (tempArr[j] > tempArr[j + 1]) {
          [tempArr[j], tempArr[j + 1]] = [tempArr[j + 1], tempArr[j]];
        }
      }
      steps.push([...tempArr]); // Save array after each outer iteration
    }
    return steps;
  };

  const bubbleSort = async () => {
    setIsSorting(true);
    setSortedIndices(new Set());
    let arr = [...array];
    let sortedSet = new Set();

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        setCurrentIndices({ i: j, j: j + 1 });
        setSwapInfo(null);
        await delay(400);
        if (arr[j] > arr[j + 1]) {
          setSwapInfo({ from: j, to: j + 1 });
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await delay(600);
          setSwapInfo(null);
        }
      }
      sortedSet.add(arr.length - i - 1);
      setSortedIndices(new Set(sortedSet));
    }
    for (let k = 0; k < arr.length; k++) {
      sortedSet.add(k);
    }
    setSortedIndices(new Set(sortedSet));
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
    if (
      parts.length > 0 &&
      parts.every((num) => !isNaN(num) && Number.isInteger(num))
    ) {
      setArray(parts);
      setSortedIndices(new Set());
      setCurrentIndices({ i: null, j: null });
      setSortSteps(generateSortSteps(parts));
    }
  };

  // Initialize steps on component mount or array change
  useEffect(() => {
    setSortSteps(generateSortSteps(array));
  }, []);

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-center select-none">
      <h2 className="text-4xl font-black mb-10 text-[#1f2943]">
        Bubble Sort <span className="text-[#8b7de9] font-extrabold">Visualizer </span>
      </h2>

      <div className="mb-4">
        <label
          htmlFor="arrayInput"
          className="block  font-semibold text-[#1f2943] mb-2"
        >
          Enter Array Elements (comma separated):
        </label>
        <input
          id="arrayInput"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          disabled={isSorting}
          className="w-full max-w-md mx-auto px-3 py-2 border rounded text-[#1f2943]"
          placeholder="e.g. 5,3,8,4,2"
        />
      </div>

      {/* Array row with inline arrows */}
      <div className="flex justify-center items-center gap-2 mb-6 flex-wrap max-w-full overflow-x-auto">
        {array.map((value, index) => {
          const isComparing =
            index === currentIndices.i || index === currentIndices.j;
          const isSortedPos = sortedIndices.has(index);

          return (
            <React.Fragment key={index}>
              <motion.div
                className={`w-12 h-12 flex items-center justify-center rounded-md shadow-md text-white text-lg font-semibold`}
                style={{
                  backgroundColor: isSortedPos
                    ? "#22c55e"
                    : isComparing
                    ? "#f87171"
                    : "#7c7ff7",
                  border: isComparing ? "2px solid #c53030" : "2px solid transparent",
                  position: "relative",
                  zIndex: 10,
                }}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {value}
              </motion.div>

              {/* Inline arrow between swapped elements */}
              <AnimatePresence>
                {swapInfo && swapInfo.from === index && (
                  <motion.div
                    key="arrow"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center"
                    style={{ marginLeft: -8, marginRight: -8 }}
                  >
                    <Arrow />
                  </motion.div>
                )}
              </AnimatePresence>
            </React.Fragment>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button
          onClick={bubbleSort}
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

      <div className="my-6 max-w-3xl mx-auto text-left text-[#1f2943]">
        <h3 className="text-lg font-semibold mb-2">Definition:</h3>
        <p>{definition}</p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Step-by-step sorting:</h3>
        <ol className="list-decimal list-inside mb-6">
          {sortSteps.map((step, idx) => (
            <li key={idx} className="mb-1">
              After pass {idx + 1}: [{step.join(", ")}]
            </li>
          ))}
        </ol>

        <h3 className="text-lg font-semibold mt-6 mb-2">Time Complexity:</h3>
        <pre className="whitespace-pre-wrap">{timeComplexity}</pre>

        <h3 className="text-lg font-semibold mt-6 mb-2">Code ({language.toUpperCase()}):</h3>
        <pre className="bg-[#f3f4f6] p-4 rounded-md text-sm overflow-x-auto">
          <code>{codeSnippets[language]}</code>
        </pre>

        <div className="mt-4">
          <label htmlFor="languageSelect" className="font-semibold">
            Select Language:
          </label>
          <select
            id="languageSelect"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            disabled={isSorting}
            className="ml-2 px-3 py-1 border rounded text-[#1f2943]"
          >
            <option value="python">Python</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BubbleSortVisualizer;
